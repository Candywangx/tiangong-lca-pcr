---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-vinyl-chloride-or-other-halogenated-olefins-in-primary-forms
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Primary suspension-polymerised PVC resin with monomer recovery


## 1. Scope and Applicability

Use only for real aqueous batch suspension PVC homopolymer resin, stripped with monomer recovery, separated and indirectly steam-dried for bulk primary-powder supply. The actual dataset must establish its grade, recipe and equipment; the individually evidenced representative supplies do not establish a validated joint recipe. Other chlorinated/fluorinated polymers, paste resins and compounds are not interchangeable. No plant consumption rate, conversion rate or zero residual monomer is prescribed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-vinyl-chloride-or-other-halogenated-olefins-in-primary-forms |
| classification_refs | CPC 3.0:34730, narrower S-PVC scope only; no accepted mapping is created |
| covered_products | Primary PVC homopolymer resin powder from aqueous batch suspension polymerisation of VCM, followed by stripping, monomer recovery, centrifugation and drying. Model one actual grade and recipe per dataset. |
| excluded_products | Emulsion and microsuspension paste resins; bulk/solution PVC; PVDC; chlorinated PVC; fluoropolymers; copolymers; plastisols; plasticised/filled compounds; recycled PVC; shaped pipes/films and other finished goods. Direct-fired drying and onsite incineration are not represented by this inventory variant. |
| representative_product | Uncompounded primary S-PVC powder, actual grade declared; a generic native S-PVC flow is not a verified SKU |
| production_route | Batch aqueous suspension; representative EHP-W40S frozen-emulsion initiator and partially hydrolysed PVA fine-granule preparation; no recipe rate is prescribed. Other actual additives must be identified individually before use. |
| market_state | Accepted bulk resin powder at factory gate after stripping, drying and grade testing; packaging excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply primary S-PVC resin for subsequent compatible conversion |
| How much | 1 kg net accepted supplied resin |
| How well | One actual homopolymer grade with measured powder state, viscosity/K basis, particle/porosity, residual VCM and water/volatile declarations |
| How long or cycle | Factory-gate supply from one matched production/acceptance cohort; no service-life claim |
| reference_flow_link | final_resin |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | polyvinylchloride resin (S-PVC) `4f19f122-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PVC homopolymer identity; aqueous batch suspension route; primary powder state; actual grade and K-value or viscosity method; particle-size/porosity basis; water and volatile content with test method; residual VCM with test method; actual initiator formulation and PVA grade; supplied gate state; site and period; feedstock route and upstream boundary; native identity limitations |

Declare every qualifier in dataset metadata, product description, reference-flow comment or equivalent fields. The native reference establishes only broad S-PVC/Product/Mass identity: no CAS, comment, supply geography, detailed grade/form or complete route/mix fields, with native compliance Not defined. It does not establish a SKU, supplier, China/Hong Kong geography or scientific compliance. These limitations also apply to final_resin.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use independently measured net accepted supplied resin mass excluding packaging; disclose retained water/volatiles. Dry-solids and pure-polymer amounts are separate subledgers, not replacement denominators. |
| physical_conversion | all inventory rows | Mass; electricity | kg; kWh | Convert actual raw records first; use measured state/density for volume and never multiply integrated gas/liquid volume by time again. Match steam/return boundaries; secondary property coefficients are not density. |
| water_species | all inventory rows | Mass | kg | Independently evidence total physical water, phases/free water and chemical water formation/consumption. Addition polymerisation has no obligatory water coproduct; do not fit unknown water and product to one residual. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received VCM and complete purchased formulations plus separately purchased PVA granules, process water and utilities; existing WIP and recovered monomer include carried inventory/burdens |
| starting_condition_role | Foreground gate-to-gate starting fact, not an upstream cut-off |
| product_classification_scope | Only aqueous batch S-PVC primary resin within CPC 34730; broader class is not methodology coverage |
| recursive_input_rule | Internal recycle carries burdens without repeated upstream purchase. Any external same-category resin input is separately identified by grade/state and upstream dataset, never silently treated as new VCM or new accepted output. |
| upstream_dataset_requirement | Match whole supplied formulation, grade, physical unit, actual VCM production route, electricity geography and steam/condensate boundary. Monomer synthesis is upstream even if separately modelled onsite; report any missing provider as a dataset gap. |
| disclosure | Declare own operations and external treatment, unit transfers, cold storage, cleaning, direct steam versus indirect return, emissions controls, stock/WIP attribution and unrepresented additional exchanges. Site/provider data do not constitute method evidence. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all relevant operations | Include receiving, recipe preparation, cooling/refrigeration, polymerisation, stripping, recovery, centrifugation, drying, screening, storage, washing, fugitives and actual waste treatment interfaces. Keep individual unit operations separately metered even inside one owner process. | `jrc-polymers-2007` |
| boundary_formulation | all relevant operations | Purchase each supplied formulation once. Active peroxide, emulsifier and carrier water are composition subledgers; separately purchased onsite dilution water and PVA ingredients have actual rows and actual mixing/cooling/losses. Split every extra co-initiator, coating, inhibitor, cleaning agent, fuel, refrigerant or packaging component into an atomic foreground exchange before dataset use. | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022`; `kuraray-spvc-poval-2025` |
| boundary_terminal | all relevant operations | The selected terminal Product output is final_resin only. All slurry, cake, recovered monomer and captured-dust movements are paired internal transfers or genuine separate waste/co-product outputs. Do not hide a physical output by renaming it or selecting its UUID twice. | `jrc-polymers-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| polymerise | Supply preparation and batch suspension polymerisation | required | VCM receiving/storage; cold initiator storage and dilution; PVA dissolution; reactor charge, reaction cooling, cleaning and leaks | foreground operation owner | per 1 kg reference flow |
| strip_recover | Slurry stripping, VCM recovery and water stripping | required | Separate raw records for polymer stripping, condenser/compressor recovery and contaminated-water stripping; offsite effluent treatment interface | foreground operation owner | per 1 kg reference flow |
| dewater | Centrifugal solid-liquid separation | required | Separate cake and mother liquor before drying | foreground operation owner | per 1 kg reference flow |
| finish | Indirect drying, screening and bulk resin dispatch | required | Separately metered drying, screening, dust capture, silo and gate acceptance | foreground operation owner | per 1 kg reference flow |

A on each card is its complete actual-period raw numerator, converted to physical units and attributed to the same acceptance cohort; Q is unique newly accepted net resin kg of this product/route/grade/state. Collection retains raw numerators and stock/WIP carried burdens; the sole section-8 normalization divides once at final reporting. Every input/output uses the same reporting basis. Internal paired transfers cancel in the aggregate model while remaining auditable and creating no additional product burden.

### Process: Supply preparation and batch suspension polymerisation (`polymerise`)

#### Inputs

##### Product flows

###### Vinyl Chloride (`fresh_vcm`)

Fresh external VCM only; native CAS 75-01-4, production of vinyl chloride, production mix in the factory, Product flow, Mass only. Geography is empty; purity, pressurised delivery state, producer route and supplier are unspecified. It proves identity, not a Chinese/Hong Kong supply mix, recipe quantity or background provider. Assay the whole delivered lot and reconcile storage.

- Selected flow: Vinyl Chloride `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `jrc-polymers-2007`

###### Vinyl Chloride (`recycle_vcm_in`)

Internal recovered VCM from recover_vcm_out, measured with the same transfer key and impurity assay. Retain the same native limitations as fresh_vcm; recovery does not create new procurement or a negative virgin credit. Opening recovered stock carries its prior burdens.

- Selected flow: Vinyl Chloride `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `jrc-polymers-2007`

###### Demineralised water (`poly_water`)

External water for suspension, PVA preparation, initiator dilution and reactor washing is metered by purpose. Purchased-formulation carrier water is a composition subledger, not a second water purchase. Internal recycled water uses a separate transfer ledger.

- Selected flow: Demineralised water
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `jrc-polymers-2007`

###### Di(2-ethylhexyl) peroxydicarbonate frozen aqueous emulsion (`ehp_formulation`)

Representative supplied formulation is EHP-W40S, nominal 40% frozen emulsion in water, white flakes, active CAS 16111-62-9. Weigh the entire formulation; retain lot assay, emulsifier/carrier composition and storage/dilution losses. Nominal activity is not a site measurement and the published bulk density is not liquid density. Refrigeration, thawing/dilution and mixing are foreground operations; other co-initiators require separate concrete cards.

- Selected flow: Di(2-ethylhexyl) peroxydicarbonate frozen aqueous emulsion
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `jrc-polymers-2007`; `nouryon-ehp-w40s-2022`

###### Partially hydrolysed polyvinyl alcohol fine granules (`pva_granules`)

Primary suspending-agent granules, represented by the producer L-10 grade, are dissolved onsite. Record actual grade, hydrolysis, viscosity test basis, volatiles and dry solids. The producer supplies fine granules, not an already purchased aqueous solution. Measured dissolution water/energy belongs to separate rows; the prepared solution is an internal formulation, never a duplicate purchase. A different hydrolysis grade is not automatically equivalent.

- Selected flow: Partially hydrolysed polyvinyl alcohol fine granules
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `jrc-polymers-2007`; `kuraray-spvc-poval-2025`

###### Nitrogen gas (`poly_nitrogen`)

Include only actual inerting/purging nitrogen; retain pressure, temperature and dry/wet volume basis. An integrated gas-meter volume is converted once, without multiplying by time again. Nitrogen is not VCM converted or an oxygen-based emission residual.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_util`
- Sources: `jrc-polymers-2007`

###### Electricity (`poly_electricity`)

Submeter refrigeration of supplied initiator and VCM storage, PVA preparation, agitation, pumps and cooling equipment. Retain actual grid/supply and auxiliary idle/failed-batch loads.

- Selected flow: Electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_util`
- Sources: `jrc-polymers-2007`

###### Saturated steam (`poly_steam`)

Meter actual external indirect-heating steam for dissolution and startup, with pressure, temperature and dryness. Pair condensate return by meter. The upstream provider must match its mass/service and return boundary; do not additionally purchase the same heating as MJ.

- Selected flow: Saturated steam
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_util`
- Sources: `jrc-polymers-2007`

###### Cooling-water make-up (`cooling_makeup`)

External make-up to the recirculating cooling loop owned here, including separately recorded reactor and recovery-condensation cooling duties. Measure make-up, blowdown and evaporation/drift, not gross recirculating flow as repeated procurement. Tower/pump electricity is owned here; separate recovery refrigeration meters must not overlap.

- Selected flow: Cooling-water make-up
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_util`
- Sources: `jrc-polymers-2007`

###### Corrugated cardboard shipping box (`initiator_carton`)

Actual received outer box for initiator formulation, weighed separately from formulation mass. The producer standard pack is evidence of one possible package, not actual site packaging quantity. Link its supply burden only once if already included in the formulation provider. Any inner liner or other packaging component is separate.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_material`
- Sources: `nouryon-ehp-w40s-2022`

#### Outputs

##### Product flows

###### Unstripped aqueous S-PVC slurry (`unstripped_slurry`)

Internal transfer to strip_recover. Measure whole slurry, polymer solids, free water, residual VCM and additives independently; this intermediate is not accepted dry resin and is excluded from Q.

- Selected flow: Unstripped aqueous S-PVC slurry
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_balance`
- Sources: `jrc-polymers-2007`

###### Steam condensate (`poly_condensate`)

Utility return from indirect heating; not aqueous polymer process effluent, not automatically an exported co-product or an avoided-steam credit.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_util`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### VCM-bearing reactor wash water (`poly_cleaning_effluent`)

Whole wash stream goes to the water stripper under strip_recover, carrying measured VCM/PVC/additives. Internal transfer, not a final environmental discharge. Actual separately supplied cleaning chemicals or antifouling formulations require their own atomic input rows before use.

- Selected flow: VCM-bearing reactor wash water
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_balance`
- Sources: `jrc-polymers-2007`

###### VCM-bearing PVC reactor scale (`poly_scale`)

Separately weigh wet scale and residues removed by mechanical cleaning; assay water, polymer and monomer and record actual waste destination. Do not count dissolved/washed solids again as scale.

- Selected flow: VCM-bearing PVC reactor scale
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_balance`
- Sources: `jrc-polymers-2007`

###### Cooling-water blowdown for external treatment (`cooling_blowdown`)

Measure whole segregated blowdown and its actual contamination/treatment destination. Any separately supplied cooling-water chemical is an additional atomic product input; no unrecorded treatment dose is allowed.

- Selected flow: Cooling-water blowdown for external treatment
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_balance`
- Sources: `jrc-polymers-2007`

###### Peroxide-contaminated cardboard shipping box (`initiator_carton_waste`)

Only actual discarded formulation box, with retained formulation residue quantified separately and actual classification/destination. Reused/returned boxes retain tracked stocks; do not assume every receipt is immediately discarded.

- Selected flow: Peroxide-contaminated cardboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_balance`
- Sources: `nouryon-ehp-w40s-2022`

##### Elementary flows

###### Vinyl chloride to air (`poly_vcm_air`)

Storage, loading, sampling, reactor openings and leaks: quantify actual final releases after any recovery/control. Separately log equipment leaks and routed vents, without adding an overlapping total.

- Selected flow: Vinyl chloride to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_air`
- Sources: `jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### Carbon dioxide to air (`poly_co2_air`)

Where measured/reliably speciated, record initiator-decomposition CO2 released to air. The producer names a possible major product, not a measured yield or proof that all initiator carbon is emitted here. Distinguish any separately evidenced reaction water.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_air`
- Sources: `nouryon-ehp-w40s-2022`

###### 2-Ethylhexanol to air (`poly_eh_air`)

Measure only actual final vapour loss of this named decomposition product; retained product/water-phase mass remains in composition ledgers. A total VOC or COD measurement cannot establish this species mass.

- Selected flow: 2-Ethylhexanol to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_air`
- Sources: `nouryon-ehp-w40s-2022`

###### Cooling-water evaporation to air (`cooling_evaporation`)

Use actual water/air measurements for net cooling evaporation, with independently tracked liquid drift as a distinct additional exchange when present. This is physical water phase change, not chemical reaction water.

- Selected flow: Cooling-water evaporation to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_poly_air`
- Sources: `jrc-polymers-2007`

### Process: Slurry stripping, VCM recovery and water stripping (`strip_recover`)

#### Inputs

##### Product flows

###### Unstripped aqueous S-PVC slurry (`slurry_in`)

Receive unstripped_slurry with the same transfer key, mass and composition; no extra upstream burden is created at transfer.

- Selected flow: Unstripped aqueous S-PVC slurry
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

###### Saturated steam (`strip_steam`)

Actual direct-injected stripping steam is a mass input, including its water; record quality, steam meter and supplier boundary. A separate steam-energy subledger is not a second exchange.

- Selected flow: Saturated steam
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_util`
- Sources: `jrc-polymers-2007`

###### Electricity (`strip_electricity`)

Separately record slurry stripping, water stripping, vacuum, gas-holder, compressor, condenser/refrigeration and final gas-recovery equipment, including start/stop activity.

- Selected flow: Electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_util`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### VCM-bearing reactor wash water (`wash_in`)

Internal receipt from poly_cleaning_effluent; match the transfer exactly.

- Selected flow: VCM-bearing reactor wash water
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

###### VCM-bearing PVC centrifuge liquor (`centrate_in`)

Internal receipt from centrate_out for water stripping. Retain distinct wash and centrifuge ledgers.

- Selected flow: VCM-bearing PVC centrifuge liquor
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### Stripped aqueous S-PVC slurry (`stripped_slurry`)

Transfer to dewater after measuring residual VCM, whole slurry and water/solids. Stripping does not mean zero residual monomer.

- Selected flow: Stripped aqueous S-PVC slurry
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

###### Vinyl Chloride (`recover_vcm_out`)

Internal recovered monomer to recycle_vcm_in with impurity assay and stock continuity. Native CAS 75-01-4, production-of-VCM factory mix, Product/Mass only, empty geography and unspecified purity/delivery/provider are retained; the generic identity does not verify recovery quality or substitute fresh procurement.

- Selected flow: Vinyl Chloride `d9a7773b-72ce-4899-86c1-57e02a3f10cb`
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### Stripped PVC process wastewater for external treatment (`stripped_effluent`)

Whole aqueous effluent leaving the foreground, before offsite treatment; measure flow and specific residual VCM/PVC/2-ethylhexanol and other assayed constituents. COD is a quality indicator, not physical carbon or a species mass. Do not also report its constituents as final releases to water when the treatment provider models them.

- Selected flow: Stripped PVC process wastewater for external treatment
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

###### PVC-contaminated VCM recovery residue (`recovery_residue`)

Measure one actual segregated recovery residue stream and assay its phases/monomer; identify disposal. Different filter media or adsorbents, if used, each need a separate acquired input and spent-waste row.

- Selected flow: PVC-contaminated VCM recovery residue
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_balance`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Vinyl chloride to air (`strip_vcm_air`)

Quantify final recovery-vent and equipment-leak VCM separately, including condensers and buffer vessels. Stream sent into recovery is internal, not an emission.

- Selected flow: Vinyl chloride to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_air`
- Sources: `jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### Nitrogen to air (`purge_nitrogen_air`)

Track actual purge nitrogen leaving the final recovery vent, with its paired physical inlet. Nitrogen emitted at another unit remains separately metered and assigned there, with no mass-balancing double count.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_strip_air`
- Sources: `jrc-polymers-2007`

### Process: Centrifugal solid-liquid separation (`dewater`)

#### Inputs

##### Product flows

###### Stripped aqueous S-PVC slurry (`dewater_slurry`)

Paired receipt of stripped_slurry; no normalisation at the transfer point.

- Selected flow: Stripped aqueous S-PVC slurry
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_balance`
- Sources: `jrc-polymers-2007`

###### Electricity (`dewater_electricity`)

Centrifuge, pumps and solids-handling submeter, including rejected and zero-output runs.

- Selected flow: Electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_util`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### Dewatered S-PVC wet cake (`wet_cake`)

Internal transfer to finish. Weigh whole cake and independently measure water, resin solids and residual monomer; never treat wet mass as gate resin Q.

- Selected flow: Dewatered S-PVC wet cake
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_balance`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### VCM-bearing PVC centrifuge liquor (`centrate_out`)

Transfer to centrate_in under strip_recover. Measure whole liquor with suspended polymer and dissolved monomer; solids are not added again to gate output.

- Selected flow: VCM-bearing PVC centrifuge liquor
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_balance`
- Sources: `jrc-polymers-2007`

###### Off-spec S-PVC centrifuge cake (`dewater_reject`)

Measure segregated rejects and actual recovery/disposal. Internal rework uses transfer and carried-burden ledgers, not a new product acceptance.

- Selected flow: Off-spec S-PVC centrifuge cake
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_balance`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Vinyl chloride to air (`dewater_vcm_air`)

Actual final fugitive or vented VCM from centrifugation and wet-cake transfers; route gas sent to recovery through a matched internal gas ledger rather than counting it again as a release.

- Selected flow: Vinyl chloride to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dewater_air`
- Sources: `jrc-polymers-2007`; `epa-ap42-pvc-1995`

### Process: Indirect drying, screening and bulk resin dispatch (`finish`)

#### Inputs

##### Product flows

###### Dewatered S-PVC wet cake (`finish_cake`)

Paired receipt from wet_cake; retain its complete mass/composition and carried burdens.

- Selected flow: Dewatered S-PVC wet cake
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_balance`
- Sources: `jrc-polymers-2007`

###### Saturated steam (`finish_steam`)

This variant uses indirect steam heating for drying. Meter steam and returned condensate separately and match the upstream steam service boundary; there is no direct combustion in this variant. A gas-fired dryer requires fuel, air and individual combustion-emission cards, not silent substitution.

- Selected flow: Saturated steam
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_util`
- Sources: `jrc-polymers-2007`

###### Electricity (`finish_electricity`)

Meter dryer fans, screening, dust collection, conveying, silo storage and bulk loading separately; include fines recovery and failed drying.

- Selected flow: Electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_util`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Air for resin drying (`drying_air_in`)

Meter physical inlet air where needed for full water/carbon balance, including humidity and actual volume basis. Its inlet moisture is not reaction water. Background air constituents are paired across the physical ledger, not assigned invented impacts.

- Selected flow: Air for resin drying
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_air`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### polyvinylchloride resin (S-PVC) (`final_resin`)

The sole terminal reference row: accepted primary suspension PVC resin at the bulk gate, excluding packaging and external stock merely resold. Native complete name has this basename and empty route/mix components, Product flow and one Mass property; CAS, comment, geography, supply location, detailed grade/form and compliance approval are not established (native compliance Not defined). It is a broad S-PVC identity only. Actual homopolymer grade, powder morphology, viscosity/K-value basis, moisture/volatiles, residual VCM and acceptance records must independently support the declared resin; no E-PVC/B-PVC/PVDC/PTFE or compounded finished material substitution.

- Selected flow: polyvinylchloride resin (S-PVC) `4f19f122-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_accepted`
- Sources: `jrc-polymers-2007`

###### Steam condensate (`finish_condensate`)

Measured utility return from indirect dryer heating, separate from water evaporated out of wet cake. Do not treat the same heat as both steam mass and purchased energy.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_util`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### Off-spec S-PVC dry resin (`finish_reject`)

Weigh actual screened oversize/fines rejects sent to waste; distinguish captured dust returned internally, reworked resin and any separately accepted lower-grade co-product. None enlarges Q by default.

- Selected flow: Off-spec S-PVC dry resin
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_balance`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Water vapour to air (`drying_water_air`)

Report net process water evaporated after deducting measured inlet-air moisture, with exhaust humidity/volume and retained resin moisture independently known. Do not infer water formed chemically from this loss. Retain full gross-air water ledgers for closure.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_air`
- Sources: `jrc-polymers-2007`

###### Vinyl chloride to air (`finish_vcm_air`)

Measure terminal dryer, silo and loading VCM releases, separate from resin residual VCM and stripping recovery; control-device efficiency is not a universal fixed factor.

- Selected flow: Vinyl chloride to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_air`
- Sources: `jrc-polymers-2007`; `epa-ap42-pvc-1995`

###### S-PVC particulate to air (`finish_pvc_dust`)

Final uncaptured polymer dust after control, on actual particle/composition basis; retain captured mass as internal return or waste separately. Historical AP-42 uncontrolled low-rating factors are not a default controlled-plant emission rate.

- Selected flow: S-PVC particulate to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q, one final reporting operation using this card protocol raw numerator
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_air`
- Sources: `jrc-polymers-2007`; `epa-ap42-pvc-1995`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all relevant operations | First separate unit operations and meter their actual loads. Where shared utilities remain, use a documented causal meter/engineering driver for the complete period; disclose driver units and amounts before allocating. Do not use product price as an unexplained default. | `jrc-polymers-2007` |
| allocation_recycle | all relevant operations | Recovered VCM returned internally creates neither a saleable co-product nor virgin-substitution credit. Retain capture/recompression burdens and opening/closing stocks; only an actual separately sold output with receiver/specification evidence can trigger a justified co-product allocation. | `jrc-polymers-2007` |
| allocation_offgrade | all relevant operations | Measure actual lower-grade resin separately from waste. The reference denominator includes only unique newly accepted output of the declared product/route/state. Failed, zero-output, returned and reworked activity and its inherited burdens remain attributable; no duplicate acceptance after rework. | `jrc-polymers-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

collection_method collects only undivided complete actual-period numerators and stock/WIP carried burdens. aggregation_rule denotes the final reporting basis only; it, the card formula and normalise_period describe one calculation, not a second division. Each protocol process_id is its sole owner; meters belonging to another process must not be mixed in.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_poly_material | polymerise | fresh_vcm; recycle_vcm_in; poly_water; ehp_formulation; pva_granules; initiator_carton | primary meters, batch and assay receipts | batch/lot/supplier; whole delivered and charged kg; stock changes; assay and carrier water; PVA grade/solids; dilution/wash water by purpose; recovered-VCM transfer key and impurities; storage/dosing losses; failed batches; WIP mass and burdens | Collect original whole-lot purchase, charge, assay and water-meter records for the full actual period, including failures and stock/WIP carried burdens. Retain constituent subledgers and internal recycle keys; do not normalize or duplicate procurement. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_poly_util | polymerise | poly_nitrogen; poly_electricity; poly_steam; poly_condensate; cooling_makeup | primary meters, batch and assay receipts | unit-operation/submeter; timestamps; kWh; steam kg/pressure/temperature/dryness; condensate kg; gas volume/rate/time basis; nitrogen state; refrigeration/idle/startup/failed loads; allocation driver; stock/WIP burden carryover | Read separate raw meters for each physical unit operation and complete actual operating period, including idle, failed and zero-output work. Preserve actual units/state and shared-load drivers plus opening/closing WIP burden transfers, without dividing by output. | kWh; kg; m3 and recorded state | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_poly_balance | polymerise | unstripped_slurry; poly_cleaning_effluent; poly_scale; cooling_blowdown; initiator_carton_waste | primary meters, batch and assay receipts | paired transfer key/destination; whole wet mass; independent resin solids/water/residual VCM/additive assay; specific CO2/2-ethylhexanol fate when present; stock/WIP opening and closing; rework/failed runs; inherited/exported burdens | Weigh/sample each whole physical transfer or waste independently and pair receipts/dispatches. Preserve raw mass, phases/species and opening/closing WIP/stock plus carried burdens for the actual period, including failed/reworked material. Do not solve an unknown product/water pair from a residual and do not divide here. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_poly_air | polymerise | poly_vcm_air; poly_co2_air; poly_eh_air; cooling_evaporation | primary meters, batch and assay receipts | each terminal outlet and leak source; paired inlet/outlet volume and humidity; actual species concentration/unit; integrated versus rate; duration; pressure/temperature/dry basis; control capture; detection limits; sample dates; failed runs; WIP burdens | Acquire raw calibrated monitoring and leak measurements for each species and final medium, with inlet humidity and exhaust state/volume matching each run. Keep actual integrated amounts or rate and duration, analytical limits and full-period failures/WIP burdens unnormalized; no COD/species substitution. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_strip_balance | strip_recover | slurry_in; wash_in; centrate_in; stripped_slurry; recover_vcm_out; stripped_effluent; recovery_residue | primary meters, batch and assay receipts | paired transfer key/destination; whole wet mass; independent resin solids/water/residual VCM/additive assay; specific CO2/2-ethylhexanol fate when present; stock/WIP opening and closing; rework/failed runs; inherited/exported burdens | Weigh/sample each whole physical transfer or waste independently and pair receipts/dispatches. Preserve raw mass, phases/species and opening/closing WIP/stock plus carried burdens for the actual period, including failed/reworked material. Do not solve an unknown product/water pair from a residual and do not divide here. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_strip_util | strip_recover | strip_steam; strip_electricity | primary meters, batch and assay receipts | unit-operation/submeter; timestamps; kWh; steam kg/pressure/temperature/dryness; condensate kg; gas volume/rate/time basis; nitrogen state; refrigeration/idle/startup/failed loads; allocation driver; stock/WIP burden carryover | Read separate raw meters for each physical unit operation and complete actual operating period, including idle, failed and zero-output work. Preserve actual units/state and shared-load drivers plus opening/closing WIP burden transfers, without dividing by output. | kWh; kg; m3 and recorded state | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_strip_air | strip_recover | strip_vcm_air; purge_nitrogen_air | primary meters, batch and assay receipts | each terminal outlet and leak source; paired inlet/outlet volume and humidity; actual species concentration/unit; integrated versus rate; duration; pressure/temperature/dry basis; control capture; detection limits; sample dates; failed runs; WIP burdens | Acquire raw calibrated monitoring and leak measurements for each species and final medium, with inlet humidity and exhaust state/volume matching each run. Keep actual integrated amounts or rate and duration, analytical limits and full-period failures/WIP burdens unnormalized; no COD/species substitution. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_dewater_balance | dewater | dewater_slurry; wet_cake; centrate_out; dewater_reject | primary meters, batch and assay receipts | paired transfer key/destination; whole wet mass; independent resin solids/water/residual VCM/additive assay; specific CO2/2-ethylhexanol fate when present; stock/WIP opening and closing; rework/failed runs; inherited/exported burdens | Weigh/sample each whole physical transfer or waste independently and pair receipts/dispatches. Preserve raw mass, phases/species and opening/closing WIP/stock plus carried burdens for the actual period, including failed/reworked material. Do not solve an unknown product/water pair from a residual and do not divide here. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_dewater_util | dewater | dewater_electricity | primary meters, batch and assay receipts | unit-operation/submeter; timestamps; kWh; steam kg/pressure/temperature/dryness; condensate kg; gas volume/rate/time basis; nitrogen state; refrigeration/idle/startup/failed loads; allocation driver; stock/WIP burden carryover | Read separate raw meters for each physical unit operation and complete actual operating period, including idle, failed and zero-output work. Preserve actual units/state and shared-load drivers plus opening/closing WIP burden transfers, without dividing by output. | kWh; kg; m3 and recorded state | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_dewater_air | dewater | dewater_vcm_air | primary meters, batch and assay receipts | each terminal outlet and leak source; paired inlet/outlet volume and humidity; actual species concentration/unit; integrated versus rate; duration; pressure/temperature/dry basis; control capture; detection limits; sample dates; failed runs; WIP burdens | Acquire raw calibrated monitoring and leak measurements for each species and final medium, with inlet humidity and exhaust state/volume matching each run. Keep actual integrated amounts or rate and duration, analytical limits and full-period failures/WIP burdens unnormalized; no COD/species substitution. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_finish_balance | finish | finish_cake; finish_reject | primary meters, batch and assay receipts | paired transfer key/destination; whole wet mass; independent resin solids/water/residual VCM/additive assay; specific CO2/2-ethylhexanol fate when present; stock/WIP opening and closing; rework/failed runs; inherited/exported burdens | Weigh/sample each whole physical transfer or waste independently and pair receipts/dispatches. Preserve raw mass, phases/species and opening/closing WIP/stock plus carried burdens for the actual period, including failed/reworked material. Do not solve an unknown product/water pair from a residual and do not divide here. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_finish_util | finish | finish_steam; finish_electricity; finish_condensate | primary meters, batch and assay receipts | unit-operation/submeter; timestamps; kWh; steam kg/pressure/temperature/dryness; condensate kg; gas volume/rate/time basis; nitrogen state; refrigeration/idle/startup/failed loads; allocation driver; stock/WIP burden carryover | Read separate raw meters for each physical unit operation and complete actual operating period, including idle, failed and zero-output work. Preserve actual units/state and shared-load drivers plus opening/closing WIP burden transfers, without dividing by output. | kWh; kg; m3 and recorded state | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_finish_air | finish | drying_air_in; drying_water_air; finish_vcm_air; finish_pvc_dust | primary meters, batch and assay receipts | each terminal outlet and leak source; paired inlet/outlet volume and humidity; actual species concentration/unit; integrated versus rate; duration; pressure/temperature/dry basis; control capture; detection limits; sample dates; failed runs; WIP burdens | Acquire raw calibrated monitoring and leak measurements for each species and final medium, with inlet humidity and exhaust state/volume matching each run. Keep actual integrated amounts or rate and duration, analytical limits and full-period failures/WIP burdens unnormalized; no COD/species substitution. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |
| cp_accepted | finish | final_resin | primary meters, batch and assay receipts | lot/grade/route/state; calibrated gross and tare kg; net supplied resin kg; acceptance date/key; moisture and volatile method; residual VCM assay; opening/closing accepted stock; returns/rework; inherited burdens; Q | Weigh and uniquely reconcile actual newly accepted supplied net resin and the full stock/WIP cohort; retain raw Q and the lot ledger. Keep all returned/reworked acceptances linked to their original identity. No burden is divided here. | kg; m3 with measured state/assay as applicable | each batch, meter and transfer | same complete actual production/acceptance period including failures, zero-output and opening/closing carryover | owned process and explicitly matched cohort; shared drivers disclosed | per 1 kg reference flow | calibration/sample chain, signed raw records and paired stock burdens |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_attribution | all inventory rows | Retain raw full-period totals, all startup/failed/zero-output/rework activity and opening/closing WIP, resin and recovered-monomer stocks with carried burdens. Attribute each unique burden to its output cohort once; subtract only burdens carried to another cohort and add inherited burdens actually released to this cohort. Do not subtract failures or double-count returned acceptance. Q is independently weighed newly accepted supplied net resin of this exact product/grade/route/state, counted once; no purchased resale, slurry water or intermediate cake. | raw_activity; stock_ledger; wip_ledger; accepted_lot_ledger | A; Q | `jrc-polymers-2007` |
| convert_raw | all inventory rows | Convert recorded raw amounts to each row unit before normalization. For a measured rate use its actual duration integral; for an already integrated gas/liquid volume use that volume once with actual pressure/temperature/composition/density and dry/wet basis. kWh is retained for electricity. Steam is actual kg with condition and return boundary; no extra MJ purchase of the same service. No secondary flow-property coefficient is a density measurement. | raw_meters; calibration; state_assay; supplier_basis | converted raw totals | `jrc-polymers-2007` |
| formulation_subledger | ehp_formulation; pva_granules; poly_water | Whole supplied mass is the commercial input. Constituent mass = supplied mass times independently evidenced lot mass fraction; distinguish active peroxide, stabiliser/emulsifier, carrier water and other actual components. Onsite PVA solution = actual separately charged granules plus measured water less measured losses. These constituent/solution balances do not create duplicate purchased exchanges. | supplied_lot_mass; lot_mass_fractions; measured_dilution_water; measured_losses | constituent ledger | `nouryon-ehp-w40s-2022`; `kuraray-spvc-poval-2025` |
| normalise_period | all inventory rows | For each non-reference exchange report q = A / Q once, after raw conversions and cohort attribution; A is that exchange numerator in its declared unit and Q is positive accepted net resin kg. final_resin is 1 kg. Card amount expressions and protocol aggregation columns denote this same final reporting operation, not sequential divisions; collection_method never executes A/Q. If Q is zero retain the absolute inventory pending review. | A; Q; cp_accepted | q per 1 kg reference flow | `jrc-polymers-2007` |
| independent_species_balance | all inventory rows | Independently measure product quantity, residual VCM, water/volatiles and actual species. Check complete physical and elemental ledgers across paired transfers; ideal VCM repeat-unit addition conserves C2H3Cl without water coproduct. The EHP sheet names CO2 and 2-ethylhexanol as decomposition products but provides no actual site yields or fate. Never infer both chemical water and an unknown output from closure, or infer species from COD. Retain measured phase/free-water changes separately. | measured_species; measured_product; phase_water; paired_transfers; stock_ledger | physical and species reconciliation | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_grade | reference product | Independent acceptance and retained samples: actual homopolymer grade, suspension powder morphology, viscosity/K test method, particle/porosity evidence, residual VCM and water/volatile methods; no generic native UUID substitutes these facts. | Certificates and primary tests with detection limits and sample dates |
| quality_period | all inventory rows | One reconciled product/grade/route/state period, unique acceptance and all failed activity. Opening/closing WIP and recovered stocks have both mass and inherited-burden receipts. Unknown carryover blocks the cohort calculation. | Signed production/stock/WIP reconciliation and allocation evidence |
| quality_identity | UUID-bearing rows | S-PVC native has only a broad basename, Product/Mass and classification; detailed grade/form, CAS, comment, geography and route/mix are absent and compliance Not defined. VCM native CAS 75-01-4 specifies factory production mix/VCM production, no geography/purity/provider. Preserve these limits, use exact reference-property/unit versions in evidence and independently verify actual supplier compatibility. | Full native name/medium/properties audit plus actual supplier dossier |
| quality_species | physical inventory | Independent assayed physical species/phase ledgers and measured product mass. Quantified uncertainty and analytical limits; no COD/total-VOC or undetermined reaction-water/output residual fitting. | Calibrations, sample chain and mass/element/phase reconciliation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all relevant operations | Verify full native identity plus actual grade/form/route evidence. CAS similarity cannot convert PVC into PVDC, PTFE or compounds. Native unspecified fields stay unspecified; identity compatibility never proves supplier quantity or LCA background applicability. | `jrc-polymers-2007` |
| validate_denominator | all relevant operations | Require Q > 0 and the same product, route, grade, physical state and accepted cohort in every numerator. Deduplicate acceptance, retain rejected/zero-output runs and period stock/WIP burden transfers. If no positive matched output exists, retain absolute burdens and issue no fabricated normalized dataset. | `jrc-polymers-2007` |
| validate_closure | all relevant operations | Reconcile whole physical mass, C, H, Cl and water across process and utility boundaries using measured feeds, outlets and stocks. Ideal VCM addition polymerisation has no net H2O coproduct. Initiator decomposition, any side reaction, dissolved species, residual VCM, water phase change and any chemical H2O formation/consumption need independent evidence; never fit unknown reaction water and unknown resin output to one residual. COD is not a carbon/species mass balance. | `jrc-polymers-2007`; `nouryon-ehp-w40s-2022` |
| validate_emissions | all relevant operations | Keep captured/recycled monomer, residual monomer in resin, stripped effluent load, final routed air releases and equipment leaks separate. Link every final species to its medium and actual control boundary. Do not treat total VOC, old uncontrolled AP-42 factors or apparent closure as measured species removal. | `jrc-polymers-2007`; `epa-ap42-pvc-1995`; `nouryon-ehp-w40s-2022` |
| validate_limits | all relevant operations | Document calibration, censored analytical limits, missing periods and method uncertainty. A nondetect is not measured zero. Expand every additional actual exchange rather than silently omitting it; unresolved provider/auxiliary UUIDs are explicit dataset matching work, while a genuinely missing reference or reaction/conversion method blocks use. | `jrc-polymers-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual evidence and independent methodological review |
| downstream_use | Input resin to the manufacture of declared compatible PVC goods |
| allowed_use | Same polymer, grade family, powder state, suspension route and declared factory boundary with transparent upstream linkage |
| excluded_use | PVDC, PTFE/other fluoropolymers, E-PVC paste, B-PVC, compounds, recycled resin, finished articles or a verified supplier-specific SKU inferred from generic identity |
| required_metadata | PVC homopolymer identity; aqueous batch suspension route; primary powder state; actual grade and K-value or viscosity method; particle-size/porosity basis; water and volatile content with test method; residual VCM with test method; actual initiator formulation and PVA grade; supplied gate state; site and period; feedstock route and upstream boundary; native identity limitations |
| required_quality_disclosure | Source geography/age, actual foreground period, completeness and stock burdens, censored emissions, whole formulations, native missing fields and all remaining provider/UUID matches; no scientific approval or mapping inferred |
| update_trigger | Different grade/recipe, feedstock or initiator form, reactor route, recovery/control, dryer heat source, treatment boundary, supplier/location, measured denominator or stock attribution change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| jrc-polymers-2007 | official_guidance | European Commission, Reference Document on BAT in the Production of Polymers, August 2007, Chapter 2 §2.3.1 pp.23–24 and Chapter 5 §§5.2.1–5.2.8, pp.94–100, Figure 5.1, and §5.3. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | Chain-growth double-bond addition, initiator-residue fate, suspension route, stripping, solid-liquid separation, drying, VCM/water recovery and emission interfaces. Ideal no-water repeat-unit stoichiometry is an atom-conserving inference, not measured side-reaction water. Historical European industry/plant observations; no universal conversion, recipe, energy range, current legal limit or site emission factor is adopted. Inventory, attribution and normalization are this PCR operational method, not a claim of prescribed BREF LCA allocation. |
| nouryon-ehp-w40s-2022 | literature | Nouryon, Trigonox EHP-W40S Product Data Sheet, 2022-6-30, pp.1–4. https://www.nouryon.com/globalassets/inriver/resources/pds-trigonox-ehp-w40s-polymer-production-glo-en.pdf | Producer primary evidence for one supplied frozen water-emulsion initiator, CAS, suspension use, storage/dilution and named decomposition products. Nominal 40% is formulation identity, not actual lot assay; bulk density is not liquid density. No recipe dosage, site reaction yield, storage electricity or emitted fraction is provided. Suitability requires producer/customer testing; not a complete recipe or safety operating procedure. |
| kuraray-spvc-poval-2025 | literature | Kuraray, KURARAY POVAL for Suspension PVC Technical Data Sheet, 2025/04/15, pp.1–4. https://www.kuraray-poval.com/fileadmin/user_upload/KURARAY_POVAL/technical_information/grades_by_region/grades_for_s_pvc/TDS_KURARAY_POVAL_grades_for_S-PVC_English.pdf | Fine-granule supply, primary/secondary PVA grades and grade-dependent onsite dissolution/dispersion. L-10 is a representative identity, not proof of the future supplier, formula dose, universal hydrolysis grade, plant temperature/energy use or joint EHP recipe. Lot and actual formulation compatibility still required. |
| epa-ap42-pvc-1995 | official_guidance | US EPA, AP-42 §6.6.1 Polyvinyl Chloride, 9/91 reformatted 1/95, pp.1–2. https://www.epa.gov/sites/default/files/2020-10/documents/c06s06-1.pdf | Independent historical source for monomer/particulate releases and recovery-control distinction. It is broad plastics prose and uncontrolled factor rating E with 1969–1970 evidence; neither generic alkyd examples nor old numerical factors are used to specify S-PVC chemistry, controlled emissions or modern legal compliance. |
