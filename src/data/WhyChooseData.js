import { v4 as uuidv4 } from "uuid";

import Overlay from "../../src/assets/img/Overlay.svg";
import Overlay2 from "../../src/assets/img/Overlay2.svg";
import Overlay3 from "../../src/assets/img/Overlay3.svg";

export const whyChooseData = [
  {
    id: uuidv4(),
    icon: Overlay,
    title: "Fast",
    text: "Lightning-fast performance with modern web technologies for the best reading experience.",
  },
  {
    id: uuidv4(),
    icon: Overlay2,
    title: "Secure",
    text: "Your data is protected with industry-standard security practices and encryption.",
  },
  {
    id: uuidv4(),
    icon: Overlay3,
    title: "Easy to Manage",
    text: "Intuitive admin dashboard makes content management effortless and enjoyable..",
  },
];
