"use client";

import { Link } from "./components/link";
import {
  FaAddressCard,
  FaClipboardList,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex gap-6 items-center justify-center p-20">
      <Link title="Locações" href="/rentals" icon={FaClipboardList} />
      <Link title="Brinquedos" href="/toys" icon={FaRobot} />
      <Link title="Funcionários" href="/employees" icon={FaAddressCard} />
      <Link title="Clientes" href="/customers" icon={FaUsers} />
    </div>
  );
}
