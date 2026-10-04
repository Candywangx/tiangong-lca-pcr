---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-making-pulp-of-fibrous-cellulosic-material-or-for-making-or-finishing-pap-79fe0566
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Pulp, paper, paperboard and paper-converting machinery

## 1. Scope and Applicability

This manufacturing PCR covers declared configured machinery for producing fibrous cellulosic pulp, making/finishing paper or paperboard, and making-up pulp/paper/paperboard except bookbinding. Include compatible mechanical/thermomechanical refining, chemical/nonwood cooking, recycled-fibre stock preparation, sheet forming, pressing, drying, calendering, sizing/coating, creping, slitting/rewinding/cutting, corrugating, carton/bag/envelope making and folding/gluing configurations. Declare principal function and integrated versus independently supplied equipment. Installed first-set clothing, rolls, knives, controls, drive assemblies and actual fills follow the delivered configuration; loose spare stocks and customer consumables are separately disclosed. Sources un-cpc3 and the manufacturer architectures establish category and contrasting examples, not an industry recipe.

Exclude standalone bookbinding/printing machinery, separately classified generic motors, pumps, boilers, chemical recovery plant, independently supplied dryers and spare parts from the finished reference. Their actual inclusion as bought input into one reviewed machine remains possible. A combined printing-converting line, chemical pressure vessel, drying module or paper/plastic hybrid needs item-specific principal-function classification; a line label alone does not classify every unit. Pulp, paper, recovered paper, chemicals and steam used by the downstream mill are excluded except actual measured factory trials. Refurbished equipment and customer-site commissioning are separate disclosed scenarios.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-for-making-pulp-of-fibrous-cellulosic-material-or-for-making-or-finishing-pap-79fe0566 |
| classification_refs | CPC3.0:44913; exact semantic category, subject to concrete-item classification |
| covered_products | Configured pulp making; paper/board making and finishing; making-up and converting machinery except bookbinding |
| excluded_products | Printing/bookbinding; generic plant utilities; independently supplied spare parts/dryers; pulp/paper products; whole-mill output |
| representative_product | One accepted declared refiner, pulper, paper machine or corrugator/folder-gluer/bag machine configuration; no single model defines the whole category |
| production_route | Actual casting or bought castings; rolled/formed/welded/machined materials; surface finishing; supplied modules; assembly/control integration; factory tests/rework; packing |
| market_state | New accepted configured machinery at declared manufacturing gate; complete supplied scope and transport disassembly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared configured pulp/paper/board/making-up machine |
| How much | 1 kg accepted net configured machinery |
| How well | Actual principal function, supplied modules, acceptance requirements and material-grade/pressure/drive/control interfaces declared |
| How long or cycle | One manufacturing and acceptance cycle; user service life and replacement duty are scenario evidence, not defaults |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery for making pulp of fibrous cellulosic material or for making or finishing paper or paperboard, machinery (except bookbinding machinery) for making up paper pulp, paper or paperboard `59606f39-b2c5-4c5d-a906-0b9110b7c256` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal function and classification decision; pulp/paper/converting family; model/configuration; complete delivered BOM and installed fills/clothing/accessories; net mass and accepted count; site/period; manufacture gate and transport disassembly; pressure/material/drive/control specifications; make/buy; factory tests; utility/provider geography; allocation and gaps |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated accepted net configured-machine masses define Dnet; packing, rejects, free trial loads and loose spares not in the declared reference are excluded. Use cp_mass for exactly one configuration/period. |
| native_quantity | all inventory rows | Actual reference property | native | Keep Mass/kg, Volume/m3 and Energy/MJ or kWh numerator native. Convert m3 and kg only with the stream own measured density at actual T/P; electrical MJ=kWh×3.6. Unit labels never repair wrong physical identity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received metal/chemical feedstocks and bought supplied-state modules linked to upstream providers |
| starting_condition_role | foreground_input_interface |
| product_classification_scope | Reviewed full category with each concrete function and module exception declared |
| recursive_input_rule | A bought completed same-category unit retains its upstream manufacture once; only actual local integration/test is added. Partial input covers completed operations only; local remainder is explicit. |
| upstream_dataset_requirement | Compatible supplied state, grade, geography, provider and unit for each actual input or waste-treatment link |
| disclosure | Gate, sites/subcontractors, transport, unshipped installation/commissioning, module/fill/clothing inclusion, make/buy and unresolved identities |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_factory | Include actual supply transport, manufacture, finishing, assembly, factory trials, rejects/rework, utilities, abatement and packing; report separate actual transport-service rows by mode and provider. Downstream user mill production/service and user end-of-life remain separate. | un-cpc3; andritz-cast |
| boundary_makebuy | Count each bought complete or partial supplied module and its finished operations once; do not also count embedded materials or power. Pair internal transfers and cancel once. Incorporated installed first-set items enter configured Dnet; shipping packaging/loose excluded supplies do not. | valmet-headbox; bhs-corrugator; holweg-bag |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| casting | Conditional local casting | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| fabrication | Metal fabrication and machining | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| finish | Cleaning surface finishing | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| assembly | Configured mechanical electrical integration | required | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| test | Factory acceptance and rework | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| utilities | Actual site utilities | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| dispatch | Packing and gate handover | required | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |
| residues | External wastes and measured releases | conditional | Actual declared site operation; never a universal recipe | foreground_process | per 1 kg reference flow |

### Process: Conditional local casting (`casting`)

#### Inputs

##### Product flows

###### Foundry pig iron (`pigiron`)

Actual site melt charge with measured alloy composition and supplier state; no standard recipe.

- Selected flow: Foundry pig iron
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`

###### Sorted steel scrap for remelting (`scrapcharge`)

Only actual externally pretreated/sorted or remelted scrap matching the selected supplied route; preserve actual grade, chemistry and completed operations. Paired internal runners are returns rather than another purchase.

- Selected flow: Scrap Steel `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`

###### Silica foundry sand (`sand`)

Actual specified foundry sand makeup; declared grain distribution, silica assay and moisture; internal sand circulation cancels.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`

###### Phenolic resin (`resin`)

Only actual phenol-formaldehyde condensation resin input for a documented resin-bonded mould route; verify prepolymer/formulation state; separately supplied catalyst and solvent need additional atomic rows.

- Selected flow: Phenolic resin `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`

###### Foundry bentonite binder (`bentonite`)

Only documented bentonite-bonded mould route; wine fining and raw mine clay cannot represent the processed foundry binder.

- Selected flow: Foundry bentonite binder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`

###### Factory electricity (`casting_electricity`)

Actual metered attributable casting electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `andritz-cast`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Metal fabrication and machining (`fabrication`)

#### Inputs

##### Product flows

###### Carbon steel plate (`steel`)

Actual grade, thickness and rolled state for frames, vessels or fabricated rolls; conflicting bilingual metals are unavailable.

- Selected flow: Carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### 304 stainless steel sheet (`stainless`)

Conditional actual 304 sheet manufacture; the Valmet pulp-drying headbox example establishes stainless construction but no universal 304 grade.

- Selected flow: 304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Duplex stainless steel plate (`duplex`)

Only actual corrosion-service duplex grade supported by purchase and alloy assay; not assumed for all digesters or wet ends.

- Selected flow: Duplex stainless steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Aluminium extrusion profile (`aluminium`)

Only actual extruded profile of documented alloy for guards or structural frames; finished purchased guards exclude duplicate profile fabrication.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Copper wire (`copper`)

Bare copper wire only for actual local wiring or winding; insulated cable and bought motor are separate supply states.

- Selected flow: copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Stainless steel welding wire (`weld`)

Only actual filler-fed stainless welding; specify alloy and solid/flux-cored state. Filler-free joining does not imply wire.

- Selected flow: Stainless steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Gaseous argon (`argon`)

Actual gaseous shielding argon only; purity and provider must match. Liquid supply includes its own actual vaporisation; volume-to-mass uses actual temperature, pressure and density.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Metalworking cutting fluid (`cutfluid`)

Actual purchased liquid metalworking formulation for machining; match formulation and concentration, measure own water fraction and lubricant assay; gas cooling is a separate exchange.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `andritz-cast`; `valmet-headbox`

###### Factory electricity (`fabrication_electricity`)

Actual metered attributable fabrication electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `andritz-cast`; `valmet-headbox`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cleaning surface finishing (`finish`)

#### Inputs

##### Product flows

###### Powder coating (`coat`)

Only actual purchased dry polymer powder formulation applied locally; document resin and additives, retained coating, reclaim and cure; no assumed epoxy recipe or coverage.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`

###### Isopropanol (`ipa`)

Actual IPA cleaning input with own solution assay; selected China at-plant identity requires matched procurement. Distinguish retained, recovered, destroyed, wastewater and emitted fractions.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`

###### Citric acid (`citric`)

Only actual citric-acid cleaning/passivation formulation with own assay and water fraction; other acids are separate.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`

###### Nitric acid (`nitric`)

Only actual purchased 50% aqueous nitric-acid cleaning/etching reagent; quantity is whole solution, with own assay and water fraction. Other concentrations require distinct matched identities; no generic stainless passivation recipe.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`

###### Process water (`water`)

Actual treated industrial wash/rinse makeup only, with own quality and supply interface; circulation is not fresh supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`

###### Factory electricity (`finish_electricity`)

Actual metered attributable finish electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `valmet-headbox`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured mechanical electrical integration (`assembly`)

#### Inputs

##### Product flows

###### Finished grey-cast-iron machine casting (`castiron`)

Actual bought completed grey-iron housing or cylinder casting; primary cast-iron metal and iron ore do not include the casting manufacture. If made locally replace this input with its actual casting route.

- Selected flow: Finished grey-cast-iron machine casting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished refiner plate (`refiner`)

Match actual alloy, supplied finish and mechanical/thermomechanical/chemical-pulp compatibility; the Muncy casting example does not establish one alloy.

- Selected flow: Finished refiner plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished paper-machine dryer cylinder (`roll`)

Distinguish an actual bought cylinder from an independently classified complete dryer, or onsite rolled/welded steel Yankee. Record supplied coating and internal assemblies exactly once.

- Selected flow: Finished paper-machine dryer cylinder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished pulp-drying headbox (`headbox`)

Only compatible actual hydraulic or rectifier-roll headbox supplied as a unit; Valmet evidence is pulp-drying wet-end specific, not every paper machine.

- Selected flow: Finished pulp-drying headbox
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished pulper rotor (`pulper`)

Actual pulper-compatible purchased rotor, not wind or helicopter rotor. Local rotor fabrication is a separate make route.

- Selected flow: Finished pulper rotor
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished pulp screen basket (`screen`)

Record actual finished screen basket with slot/hole and corrosion specification; raw pulp or general cloth is not an equipment input.

- Selected flow: Finished pulp screen basket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished pulp digester vessel (`digester`)

Actual purchased supplied vessel, with pressure boundary and inclusions declared; onsite plate forming/welding replaces upstream vessel manufacture.

- Selected flow: Finished pulp digester vessel
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished corrugating-roll cassette (`corrroll`)

Only actual bought cassette with rolls and included drive/service interfaces; BHS documents replaceable modules and steam/condensate connections, not a universal bill of materials.

- Selected flow: Finished corrugating-roll cassette
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Finished paper-bag bottom-closing module (`bagmodule`)

Only actual bought compatible closing module. Holweg servo closing and handle/window options illustrate a bag-making configuration, not every machine or an automatic printing classification.

- Selected flow: Finished paper-bag bottom-closing module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Industrial electric motor (`motor`)

Actual rated industrial motor with speed/drive interface; do not borrow a conveyor/washing-module expert-estimate BOM for a refiner motor.

- Selected flow: Industrial electric motor
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Industrial reduction gearbox (`gearbox`)

Actual bought gearbox with duty, ratio and oil state; wind-turbine gearbox is not a generic compatible input.

- Selected flow: Industrial reduction gearbox
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Hydraulic power unit (`hydraulic`)

Only actual compatible purchased hydraulic assembly; a metal-press subsystem quantified by Energy is unavailable for a mass component input.

- Selected flow: Hydraulic power unit
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Roller bearing (`bearing`)

Actual bought finished roller bearing with load and compatibility; broad bearing identity requires actual subtype specification, not a cage or a wind pitch system.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Programmable logic controller (`plc`)

Actual complete CN hardware PLC input only with procurement/voltage compatibility; embedded board, chips and solder remain upstream.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Insulated copper control/power cable (`cable`)

Actual purchased insulated cable with cross-section and voltage; bare wire and an Energy-referenced component cannot substitute.

- Selected flow: Insulated copper control/power cable
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### EPDM rubber gasket (`gasket`)

Only actual EPDM finished gasket of verified dimensions and compound; general sealing elements do not establish the polymer.

- Selected flow: EPDM rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Paper-machine forming fabric (`fabric`)

Only the actual supplied machine clothing of declared polymer, structure and net mass; printed apparel fabric and its marketing lifetime are unrelated.

- Selected flow: Paper-machine forming fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Paper-machine press felt (`felt`)

Actual included press felt with fibre/BOM specification; distinguish supplied first set from subsequent user replacement and free shipping spares.

- Selected flow: Paper-machine press felt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Polyurethane conveyor belt (`belt`)

Only documented actual PU belt; rubber belting or conveying service is a different identity. No universal belt material follows from BOBST architecture.

- Selected flow: Polyurethane conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Machine paper-cutting knife (`blade`)

Actual compatible installed knife, distinct from steel saw blade, generic machining consumable or non-machine scissors.

- Selected flow: Machine paper-cutting knife
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Paperboard steel-rule cutting die (`die`)

Only actual configured purchased die installed in the delivered converting machine; customer tools merely used for factory test are separate consumed or returned loads.

- Selected flow: Paperboard steel-rule cutting die
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Hydraulic fluid (`oil`)

Actual fill physically shipped in a compatible mineral/synthetic-base hydraulic system; selected Volume reference is native m3, convert weighed amount with independently measured density at actual temperature. Bought prefilled module excludes duplicate fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Lubricating grease (`grease`)

Only actual documented supplied grease and separately consumed shop grease; liquid lubricant is not automatically the same grade.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

###### Factory electricity (`assembly_electricity`)

Actual metered attributable assembly electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `valmet-headbox`; `andritz-cooking`; `andritz-recycled`; `andritz-paper`; `bobst-fold`; `bhs-corrugator`; `holweg-bag`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance and rework (`test`)

#### Inputs

##### Product flows

###### Tap water (`tap`)

Actual hydrostatic, circulation or cleaning test water; record fresh supply, stocks and matched returns, actual water quality and density; customer mill water consumption is excluded.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Bleached kraft wood pulp test load (`pulp`)

Only actual declared factory acceptance or prototype stock test, never a fixed customer mill recipe; match pulping, bleaching and dry-solids state. Returned customer stock cancels.

- Selected flow: Bleached kraft wood pulp test load
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Corrugated cardboard test blank (`paper`)

Actual C/E/F corrugated board, fibre content at least80%, containing recycled material with actual fraction documented, used solely for factory converting tests; other grades need separate identities.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Unbleached kraft paper test web (`kraft`)

Only actual bag-making or cutting acceptance-test web; specify grade and moisture, consumed/returned quantities and rejected tests; user production throughput is not a factory input.

- Selected flow: Unbleached kraft paper test web
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Polyvinyl acetate adhesive (`glue`)

Only actual PVA adhesive formulation consumed during factory gluer acceptance tests; retain own solids/water fraction and stock return; no automatic application to corrugator starch or machine manufacture.

- Selected flow: Polyvinyl acetate adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Starch corrugating adhesive (`starch`)

Only actual prepared starch adhesive consumed in factory corrugating trials, with formulation constituents separately identified if mixed onsite; no user running recipe.

- Selected flow: Starch-based adhesive `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test`
- Sources: `bobst-fold`; `holweg-bag`

###### Factory electricity (`test_electricity`)

Actual metered attributable test electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `bobst-fold`; `holweg-bag`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual site utilities (`utilities`)

#### Inputs

##### Product flows

###### Purchased industrial heat (`heat`)

Only actual purchased CN natural-gas-fired industrial thermal service matching provider. Use native Energy/MJ despite Gross calorific value label; physical steam/return masses are separately measured. Supplier boiler fuel is upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Gaseous natural gas (`gas`)

Only actual site combustion with declared gas assay, temperature/pressure, density and calorific value; a single generating-project or drying-specific interface cannot establish universal fuel identity.

- Selected flow: Gaseous natural gas
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Compressed air (`air`)

Only actual purchased compressed air at declared reference conditions in native m3. Actual onsite compression records electricity once and does not duplicate purchased service.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Packing and gate handover (`dispatch`)

#### Inputs

##### Product flows

###### Factory electricity (`dispatch_electricity`)

Actual metered attributable dispatch electricity only; CN1–35kV user-side supply requires matched geography, voltage and provider. Shared services include only unassigned residual.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `bhs-corrugator`

###### Corrugated cardboard (`board`)

Actual C/E/F packing board with fibre content at least80%, contains recycled material of documented actual fraction; other grades and bought cartons need separate identities.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `bhs-corrugator`

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual LDPE protective foil, not self-adhesive, non-cellular, not reinforced, laminated, supported or combined with other materials. Confirm supplier polymer grade and supplied state; other PE grades and multilayer films require separate atomic identities.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `bhs-corrugator`

###### EURO wooden pallet (`pallet`)

Only actual EURO pallet matching dimensions and supplied state; reuse allocation uses documented trips/returns. Other crates are distinct.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `bhs-corrugator`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configured pulp/paper/converting machinery (`finished_machine`)

One kg accepted net declared configured machinery at the gate; scope and supplied modules/accessories explicit; no pulp, paper or mill output is the reference.

- Selected flow: Machinery for making pulp of fibrous cellulosic material or for making or finishing paper or paperboard, machinery (except bookbinding machinery) for making up paper pulp, paper or paperboard `59606f39-b2c5-4c5d-a906-0b9110b7c256`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `bhs-corrugator`

##### Waste flows

##### Elementary flows

### Process: External wastes and measured releases (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel machining scrap (`wsteel`)

Actual segregated steel offcuts/chips transferred to recycling, with own grade/assay; internal remelt and component rework transfers cancel.

- Selected flow: Steel scrap `e4449c6f-3b27-426d-ba8d-47c20c99c609`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent silica foundry sand (`wsand`)

Only actual discharged used sand with binder/contaminant and moisture assay; recirculated mould sand is not waste.

- Selected flow: Spent silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Metal-hydroxide treatment sludge (`sludge`)

Actual discharged wet finishing-treatment sludge with own water fraction and each metal assay; gross wet mass is not elemental metal.

- Selected flow: Metal-hydroxide treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Machinery-factory wastewater (`wastewater`)

Actual factory cleaning/test wastewater at treatment handover with own water/species assays; paper-mill production wastewater or municipal influent is not interchangeable.

- Selected flow: Machinery-factory wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent IPA cleaning solution (`spentipa`)

Actual handed-over spent IPA solution with own assay and recovery destination, separate from destroyed or emitted solvent.

- Selected flow: Spent IPA cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Paperboard factory-test waste (`wtest`)

Actual discharged tested corrugated blanks only; packaging trim and customer production waste do not substitute. Returned reusable test loads cancel.

- Selected flow: Paperboard factory-test waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected paper-machinery assembly (`reject`)

Actual final rejected configured assembly leaving as waste; reusable rework is not external waste and user end-of-life machinery is outside factory scope.

- Selected flow: Rejected paper-machinery assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Actual attributable fossil CO2 to ordinary unspecified outdoor air; retain origin and post-control monitoring; supplier/user emissions excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Fossil carbon monoxide to air (`co`)

Actual species-specific fossil CO to ordinary unspecified outdoor air; carbon closure alone cannot infer this release.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Molecular nitrogen dioxide to air (`no2`)

Only measured molecular NO2; nitrite or NOx as NO2-equivalent is not the same chemical exchange.

- Selected flow: Molecular nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Sulfur dioxide to ordinary air (`so2`)

Actual SO2 in ordinary outdoor-air compartment, not stratosphere/water/indoor substitutes.

- Selected flow: Sulfur dioxide to ordinary air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### PM2.5 to ordinary air (`pm`)

Actual measured particulate fraction below2.5micrometres to ordinary air; wrong compartment or unspecified particle size cannot substitute.

- Selected flow: PM2.5 to ordinary air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Water vapour to air (`vapor`)

Actual net factory evaporation to ordinary air; separate own water in sludge/product, reactions, returns and stocks.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Isopropanol to air (`ipair`)

Actual post-control IPA species release to ordinary air with matched concentration, flow and time plus independently measured fugitives. Capture/recovery/destruction remain different fates.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange for the declared configuration and period divided by Dnet; use cp_emissions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_actual | Prefer measured configuration/process segregation. Shared fabrication and services use documented causal drivers and an explicitly justified allocation if unavoidable; retain reject/rework/test burden in accepted production. Allocate only unassigned shared residual and investigate negative residual without clipping. |  |
| allocation_recycling | Separate internal returns from external waste treatment; disclose recycling method and treatment provider. Avoid arbitrary recycling credits, displacement, free coproduct assumptions or reuse-life factors. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted configured machine | foreground_record | model/configuration; serial/BOM; calibrated accepted net mass; Naccepted; Dnet; gate; period; installed first set and fills; excluded packing/loose spares/test stocks | Use calibrated weighing or traceable weighing records for exactly the accepted delivered configuration; sum actual accepted net masses to Dnet and match accepted count. Transport-disassembled sets retain one nonduplicated complete BOM. | kg | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |
| cp_inputs | fabrication | each actual material/component | foreground_record | atomic identity; supplied state; native amount Qattr; own chemistry/assay/moisture; stocks; returns; onsite reaction; retained material; supplier/transport; make/buy; configuration/period | Reconcile calibrated receipts, actual BOM/issues, stock change and returns; each stream own gross mass and assay, not alloy/sludge gross mass as contained Fe/Cu. Separate finished versus partial modules and actual local operations. | native | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |
| cp_utilities | utilities | each metered utility | foreground_record | native Qattr; import/generation/export/storage; fabrication/casting/finish/assembly/test/dispatch meters; unassigned residual; heat datum; separate supplied/return kg and MJ/kg; actual T/P/density; provider/configuration/period | Match one period/site; reconcile imports plus generation minus exports and storage with process loads. Assign shared services only from unassigned residual. Independently measure gross supply and return on one enthalpy datum; gross return deducted once, already-net heat never deducted twice; physical steam mass separate. | native | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |
| cp_test | test | each actual factory test medium | foreground_record | trial/acceptance/rework log; Qattr; medium own assay/moisture/water fraction; load source; delivered/consumed/returned fractions; stocks; actual T density; runoff/evaporation/retention/reaction; configuration/period | Measure actual factory trials with separate meters and transfers; record consumed/returned test pulp/paper/adhesives separately, never user throughput, rated duty or a simulated mill recipe. Each water stream uses own water fraction, density and measured losses/stocks. | native | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |
| cp_waste | residues | each waste handover | foreground_record | identity; Qattr wet gross mass; own moisture/water fraction; each contaminant assay; treatment/provider; retained rework and internal transfers; stocks/configuration/period | Use weighed transfer manifests and own stream sampling; retain gross mass distinct from contained elements/water and pair returns. External provider emissions stay in provider process. | kg | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |
| cp_emissions | residues | each elementary species | foreground_record | species/CAS/origin/compartment; Qattr; measured post-control concentration; matched gas/liquid flow; same time interval; T/P/wet-dry/oxygen/unit correction; independent fugitive basis; capture/recovery/destruction; stocks | Measure each species after actual controls using matched concentration × gas/liquid flow × same period with measured state/unit corrections, plus independently measured fugitives; unexplained mass residual or carbon closure cannot create an emission. | kg | each batch and matched meter interval | one common production period | declared configuration and sites | per 1 kg reference flow | calibration; receipts; own assays; BOM/acceptance; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For one configuration and period divide each attributable native-unit exchange total by the sum of accepted configured-machine net masses; keep raw amounts, units and uncertainty. | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | For one configuration/period Qattr includes attributable rejects, rework and factory tests; Naccepted counts precisely the accepted net configured machines in Dnet. Per-machine exchange=Qattr/Naccepted; mean net mass=Dnet/Naccepted; per-kg exchange=Qattr/Dnet. Equivalent per-machine conversion uses measured mean net mass, never a catalogue weight or an invented fixed machine mass. | matched calibrated net-mass and acceptance ledger |
| quality_balances | all inventory rows | Each physical element/species term uses own gross mass and own assay, wet/dry basis and moisture with stocks, reactions, retained product, internal returns and external waste; gross alloy/sludge is not contained element. Each water stream uses own water fraction and measured density at actual temperature, with reaction generation/consumption, retention, evaporation, discharge and stocks; pair circulation returns. | stream-specific assays, stock and reaction ledger |
| quality_solvent | ipa; spentipa; ipair | Use each stream own IPA assay for stock-adjusted input, retained product, captured/recovered liquid, wastewater/spent media, destruction and measured air release. Capture differs from destruction; non-air fates never become air and unexplained residual remains unresolved. | independent fate/assay and emission measurements |
| quality_identity | all inventory rows | Match actual state/type, reference property/native unit, alloy/polymer/chemical, supplied completion, provider/geography and elementary compartment. Conditional identity UUIDs are no numeric defaults. Add every actual unlisted fastener, valve, coating reagent, welding gas, test stock, transport service, steam/return or waste species as an atomic queried and measured row. Unknown is not zero; absent requires proof. | actual procurement/BOM/process/provider and gap disclosure |
| quality_category | reference product | Full category remains broader than a single refiner/headbox/folder-gluer model. Independently classified dryers, printing, bookbinding, generic equipment and spare parts need supplied-state/principal-function review. Pressure-vessel chemistry, envelope/creping/calendering and unobserved configurations require item-specific primary architecture; examples never imply universal material grades, operating recipes, speed, lifetime or efficiency. | original configuration and classification decision |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Require complete declared accepted configured BOM, positive Dnet/Naccepted and actual principal-function review; reject a pulp/paper product or one unrelated partial component as full reference. Both languages use the same native numerator and one-kg net reference. | un-cpc3 |
| validate_interfaces | Reject duplicate bought-module manufacture, embedded-material double counting, uncancelled internal returns, assumed supplied fills/clothing, or customer mill use quantities presented as factory burdens. Actual factory trial/reject/rework loads remain attributable. | andritz-cast; valmet-headbox; bhs-corrugator; holweg-bag |
| validate_physics | Require own stream element/water/solvent fate closure, measured post-control concentration with matched flow/time/state and independently measured fugitives. Reconcile utilities from imports/generation/exports/storage and actual process loads, allocate only unassigned residual; investigate negatives without clipping. Gross heat=supplied measured kg×its own MJ/kg minus independently measured return kg×its own MJ/kg on one datum, deducted once; already-net heat never deducts return again. Physical steam and heat separate; supplier boiler is upstream. |  |
| validate_species | Carbon closure cannot infer CO or NO2; NOx as NO2-equivalent is not pure molecular NO2. Ordinary-air emissions cannot use stratospheric/indoor/water flows. State20 and wrong reference property are unavailable. Report performed/skipped checks, missing records, findings and completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared configured-machine production and compatible downstream supplied machinery scenario |
| excluded_use | Universal mill recipes, operation/service-life factors, printing/bookbinding/general equipment comparisons without reviewed scope, pulp/paper output datasets |
| required_metadata | All qualifiers, Qattr/Naccepted/Dnet and native units, actual BOM/makebuy, routes/sites/period, supplier/transport/treatment, tests, allocation and gaps |
| required_quality_disclosure | Measured/estimated/missing distinction, sampling/calibration/uncertainty and balance residual, classification and identity/provider gaps, performed/skipped checks/completeness |
| update_trigger | Configuration, function/classification, grade/route/makebuy, provider/site/period, supplied accessories or factory test changes |

## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | Central Product Classification Version3.0 Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 30June2025; PDF/printed p241 leaf44913 and adjacent44912/44914: full pulp/paper making, finishing and making-up except bookbinding; classification only. |
| andritz-cast | handbook | ANDRITZ Inc., Muncy, Pennsylvania, USA | https://www.andritz.com/pulp-and-paper-en/locations/muncy-usa | Undated publisher page; snapshot2026-10-02. Actual foundry and precise machining of refiner plates; alloy and factory quantities remain measured, MDF use is outside the pulp/paper reference. |
| andritz-cooking | handbook | A-ConApex cooking technology | https://www.andritz.com/products-en/power-to-x/pulp-and-paper/pulp-production/a-conapex-technology | Undated publisher page; snapshot2026-10-02. Chemical/nonwood pulp continuous reactor, feeding/mixing/pump interfaces; not a mill chemical recipe or generic boiler boundary. |
| andritz-recycled | handbook | ANDRITZ deinking systems | https://www.andritz.com/products-en/products/pulp-and-paper/deinking-systems | Undated publisher page; snapshot2026-10-02. Recycled-fibre pulping, screening, cleaning, flotation, dewatering, dispersing/bleaching and reject/sludge treatment equipment; not customer waste or chemical quantities. |
| valmet-headbox | handbook | Valmet Headbox | https://www.valmet.com/pulp/pulp-drying/wet-end/headbox/ | Undated publisher page; snapshot2026-10-02. Pulp-drying wet-end hydraulic versus rectifier-roll headbox, stainless construction and polished stock-contact faces; no universal304 specification. |
| andritz-paper | handbook | ANDRITZ PrimeLine paper and board machines | https://www.andritz.com/products-en/forever/pulp-and-paper/paper-production/paper-board-machines/primeline | Undated publisher page; snapshot2026-10-02. Configured paper/board drying sections with steel cylinders/Yankee, presses/coaters/winders as actual supplied options; no operating speed, drying duty or yield defaults. |
| bobst-fold | handbook | EXPERTFOLD 106 / 145 / 165 / 215 - Folder-gluer | https://www.bobst.com/afr/en/products/folding-gluing/expertfold-145-165 | Undated publisher page; snapshot2026-10-02. Corrugated/litho-laminated board feeding, prebreaking, folding/gluing, belts and rejection options; no universal belt chemistry or factory quantity. |
| bhs-corrugator | handbook | Single Facer - BHS Corrugated | https://www.bhs-world.com/en/corrugators/individual-machines/single-facer | Undated publisher page; snapshot2026-10-02. Corrugating cassettes, pressure-roll/belt architectures, integrated controls and steam/condensate connections; actual supplied inclusion rather than paper-use recipe. |
| holweg-bag | handbook | 5XF - HolwegWeber paper bag making line | https://www.holwegweber.com/production-lines/5xf/ | Undated publisher page; snapshot2026-10-02. Servo bottom closing, handle/window/unwind/tension/glue-sensor options; optional printing/lamination highlights principal-function classification review. |
