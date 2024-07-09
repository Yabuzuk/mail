/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AffiliateWhereInput } from "./AffiliateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AffiliateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AffiliateWhereInput,
  })
  @ValidateNested()
  @Type(() => AffiliateWhereInput)
  @IsOptional()
  @Field(() => AffiliateWhereInput, {
    nullable: true,
  })
  every?: AffiliateWhereInput;

  @ApiProperty({
    required: false,
    type: () => AffiliateWhereInput,
  })
  @ValidateNested()
  @Type(() => AffiliateWhereInput)
  @IsOptional()
  @Field(() => AffiliateWhereInput, {
    nullable: true,
  })
  some?: AffiliateWhereInput;

  @ApiProperty({
    required: false,
    type: () => AffiliateWhereInput,
  })
  @ValidateNested()
  @Type(() => AffiliateWhereInput)
  @IsOptional()
  @Field(() => AffiliateWhereInput, {
    nullable: true,
  })
  none?: AffiliateWhereInput;
}
export { AffiliateListRelationFilter as AffiliateListRelationFilter };