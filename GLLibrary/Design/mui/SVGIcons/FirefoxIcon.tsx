import * as React from 'react';
import { useTheme, SvgIcon } from '@mui/material';

export default function FirefoxIcon(props: any) {
  const theme = useTheme();
  let color1 = theme.palette.primary.main;
  return (
    <SvgIcon {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect fill="none" x="0" y="0" width="24" height="24"></rect>
          <g transform="translate(1, 1)" fill={color1} fillRule="nonzero">
            <path d="M22,10.5740065 C22,10.0837268 21.8777778,9.34830708 21.7555555,8.85802736 C21.3888889,6.77433833 20.2888889,4.9357892 18.9444445,3.46494989 C18.7,3.09724007 18.2111111,2.72953024 17.7222222,2.36182041 C16.3777778,1.25869094 14.7888889,0.523271276 12.9555555,0.15556145 C9.28888891,-0.457288262 5.62222224,0.768411162 3.17777778,3.34237995 C3.17777778,3.34237995 3.17777778,3.21981001 3.17777778,3.21981001 C3.05555555,2.97467013 3.05555555,2.97467013 2.93333333,2.97467013 C2.93333333,2.97467013 2.93333333,2.97467013 2.93333333,2.97467013 C2.81111111,2.72953024 2.81111111,2.60696029 2.68888889,2.48439035 C2.68888889,2.48439035 2.68888889,2.48439035 2.68888889,2.48439035 C2.68888889,2.23925047 2.56666667,1.99411058 2.56666667,1.7489707 C2.2,1.87154064 2.2,2.23925047 2.07777778,2.48439035 C2.07777778,2.48439035 2.07777778,2.48439035 2.07777778,2.48439035 C1.83333333,2.72953024 1.58888889,3.09724007 1.58888889,3.46494989 C1.58888889,3.46494989 1.58888889,3.46494989 1.58888889,3.46494989 C1.46666667,3.71008977 1.22222222,4.81321926 1.46666667,4.9357892 C1.46666667,4.9357892 1.46666667,4.9357892 1.58888889,4.9357892 C1.58888889,5.05835914 1.58888889,5.18092909 1.58888889,5.30349902 C1.34444445,5.54863892 1.22222222,5.67120887 1.22222222,5.79377881 C0.855555552,6.52919844 0.488888889,7.14204817 0.366666667,7.87746784 C0.366666667,8.12260773 0.366666667,8.24517763 0.366666667,8.36774757 C0.366666667,8.36774757 0.366666667,8.36774757 0.366666667,8.36774757 C0.366666667,8.36774757 0.366666667,8.24517763 0.366666667,8.24517763 C0.122222222,8.49031752 0.122222222,8.85802736 0,9.10316725 C0.122222222,9.10316725 0.122222222,8.9805973 0.244444445,8.9805973 C-0.366666667,12.1674158 0.488888889,15.4768043 2.44444445,17.9282031 C5.37777778,21.4827314 10.3888889,22.9535707 14.7888889,21.3601614 C19.0666667,19.7667522 22,15.5993742 22,10.9417164 C22,10.8191464 22,10.6965765 22,10.5740065 M12.8333333,1.25869094 C14.6666667,1.62640076 16.3777778,2.48439035 17.7222222,3.71008977 C17.8444445,3.83265972 17.9666667,4.07779961 17.9666667,4.07779961 C17.6,3.71008977 16.7444445,3.09724007 16.2555555,3.34237995 C16.3777778,3.71008977 17.8444445,5.54863892 17.9666667,5.67120887 C17.9666667,5.67120887 18.3333333,7.26461811 18.4555555,7.38718806 C18.4555555,7.38718806 18.4555555,7.38718806 18.4555555,7.38718806 C18.4555555,7.38718806 18.4555555,7.38718806 18.4555555,7.38718806 C18.4555555,7.63232795 17.6,10.8191464 17.6,11.3094262 C17.6,11.4319962 16.5,13.6382551 16.6222222,13.6382551 C16.2555555,14.4962447 15.8888889,14.4962447 15.7666667,14.6188147 C15.6444445,14.6188147 14.9111111,14.8639545 14.0555555,15.1090944 C13.3222222,15.2316643 12.4666667,15.4768043 11.8555555,15.3542343 C11.4888889,15.3542343 11,15.3542343 10.6333333,15.1090944 C10.5111111,14.9865244 9.53333333,14.4962447 9.28888891,14.3736748 C8.92222224,14.2511048 8.67777776,14.0059649 8.43333333,13.760825 C8.8,13.760825 9.53333333,13.760825 9.77777776,13.760825 C10.5111111,13.6382551 13.6888889,12.5351256 13.5666667,12.0448458 C13.5666667,11.677136 12.9555555,11.4319962 12.7111111,11.1868563 C12.3444445,11.0642863 10.8777778,11.3094262 10.2666667,11.5545661 C10.2666667,11.5545661 7.94444448,10.9417164 7.33333333,10.4514365 C7.33333333,10.3288667 7.21111109,9.59344698 7.21111109,9.47087703 C7.08888891,9.34830708 7.57777776,8.9805973 7.57777776,8.9805973 C7.57777776,8.9805973 8.8,7.7548979 8.8,7.63232795 C9.04444448,7.63232795 9.28888891,7.38718806 9.41111109,7.26461811 C9.28888891,7.26461811 9.53333333,7.14204817 9.9,6.89690827 C9.9,6.89690827 9.9,6.89690827 9.9,6.89690827 C10.2666667,6.65176838 10.5111111,6.65176838 10.5111111,6.28405854 C10.5111111,6.28405854 11.1222222,5.18092909 10.3888889,5.30349902 C10.3888889,5.30349902 9.28888891,5.18092909 8.92222224,5.18092909 C8.55555552,5.42606898 8.43333333,5.30349902 8.06666667,5.18092909 C8.06666667,5.18092909 7.82222224,4.9357892 7.82222224,4.81321926 C7.94444448,4.56807937 8.8,2.72953024 9.16666667,2.60696029 C8.92222224,2.11668053 7.7,2.48439035 7.45555557,2.85210018 C7.45555557,2.85210018 6.47777776,3.58751983 5.98888891,3.71008977 C5.98888891,3.71008977 5.98888891,3.71008977 5.98888891,3.71008977 C5.98888891,3.58751983 5.37777778,3.46494989 4.76666667,3.46494989 C6.96666667,1.62640076 9.9,0.768411162 12.8333333,1.25869094 Z"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
