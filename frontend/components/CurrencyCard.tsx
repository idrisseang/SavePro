import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CurrencyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Set your preferred currency</CardTitle>
        <CardDescription>Main currency all your pockets will use.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="currency">Currency</Label>
              <Select>
                <SelectTrigger id="currency">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="euro">€</SelectItem>
                  <SelectItem value="dollar">$</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
