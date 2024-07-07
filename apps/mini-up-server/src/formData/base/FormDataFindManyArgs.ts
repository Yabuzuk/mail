/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FormDataWhereInput } from "./FormDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FormDataOrderByInput } from "./FormDataOrderByInput";

@ArgsType()
class FormDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FormDataWhereInput, { nullable: true })
  @Type(() => FormDataWhereInput)
  where?: FormDataWhereInput;

  @ApiProperty({
    required: false,
    type: [FormDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FormDataOrderByInput], { nullable: true })
  @Type(() => FormDataOrderByInput)
  orderBy?: Array<FormDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FormDataFindManyArgs as FormDataFindManyArgs };
