import { OpenYandex } from "./OpenYandex.tsx";
import { OpenGoogle } from "./OpenGoogle.tsx";

export const OpenAllMaps = () => {
  return (
    <div>
      <OpenYandex />
      <OpenGoogle />
    </div>
  );
};
