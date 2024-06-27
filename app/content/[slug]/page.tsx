// app/content/[slug]/page.js
import { db } from '../../../GLLibrary/Firebase/firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import Head from 'next/head';

export async function generateStaticParams() {  
  console.log("____________________")
  console.log("generateStaticParams")
  console.log("____________________")

  const contentCollection = collection(db, 'content');
  const contentSnapshot = await getDocs(contentCollection);
  const paths = contentSnapshot.docs.map((doc) => ({
    slug: doc.data().slug,
  }));

  return paths;
}

async function getContentData(slug: any) {
  console.log("____________________")
  console.log("getContentData")
  console.log("____________________")


  const contentCollection = collection(db, 'content');
  const contentQuery = await getDocs(contentCollection);
  let contentData = null;

  contentQuery.forEach((doc) => {
    if (doc.data().slug === slug) {
      contentData = doc.data();
    }
  });

  return contentData;
}

export default async function ContentPage({ params }: any) {
  const content = await getContentData(params.slug);

  if (!content) {
    notFound();
  }

  const {title, body} = content;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={body} />
      </Head>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
}