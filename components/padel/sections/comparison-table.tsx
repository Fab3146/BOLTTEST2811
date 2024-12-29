import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonTable() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[#0A3778] mb-6">Différences avec le Tennis</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Caractéristiques</TableHead>
            <TableHead>Tennis</TableHead>
            <TableHead>Padel</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Terrain</TableCell>
            <TableCell>23,77m x 8,23m (simple)</TableCell>
            <TableCell>20m x 10m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Raquette</TableCell>
            <TableCell>Cordée</TableCell>
            <TableCell>Pleine avec perforations</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell>Au-dessus de la tête</TableCell>
            <TableCell>À la cuillère (sous la taille)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Murs</TableCell>
            <TableCell>Aucun</TableCell>
            <TableCell>Vitres et grillages utilisables</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Format habituel</TableCell>
            <TableCell>Simple ou Double</TableCell>
            <TableCell>Double</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}