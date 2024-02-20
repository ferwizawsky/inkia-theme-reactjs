import { useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, FilePenLine, Trash2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import FunctionButton from "@/components/inkia/table/FunctionButton";
import Paginate from "@/components/inkia/table/Paginate";
import { listInvoices, meta } from "@/lib/data/invoice";

function Invoice() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const invoices = listInvoices; // Your list of invoices

  // const history = useHistory();
  // const location = useLocation();
  // const { path } = useRouteMatch();
  const path = "/invoice";
  function getStatus(status) {
    if (status === "paid") {
      return "text-lime-600";
    } else if (status === "pending") {
      return "text-amber-600";
    }
    return "text-rose-600";
  }

  const movePage = (pageNumber) => {
    setPage(pageNumber);
  };

  function getData() {
    // Fetch data based on search and page
  }

  function handlePageChange(newPage) {
    setPage(newPage);
    // history.push(`${location.pathname}?page=${newPage}`);
    getData();
  }

  return (
    <div className="pt-4">
      <div className="lg:flex items-center justify-between mb-4">
        <div className="mb-4">
          <Link to={`${path}/add`}>
            <Button variant="outline">Create Invoice</Button>
          </Link>
        </div>
        <form
          className="relative mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            getData();
          }}
        >
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-8"
            placeholder="Search...."
          />
          <Search className="w-4 absolute top-2 right-3 cursor-pointer text-foreground/50" />
        </form>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{(page - 1) * 10 + index + 1}</TableCell>
              <TableCell className="font-medium">{item.invoice}</TableCell>
              <TableCell
                className={getStatus(item?.paymentStatus?.toLowerCase())}
              >
                {item.paymentStatus}
              </TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell>{item.totalAmount}</TableCell>
              <TableCell className="flex items-center space-x-2">
                <Link to={`${path}/detail/${index}`}>
                  <FunctionButton>
                    <FileText className="w-4 h-4" />
                  </FunctionButton>
                </Link>
                <Link to={`${path}/edit/${index}`}>
                  <FunctionButton>
                    <FilePenLine className="w-4 h-4" />
                  </FunctionButton>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger className="bg-rose-400/20 hover:bg-rose-400/50 text-rose-500 p-2 rounded-full   ease-in-out duration-300  flex items-center justify-center">
                    <Trash2 className="w-4 h-4" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Paginate
        onPageChange={handlePageChange}
        page={page}
        meta={meta}
        move={movePage}
      />
    </div>
  );
}

export default Invoice;
