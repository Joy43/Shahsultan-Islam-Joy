import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import {
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="grid lg:grid-cols-12 min-h-screen items-start gap-0">
      <div className="lg:col-span-2 bg-[#F4F4F6] border-r border-gray-200/40 dark:border-gray-800/40">
        <div className="flex items-center h-14 px-4 border-b border-gray-200 dark:border-gray-800">
          <Link className="flex items-center space-x-2" href="#">
            <BarChart2Icon className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">
              Dashboard
            </span>
          </Link>
          <Button
            className="ml-auto w-8 h-8 rounded-full border-gray-200 dark:border-gray-800"
            size="sm"
            variant="outline"
          >
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <div className="px-0.5">
            <Link
              className="flex items-center h-9 px-4 text-sm font-medium rounded-l-full"
              href="#"
            >
              Overview
            </Link>
            <Link
              className="flex items-center h-9 px-4 text-sm font-medium rounded-l-full"
              href="#"
            >
              Sales
            </Link>
            <Link
              className="flex items-center h-9 px-4 text-sm font-medium rounded-l-full"
              href="#"
            >
              Customers
            </Link>
          </div>
          <div className="mt-4 border-t border-gray-200 dark:border-gray-800" />
          <div className="mt-4 px-0.5">
            <Link
              className="flex items-center h-9 px-4 text-sm font-medium rounded-l-full"
              href="#"
            >
              Settings
            </Link>
          </div>
        </nav>
      </div>
      <div className="lg:col-span-10 grid gap-4 p-4">
        <header className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold tracking-tighter">Overview</h1>
          <Button size="sm">Export</Button>
        </header>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-lg">Sales</CardTitle>
              <div>
                <Button size="none" variant="ghost">
                  <MoreHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-8">
              <LineChart className="w-full aspect-[1.25]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-lg">Customers</CardTitle>
              <div>
                <Button size="none" variant="ghost">
                  <MoreHorizontalIcon className="w-4 h-4" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-8">
              <BarChart className="w-full aspect-[1.25]" />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Orders</CardTitle>
            <div>
              <Button size="none" variant="ghost">
                <PlusIcon className="w-4 h-4" />
                <span className="sr-only">Add</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHead>
                <div className="text-xs">Customer</div>
                <div className="text-xs">Date</div>
                <div className="text-xs">Status</div>
                <div className="text-xs">Amount</div>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span>John Doe</span>
                    </div>
                  </TableCell>
                  <TableCell>2023-06-14</TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="outline">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell>$250</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span>Jane Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>2023-06-14</TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="outline">
                      Shipped
                    </Badge>
                  </TableCell>
                  <TableCell>$125</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <span>Adam Johnson</span>
                    </div>
                  </TableCell>
                  <TableCell>2023-06-14</TableCell>
                  <TableCell>
                    <Badge className="text-xs" variant="outline">
                      Delivered
                    </Badge>
                  </TableCell>
                  <TableCell>$500</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BarChart2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
    </svg>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
