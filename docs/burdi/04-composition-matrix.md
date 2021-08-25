---
sidebar_position: 6
---

# Step 3 : The composition matrix

![compositionMatrix](/img/burdi/03-en-compositionMatrix.png)

The view is separated in two parts:
* In gray: data from the first steps ( all raw materials & calculated information)
* In blue: the composition matrix table and the related bar graphs.
* 
## Materials information
The materials information are summarized in a board:

xxxxxxxxxx


The operator can see all information related to charge & injected materials of the recipe.
* Material Name & Short name: e.g. : Coke / CO1 
  * Number of required extractors 
  * Available extractors:
  * Colour code:
    * If "available extractor" or required extractor are equal to 0 or lower than "required extractors" the colour is red
    Otherwise, the colour of the cell is green 
    * Max Flow [m3/h]
    The Maximum flow of the available extractor
    * Rate [kg/tHM]
    Specific amount of material needed to produce one ton of hot metal in kg/tHM 
  * Summary Rate [kg/tHM]
  * Inputs:
    * Sum of all Burdening materials rates 
    * Sum of all reducing agents rates of material that is used for the reference basis in tons
  *Output:
    * Hot Metal & Slag 
    * one ton of hot metal 
    * Rate of slag for one ton of hot metal


## Weight & Summary

The weight & weight summary contain information about the pending recipe that is currently in the level 2 buffer.

### Summary table
* Summary of nominal rate 
  * Ferrous Sum of all iron bearing materials 
  * Coke Sum of all cokes including small coke(nut coke)
  * Tuyere / Injection Sum of all material injected at tuyere level 
  * Hot metal & Slag
* Dry weight 
  * Nominal amount of dry material that is used for the reference basis 
* Dry weight summary 
  * Sum of all Burdening materials dry weight 
  * Sum of all reducing agents dry weight that is used for the reference basis 
* Wet weight 
  * Nominal amount of wet material that is used for the reference basis 
* Wet Weight Summary 
  * Sum of all Burdening materials wet weight 
  * Sum of all reducing agents wet weight that is used for the reference basis
         
### Reference basis
The reference on which the nominal amounts are based, the operator can choose between six bases:
* "Coke Thickness at Throat" 
* The operator wants to define the thickness of coke at the throat level 
* Coke Basis"
* The most used basis, all the weight of other materials are calculated based on the " Coke Basis"
* "Burdening materials basis"
* The same principle than Coke for the Burdening materials ( Sum of burdening = basis)
* "Hot Metal Basis"
* Target for a weight target of output Hot metal
 
### Charges per cycle
* The number of charges per cycle

xxxxxxxxxxxxx

The charge per cycle has an impact on the Composition Matrix & validation bar graph.
If the reference is:
* "1" charge par cycle; each material in the summary board has to be distributed at 100% in the composition matrix.


xxxxxxxxxxxxxxxxxxx


* "2" charges per cycle; each material in the summary board has to be distributed at 200% in the composition matrix.

xxxxxxxxxxxxxxxxxxxxx




## Composition Matrix - skip

xxxx 
* References :
* Reference basis 
  * cf. chapter Weight & Summary above
* Charge per cycle 
  * cf. chapter Weight & Summary above


## Cycle definition
The operator has to define the cycle of the recipe.
e.g. C – O – MIX
or
C – O – C – O, etc.


xxxxxxxxxxxxxxxxxxxx


This step allows you dynamically create the composition matrix table
e.g. cycle COKE-ORE-MIX
As you can see below every batch in the cycle has a colour code.

xxxxxxxxxxxxxxxxxx

In the example below, you can see three batches in the cycle on each batch you can select the type of material and define the percentage

### Table features 
#### Skip
The operator has the ability to define a maximum of four skips
The operator has the ability to add or remove it using the + & - icon:
* Icon "-" to remove the section 
* Icon "+" to add a section ( only available at the latest section)

xxxxxxx


#### Column information

xxxxxxx


The information about the composition matrix:
* B#
Indicates the consecutive id number of the batch 
* Type
Identifies the batch :
  * O (ore), 
  * C (coke)
  * MIX (C & O)
* Throat thickness* optional 
  * The thickness of the coke layer at throat level 
* Volume (Wet.)
  * The volume of materials in the corresponding line in cubic metres 
* Batch weight (dry/wet) * optional 
  * The weight of materials in the corresponding line in tons wet or dry 
* end 
  * It indicates the end of a charge 
* Mat (Short name of material)
  * The short name of the material red for left side, blue for right side L or R
            e.g. PE6 | L for Pellet6 Left bin in the stockhouse

xxxxxxxxxxxxx


### Pourcentage check

Define the percentage of material to be distributed in the specific section

xxxxxxxxxxxx

Note: Visual check is done with the bar graph explain in the previous section
* L/R, Define if you want to use:
  * the left skip ( Letter L)
  * the right skip ( Letter R)
* Opt. (option)
  * sign:+ or - or E 
  * Materials connected with:
    * a + sign, material is going to be charged one after the other in the skip before being discharged in the weighing hopper. 
    * a - sign, material is going to be charged together in the skip (MIX) before being discharged in the weighing hopper. 
    * E, forces an empty skip to be sent to the blast furnace after a material.
* Dry Weight* optional 
  * The dry weight of material used for this batch this information is not editable.
* Wet Weight* optional 
  * The wet weight of material used for this batch. 
  * This information is not editable.
* Hopper 
  * N°: define the hopper N° where the skip is going to be discharged 
  * Volume % : calculation of the batch volume in order to check if the batch is not too big  for the hopper size.

* All optional info above can be displayed or hide by a simple click on the left pane menu
xxxxxxxxxxx

### Weight Mode (optional)

If the weight mode is activated the operator is able to put percentage or weight

xxxxxx

When this mode is activated the operator has a new column ( available weight) and he can edit the "%" column or the Weight column (Dry or Wet based on the selected option).
When the operator is going to fill the weight, the available weight and the percentage are going to be automatically calculated.

### Autofill
in order to make life much easier for the operator we have created an autofill mode by clicking on the available weight column.
using the left click of the mouse the available weight will be coped automatically to reach the 100%. 
info: in this mode the value can be rounded 


xxxxxxxxxxxxxxx


### Add a second batch in the skip

On the left size of the table, the operator has the ability to add for each batch a charge

xxxxx

In the picture below, you can see a second charge of coke in the batch Coke on the skip 1 & skip 2.

xxxxx

This charge can be deleted by the operator 
xxxxx

###  mCopy-past feature
A very useful feature is available for the operator the batch copy past.

This feature us very useful if the operator is using charging pattern by example a C-O-O -C-O-O where the Coke batches are the same and all Ore batches are identical.
In this condition, the operator is going to create:
- One batch of coke with 50% distribution of all coke material of the recipe
- One batch of ore with 25% of all burdening materials of the recipe
  Then he is go  ing to duplicate the ore batch after the existing ore batch
  Then duplicate the coke batch at the end
  Then it is going to duplicate two times the ore batch at the end to create the complete cycle COOCOO in a very fast-efficient way.
