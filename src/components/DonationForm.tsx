import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Heart } from "lucide-react";

interface DonationFormProps {
  onSubmit: (data: DonationData) => void;
}

export interface DonationData {
  amount: number;
  customAmount?: number;
  firstName: string;
  lastName: string;
  email: string;
  isMonthly: boolean;
  isAnonymous: boolean;
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const presetAmounts = ["25", "50", "100", "250", "500", "custom"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount =
      selectedAmount === "custom"
        ? parseFloat(customAmount)
        : parseFloat(selectedAmount);

    onSubmit({
      amount: finalAmount,
      customAmount:
        selectedAmount === "custom" ? parseFloat(customAmount) : undefined,
      firstName,
      lastName,
      email,
      isMonthly,
      isAnonymous,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Donation Amount Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Select Amount</Label>
          <p className="text-muted-foreground">Choose your donation amount</p>
        </div>

        <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount}>
          <div className="grid grid-cols-3 gap-3">
            {presetAmounts.map((amount) => (
              <div key={amount} className="relative">
                <RadioGroupItem
                  value={amount}
                  id={amount}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={amount}
                  className="flex items-center justify-center h-16 px-4 cursor-pointer rounded-lg border-2 border-border bg-background transition-all hover:bg-accent peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                >
                  {amount === "custom" ? "Custom" : `$${amount}`}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        {selectedAmount === "custom" && (
          <div className="space-y-2">
            <Label htmlFor="customAmount">Enter Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                id="customAmount"
                type="number"
                min="1"
                step="0.01"
                placeholder="0.00"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-7"
                required={selectedAmount === "custom"}
              />
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id="monthly"
            checked={isMonthly}
            onCheckedChange={(checked: boolean) =>
              setIsMonthly(checked as boolean)
            }
          />
          <Label htmlFor="monthly" className="cursor-pointer">
            Make this a monthly donation
          </Label>
        </div>
      </div>

      {/* Donor Information Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Your Information</Label>
          <p className="text-muted-foreground">Help us stay in touch</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="anonymous"
            checked={isAnonymous}
            onCheckedChange={(checked: boolean) =>
              setIsAnonymous(checked as boolean)
            }
          />
          <Label htmlFor="anonymous" className="cursor-pointer">
            Make my donation anonymous
          </Label>
        </div>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full h-12" size="lg">
        <Heart className="mr-2 h-5 w-5" />
        Complete Donation
        {selectedAmount !== "custom" && ` - $${selectedAmount}`}
        {selectedAmount === "custom" && customAmount && ` - $${customAmount}`}
      </Button>

      <p className="text-center text-muted-foreground">
        Your donation is secure and will help make a difference
      </p>
    </form>
  );
}
