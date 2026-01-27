import { useState } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  role: z.string().min(1, "Please select a role"),
  workersCount: z.string().min(1, "Please select number of workers"),
  startDate: z.string().min(1, "Please select start timeline"),
  payRange: z.string().min(1, "Please select pay range"),
  address: z.string().trim().min(1, "Reporting address is required").max(200),
  zipCode: z.string().trim().regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),
  requirements: z.array(z.string()).optional(),
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(/^[\d\s\-()]+$/, "Please enter a valid phone number").min(10, "Phone number is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    role: "",
    workersCount: "",
    startDate: "",
    payRange: "",
    address: "",
    zipCode: "",
    requirements: [],
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      requirements: checked
        ? [...(prev.requirements || []), value]
        : (prev.requirements || []).filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "Request submitted!",
      description: "We're matching you with candidates now.",
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      role: "",
      workersCount: "",
      startDate: "",
      payRange: "",
      address: "",
      zipCode: "",
      requirements: [],
      name: "",
      email: "",
      phone: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
            <DialogTitle className="text-2xl mb-3">Thanks! We're On It</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Our team is already matching candidates. You'll receive up to 5 pre-vetted profiles within 4–6 hours.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Get Matched With Workers</DialogTitle>
              <DialogDescription>
                Takes less than 2 minutes. No commitment required.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Section 1: Role Selection */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-base">What role do you need? *</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => handleSelectChange("role", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landscaping-laborer">Landscaping Laborer</SelectItem>
                    <SelectItem value="irrigation-technician">Irrigation Technician</SelectItem>
                    <SelectItem value="crew-leader">Crew Leader</SelectItem>
                    <SelectItem value="property-maintenance">Property Maintenance Worker</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Choose the closest match. You can refine details later.</p>
                {errors.role && (
                  <p className="text-sm text-destructive">{errors.role}</p>
                )}
              </div>

              {/* Section 2: Number of Workers */}
              <div className="space-y-3">
                <Label className="text-base">How many workers do you need? *</Label>
                <RadioGroup
                  value={formData.workersCount}
                  onValueChange={(value) => handleSelectChange("workersCount", value)}
                  className="flex flex-wrap gap-3"
                >
                  {["1", "2", "3", "4+"].map((count) => (
                    <div key={count} className="flex items-center">
                      <RadioGroupItem value={count} id={`workers-${count}`} className="sr-only peer" />
                      <Label
                        htmlFor={`workers-${count}`}
                        className="flex items-center justify-center px-6 py-3 rounded-lg border-2 border-input bg-background hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-colors min-w-[70px]"
                      >
                        {count}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.workersCount && (
                  <p className="text-sm text-destructive">{errors.workersCount}</p>
                )}
              </div>

              {/* Section 3: Start Timeline */}
              <div className="space-y-3">
                <Label className="text-base">When do you need them to start? *</Label>
                <RadioGroup
                  value={formData.startDate}
                  onValueChange={(value) => handleSelectChange("startDate", value)}
                  className="grid grid-cols-2 gap-3"
                >
                  {[
                    { value: "today", label: "Today" },
                    { value: "within-3-days", label: "Within 3 days" },
                    { value: "this-week", label: "This week" },
                    { value: "next-week", label: "Next week" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center">
                      <RadioGroupItem value={option.value} id={`start-${option.value}`} className="sr-only peer" />
                      <Label
                        htmlFor={`start-${option.value}`}
                        className="flex items-center justify-center px-4 py-3 rounded-lg border-2 border-input bg-background hover:bg-accent hover:border-primary cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-colors w-full text-center"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <p className="text-xs text-muted-foreground">Urgent roles are prioritized automatically.</p>
                {errors.startDate && (
                  <p className="text-sm text-destructive">{errors.startDate}</p>
                )}
              </div>

              {/* Section 4: Pay Range */}
              <div className="space-y-2">
                <Label htmlFor="payRange" className="text-base">Hourly pay range *</Label>
                <Select
                  value={formData.payRange}
                  onValueChange={(value) => handleSelectChange("payRange", value)}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select pay range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-18">Under $18/hr</SelectItem>
                    <SelectItem value="18-22">$18–22/hr</SelectItem>
                    <SelectItem value="22-26">$22–26/hr</SelectItem>
                    <SelectItem value="26-plus">$26+/hr</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">Accurate pay ranges help us match faster.</p>
                {errors.payRange && (
                  <p className="text-sm text-destructive">{errors.payRange}</p>
                )}
              </div>

              {/* Section 5: Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base">Reporting Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="e.g., 123 Main St, Austin"
                    className="h-12"
                  />
                  {errors.address && (
                    <p className="text-sm text-destructive">{errors.address}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-base">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="78701"
                    maxLength={5}
                    className="h-12"
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-destructive">{errors.zipCode}</p>
                  )}
                </div>
              </div>

              {/* Section 6: Requirements */}
              <div className="space-y-3">
                <Label className="text-base">Any special requirements?</Label>
                <div className="space-y-2">
                  {[
                    { value: "drivers-license", label: "Driver's license required" },
                    { value: "own-transportation", label: "Own transportation required" },
                    { value: "prior-experience", label: "Prior experience required" },
                    { value: "spanish-speaking", label: "Spanish speaking preferred" },
                  ].map((req) => (
                    <div key={req.value} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                      <Checkbox
                        id={req.value}
                        checked={formData.requirements?.includes(req.value)}
                        onCheckedChange={(checked) => handleCheckboxChange(req.value, checked as boolean)}
                        className="h-5 w-5"
                      />
                      <Label
                        htmlFor={req.value}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {req.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 7: Contact Details */}
              <div className="space-y-4 pt-2 border-t">
                <h3 className="font-semibold text-base">Your Contact Info</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="h-12"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className="h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(512) 555-0123"
                    className="h-12"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-base font-semibold"
              >
                {isLoading ? "Submitting..." : "Get Matched With Workers"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground -mt-2">
                Takes less than 2 minutes. No commitment required.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
