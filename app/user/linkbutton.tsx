import Link from 'next/link';

/* Will probably be used for banner links once implemented
   Unused now that popups are used for the buttons but works to redirect easily as:
<div className="remove-user-btn">
  <LinkButton to="/signup" label="REMOVE USER" />
</div>
*/

interface LinkButtonProps {
  to: string; // Destination
  label: string; // Button displayed text
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, label }) => {
  return (
    <Link href={to} passHref>
      <button>{label}</button>
    </Link>
  );
};

export default LinkButton;
