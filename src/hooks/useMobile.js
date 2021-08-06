/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function isMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 576;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false,
    );
  }, [isMobile]);

  return isMobile;
}
