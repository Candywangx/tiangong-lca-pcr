---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tarpaulins-sails-for-boats-etc-awnings-sunblinds-tents-and-camping-goods-including-pneu-4d2f13b5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses)

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for finished made-up textile articles within CPC 3.0 code 27160: tarpaulins, boat sails and similar sails, awnings, sunblinds, tents, and textile camping goods including textile-bodied pneumatic mattresses. The declared product subtype and bill of materials determine which conditional routes apply.

The product boundary includes the net finished article and the components supplied as part of that article, such as textile panels, seams, closures, reinforcements, poles, stakes, valves, and permanently attached fittings. Packaging is inventoried but excluded from reference-product mass. The PCR excludes textile fabric sold by length, apparel, parachutes, sleeping bags and other CPC 27180 stuffed articles, stand-alone support hardware, repair services, and non-textile inflatable products classified outside CPC 27160.

The foreground boundary covers operations controlled by the reporting manufacturer from received materials through accepted product at the factory gate. In-house fabric formation, pretreatment, coating, lamination, printing, waterproofing, flame-retardant finishing, and curing are conditional. Cutting, joining, final assembly, inspection, and dispatch preparation are required when performed by the reporting manufacturer. Purchased materials require upstream datasets and are not recreated as foreground production.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tarpaulins-sails-for-boats-etc-awnings-sunblinds-tents-and-camping-goods-including-pneu-4d2f13b5 |
| classification_refs | CPC 3.0: 27160, exact |
| covered_products | Finished textile tarpaulins; sails; awnings; sunblinds; tents; textile camping goods; textile-bodied pneumatic mattresses classified in CPC 27160 |
| excluded_products | Fabric sold by length; apparel; parachutes; sleeping bags and other CPC 27180 stuffed articles; stand-alone hardware; repair services; non-textile inflatable products outside CPC 27160; transport and use-stage services |
| representative_product | Net finished CPC 27160 article at the reporting manufacturer's factory gate |
| production_route | Purchased or in-house formed textile substrate; conditional pretreatment, coating, lamination, printing or functional finishing; cutting; sewing, adhesive bonding or thermal welding; component assembly; inspection; packaging and dispatch preparation |
| market_state | Accepted finished article, dry unless the product specification defines another conditioning state, excluding detachable packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished tarpaulin, sail, awning, sunblind, tent, camping good, or textile-bodied pneumatic mattress conforming to the declared product specification |
| How much | 1 kg net finished product |
| How well | Meets the declared subtype, dimensions or size class, textile composition, coating or lamination system, joining route, functional finish, included-component specification, and quality acceptance criteria |
| How long or cycle | One accepted production lot at the factory gate; service life is declared for downstream use but is not used to change the mass reference |
| reference_flow_link | `final_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; product model or specification; net finished mass; dimensions or size class; textile fibre composition; textile construction; coating or lamination polymer and mass share; functional finishing treatment; joining route; included poles, stakes, valves, closures and fittings; conditioning state; manufacturing geography; production period; factory-gate point |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net accepted finished article. Exclude detachable packaging but include all components supplied as part of the article. |
| `material_mass_basis` | Textile substrates, polymers, thread, adhesives, closures, poles, stakes, product and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain reporting-period gross and net masses and normalize only after reconciliation to accepted product output. State moisture or conditioning basis where it affects mass. |
| `coating_mass_basis` | Applied coating, laminate, adhesive and finishing chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-supplied mass and, when used for interpretation, separately calculate dry solids or polymer mass from supplier or measured solids content without replacing the as-supplied record. |
| `energy_measurement` | Electricity and fuel | Energy | kWh for electricity; MJ for fuel | Preserve metered or invoiced units and conversion factors. Allocate shared meters only by a documented physical driver linked to the applicable process. |
| `water_measurement` | Process water | Mass or volume | kg or m3 | Preserve the measured unit. Convert volume to mass only with a declared density and temperature basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received yarn, textile substrate, coating or finishing chemicals, components, packaging, and utilities at the reporting manufacturer's controlled boundary; any in-house upstream textile operation is additionally declared |
| starting_condition_role | Foreground production starting point for a made-up textile article |
| product_classification_scope | CPC 3.0 code 27160 only, constrained by the declared subtype and product specification |
| recursive_input_rule | A purchased intermediate already classified in CPC 27160 is recorded once as a supplied product input with an upstream dataset; its production is not recursively recreated inside the receiving process |
| upstream_dataset_requirement | Require supplier- or geography-appropriate upstream datasets for purchased yarn, fabric, coating polymer, finishing chemical, adhesive, thread, closures, metal or polymer components, packaging, water, electricity, and fuel |
| disclosure | Declare which fabric formation, pretreatment, coating, lamination, finishing, cutting, joining, assembly, waste treatment, and packaging operations are onsite, outsourced, or absent, and disclose all cut-offs and shared-facility allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground product system | Include all manufacturer-controlled operations from the declared received-material condition through accepted finished product at the factory gate, including internally managed rejects, waste, waste water, and direct air emissions. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | Conditional textile operations | Include in-house fabric production, pretreatment, coating, lamination, printing, finishing, drying or curing when performed; otherwise represent the purchased treated textile with an upstream dataset and declare the exclusion from foreground. | `eu-textiles-bat-2022` |
| `boundary_packaging` | Dispatch preparation | Inventory packaging materials and packaging scrap but exclude detachable packaging from the 1 kg reference-product mass. | `iso-14044-2006` |
| `boundary_no_recursive_double_count` | Purchased CPC 27160 intermediate | Model the supplied intermediate once at the receiving boundary and link its upstream dataset; do not recreate the same upstream production inside the receiving foreground process. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `textile_formation_preparation` | Textile substrate formation and preparation | `conditional` | Include when yarn conversion, weaving, knitting, washing, desizing or another substrate-preparation operation is controlled by the reporting manufacturer. | Foreground intermediate production | Per kg prepared textile transferred to the next controlled operation and ultimately per 1 kg accepted product |
| `coating_lamination_finishing` | Coating, lamination and functional finishing | `conditional` | Include when coating, lamination, printing, waterproofing, flame-retardant finishing, drying or curing is controlled by the reporting manufacturer. | Foreground functional treatment | Per kg finished textile transferred to assembly and ultimately per 1 kg accepted product |
| `cutting_joining_assembly` | Cutting, joining and component assembly | `required` | Always include the manufacturer-controlled conversion of textile panels and components into the declared article. | Foreground article manufacture | Per 1 kg assembled article transferred to inspection |
| `inspection_packaging_dispatch` | Inspection, packaging and factory-gate dispatch preparation | `required` | Always include final acceptance; include packaging when used for factory-gate dispatch. | Foreground final product production | Exactly 1 kg net accepted finished article |

### Process: Textile substrate formation and preparation (`textile_formation_preparation`)

#### Inputs

##### Product flows

###### Polyester filament yarn (`tf_polyester_yarn`)

Polyester filament yarn is recorded only when it is physically converted into the declared textile substrate within the foreground boundary.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the process during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-textiles-bat-2022`

###### Polyamide filament yarn (`tf_polyamide_yarn`)

Polyamide filament yarn is recorded as a separate exchange for polyamide or nylon substrate routes.

- Selected flow: Polyamide filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the process during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-textiles-bat-2022`

###### Cotton yarn (`tf_cotton_yarn`)

Cotton yarn is recorded separately when a cotton or cotton-blend substrate is formed onsite.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the process during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-textiles-bat-2022`

###### Low-voltage electricity (`tf_electricity`)

Electricity used by weaving, preparation, material handling and associated controls is recorded from the applicable meter or invoice.

- Selected flow: Alternating-current electricity, low voltage, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

###### Process water (`tf_process_water`)

Supplied water used for in-house washing, desizing or other wet preparation is recorded separately from water embedded in purchased chemicals.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recorded supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No generic waste input is prescribed. Record a specific imported waste only if it actually crosses this process boundary.

##### Elementary flows

No generic elementary input is prescribed for this process. Resource withdrawals not represented by a supplied product flow must be added as compartment-specific atomic exchanges.

#### Outputs

##### Product flows

###### Prepared textile substrate (`tf_prepared_textile`)

The prepared woven textile transferred to the next controlled operation is recorded as a foreground intermediate and reconciled with yarn inputs and scrap.

- Selected flow: Prepared woven textile substrate
- Flow property / unit: Mass / kg
- Amount rule: measured dry or declared conditioned mass transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Textile production scrap (`tf_textile_scrap`)

Yarn and fabric scrap leaving the preparation process is measured as a distinct waste stream and is not netted from material input.

- Selected flow: Textile production scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to reuse, recycling, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Textile pretreatment wastewater (`tf_pretreatment_wastewater`)

Wastewater leaving onsite washing or pretreatment for internal or external treatment is recorded as one route-specific waste stream.

- Selected flow: Textile pretreatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted with a declared density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

Direct elementary emissions from onsite pretreatment must be added as separate substance- and compartment-specific cards when monitoring or permits identify them.

### Process: Coating, lamination and functional finishing (`coating_lamination_finishing`)

#### Inputs

##### Product flows

###### Prepared textile substrate (`cf_prepared_textile`)

The textile substrate entering coating, lamination or finishing is recorded at its actual conditioning state.

- Selected flow: Prepared woven textile substrate
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to the treatment line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-textiles-bat-2022`

###### Polyvinyl chloride resin (`cf_pvc_resin`)

PVC resin is recorded only for a declared PVC coating or film-lamination route and excludes plasticizer and other additives, which require separate cards if used.

- Selected flow: Polyvinyl chloride resin
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied resin mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-textiles-bat-2022`

###### Polyurethane coating resin (`cf_polyurethane_resin`)

Polyurethane coating resin is recorded only for a declared polyurethane coating or lamination route and is not combined with solvents, catalysts, or cross-linkers.

- Selected flow: Polyurethane coating resin
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied resin mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-textiles-bat-2022`

###### Synthetic rubber latex (`cf_synthetic_rubber_latex`)

Synthetic rubber latex is recorded only for a declared rubberized textile route and must identify the polymer chemistry in the product specification.

- Selected flow: Synthetic rubber latex
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied latex mass issued to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-textiles-bat-2022`

###### Process water (`cf_process_water`)

Water used in coating preparation, washing, rinsing or finishing is recorded from route-specific meters or batch records.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-recorded supplied water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

###### Low-voltage electricity (`cf_electricity`)

Electricity used by coating, lamination, finishing, pumps, ventilation, drying controls and abatement is recorded separately from thermal fuel.

- Selected flow: Alternating-current electricity, low voltage, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

###### Natural gas (`cf_natural_gas`)

Natural gas combusted for direct or indirect drying and curing is recorded only when used by the declared route.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: metered or invoiced fuel converted with the supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No generic waste input is prescribed. Recovered coating material re-entering the process must use its own specific material card and retain provenance.

##### Elementary flows

No generic elementary input is prescribed. Direct resource withdrawals must be added as compartment-specific atomic exchanges where applicable.

#### Outputs

##### Product flows

###### Coated or laminated textile substrate (`cf_finished_textile`)

The treated textile transferred to cutting and assembly is recorded with coating or laminate chemistry, dry add-on, and conditioning state.

- Selected flow: Coated or laminated textile substrate
- Flow property / unit: Mass / kg
- Amount rule: measured finished-textile mass transferred
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

###### Spent textile coating paste (`cf_spent_coating_paste`)

Unused or spent coating paste sent to recovery, treatment or disposal is recorded without combining it with wastewater.

- Selected flow: Spent textile coating paste
- Flow property / unit: Mass / kg
- Amount rule: measured mass removed from the route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Textile coating wastewater (`cf_coating_wastewater`)

Wastewater or separately collected liquid from coating and finishing is recorded at the point it leaves the process for treatment.

- Selected flow: Textile coating wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted with a declared density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Total volatile organic carbon to air (`cf_tvoc_air`)

TVOC emitted from coating, lamination, drying, curing or finishing is recorded when the route uses organic compounds and monitoring identifies the emission.

- Selected flow: Total volatile organic carbon to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission mass or calculated mass from monitored concentration and exhaust flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

###### Formaldehyde to air (`cf_formaldehyde_air`)

Formaldehyde emitted from applicable coating, printing, lamination, finishing or thermal treatment is recorded as a separate substance-specific exchange.

- Selected flow: Formaldehyde to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission mass or calculated mass from monitored concentration and exhaust flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

###### Ammonia to air (`cf_ammonia_air`)

Ammonia emitted from applicable coating, printing, finishing or thermal treatment is recorded independently from TVOC and formaldehyde.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission mass or calculated mass from monitored concentration and exhaust flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished textile output and reconciled to 1 kg accepted product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emission_records`
- Sources: `eu-textiles-bat-2022`

### Process: Cutting, joining and component assembly (`cutting_joining_assembly`)

#### Inputs

##### Product flows

###### Finished textile substrate (`as_finished_textile`)

The actual finished textile entering panel cutting is recorded with its composition, coating or laminate, basis mass, and supplier or internal batch identity.

- Selected flow: Finished textile substrate
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `unstats-cpc-3-0-2025`

###### Polyester sewing thread (`as_sewing_thread`)

Polyester sewing thread is recorded only for sewn seams and is not combined with zippers, webbing or other notions.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass or spool-stock change reconciled to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `unstats-cpc-3-0-2025`

###### Polyurethane adhesive (`as_adhesive`)

Polyurethane adhesive is recorded only for an adhesive-bonding route; other adhesive chemistries require separate cards.

- Selected flow: Polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied adhesive mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-textiles-bat-2022`

###### Polyester coil zipper (`as_zipper`)

A polyester coil zipper supplied as part of the finished article is recorded as its own component exchange.

- Selected flow: Polyester coil zipper
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_records`
- Sources: `unstats-cpc-3-0-2025`

###### Aluminium alloy tent pole (`as_aluminium_pole`)

An aluminium alloy tent pole is recorded only when supplied with the declared product and must not stand for other frames or fittings.

- Selected flow: Aluminium alloy tent pole
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_records`
- Sources: `unstats-cpc-3-0-2025`

###### Steel tent stake (`as_steel_fastener`)

A steel tent stake is recorded separately when it is included with the declared tent or camping product.

- Selected flow: Steel tent stake
- Flow property / unit: Mass / kg
- Amount rule: measured component mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_records`
- Sources: `unstats-cpc-3-0-2025`

###### Low-voltage electricity (`as_electricity`)

Electricity used by cutting, sewing, welding, adhesive curing, ventilation and assembly equipment is metered separately where possible.

- Selected flow: Alternating-current electricity, low voltage, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to cutting, joining and assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No generic waste input is prescribed for cutting and assembly.

##### Elementary flows

No generic elementary input is prescribed. Add each directly withdrawn resource separately if present.

#### Outputs

##### Product flows

###### Assembled CPC 27160 textile article (`as_assembled_product`)

The assembled article transferred to final inspection is recorded before detachable dispatch packaging is added.

- Selected flow: Assembled CPC 27160 textile article
- Flow property / unit: Mass / kg
- Amount rule: measured net assembled mass transferred to inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `unstats-cpc-3-0-2025`

##### Waste flows

###### Textile cutting offcuts (`as_textile_offcuts`)

Textile offcuts are recorded as a separate waste stream by substrate and treatment route in supporting records.

- Selected flow: Textile cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to reuse, recycling, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Cured polyurethane adhesive waste (`as_adhesive_waste`)

Cured polyurethane adhesive waste is recorded only for the polyurethane adhesive route and excludes uncured hazardous residues.

- Selected flow: Cured polyurethane adhesive waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg assembled article output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

Direct joining emissions must be represented by separate substance- and compartment-specific cards when measured or permit-relevant; no combined air-emission card is allowed.

### Process: Inspection, packaging and factory-gate dispatch preparation (`inspection_packaging_dispatch`)

#### Inputs

##### Product flows

###### Assembled CPC 27160 textile article (`pk_assembled_product`)

The assembled article entering final inspection is recorded at net mass before detachable packaging.

- Selected flow: Assembled CPC 27160 textile article
- Flow property / unit: Mass / kg
- Amount rule: measured net mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_mass`
- Sources: `unstats-cpc-3-0-2025`

###### Corrugated board box (`pk_corrugated_box`)

A corrugated board box used for factory-gate dispatch is inventoried separately and excluded from reference-product mass.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

###### Low-density polyethylene packaging film (`pk_polyethylene_film`)

LDPE film used for wrapping or bagging is recorded independently from the corrugated box.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured packaging-film mass issued to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iso-14044-2006`

###### Low-voltage electricity (`pk_electricity`)

Electricity used by inspection, leak or strength testing, folding, packing and dispatch preparation is recorded from the applicable meter.

- Selected flow: Alternating-current electricity, low voltage, consumption mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity attributable to final inspection and packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No generic waste input is prescribed for this process.

##### Elementary flows

No generic elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Accepted finished CPC 27160 article (`final_product_output`)

The quantitative reference is the accepted net finished article at the factory gate, excluding detachable packaging and including all components supplied as part of the article.

- Selected flow: Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg accepted net finished product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unstats-cpc-3-0-2025`

##### Waste flows

###### Rejected CPC 27160 textile article (`pk_rejected_product`)

A finished article rejected during final inspection is recorded separately from cutting scrap and may not be netted from accepted output.

- Selected flow: Rejected CPC 27160 textile article
- Flow property / unit: Mass / kg
- Amount rule: measured net mass rejected and transferred to rework, recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iso-14048-2002`

###### Corrugated board packaging scrap (`pk_packaging_scrap`)

Corrugated board damaged or trimmed during packing is recorded as a separate waste stream.

- Selected flow: Corrugated board packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to reuse, recycling, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `iso-14048-2002`

##### Elementary flows

Direct test or packaging emissions must be added as separate substance- and compartment-specific cards if present.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output or shared operations | First avoid allocation through process subdivision or by using process-specific meters, material issues and production records. | `iso-14044-2006` |
| `allocation_physical` | Unavoidable shared utilities or operations | When subdivision is not practicable, use a documented physical relationship that reflects the driver of resource use or emissions, such as machine time, treated textile mass, exhaust flow, or metered energy. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_economic_fallback` | Saleable secondary outputs without a defensible physical relationship | Use economic allocation only as a disclosed fallback with reporting-period prices, currency, geography, price date and sensitivity analysis. | `iso-14044-2006` |
| `allocation_waste_no_credit` | Textile offcuts, coating waste, wastewater, rejected articles and packaging scrap | Report generated waste gross at the foreground boundary. Do not subtract an avoided-product or recycling credit inside the foreground inventory unless the downstream modelling convention is explicitly declared and applied consistently. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly` | Yarn, textile and polymer material input | Weighbridge, scale, warehouse issue and stock record | material identity; supplier; batch; opening stock; receipts; issues; returns; closing stock; measured mass; conditioning basis | Calibrated scale plus stock reconciliation | kg | Per batch with monthly reconciliation | At least one representative production year or the full campaign for campaign production | All controlled production lines in the dataset | Sum net issues by exact material identity; reconcile opening plus receipts minus returns and closing stock; divide by accepted reference-product mass | Calibration record; stock reconciliation; supplier specification; exception log |
| `cp_chemical_records` | `coating_lamination_finishing`; `cutting_joining_assembly` | Coating resin, latex and adhesive input | Batch recipe and chemical issue record | chemical identity; formulation; batch; as-supplied mass; solids content; returned amount; retained waste | Calibrated batch scale and signed recipe record | kg | Per batch | Same period as product output | Every applicable coating, lamination, finishing or bonding line | Sum as-supplied net use by exact chemical; retain solids calculation separately; normalize by accepted reference-product mass | Scale calibration; safety or technical data sheet; recipe approval; mass reconciliation |
| `cp_component_records` | `cutting_joining_assembly` | Closure, pole and stake input | Bill of materials, issue count and sample mass | component identity; specification; count issued; count returned; sample mass; batch | Count reconciliation with calibrated sample weighing or direct total weighing | kg | Per production lot | Same period as product output | All assembly lines and outsourced controlled assembly included in the dataset | Convert counts only from measured representative component mass; reconcile issues, returns and rejects; normalize by accepted reference-product mass | Approved bill of materials; scale calibration; sampling record; supplier specification |
| `cp_utility_records` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | Electricity, fuel and supplied water | Meter, invoice and production-time record | meter id; opening reading; closing reading; unit; fuel calorific value; process runtime; production mass | Direct submeter preferred; otherwise documented shared-meter allocation | kWh; MJ; kg; m3 | Meter interval or invoice period, reconciled monthly | At least one representative production year or the full campaign | All controlled facilities and relevant shared utilities | Difference readings; subtract documented non-production use; allocate shared quantities by physical driver; normalize by accepted reference-product mass | Meter calibration; invoice; fuel certificate; allocation worksheet; anomaly investigation |
| `cp_output_mass` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | Intermediate and accepted product output | Calibrated scale, production and quality record | batch; product subtype; gross mass; tare; net mass; accepted mass; rejected mass; conditioning state | Calibrated weighing linked to production and quality disposition | kg | Per batch or lot | Same period as all inputs and outputs | Every included production line | Sum accepted net output by subtype; retain rejected and rework quantities separately; use accepted net mass as normalization denominator | Scale calibration; lot genealogy; quality release; mass-balance reconciliation |
| `cp_packaging_records` | `inspection_packaging_dispatch` | Dispatch packaging input | Packaging issue, count and sample-mass record | packaging identity; count; sample mass; issues; returns; damaged units | Direct weighing or count times measured unit mass | kg | Per lot with monthly reconciliation | Same period as product output | All dispatch packing included in the dataset | Sum packaging net use by exact material and normalize by accepted product mass; do not include in reference-product mass | Bill of materials; scale calibration; stock reconciliation |
| `cp_waste_records` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | Specific solid or paste waste output | Container weighing, transfer note and treatment record | waste identity; source process; container tare; gross mass; destination; treatment route; hazardous status | Calibrated weighing at generation or dispatch, reconciled to transfer documentation | kg | Per container or dispatch | Same period as product output | All included processes and controlled waste storage | Sum net waste by exact identity and route; keep rework, recycling, treatment and disposal destinations separate; normalize by accepted product mass | Scale calibration; transfer note; waste code; contractor receipt; mass reconciliation |
| `cp_wastewater_records` | `textile_formation_preparation`; `coating_lamination_finishing` | Route-specific wastewater output | Flow meter and wastewater monitoring record | stream identity; flow; pH; temperature; concentration; sampling time; treatment route | Continuous or batch flow measurement with representative sampling | kg; m3 | Continuous or per discharge with periodic composition monitoring | Same period as product output and sufficient to cover recipe variability | Each relevant discharge point before stream mixing where practicable | Sum route-specific discharge; calculate pollutant mass only from aligned flow and concentration records; normalize by accepted product mass | Meter and laboratory QA; sampling plan; chain of custody; treatment record |
| `cp_air_emission_records` | `coating_lamination_finishing` | Substance-specific direct air emission | Stack or capture-system monitoring record | substance; emission point; concentration; exhaust flow; operating time; method; below-detection treatment | Direct measurement using the applicable documented method; align monitoring with production | kg | Monitoring frequency set by permit and route relevance; operating time recorded continuously | Same period as product output and representative of recipes and operating states | Every relevant controlled and diffuse source included in the dataset | Calculate each substance mass separately from aligned concentration, flow and operating time; normalize by accepted product mass | Laboratory report; instrument calibration; method; emission-point map; operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference amount | normalized amount = reporting-period exchange amount / reporting-period accepted net product mass | Exchange total from its collection protocol; accepted net product mass from `cp_output_mass` | Amount per 1 kg accepted reference product | `iso-14044-2006`; `iso-14048-2002` |
| `calc_material_balance` | Each included process | input mass = transferred product mass + separately recorded waste mass + measured emissions + documented stock change, with any residual investigated rather than forced to zero | Material receipts; intermediate outputs; waste records; emission records; opening and closing work in progress | Process mass-balance reconciliation and residual | `eu-textiles-bat-2022`; `iso-14048-2002` |
| `calc_count_to_mass` | Poles, stakes, zippers and other counted components | component mass = accepted component count × measured representative unit mass, with sampling uncertainty retained | Count record; calibrated unit-mass sample; returns and rejects | Component input mass | `iso-14048-2002` |
| `calc_air_emission_mass` | Each monitored air substance | emitted mass = aligned concentration × dry or wet exhaust flow on the same basis × operating time; apply unit and standard-condition conversions explicitly | Substance concentration; exhaust flow; operating time; measurement-basis metadata | Substance-specific emitted mass | `eu-textiles-bat-2022` |
| `calc_shared_utility` | Shared water, electricity or fuel meter | allocated quantity = shared-meter quantity × documented physical driver fraction; the driver must reflect causal use and fractions must sum to one | Shared reading; process runtime, treated mass or other physical driver | Process-specific utility amount | `iso-14044-2006`; `eu-textiles-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and every inventory row | Retain exact product subtype, material or substance identity, route applicability, flow type, property, unit, and Tiangong UUID review status. Do not substitute a collection label or neighboring classification flow. | Product specification; bill of materials; direct-read evidence retained outside PCR content; `unstats-cpc-3-0-2025` |
| `dq_temporal` | All foreground records | Use one internally consistent period covering representative operation, seasonal or recipe variability, maintenance and abnormal exclusions. Disclose partial-year or campaign coverage. | Meter periods; production calendar; lot genealogy; maintenance and exception log |
| `dq_geography_technology` | Materials, utilities and processes | Match suppliers, electricity geography and voltage, fuel supply, textile construction, coating chemistry, joining technology, abatement and waste routes to the represented facility. | Supplier records; process map; equipment list; utility contracts; treatment records |
| `dq_completeness` | Input/output inventory | Reconcile materials, water, energy, wastewater, waste and relevant direct emissions by process. Investigate missing or residual quantities and disclose approved cut-offs. | Input/output inventory; material balance; water balance; energy records; waste and emission records; `eu-textiles-bat-2022` |
| `dq_measurement` | Measured quantities | Retain meter or scale identity, calibration status, unit, reading interval, sampling method, detection-limit treatment and calculation workbook. | Calibration certificates; laboratory QA; invoices; signed batch sheets; `iso-14048-2002` |
| `dq_no_ai_quantities` | Inventory amounts and ranges | Do not use AI-generated or reasoned-estimate quantities or ranges for this candidate PCR. Missing quantities remain foreground collection requirements. | Collection protocol coverage and reviewer confirmation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require Product flow UUID `176ee965-23e5-444c-8b6c-9457334cae4c`, exact CPC 27160 semantics, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, amount 1, and all required qualifiers. | `unstats-cpc-3-0-2025` |
| `validate_reference_mass` | Accepted product | Require net finished mass to exclude detachable packaging and include all components delivered as part of the article; reconcile gross packed mass separately when recorded. | `iso-14044-2006` |
| `validate_route_coverage` | Process map | Fail when an onsite or controlled fabric, pretreatment, coating, lamination, finishing, curing, joining, assembly or waste-treatment operation is omitted, or when an absent operation lacks a purchased upstream dataset and disclosure. | `eu-textiles-bat-2022` |
| `validate_atomic_flows` | Process inventory | Require every card to contain one concrete exchange. Reject combined utilities, materials, packaging, wastes, emissions, selectors, or unresolved collection labels. |  |
| `validate_uuid_gate` | UUID-bearing rows | Accept a Tiangong UUID only after hybrid search and public state-100 direct read confirm exact semantics, flow type, property and unit support; otherwise require the row-specific unresolved entry in manifest review metadata. |  |
| `validate_foreground_evidence` | Non-reference quantities | Require a collection record for every referenced protocol and forbid AI-generated or reasoned-estimate amounts and ranges. | `iso-14048-2002`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | Each included process | Require reconciled inputs, transferred output, waste, measured emissions and stock change; investigate and disclose residuals without silently assigning them to product. | `eu-textiles-bat-2022`; `iso-14048-2002` |
| `validate_emission_specificity` | Direct emissions and wastewater | Require substance-specific elementary emissions and route-specific wastewater; reject a combined air-emission or wastewater-pollutant selector. | `eu-textiles-bat-2022` |
| `validate_bilingual_alignment` | English and Chinese PCR | Require identical ordered rule ids, process ids, row ids, UUIDs, controlled vocabulary tokens, source ids and numeric values in both language renderings. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a specified CPC 27160 finished article |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-specific process or lifecyclemodel construction when subtype, specification, material system, included components, route, geography, technology, period and factory-gate boundary match |
| excluded_use | Unqualified average for all CPC 27160 products; textile fabric production outside the declared route; non-textile inflatable goods; use-phase durability claims; end-of-life scenarios; direct substitution for a different subtype, coating system or component configuration |
| required_metadata | PCR id and version; CPC 27160; product subtype and specification; reference-flow qualifiers; facility geography; reporting period; production volume; included and outsourced operations; bill of materials; coating and finish chemistry; joining route; allocation; cut-offs; upstream dataset references; UUID review status |
| required_quality_disclosure | Record coverage; calibration and sampling status; mass-, water- and energy-balance residuals; shared-meter allocation; wastewater and air monitoring coverage; missing UUIDs; excluded abnormal operation; data gaps and limitations |
| update_trigger | Change in product subtype or specification, textile construction, coating or finish chemistry, component bill, joining technology, facility geography, energy or water system, abatement, waste route, allocation method, reference identity, or a material shift in production performance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, code 27160, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category scope and classification identity |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508 | Textile process decomposition; input/output inventories; water, energy, chemical, waste, wastewater and air-emission records; coating, lamination and finishing controls |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022. https://www.iso.org/standard/38498.html | Goal and scope, life-cycle inventory, allocation, reporting and review principles |
| `iso-14048-2002` | `standard` | ISO/TS 14048:2002, Environmental management — Life cycle assessment — Data documentation format, confirmed current in 2025. https://www.iso.org/standard/29872.html | Transparent and unambiguous data collection, calculation, quality and documentation records |
