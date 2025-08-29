import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faTrash,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function initIcons() {
  return library.add(faCartShopping, faTrash, faXmark, faBars);
}
