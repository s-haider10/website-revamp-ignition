import { Download, FileText, Briefcase } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const CVDownloadDropdown = () => {
  const downloadCV = (type: "academic" | "industry") => {
    const filename =
      type === "academic"
        ? "Haider_Academic_CV.pdf"
        : "Haider_Industry_Resume.pdf";
    window.open(`/${filename}`, "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="rounded-sm px-6 py-3 text-base font-medium border border-border hover:bg-muted transition-smooth min-h-[44px]"
        >
          <Download className="h-4 w-4 mr-2" />
          CV/Resume
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-sm">
        <DropdownMenuItem
          onClick={() => downloadCV("academic")}
          className="cursor-pointer min-h-[44px] flex items-center gap-3"
        >
          <FileText className="h-4 w-4 text-foreground" />
          <div className="flex flex-col">
            <span className="font-medium">Academic CV</span>
            <span className="text-xs text-muted-foreground">Full, detailed</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => downloadCV("industry")}
          className="cursor-pointer min-h-[44px] flex items-center gap-3"
        >
          <Briefcase className="h-4 w-4 text-foreground" />
          <div className="flex flex-col">
            <span className="font-medium">Industry Resume</span>
            <span className="text-xs text-muted-foreground">One-pager</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CVDownloadDropdown;

