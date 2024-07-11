import { $ } from 'bun';

export const date = async () => {
  switch (process.platform) {
    case 'linux':
      await $`echo ${Bun.env.PASSWORD} | sudo -S ntpdate ntp.nict.jp`;
      break;
    default:
  }
};
