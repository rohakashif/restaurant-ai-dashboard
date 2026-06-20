"use client";

import Image from "next/image";
import { MoreHorizontal, Plus } from "lucide-react";
import { restaurants } from "@/data/restaurants";
import { foods } from "@/data/foods";
import { chefs } from "@/data/chefs";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function ManagementPage() {
  return (
    <div>
      <PageHeader
        title="Restaurant Management"
        description="Manage restaurants, menus, and staff"
      >
        <Button variant="gradient" onClick={() => toast.info("Demo: Add new item")}>
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </PageHeader>

      <Tabs defaultValue="restaurants" className="space-y-6">
        <TabsList>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="menu">Menu Items</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="restaurants">
          <Card className="glass-card">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Restaurant</TableHead>
                    <TableHead>Cuisine</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {restaurants.map((rest) => (
                    <TableRow key={rest.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                            <Image
                              src={rest.image}
                              alt={rest.name}
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          </div>
                          <span className="font-medium">{rest.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{rest.cuisine}</TableCell>
                      <TableCell>
                        <Badge variant="warning">{rest.rating}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{rest.location}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => toast.info("Edit restaurant")}>
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toast.info("View details")}>
                              View Details
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="menu">
          <Card className="glass-card">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="w-12" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {foods.map((food) => (
                    <TableRow key={food.id}>
                      <TableCell className="font-medium">{food.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{food.category}</Badge>
                      </TableCell>
                      <TableCell>{formatPrice(food.price)}</TableCell>
                      <TableCell>{food.rating}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => toast.info("Edit item")}>
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toast.info("Remove item")}>
                              Remove
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chefs.map((chef) => (
              <Card key={chef.id} className="glass-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={chef.image} />
                      <AvatarFallback>{chef.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{chef.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{chef.specialty}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Experience</span>
                    <span>{chef.experience}</span>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <Badge variant="warning">{chef.rating}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
