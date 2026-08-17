---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-of-leather-or-of-composition-leather
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Apparel of leather or of composition leather

## 1. Scope and Applicability

This PCR applies to factory-gate foreground production of finished apparel whose shell is made of leather or composition leather and that is within CPC 3.0 class 28241. It covers material receipt, inspection, nesting and cutting, leather-edge and component preparation, sewing and assembly, garment-level cleaning or finishing when performed at the reporting site, pressing, inspection, and primary or distribution packaging.

Purchased finished leather, composition leather, textile linings, interlinings, thread, closures, labels, adhesives, coatings, packaging, electricity, steam, fuels, and other supplies enter as product inputs with upstream datasets. Hide or skin preservation, tanning, retanning, dyeing, leather finishing at a tannery, composition-leather manufacture, textile manufacture, use, repair, retail, and end-of-life are outside the foreground boundary. Fur apparel, leather accessories, footwear, luggage, protective equipment classified outside CPC 28241, and apparel whose defining shell is textile or plastics are excluded.

The foreground data package shall represent one declared product specification, production site or site group, technology route, and reporting period. Product-specific applicability shall be declared for each leather species, composition-leather route, lining, interlining, adhesive, coating, closure, direct-fuel, steam, and refrigerant exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-of-leather-or-of-composition-leather |
| classification_refs | CPC 3.0: 28241, Apparel of leather or of composition leather (exact) |
| covered_products | Finished jackets, coats, trousers, skirts, dresses, vests, and other apparel whose defining shell is leather or composition leather and that falls within CPC 28241 |
| excluded_products | Fur apparel; footwear; gloves, belts, hats, bags, luggage, and other leather accessories outside CPC 28241; textile- or plastics-shell apparel; hides, skins, and finished leather sold as materials |
| representative_product | One conforming finished leather or composition-leather apparel item, expressed by its net factory-gate mass |
| production_route | Receipt of finished shell material and components; inspection and nesting; cutting; edge and component preparation; sewing and assembly; conditional garment finishing and pressing; inspection and packaging |
| market_state | Finished, quality-conforming apparel at the manufacturing-site gate, before distribution and use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished item of apparel whose defining shell is leather or composition leather |
| How much | 1 kg net mass of quality-conforming finished apparel at the manufacturing-site gate |
| How well | Meets the declared style, size, shell-material identity, composition-leather content where applicable, lining, closure, finish, and factory quality specification |
| How long or cycle | One completed manufacturing lot and its declared reporting period; no use-life claim is represented |
| reference_flow_link | The reference amount is the net mass of conforming packaged-or-unpackaged apparel as declared; separately supplied packaging is not part of the 1 kg product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Apparel of leather or of composition leather `971103ee-8ef5-4165-853c-6a3e98a692d8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact CPC 3.0 code 28241; garment type and style identifier; leather species or composition-leather identity; shell material mass fraction; lining and interlining identities; closure and trim identities; surface finish or coating; size or size range; packaging inclusion convention; manufacturing site or site group; production technology; reporting period; net conforming product mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every exchange to 1 kg net mass of released, conforming apparel; exclude separately supplied packaging from the reference mass and disclose the weighing convention. |
| `material_mass` | leather, composition leather, textiles, thread, adhesives, coatings, packaging, wastes, and refrigerant | Mass | kg | Use calibrated receiving, issue, return, waste, and finished-goods mass records; convert area-, length-, or item-based records only with product- or lot-specific measured conversion factors. |
| `electricity_energy` | electricity | Energy | kWh | Use site meter, submeter, or equipment-meter records for the reporting period and reconcile them to the applicable process and shared-service allocation. |
| `steam_energy` | purchased saturated steam | Energy | MJ | Convert metered mass of steam to delivered energy from supplier pressure/enthalpy data and measured condensate return; do not label steam as generic heat. |
| `fuel_mass_or_energy` | natural gas, liquefied petroleum gas, and diesel | Mass or net calorific energy | kg, m3, or MJ | Retain each fuel as a separate exchange, document density and net calorific value conversions, and preserve supplier/site-specific conversion evidence. |
| `air_emission_mass` | carbon dioxide, nitrogen oxides, non-methane volatile organic compounds, and R-410A | Mass | kg | Use direct monitoring where available or calculate from collected activity data and documented composition, carbon, VOC, or refrigerant inventory fields. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_gate_to_gate` | foreground manufacturing | Include all on-site material receipt, cutting, preparation, assembly, conditional garment finishing, pressing, inspection, packaging, directly controlled utilities, wastes, and direct emissions needed to produce the reference product. | `unido-leather-garment-15189`; `unido-leather-garment-08631`; `ec-pef-method-2021` |
| `sb_upstream_leather` | purchased leather and composition leather | Model tanning, retanning, dyeing, tannery finishing, and composition-leather manufacture through upstream product datasets; do not repeat these operations in the garment foreground unless they physically occur at the reporting site. | `jrc-tan-bref-2013`; `ec-pef-method-2021` |
| `sb_same_category_input` | incoming partly finished CPC 28241 apparel | Record the incoming article as a visible product input at its received mass and state, link it to an upstream dataset, and collect only the additional operations performed by the reporting site. | `ec-pef-method-2021` |
| `sb_direct_emissions` | on-site combustion, coating, cleaning, and refrigeration | Include each directly released elementary flow separately when the corresponding activity occurs; do not substitute purchased-energy burdens for direct site emissions. | `ec-pef-method-2021` |
| `sb_packaging` | packaging applied at the reporting site | Include each packaging material applied to outgoing product separately and disclose whether reusable transport packaging is allocated per trip or per use. | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `sb_exclusions` | downstream and capital activities | Exclude distribution, retail, consumer use, care, repair, and end-of-life from the foreground dataset; disclose any study-specific inclusion of capital equipment or infrastructure. | `afw-pefcr-2025`; `ec-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished leather or composition leather, lining, interlining, closures, trim, and process supplies received at the apparel manufacturing site |
| starting_condition_role | Purchased product inputs whose prior production is represented by upstream datasets |
| product_classification_scope | Finished apparel in exact CPC 3.0 code 28241 only |
| recursive_input_rule | If a partly finished CPC 28241 article is received, keep it as an explicit product input with received mass and state, link its prior production to an upstream dataset, and model only the additional site operations |
| upstream_dataset_requirement | Use material-, species-, finish-, technology-, geography-, and period-representative upstream datasets for finished leather, composition leather, textile components, chemicals, utilities, packaging, and waste treatment |
| disclosure | Declare shell material and species, composition-leather fraction, received material state and finish, site operations, subcontracted operations, direct fuels, purchased steam, refrigerant, waste destinations, packaging convention, allocation choices, and excluded stages |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_material_cutting` | Material inspection, nesting, and cutting | required | All production routes | Transform received shell and textile materials into matched cut component sets | 1 kg cut component output |
| `p2_component_preparation` | Leather-edge and component preparation | required | Record zero only when preparation is demonstrably absent for the declared construction | Skive, fold, fuse, cement, and otherwise prepare cut components for assembly | 1 kg prepared component output |
| `p3_garment_assembly` | Sewing, closure attachment, and garment assembly | required | All production routes | Assemble shell, lining, interlining, closures, labels, and trims | 1 kg assembled garment output |
| `p4_finishing_pressing` | Garment cleaning, finishing, and pressing | conditional | Include each cleaning, coating, direct-fuel, steam, or refrigeration activity physically performed or allocated at the site | Produce inspected unpackaged apparel with declared finish | 1 kg finished unpackaged apparel output |
| `p5_packaging_release` | Final inspection, packaging, and release | required | All production routes; packaging rows apply only to packaging actually supplied | Release the reference product and record outgoing packaging | 1 kg conforming reference product |

### Process: Material Inspection, Nesting, and Cutting (`p1_material_cutting`)

#### Inputs

##### Product flows

###### Finished bovine leather sheet (`p1_finished_bovine_leather`)

Finished bovine leather crosses the boundary as a received shell material when used by the declared garment. Record the issued mass net of documented returns.

- Selected flow: Finished bovine leather sheet
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `jrc-tan-bref-2013`; `ec-pef-method-2021`

###### Finished sheep leather sheet (`p1_finished_sheep_leather`)

Finished sheep leather is a separate shell-material exchange when present in the product bill of materials. Record its lot-specific issued mass.

- Selected flow: Finished sheep leather sheet
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `jrc-tan-bref-2013`; `ec-pef-method-2021`

###### Finished goat leather sheet (`p1_finished_goat_leather`)

Finished goat leather is recorded independently when it forms any part of the declared shell. Use receiving and issue records for the identified material lot.

- Selected flow: Finished goat leather sheet
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `jrc-tan-bref-2013`; `ec-pef-method-2021`

###### Composition leather sheet (`p1_composition_leather`)

Composition leather is recorded as its own received shell-material exchange and shall not be merged with natural leather. Retain supplier composition and binder information.

- Selected flow: Composition leather sheet
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `ec-pef-method-2021`

###### Woven polyester lining fabric (`p1_polyester_lining`)

Woven polyester lining fabric crosses the cutting boundary when used as the garment lining. Record the issued mass using measured roll or cut-lot conversion evidence.

- Selected flow: Woven polyester lining fabric
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

###### Polyester fusible interlining fabric (`p1_polyester_interlining`)

Polyester fusible interlining is a separate material exchange where it is cut or fused into the garment. Preserve the supplier material identity and issued mass.

- Selected flow: Polyester fusible interlining fabric
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass for the reporting lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_materials`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

###### Medium-voltage grid electricity for cutting (`p1_cutting_electricity`)

Electricity supplied to nesting, cutting, fusing, extraction, lighting, and allocated shared services crosses this process boundary. Obtain the amount from meters or an auditable equipment allocation.

- Selected flow: Electricity, medium voltage, at grid
- Flow property / unit: Energy / kWh
- Amount rule: metered or auditable allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_energy`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Cut leather shell component set (`p1_cut_shell_components`)

The matched set of cut leather or composition-leather shell pieces is the physical output transferred to preparation. Determine its mass by lot measurement or reconciled material balance.

- Selected flow: Cut leather shell component set
- Flow property / unit: Mass / kg
- Amount rule: measured output mass or calculated material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`

###### Cut polyester lining component set (`p1_cut_lining_components`)

The matched set of cut polyester lining and interlining pieces is transferred as one identified intermediate product. Record its measured or reconciled mass.

- Selected flow: Cut polyester lining component set
- Flow property / unit: Mass / kg
- Amount rule: measured output mass or calculated material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`

##### Waste flows

###### Bovine leather cutting offcuts (`p1_bovine_offcuts`)

Bovine leather pieces rejected by the approved marker are a separate waste output when bovine leather is cut. Weigh or reconcile them by material lot and destination.

- Selected flow: Waste bovine leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

###### Sheep leather cutting offcuts (`p1_sheep_offcuts`)

Sheep leather pieces excluded from the marker are recorded separately from other leather wastes. Preserve the material-lot and treatment destination link.

- Selected flow: Waste sheep leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

###### Goat leather cutting offcuts (`p1_goat_offcuts`)

Goat leather pieces excluded from the marker are a distinct waste exchange when the material is used. Record measured mass and treatment destination.

- Selected flow: Waste goat leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

###### Composition leather cutting offcuts (`p1_composition_offcuts`)

Composition-leather pieces outside the approved marker are kept distinct because their material composition and treatment route differ from natural leather. Record their measured mass.

- Selected flow: Waste composition leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `ec-pef-method-2021`

###### Polyester textile cutting offcuts (`p1_polyester_offcuts`)

Polyester lining and interlining scraps from cutting are one specific polymer-textile waste output. Weigh them separately from leather residues.

- Selected flow: Waste polyester textile cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg cut component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_outputs`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

##### Elementary flows

No direct elementary output is prescribed for this process.

### Process: Leather-edge and Component Preparation (`p2_component_preparation`)

#### Inputs

##### Product flows

###### Cut leather shell component set for preparation (`p2_cut_shell_input`)

The matched cut shell set crosses into skiving, folding, fusing, and cementing operations. Record the transferred mass from the cutting process.

- Selected flow: Cut leather shell component set
- Flow property / unit: Mass / kg
- Amount rule: transferred intermediate-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `unido-leather-garment-08631`

###### Waterborne polyurethane assembly adhesive (`p2_waterborne_pu_adhesive`)

Waterborne polyurethane adhesive crosses the boundary when used for seam turning, folding, or temporary assembly. Record the exact product identity, solids, VOC fraction, and issued mass.

- Selected flow: Waterborne polyurethane assembly adhesive
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass net of returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `unido-leather-garment-08631`; `ec-pef-method-2021`

###### Medium-voltage grid electricity for preparation (`p2_preparation_electricity`)

Electricity powers skiving, fusing, folding, extraction, and preparation equipment. Use submetered consumption or an auditable equipment allocation.

- Selected flow: Electricity, medium voltage, at grid
- Flow property / unit: Energy / kWh
- Amount rule: metered or auditable allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `ec-pef-method-2021`

###### Compressed air for component preparation (`p2_compressed_air`)

Purchased or centrally generated compressed air crosses this process boundary when used by preparation equipment. Record metered volume and declared delivery pressure.

- Selected flow: Compressed air at 7 bar
- Flow property / unit: Volume / m3
- Amount rule: metered volume or auditable equipment calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Prepared leather shell component set (`p2_prepared_shell_output`)

The skived, folded, fused, or cemented shell set is the intermediate output transferred to garment assembly. Determine its mass from transfer records and the preparation mass balance.

- Selected flow: Prepared leather shell component set
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- Sources: `unido-leather-garment-08631`

##### Waste flows

###### Leather skiving shavings (`p2_skiving_waste`)

Thin leather shavings removed during edge reduction are recorded as a distinct leather waste. Weigh them or reconcile them from controlled collection containers.

- Selected flow: Waste leather skiving shavings
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Sources: `unido-leather-garment-08631`; `ec-pef-method-2021`

###### Cured polyurethane adhesive waste (`p2_cured_adhesive_waste`)

Cured waterborne polyurethane adhesive removed from equipment or rejected components is a separate chemical waste output. Record its collected mass and treatment destination.

- Selected flow: Waste cured polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_outputs`
- Sources: `ec-pef-method-2021`

##### Elementary flows

###### Preparation non-methane volatile organic compounds to air (`p2_nmvoc_air`)

NMVOC released from the identified adhesive is recorded as one direct air emission. Calculate it from issued adhesive, supplier VOC fraction, retained product mass, recovered waste, and verified abatement.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: calculation under `cr_nmvoc_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_outputs`
- Sources: `ec-pef-method-2021`

### Process: Sewing, Closure Attachment, and Garment Assembly (`p3_garment_assembly`)

#### Inputs

##### Product flows

###### Prepared leather shell component set for assembly (`p3_prepared_shell_input`)

The prepared shell set crosses into sewing and final garment assembly. Use production-bundle transfer records for its mass.

- Selected flow: Prepared leather shell component set
- Flow property / unit: Mass / kg
- Amount rule: transferred intermediate-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `unido-leather-garment-08631`

###### Cut polyester lining component set for assembly (`p3_cut_lining_input`)

The matched cut lining set enters assembly as one identified intermediate product. Record its transferred mass by production bundle.

- Selected flow: Cut polyester lining component set
- Flow property / unit: Mass / kg
- Amount rule: transferred intermediate-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `unido-leather-garment-08631`

###### Polyester sewing thread (`p3_polyester_thread`)

Polyester sewing thread crosses the process boundary as the declared seam material. Determine consumption from issued and returned spool mass or product-specific length-to-mass measurements.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass net of returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `unido-leather-garment-08631`; `ec-pef-method-2021`

###### Brass garment zipper (`p3_brass_zipper`)

A brass zipper is recorded as a separate closure exchange when present in the declared style. Use purchase or issue mass linked to the product bill of materials.

- Selected flow: Brass garment zipper
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material quantity converted with measured item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Brass snap fastener (`p3_brass_snap`)

A brass snap fastener is kept distinct from the zipper and other trims when used. Record item count and measured item mass for the style.

- Selected flow: Brass snap fastener
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material quantity converted with measured item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Woven polyester garment label (`p3_polyester_label`)

The woven polyester label is one specific trim input and is recorded only when supplied with the garment. Convert label count using measured label mass.

- Selected flow: Woven polyester garment label
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material quantity converted with measured item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Medium-voltage grid electricity for assembly (`p3_assembly_electricity`)

Electricity used by sewing, overlock, attachment, lighting, extraction, and allocated shared services crosses the assembly boundary. Use submetering or auditable equipment allocation.

- Selected flow: Electricity, medium voltage, at grid
- Flow property / unit: Energy / kWh
- Amount rule: metered or auditable allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_inputs`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Assembled leather garment (`p3_assembled_garment`)

The sewn shell, lining, closures, and labels form the garment transferred to finishing and inspection. Record its measured transfer mass or calculate it from the assembly mass balance.

- Selected flow: Assembled leather garment
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated material balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_outputs`
- Sources: `unido-leather-garment-08631`

##### Waste flows

###### Polyester sewing thread waste (`p3_thread_waste`)

Thread ends, damaged thread, and unrecoverable spool remnants are recorded as a specific polyester waste. Determine mass from collected containers or spool reconciliation.

- Selected flow: Waste polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources: `ec-pef-method-2021`

###### Rejected assembled leather garment (`p3_rejected_assembly`)

An assembled garment rejected before finishing is a separate waste output unless it is fully reworked within the reporting period. Record mass, reason, rework status, and destination.

- Selected flow: Waste rejected assembled leather garment
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass sent outside the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled garment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources: `unido-leather-garment-15189`; `ec-pef-method-2021`

##### Elementary flows

No direct elementary output is prescribed for this process.

### Process: Garment Cleaning, Finishing, and Pressing (`p4_finishing_pressing`)

#### Inputs

##### Product flows

###### Assembled leather garment for finishing (`p4_assembled_garment_input`)

The assembled garment crosses into garment-level cleaning, optional coating, pressing, and final inspection. Use measured production-bundle transfer mass.

- Selected flow: Assembled leather garment
- Flow property / unit: Mass / kg
- Amount rule: transferred intermediate-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `unido-leather-garment-08631`

###### Medium-voltage grid electricity for finishing (`p4_finishing_electricity`)

Electricity powers pressing, ventilation, cleaning equipment, inspection lighting, and allocated site cooling. Obtain the amount from meters or an auditable allocation.

- Selected flow: Electricity, medium voltage, at grid
- Flow property / unit: Energy / kWh
- Amount rule: metered or auditable allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

###### Purchased saturated steam for pressing (`p4_purchased_steam`)

Purchased saturated steam is recorded separately when delivered to presses or finishing equipment. Convert metered steam mass using supplier pressure and enthalpy data.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: calculated delivered steam energy from collected meter and supplier fields
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

###### Natural gas for on-site steam generation (`p4_natural_gas`)

Natural gas is a distinct product input when combusted on site for steam or finishing heat. Record supplier-metered volume and site-specific energy conversion data.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: calculated energy from metered volume and documented net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

###### Liquefied petroleum gas for on-site pressing (`p4_lpg`)

Liquefied petroleum gas is recorded separately when combusted by pressing or finishing equipment. Use delivery and tank inventory records for the actual LPG grade.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: foreground delivery-and-inventory consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

###### Diesel for on-site steam generation (`p4_diesel`)

Diesel is a separate product input when used by an on-site boiler serving this process. Determine consumption from calibrated tank, delivery, and opening/closing inventory records.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: foreground delivery-and-inventory consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

###### Waterborne polyurethane garment topcoat (`p4_waterborne_pu_topcoat`)

Waterborne polyurethane topcoat is recorded as a specific chemical input only when applied to the assembled garment. Preserve product identity, solids, VOC fraction, issued mass, and return mass.

- Selected flow: Waterborne polyurethane garment topcoat
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass net of documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_chemicals`
- Sources: `ec-pef-method-2021`

###### Isopropanol cleaning solvent (`p4_isopropanol`)

Isopropanol is a separate chemical input when used for garment or equipment cleaning allocated to the product. Record purchase, issue, return, and recovered-solvent mass.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: foreground issued mass net of returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_chemicals`
- Sources: `ec-pef-method-2021`

###### R-410A refrigerant make-up (`p4_r410a_makeup`)

R-410A crosses the process boundary as make-up refrigerant when leakage from allocated cooling equipment is replenished. Use service and cylinder inventory records.

- Selected flow: Refrigerant R-410A
- Flow property / unit: Mass / kg
- Amount rule: foreground refrigerant make-up mass allocated to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_utilities`
- Sources: `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Finished unpackaged leather apparel (`p4_finished_unpacked_output`)

The cleaned, pressed, inspected garment is transferred to packaging as a finished unpackaged product. Record its measured mass after removal of rejects.

- Selected flow: Finished unpackaged leather apparel
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `unido-leather-garment-08631`; `ec-pef-method-2021`

##### Waste flows

###### Liquid waterborne polyurethane topcoat waste (`p4_topcoat_waste`)

Unused or contaminated waterborne polyurethane topcoat sent to treatment is a separate liquid chemical waste. Record its measured mass and treatment destination.

- Selected flow: Waste liquid waterborne polyurethane topcoat
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-pef-method-2021`

###### Spent isopropanol cleaning solvent (`p4_spent_isopropanol`)

Recovered isopropanol cleaning liquid sent off site is a distinct waste exchange. Determine mass from container and consignment records.

- Selected flow: Waste spent isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-pef-method-2021`

##### Elementary flows

###### Fossil carbon dioxide from site combustion (`p4_co2_fossil_air`)

Fossil carbon dioxide from the declared natural-gas, LPG, or diesel combustion is one direct air emission. Calculate each fuel contribution from collected consumption, carbon content, and oxidation evidence before summing this single substance flow.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculation under `cr_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `ec-pef-method-2021`

###### Nitrogen oxides from site combustion (`p4_nox_air`)

Nitrogen oxides emitted by the site boiler or pressing burner are recorded as one direct air emission. Use stack monitoring, a current permit test, or equipment-specific factor evidence.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured or equipment-specific calculated emission mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `ec-pef-method-2021`

###### Finishing non-methane volatile organic compounds to air (`p4_nmvoc_air`)

NMVOC emitted from the declared topcoat and isopropanol is recorded as a single substance flow. Apply the material balance separately to each chemical and aggregate only the resulting NMVOC mass.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: calculation under `cr_nmvoc_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `ec-pef-method-2021`

###### R-410A refrigerant to air (`p4_r410a_air`)

R-410A lost from allocated cooling equipment is one direct air emission and shall remain separate from refrigerant product input. Calculate leakage by inventory reconciliation.

- Selected flow: Refrigerant R-410A to air
- Flow property / unit: Mass / kg
- Amount rule: calculation under `cr_refrigerant_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished unpackaged apparel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_emissions`
- Sources: `ec-pef-method-2021`

### Process: Final Inspection, Packaging, and Release (`p5_packaging_release`)

#### Inputs

##### Product flows

###### Finished unpackaged leather apparel for packaging (`p5_finished_unpacked_input`)

The conforming unpackaged garment enters final release and packaging. Use the transfer mass from the finishing process.

- Selected flow: Finished unpackaged leather apparel
- Flow property / unit: Mass / kg
- Amount rule: transferred conforming product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `ec-pef-method-2021`

###### Medium-voltage grid electricity for packaging (`p5_packaging_electricity`)

Electricity for final inspection, label printing, sealing, and allocated packaging-area services crosses this process boundary. Use metered or auditable allocated consumption.

- Selected flow: Electricity, medium voltage, at grid
- Flow property / unit: Energy / kWh
- Amount rule: metered or auditable allocated electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `ec-pef-method-2021`

###### Paper garment hangtag (`p5_paper_hangtag`)

The paper hangtag is one packaging or information component supplied with the product. Record item count and product-specific measured tag mass.

- Selected flow: Paper garment hangtag
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by measured item mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Low-density polyethylene garment bag (`p5_ldpe_bag`)

The LDPE garment bag is recorded as a separate packaging component when supplied. Use purchase specifications and measured bag mass.

- Selected flow: Low-density polyethylene garment bag
- Flow property / unit: Mass / kg
- Amount rule: bag count multiplied by measured bag mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Corrugated fibreboard shipping box (`p5_corrugated_box`)

The corrugated fibreboard box is a distinct distribution-packaging input. Allocate its measured mass to the contained garments using the actual packing record.

- Selected flow: Corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: measured box mass allocated by actual packed product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

###### Polypropylene carton-sealing tape (`p5_pp_tape`)

Polypropylene tape used to seal outgoing boxes is kept separate from the box. Determine its mass from roll issue and return records or measured length-to-mass conversion.

- Selected flow: Polypropylene carton-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: issued tape mass net of returns allocated to packed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `afw-pefcr-2025`; `ec-pef-method-2021`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Released apparel of leather or of composition leather (`p5_reference_product`)

The quality-released finished garment is the reference product crossing the manufacturing-site gate. Its net apparel mass is fixed to the PCR reference amount and excludes separately supplied packaging.

- Selected flow: Apparel of leather or of composition leather `971103ee-8ef5-4165-853c-6a3e98a692d8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net conforming apparel mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference_product_mass`
- Sources:

##### Waste flows

###### Waste paper hangtags (`p5_paper_tag_waste`)

Misprinted or damaged paper hangtags discarded at packaging are one paper waste output. Record their measured or item-converted mass and destination.

- Selected flow: Waste paper garment hangtags
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_outputs`
- Sources: `ec-pef-method-2021`

###### Waste LDPE garment bags (`p5_ldpe_bag_waste`)

Damaged or unused LDPE garment bags discarded by the site are recorded separately from other plastics. Weigh or reconcile them by bag count and measured mass.

- Selected flow: Waste low-density polyethylene garment bags
- Flow property / unit: Mass / kg
- Amount rule: measured or item-converted waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_outputs`
- Sources: `ec-pef-method-2021`

###### Waste corrugated fibreboard boxes (`p5_corrugated_box_waste`)

Damaged corrugated fibreboard boxes discarded during packing form a separate paperboard waste exchange. Record their mass and destination.

- Selected flow: Waste corrugated fibreboard shipping boxes
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_outputs`
- Sources: `ec-pef-method-2021`

###### Waste polypropylene sealing tape (`p5_pp_tape_waste`)

Discarded polypropylene tape and roll remnants are recorded as one polymer-specific waste output. Determine mass from collection or roll reconciliation.

- Selected flow: Waste polypropylene carton-sealing tape
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_outputs`
- Sources: `ec-pef-method-2021`

##### Elementary flows

No direct elementary output is prescribed for this process.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | separable styles, batches, lines, and processes | Prefer physical subdivision and direct metering before allocation; preserve style- and lot-specific materials, rejects, and packaging wherever records permit. | `ec-pef-method-2021`; `afw-pefcr-2025` |
| `al_shared_services` | shared electricity, steam, compressed air, cooling, and facility services | Allocate with a documented physical driver that represents causal use, such as metered equipment energy, machine-hours, pressing time, or conditioned area-hours; do not use revenue when a physical driver is available. | `ec-pef-method-2021` |
| `al_mass_fallback` | inseparable multi-product operation | If subdivision and causal physical allocation are not feasible, allocate by net conforming product mass and disclose the affected exchanges, period, products, and sensitivity. | `ec-pef-method-2021` |
| `al_rework_rejects` | rework and rejected garments | Keep internally reworked material and energy in the originating product lot; record rejects leaving the process as waste and assign their production burdens to the originating product before any treatment credit. | `ec-pef-method-2021` |
| `al_recycling` | sold or recycled offcuts and packaging wastes | Report the waste output and treatment destination separately; do not subtract an assumed recycling credit inside the foreground unit process unless the downstream modelling convention is explicitly declared. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_materials` | `p1_material_cutting` | received shell, lining, and interlining inputs | purchase, receiving, issue, return, and bill-of-material records | supplier item; lot; material identity; species; finish; composition; issued mass; returned mass; area or length; measured conversion factor | reconcile warehouse issues and returns to production lots; verify conversions by lot sampling | kg | each lot, monthly reconciliation | representative reporting period, normally at least 12 consecutive months or full campaign | each site and declared site group | sum net issued mass by exact material and lot, then normalize under `cr_normalize` | purchase invoice; supplier specification; calibrated scale record; lot reconciliation |
| `cp_cutting_energy` | `p1_material_cutting` | cutting electricity | meter and equipment-runtime records | meter start/end; kWh; equipment power; runtime; shared-service driver; output mass | read submeters or calculate an auditable equipment allocation | kWh | monthly or finer | same period as product output | each site | sum applicable kWh, subtract documented non-production use, allocate under `al_shared_services`, then normalize | meter calibration; utility invoice; equipment log; allocation worksheet |
| `cp_cutting_outputs` | `p1_material_cutting` | cut components and specific cutting wastes | scale, production bundle, waste container, and consignment records | output mass; material identity; waste mass; container tare; destination; lot | weigh transfers and each segregated waste; reconcile inputs to outputs | kg | each lot with monthly reconciliation | same period as cutting inputs | each site | sum by exact output or waste identity and destination, then normalize | calibrated scale; bundle ticket; waste ticket; mass-balance worksheet |
| `cp_preparation_inputs` | `p2_component_preparation` | component, adhesive, electricity, and compressed-air inputs | transfer, chemical issue, SDS, meter, and runtime records | component mass; adhesive product; issued and returned mass; solids; VOC fraction; kWh; compressed-air m3; pressure | reconcile transfers and chemical issues; meter or auditably allocate utilities | kg, kWh, m3 | each lot and monthly utilities | same period as prepared output | each site | sum each atomic exchange separately, allocate shared utilities, then normalize | transfer ticket; SDS; issue record; meter log; allocation worksheet |
| `cp_preparation_outputs` | `p2_component_preparation` | prepared components, skiving waste, adhesive waste, and NMVOC | transfer, waste, chemical-balance, and abatement records | prepared mass; waste mass; issued chemical; VOC fraction; retained mass; recovered mass; abatement capture | weigh outputs and apply `cr_nmvoc_balance` from collected fields | kg | each lot with monthly reconciliation | same period as preparation inputs | each site | sum each specific output and normalize | calibrated scale; waste ticket; SDS; abatement record; calculation worksheet |
| `cp_assembly_inputs` | `p3_garment_assembly` | prepared parts, thread, closures, labels, and electricity | transfer, bill-of-material, issue/return, item-count, measured-item-mass, and meter records | component mass; item identity; count; item mass; issued mass; returned mass; kWh | reconcile production bundles and bill-of-material issues; meter or allocate electricity | kg, item, kWh | each lot and monthly utilities | same period as assembly output | each site | convert item counts with measured item mass, preserve each exchange, then normalize | bundle ticket; bill of materials; calibrated scale; meter log |
| `cp_assembly_outputs` | `p3_garment_assembly` | assembled garment, thread waste, and rejected assembly | transfer, scale, rejection, rework, and waste records | output mass; reject mass; rework status; thread waste mass; destination | weigh output and segregated wastes; close rework within the reporting period | kg | each lot | same period as assembly inputs | each site | exclude completed internal rework from waste; sum external wastes by destination and normalize | transfer ticket; rejection log; calibrated scale; waste ticket |
| `cp_finishing_inputs` | `p4_finishing_pressing` | assembled garment input | production-bundle transfer record | style; lot; transferred mass; time | weigh or reconcile bundle transfer | kg | each lot | same period as finishing output | each site | sum conforming transferred mass and normalize | bundle ticket; calibrated scale |
| `cp_finishing_utilities` | `p4_finishing_pressing` | electricity, steam, natural gas, LPG, diesel, and R-410A inputs | meter, invoice, tank, cylinder, service, pressure, enthalpy, density, and calorific records | kWh; steam mass; pressure; condensate; gas volume; LPG mass; diesel mass; net calorific value; refrigerant charge and make-up | read meters and inventories; preserve each utility as a distinct exchange | kWh, MJ, kg, m3 | monthly and each service event | same period as finishing output | each site | calculate applicable conversions, allocate under `al_shared_services`, then normalize | calibration record; invoice; tank log; boiler log; refrigerant service record |
| `cp_finishing_chemicals` | `p4_finishing_pressing` | topcoat and isopropanol inputs | purchase, issue/return, SDS, product specification, and recovery records | chemical identity; issued mass; returned mass; solids; VOC fraction; recovered mass | reconcile exact chemical products to production lots | kg | each lot with monthly reconciliation | same period as finishing output | each site | net issues by chemical identity, then normalize | SDS; supplier specification; issue record; recovery record |
| `cp_finishing_outputs` | `p4_finishing_pressing` | finished product and chemical wastes | scale, transfer, waste-container, and consignment records | conforming mass; waste identity; waste mass; tare; destination | weigh finished output and each segregated waste | kg | each lot with monthly reconciliation | same period as finishing inputs | each site | sum each output and waste destination separately, then normalize | calibrated scale; transfer ticket; waste consignment |
| `cp_finishing_emissions` | `p4_finishing_pressing` | CO2, NOx, NMVOC, and R-410A emissions | fuel composition, stack test, SDS, chemical balance, refrigerant inventory, and abatement records | fuel use; carbon fraction; oxidation fraction; NOx result; chemical mass; VOC fraction; recovered VOC; refrigerant opening, additions, removals, closing | use direct monitoring where available; otherwise apply the named calculation rule to collected fields | kg | monthly, each stack test, and each refrigerant service event | same period as finishing output | each emitting source at each site | calculate each substance separately, aggregate only identical elementary flows, then normalize | laboratory/permit report; supplier certificate; SDS; refrigerant service log; signed calculation worksheet |
| `cp_packaging_inputs` | `p5_packaging_release` | finished product, electricity, hangtag, bag, box, and tape inputs | transfer, packing list, bill-of-material, issue/return, item-mass, and meter records | product mass; packaging identity; item count; item mass; issued and returned mass; kWh; packed mass per box | reconcile packaging issues to actual packing records and meter or allocate electricity | kg, item, kWh | each packing lot with monthly reconciliation | same period as released product | each site | keep each packaging component separate, allocate boxes by actual contained product mass, then normalize | packing list; purchase specification; calibrated scale; meter log |
| `cp_packaging_outputs` | `p5_packaging_release` | packaging wastes | waste, rejected-item, and consignment records | exact material; item count; measured item mass; waste mass; destination | weigh or item-convert each segregated packaging waste | kg | each packing lot with monthly reconciliation | same period as packaging inputs | each site | sum each material and destination separately, then normalize | calibrated scale; reject log; waste ticket |
| `cp_reference_product_mass` | `p5_packaging_release` | reference product | final inspection, production release, and calibrated scale records | style; lot; CPC; conforming count; net apparel mass; packaging mass; release status | weigh released apparel separately from supplied packaging and reconcile to production release | kg | each lot | same period as all foreground records | each site and declared site group | sum net mass of conforming released apparel only; normalize to exactly 1 kg | calibrated scale certificate; release record; inspection record; mass reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | every non-reference inventory exchange | normalized amount = reporting-period exchange amount / reporting-period net mass of conforming released apparel; retain the original unit and conversion evidence | exchange amount; net conforming product mass | exchange per 1 kg reference product | `ec-pef-method-2021` |
| `cr_material_balance` | each foreground process | input mass = product output mass + each waste output mass + measured mass loss or accumulation; investigate unresolved imbalance and do not force it into an unspecified waste flow | measured material inputs, outputs, wastes, inventory change | process mass-balance reconciliation | `ec-pef-method-2021` |
| `cr_item_to_mass` | closures, labels, and packaging recorded by count | mass = item count × product- or lot-specific measured item mass | item count; measured item mass | kg of the one identified component | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `cr_nmvoc_balance` | one identified adhesive, topcoat, or solvent | emitted NMVOC = issued volatile mass − returned volatile mass − volatile mass in collected waste − verified captured or destroyed volatile mass; calculate per chemical before aggregating identical NMVOC | issued and returned chemical mass; supplier VOC fraction; waste recovery; abatement | kg NMVOC to air | `ec-pef-method-2021` |
| `cr_fossil_co2` | each on-site fossil fuel | fossil CO2 = fuel amount × documented carbon content × documented oxidation fraction × 44/12; calculate by fuel before summing identical fossil CO2 | fuel amount; carbon content; oxidation fraction | kg fossil CO2 to air | `ec-pef-method-2021` |
| `cr_refrigerant_loss` | R-410A cooling system | R-410A loss = opening inventory + additions − removals − closing inventory, adjusted for documented stock transfer; allocate only equipment serving the declared site processes | cylinder and equipment inventories; service additions and removals; allocation driver | kg R-410A to air | `ec-pef-method-2021` |
| `cr_steam_energy` | purchased saturated steam | delivered energy = metered steam mass × (steam enthalpy at supplier condition − returned condensate enthalpy); retain the supplier thermodynamic basis | steam mass; pressure or temperature; condensate return and condition | MJ delivered steam | `ec-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and shell inputs | Exact CPC 28241, style, garment type, leather species or composition-leather identity, shell fraction, finish, lining, closures, and packaging convention shall be traceable to the bill of materials and release record. | Approved bill of materials; supplier specifications; production release record; `un-cpc3-2023` |
| `dq_primary_data` | foreground manufacturing | Use company- or supplier-specific primary records for all foreground manufacturing processes and document substitutions, estimates, and allocation drivers. | Meter, issue, transfer, waste, and production records; `afw-pefcr-2025`; `ec-pef-method-2021` |
| `dq_temporal` | all foreground records | Use one coherent reporting period, normally at least 12 consecutive months or the full production campaign, and disclose shutdowns, startup, atypical lots, and coverage gaps. | Period ledger; production calendar; gap log |
| `dq_mass_balance` | materials and wastes | Reconcile leather, composition leather, textiles, chemicals, intermediate products, final product, and each specific waste; investigate rather than bury unexplained imbalance. | Signed mass-balance worksheets; inventory records; waste tickets |
| `dq_meter_quality` | electricity, steam, fuels, compressed air, and scales | Record meter identity, calibration or verification status, reading frequency, coverage, and any allocation from a shared meter. | Calibration certificate; meter map; utility invoices; allocation worksheet |
| `dq_upstream_match` | purchased finished leather and composition leather | Select upstream data matching the material type, animal species where applicable, finish, chemistry or binder, geography, technology, and time; disclose every material mismatch. | Supplier declaration; dataset metadata; mismatch log; `jrc-tan-bref-2013` |
| `dq_completeness` | process inventory | Check every process-map row and every atomic exchange for applicability; a zero shall be supported by a bill of materials, meter boundary, service record, or explicit absence statement. | Applicability matrix; source records; completeness review; `ec-pef-method-2021` |
| `dq_traceability` | calculated values | Retain raw fields, formula version, unit conversions, intermediate results, reviewer, and source record identifiers for each calculated value. | Signed calculation workbook or reproducible calculation export |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_identity` | reference flow | The reference product UUID shall be `971103ee-8ef5-4165-853c-6a3e98a692d8`, exact CPC shall be 28241, flow type shall be Product, flow property shall be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit group shall be Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit shall be kg. | `un-cpc3-2023` |
| `vr_reference_amount` | reference product | The released product output shall equal exactly 1 kg net conforming apparel mass after normalization, with separately supplied packaging excluded and reconciled. | `ec-pef-method-2021` |
| `vr_scope` | product applicability | The dataset shall document that the defining shell is leather or composition leather and that the product belongs to exact CPC 28241; excluded apparel or accessories shall fail conformance. | `un-cpc3-2023` |
| `vr_process_coverage` | foreground process map | Every required process shall have a declared applicable route and records; conditional finishing, fuel, steam, chemical, refrigerant, and packaging rows shall be either populated or supported by explicit non-applicability evidence. | `unido-leather-garment-15189`; `unido-leather-garment-08631`; `ec-pef-method-2021` |
| `vr_atomic_flows` | inventory rows | Each row shall contain one specific product, waste, or elementary exchange; electricity, steam, each fuel, R-410A, each chemical, each packaging component, each waste, and each emission shall remain separate. | `ec-pef-method-2021` |
| `vr_uuid_policy` | Tiangong flow identities | The reference flow UUID is mandatory; any non-reference UUID shall remain empty unless both hybrid search and state-code-100 direct read confirm the exact flow, property, and unit identity. |  |
| `vr_mass_balance` | process inventories | Each process mass balance shall reconcile within the site's documented measurement uncertainty; unexplained imbalance shall be a finding rather than an unnamed exchange. | `ec-pef-method-2021` |
| `vr_allocation` | shared operations and wastes | Allocation shall follow the declared hierarchy, use auditable physical drivers, and disclose all fallback mass allocations and waste-credit conventions. | `ec-pef-method-2021` |
| `vr_source_traceability` | collected and calculated amounts | Every foreground or calculated amount shall link to its collection protocol and retained raw evidence; no unsupported reasoned-estimate range is permitted by this candidate PCR. | `afw-pefcr-2025`; `ec-pef-method-2021` |
| `vr_translation_alignment` | bilingual PCR | English and Chinese process ids, row ids, flow names, UUIDs, controlled values, rule ids, source ids, and order shall match exactly. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Gate-to-gate leather or composition-leather apparel manufacturing for exact CPC 28241 when product, site, route, period, material, and packaging qualifiers match; may be linked with representative upstream and downstream datasets in a wider life-cycle model |
| excluded_use | Tanning or finished-leather production; fur apparel; footwear; leather accessories; textile- or plastics-shell apparel; product comparisons that ignore differing specifications, durability, or use scenarios |
| required_metadata | canonical PCR id; exact CPC; reference-flow UUID; garment type and style; shell material and species or composition-leather identity; material fractions; lining, closure, trim, adhesive, and finish identities; site geography; technology route; reporting period; packaging convention; allocation method; upstream dataset identities |
| required_quality_disclosure | primary-data coverage; meter and scale quality; temporal and site representativeness; mass-balance results; conditional-flow applicability; direct-emission method; upstream mismatches; allocation drivers; waste destinations; unresolved non-reference UUIDs |
| update_trigger | material or construction change; new finish, adhesive, fuel, refrigerant, packaging, or waste route; process relocation; supplier or upstream-dataset change; allocation change; material production-volume or efficiency shift; reporting period older than the study's representativeness requirement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2023` | official_guidance | United Nations Statistics Division, Classification of Individual Consumption According to Purpose and Central Product Classification, CPC Version 3.0 structure, exact class 28241, 2023, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf (retrieved 2026-08-13) | Exact external classification scope and validation of CPC 28241 identity |
| `unido-leather-garment-15189` | extension_guidance | UNIDO, Pakistan: Leather Garment Design and Production, Technical Report 15189.en, https://downloads.unido.org/ot/48/09/4809768/15001-20000_15189.pdf (retrieved 2026-08-13) | Direct leather-garment process decomposition, including cutting, fusing, manufacturing, lining cutting, finishing, and pressing |
| `unido-leather-garment-08631` | extension_guidance | UNIDO, Leather Research and Training Institute, Turkey: Design and Manufacture of Leather and Fur Garments, Technical Report 08631.en, https://downloads.unido.org/ot/46/90/4690567/00001-10000_08631.pdf (retrieved 2026-08-13) | Direct leather-garment operations including cementing, folding, stitching, lining assembly, cleaning, and pressing |
| `ec-pef-method-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13) | Product-specific bill of materials, company-specific manufacturing data, inventory completeness, allocation, calculation, data quality, and transparency rules |
| `afw-pefcr-2025` | standard | Technical Secretariat for Apparel and Footwear, Product Environmental Footprint Category Rules: Apparel and Footwear, version 3.1, 29 April 2025, https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | Apparel product specification, manufacturing-stage primary-data expectations, packaging, and downstream-use context |
| `jrc-tan-bref-2013` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Tanning of Hides and Skins, EUR 26130, 2013, DOI 10.2788/13548, https://publications.jrc.ec.europa.eu/repository/handle/JRC83005 (retrieved 2026-08-13) | Boundary between purchased finished leather and upstream tanning; upstream material, water, energy, emission, and waste dataset matching |
