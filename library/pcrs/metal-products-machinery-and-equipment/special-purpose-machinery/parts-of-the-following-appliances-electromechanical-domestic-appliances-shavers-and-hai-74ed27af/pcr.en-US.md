---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-the-following-appliances-electromechanical-domestic-appliances-shavers-and-hai-74ed27af
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Residual parts for electrical and electrothermal appliances, including industrial vacuum-cleaner parts

## 1. Scope and Applicability

This PCR constructs factory-gate foreground data packages for the supplied identifiable part, module or assembly principally used with the covered appliances, not for a complete appliance. It covers electromechanical domestic appliances and motor-driven shavers/hairclippers; electric instantaneous/storage water, immersion, space and soil heaters; electrothermal hair-dressing apparatus and hand dryers; smoothing irons and other domestic electrothermal appliances. It explicitly also covers residual parts for industrial vacuum cleaners (UN CPC3.0 explanatory notes, printed page241). It is not limited to vacuum parts, motor parts or one heater subtype.

Require documented principal use, supplied state, compatibility, function and classification review for each concrete part. A manufacturer spare-part listing establishes fit, not automatic legal CPC membership. Review independently classified motors, pumps, bearings, PCBs, cords, generic fasteners, electrical resistors/heaters and general-use components before using this residual category. Sewing-machine goods and parts, non-electric stove parts, boiler parts, complete appliances and end-of-life appliances are excluded. Separately supplied cleaning solutions, bags, filters, brushes and other consumables/accessories require their own review; an installed compatible element physically included in the delivered part BOM remains an actual input. Do not infer that all spare lists are parts classifications.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-the-following-appliances-electromechanical-domestic-appliances-shavers-and-hai-74ed27af |
| classification_refs | CPC 3.0 44831; full explanatory scope; parent4483 excludes44814 |
| covered_products | Residual appliance-specific parts/modules/assemblies for every covered family above, explicitly including industrial vacuum-cleaner parts |
| excluded_products | Complete appliances; independently classified general components; sewing-machine parts; non-electric stove/boiler parts; separately classified consumables; end-of-life equipment |
| representative_product | One configuration of an accepted supplied appliance-specific part, supported by compatible original part/service evidence |
| production_route | Actual purchased module integration or actual metal/polymer/insulation/winding conversion; route-specific assembly, finishing and tests |
| market_state | New accepted component at dispatch gate, with actual specified supplied state and included contents |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared compatible appliance part/module/assembly at the factory gate |
| How much | 1 kg accepted net supplied component of the same configuration |
| How well | Meet the declared drawing, compatibility, material, electrical/thermal/mechanical ratings and part-specific acceptance tests |
| How long or cycle | One production-and-acceptance cycle; no imposed appliance service life or replacement interval |
| reference_flow_link | finished_part |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of the following appliances: electromechanical domestic appliances, shavers and hairclippers, with self-contained electric motor, electric instantaneous or storage water heaters, immersion heaters, space heating apparatus and soil heating apparatus, electro-thermic hair-dressing apparatus and hand dryers, electric smoothing irons, other electro-thermic appliances of a kind used for domestic purposes `2ea8896a-c4b5-45ba-b109-51f607ca0227` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Part number and configuration; intended appliance family and principal use; compatibility evidence; supplied state and included BOM; reviewed classification interface; actual material grades; make/buy state; ratings and acceptance criteria; site/geography/period; measured net component mass excluding packing |

All qualifiers are required in the concrete foreground package. This is mass-based component supply, not equal functionality across dissimilar parts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net delivered component mass by calibrated weighing or traceable weighing record for the same configuration, excluding transport packaging, rejects and consumed test media. Dnet is the sum of these accepted masses. |
| native_quantity | all inventory rows | Actual reference property of each exchange | Native unit | Preserve kg, MJ, kWh or m3 numerator independently. Electricity energy conversion is 1 kWh=3.6 MJ; volume-to-mass uses the stream own measured density at actual T/P. No machine-weight proxy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual raw stock or actual bought finished/partial component arriving at each make/buy interface |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | The reviewed residual parts scope, including industrial vacuum-cleaner parts; complete appliance and general component classifications remain separate |
| recursive_input_rule | Record each bought same-category component once at its actual supplied state with a compatible upstream dataset; do not recreate embedded manufacture or silently omit upstream burdens |
| upstream_dataset_requirement | Each external input needs actual grade/state, unit, geography, technology, period and provider match; UUID identity alone is not provider completeness |
| disclosure | Report supplier/site split, included modules/accessories/fills, local route, transport, utilities, finishing, tests, rejects/rework, treatment, packing and unfilled data gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_make_buy | A bought completed module embeds its upstream once; actual local material conversion is included only for the corresponding make route. Pair internal intermediate outputs/inputs and cancel transfers once. Supplier exclusions cannot erase upstream requirements. | stiebel-dhc-parts; stiebel-heating-systems |
| boundary_tests | Include actual part-level assembly, insulation/pressure/rotation/cutting/thermal tests as applicable, consumed test loads, factory rejects and rework. User operation, maintenance, repair installation and complete-appliance end-of-life are distinct downstream scenarios, never default factory loads. | nilfisk-vhs010-parts; braun-shaver-compatibility |
| boundary_full_scope | Retain every appliance family and industrial-vacuum exception. Per item require actual principal-use and independently classified component review; do not restrict the category to the observed cassette, gasket or DHC heating system. | un-cpc3-parts |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| components | Receipt and make/buy integration | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |
| fabrication | Conditional material conversion and finishing | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |
| utilities | Utility supply and attributable residual services | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |
| test | Assembly, acceptance and factory testing | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |
| dispatch | Packing and factory-gate dispatch | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |
| residues | Treatment handovers and actual emissions | conditional | Actual declared route; components/test/dispatch required, material conversion and utilities only where present | foreground | per 1 kg reference flow |

### Process: Receipt and make/buy integration (`components`)

#### Inputs

##### Product flows

###### Appliance-specific finished housing (`casing`)

Receive only the actual finished housing for the supplied part. Declare metal/polymer, finish and make/buy interface; do not substitute a whole appliance or generic metal for a completed casing.

- Selected flow: Appliance-specific finished housing
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `stiebel-dhc-parts`

###### Vacuum-cleaner impeller (`fan`)

Conditional actual bought impeller for a vacuum or motor-driven part; match geometry, balance and material. It is distinct from a complete fan or vacuum pump.

- Selected flow: Vacuum-cleaner impeller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Silicone rubber gasket (`seal`)

Conditional purchased finished silicone gasket with verified polymer and dimensions. The Nilfisk example demonstrates a gasket interface, not its material or a universal recipe.

- Selected flow: Silicone rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `nilfisk-vhs010-parts`

###### Shaver cutter cassette (`blade`)

Record a purchased compatible electric-shaver cassette only when installed in the delivered assembly; a generic razor blade cannot substitute. If this cassette is the supplied output, record its manufacture, not a fictitious cassette input.

- Selected flow: Shaver cutter cassette
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `braun-shaver-compatibility`

###### Appliance thermostat (`thermostat`)

Record only an actual bought thermostat with ratings and compatibility; identify independent classification before treating the thermostat itself as the PCR output.

- Selected flow: Appliance thermostat
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `stiebel-dhc-parts`

###### Water-heater heating-system module (`heaterblock`)

Record a bought heating-system module only for the actual compatible water-heater part; distinguish bare-wire insulating-block and tubular constructions. A complete heater and a separately classified resistor are different identities.

- Selected flow: Water-heater heating-system module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources: `stiebel-dhc-parts`

###### Appliance control module (`control`)

Record only the actual finished control module. Do not expand its bought PCB, chips, solder and embedded electricity again; local mounting and wiring remain foreground.

- Selected flow: Appliance control module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Appliance-compatible electric motor (`motor`)

Conditional actual bought motor input; declare winding, power, voltage and interface. OEM service evidence alone does not classify an independently sold motor as an appliance part.

- Selected flow: Appliance-compatible electric motor
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Conditional material conversion and finishing (`fabrication`)

#### Inputs

##### Product flows

###### 304 stainless steel sheet (`steel`)

Only actual purchased 304 sheet used in site cutting, forming or blade fabrication; verify alloy assay and gross input mass. Other alloys require their own atomic rows.

- Selected flow: 304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Aluminium casting ingot (`aluminium`)

Conditional site casting feedstock of the actual alloy and supplier state, with independent casting alloy identity; no assumed pure-aluminium composition.

- Selected flow: Aluminium casting ingot
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Polypropylene granulate (`pp`)

Conditional site moulding of actual unfilled PP granulate; fillers, pigments and recycled content require verified identities and measured separate inputs.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### ABS granulate (`abs`)

Conditional actual ABS injection moulding; the selected identity is a China production mix, usable only with matched procurement geography. Other resins or filled/flame-retarded grades are additional atomic inputs.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Copper wire (`copper`)

Actual bare copper wire only for site wiring/winding fabrication. Enamelled magnet wire and copper tube are separate supplied states; a finished motor does not require duplicate embedded copper.

- Selected flow: copper wire `4f197beb-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Nichrome wire (`nichrome`)

Conditional actual NiCr wire feedstock for a reviewed local heater-part route, with measured alloy grade. Do not adopt any upstream exclusion from the identity record as the dataset boundary.

- Selected flow: Nichrome wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Electrical-grade magnesium oxide powder (`magnesia`)

Only if the actual tubular part uses verified electrical-grade MgO; the manufacturer FAQ establishes an unspecified filler, not this chemical. Other insulation requires separate identity and route evidence.

- Selected flow: Electrical-grade magnesium oxide powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Silicone rubber compound (`silicone`)

Conditional local gasket moulding using the actual formulation; a finished gasket input excludes duplicate compound production. Add each separately supplied crosslinker or additive.

- Selected flow: Silicone rubber compound
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Epoxy resin (`epoxy`)

Conditional actual DGEBA resin for local bonding or potting; separately supplied hardener and solvent each require additional atomic inputs. Bought cured modules exclude duplicate potting materials.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Tin-silver-copper solder alloy (`solder`)

Conditional actual SnAgCu solder used on site, with alloy certificate; flux, carrier and recovered dross are separate rows. A generic optical solder description does not establish the alloy.

- Selected flow: Tin-silver-copper solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Lubricating grease (`grease`)

Only the actual grease grade and measured site consumption in forming or supplied moving parts; oils and greases are not interchangeable. Separate shipped fill from consumed factory lubricant.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Isopropanol (`ipa`)

Conditional actual IPA cleaning input; selected China chemical interface requires matched sourcing. Record gross solution and its own IPA assay, recovery, retained residues and waste fates; do not assume pure formulation.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Utility supply and attributable residual services (`utilities`)

#### Inputs

##### Product flows

###### Factory electricity (`electricity`)

Actual metered fabrication, assembly and test electricity. Selected CN user-side below1kV identity is conditional on voltage, geography and provider; other supplies require their own compatible identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Purchased steam heat (`heat`)

Only actual purchased thermal service; preserve energy meter datum and gross/net convention. Supplier boiler fuel and emissions remain upstream; record physical steam/condensate mass separately when crossing the site boundary.

- Selected flow: Purchased steam heat
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Gaseous natural gas (`gas`)

Only actual on-site combustion fuel; declare actual gas assay, T/P, density and calorific value. Do not adopt a single power-project gas composition or convert kg to m3 with an assumed density.

- Selected flow: Gaseous natural gas
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Compressed air (`air`)

Only actual delivered pneumatic/test air at declared reference T/P in m3. For site compression record actual compressor electricity and mass/volume accounting once, not a duplicate purchased upstream service.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources:

###### Gaseous nitrogen (`nitrogen`)

Conditional actual gaseous nitrogen for leak testing or joining. Liquid nitrogen cannot substitute unless actual vaporisation and supply interface are modelled.

- Selected flow: Gaseous nitrogen
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
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

### Process: Assembly, acceptance and factory testing (`test`)

#### Inputs

##### Product flows

###### Tap water (`water`)

Actual factory water for cleaning, hydrostatic or thermal testing as applicable; separate meters and test circuits from user operation. Include supplied water only if physically shipped.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Sources:

###### Deionised water (`diwater`)

Only actual purchased deionised test/cleaning water; if produced on site, record actual feedwater and treatment inputs instead of double-counting bought water production.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tests`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Packing and factory-gate dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard (`board`)

Actual C/E/F corrugated board with fibre content ≥80%, containing recycled material whose actual fraction is documented, used to pack parts; other board grades need a separate compatible identity. Include finished carton conversion when on site, or use a bought carton identity.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`film`)

Only actual supplied PE-LD protective foil that is non-self-adhesive, non-cellular, not reinforced, laminated, supported or combined with other materials. Verify supplier grade and physical form, then measure net packing consumption; other PE grades or composite films require their own atomic rows and matching identity, never this UUID by default.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

###### Wooden pallet (`pallet`)

Only an actual compatible wooden dispatch pallet; record allocation over documented reuse trips and returns without reducing part net-mass denominator by an assumed rate.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inventory`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted supplied appliance part (`finished_part`)

The quantitative output is only the supplied accepted part/module/assembly at its actual configuration, not its host appliance.

- Selected flow: Parts of the following appliances: electromechanical domestic appliances, shavers and hairclippers, with self-contained electric motor, electric instantaneous or storage water heaters, immersion heaters, space heating apparatus and soil heating apparatus, electro-thermic hair-dressing apparatus and hand dryers, electric smoothing irons, other electro-thermic appliances of a kind used for domestic purposes `2ea8896a-c4b5-45ba-b109-51f607ca0227`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-parts`

##### Waste flows

##### Elementary flows

### Process: Treatment handovers and actual emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### 304 stainless steel scrap (`wsteel`)

Actual separated 304 offcuts/chips discharged to treatment or recycling; gross waste mass and contained elements use their own assay. Do not use incoming 316 scrap or count paired internal returns twice.

- Selected flow: 304 stainless steel scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

###### ABS moulding scrap (`wplastic`)

Actual discharged ABS rejects or purge; distinguish internal regrind, additives, metal inserts and mixed plastics. Regrind transfers cancel once.

- Selected flow: ABS moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

###### Metal-hydroxide treatment sludge (`sludge`)

Only actual wet treatment sludge if local finishing/wastewater treatment occurs; measure moisture and each relevant metal separately, not total sludge as elemental mass.

- Selected flow: Metal-hydroxide treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

###### Appliance-parts factory wastewater (`wastewater`)

Actual factory wastewater sent to an external treatment interface, with its own water fraction and species assay. Direct receiving-water emissions are separate elementary exchanges.

- Selected flow: Appliance-parts factory wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

###### Spent isopropanol cleaning solution (`spentipa`)

Actual spent IPA solution at a treatment/recovery handover, with IPA assay and co-contaminants; recovered solvent is not destroyed solvent or emitted IPA.

- Selected flow: Spent isopropanol cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

###### Rejected appliance-part assembly (`reject`)

Only actual final rejected supplied-part configuration removed to waste; separate reusable rework and packaging. Never include complete end-of-life appliance mass in this factory output.

- Selected flow: Rejected appliance-part assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only attributable actual fossil CO2 emitted to ordinary outdoor air; retain carbon origin, stacks/fugitives and controls. No supplier-side or user use emissions in this foreground.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Fossil carbon monoxide to air (`co`)

Conditional actual fossil CO emitted to ordinary outdoor air, with species-specific post-control measurements; carbon closure cannot derive CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen dioxide to outdoor air (`no2`)

Only measured molecular NO2; NOx reported as NO2-equivalent requires distinct identity and explicit reported basis. Nitrite is a different chemical.

- Selected flow: Nitrogen dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Sulfur dioxide to outdoor air (`so2`)

Only measured actual SO2 to an ordinary outdoor-air compartment; no indoor, stratosphere or water-compartment substitution.

- Selected flow: Sulfur dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Particles below 2.5 micrometres to outdoor air (`pm`)

Only actually measured below2.5micrometre particulate fraction to ordinary outdoor air. PM2.5–10 or unspecified-size particulate identities do not establish this fraction.

- Selected flow: Particles below 2.5 micrometres to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Water vapour to air (`vapor`)

Actual net factory evaporation to ordinary outdoor air, verified separately from water in sludge, product retention, stock and returned circuits.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Isopropanol to air (`ipair`)

Actual measured post-control IPA plus separately measured fugitives into ordinary outdoor air. Retained/captured/wastewater/recovered IPA is not air release; unexplained residual remains a gap.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit exchange total divided by same-period accepted net supplied-part mass; preserve route applicability.
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
| allocation_direct | Use direct part/batch metering and subdivision first. Attribute actual test, reject and rework burdens to accepted supplied parts of the same configuration and period; do not normalize by started count or complete-appliance mass. Shared services use only the unassigned residual on a documented physical driver. |  |
| allocation_scrap | Separate internal returns, sold co-products and discharged waste. State the recycling convention and provider interfaces; no automatic avoided-primary-metal credit or arbitrary negative burden. Use documented physical causality, with any economic fallback justified and sensitivity disclosed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted net component mass | weighing | part/configuration; accepted identifiers; calibrated net mass; Naccepted; Dnet; tare and packing; period | Weigh each accepted delivered part/module/assembly on a calibrated scale or use traceable weighing records for that exact configuration, excluding packing, rejected parts and consumed test loads. | kg | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |
| cp_inventory | components; fabrication; dispatch | each atomic bought/material/packing exchange | material_record | row identity; actual grade/state; supplier/provider; gross mass; own assay/moisture; receipts/issues/stocks/returns; route; part configuration; period; Qattr; native unit | Reconcile weighed receipts and issues with opening/closing stocks, actual supplier documents and paired internal transfers; separate bought finished modules from site manufacture and retain route-specific raw quantities. | native | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |
| cp_utilities | utilities | each carrier and residual service | meter_record | meter imports; on-site generation; exports; storage; fabrication/assembly/test/dispatch submeter; voltage/T/P/density/calorific value; heat gross/net datum; independent return mass/enthalpy; period; Qattr | Meter each utility with its own native unit over the common period; reconcile supply with actual end-use meters and only the remaining shared residual; investigate negatives and uncertainties without clipping. | native | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |
| cp_tests | test | actual factory test media and loads | test_record | part configuration; acceptance criteria; duration; instrument calibration; test media/input/output mass; water own density/fraction; recirculation/evaporation/discharge/retention; reject/rework; accepted period; Qattr | Use factory test logs and separate meters; identify each consumed medium as its own atomic exchange, retain actual load and water balance, and exclude downstream appliance-use estimates. | native | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |
| cp_residues | residues | each waste handover | waste_record | specific waste identity; gross wet mass; own moisture/water fraction; own species assay; treatment/provider; internal returns; retention/stocks; configuration; period; Qattr | Use calibrated transfer weighing, manifests and stream-specific laboratory assays; keep gross waste mass, water and contained species distinct, and match treatment interfaces. | kg | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |
| cp_emissions | residues | each measured elementary species | emission_record | species/CAS; fossil origin; actual compartment; post-control concentration; matching gas/liquid flow; same measurement period; T/P/dry-wet/oxygen corrections; fugitive independent measurement; capture/destruction/recovery; Qattr | Measure each species after actual controls with matched flow and time, apply documented state/unit corrections, and independently measure fugitives; no unexplained residual or carbon-only inference becomes an emission. | kg | each batch and common reporting period | same accepted-production period | declared sites and supply interfaces | per 1 kg reference flow | calibration; traceable receipts; assays; stocks; acceptance; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_component | all inventory rows | For one configuration and period, divide the attributable exchange total in its native unit by the sum of accepted net supplied-part masses; retain all raw totals and uncertainty. | Qattr; Dnet; cp_mass | native-unit exchange per kg component |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | For the same supplied-part configuration and period: Naccepted counts accepted delivered parts/modules/assemblies; Dnet sums measured accepted net component masses; Qattr is the attributable exchange total including reject/rework/test burdens in the row native unit. Mean net part mass=Dnet/Naccepted; per-part exchange=Qattr/Naccepted; per-kg exchange=Qattr/Dnet; the equivalent conversion divides per-part exchange by measured mean net part mass. No assumed component or whole-appliance weight. | calibrated net-mass and acceptance records |
| quality_balances | fabrication; residues; test | Each element/species term uses its own gross mass and own assay, moisture and wet/dry basis, with stocks, reactions, retained product, recycling returns and discharge; gross alloy or wet sludge is not contained metal. Each water stream uses its own water fraction and actual temperature density, with reaction, retention, evaporation, discharge and stock; paired circuit returns cancel. | stream-specific assay and mass ledger |
| quality_solvent | ipa; spentipa; ipair | Track each stream own IPA assay across input, product retention, recovered/captured liquid, wastewater, spent media, stocks, destruction and air. Capture is not destruction; non-air fates never become air and unexplained residual stays unresolved. | separate assays, recovery and emissions records |
| quality_heat | heat; utilities | Reconcile common-period imports+generation minus exports and storage change with fabrication, assembly, test, dispatch and unassigned shared services only. Gross heat=independently measured supplied kg times its own MJ/kg minus independently measured return kg times its own MJ/kg on one datum; deduct gross return once, never deduct again from already-net heat. Steam and condensate physical masses remain separate. | matched meter and enthalpy datum |
| quality_emission | all inventory rows | Each emitted species uses measured post-control concentration times its matched gas/liquid flow and same time interval, with actual unit/state corrections and separately measured fugitives. Do not infer CO or NO2 from carbon closure or confuse NO2 molecules with NOx as NO2-equivalent. | species-specific monitoring and corrections |
| quality_completeness | all inventory rows | The route cards are conditional atomic candidates, not a universal recipe. Add each actual unlisted alloy, polymer, chemical, fastener, bearing, cable, test load, freight service, steam/return or species as its own queried and measured row. Absent is not_applicable only with proof; unknown is not zero. Disclose missing original part-specific architecture and provider/UUID gaps rather than borrowing a shaver/vacuum/DHC construction. | actual BOM, process route, compatibility and gap disclosure |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | Reject a whole-appliance output, wrong supplied state or implicit positive classification based on a spare-list label alone. Require full category applicability, actual principal use, component exceptions and compatible part evidence. | un-cpc3-parts; braun-shaver-compatibility; nilfisk-vhs010-parts; stiebel-dhc-parts |
| validate_mass | Require positive measured Dnet and same-period Naccepted/Qattr for one supplied-part configuration; independently reconcile net mass, rejected/reworked parts and test burdens. Packing and consumed loads cannot enter Dnet. Native numerator unit and per-kg denominator must agree in both languages. |  |
| validate_physics | Require element/species/water/solvent fates, post-control concentration-flow-time and fugitive evidence, actual utility residual and gross/net heat reconciliation. Investigate negative or unexplained closure; do not clip, fabricate emission factors, efficiencies, lifetime, yields or per-part weight. |  |
| validate_coverage | Reject invented zeroes, duplicated module manufacture or internal transfer burdens, missing atomic exchanges and unresolved identity treated as a usable matched UUID. Report every performed/skipped check, finding and completeness; pending item-specific evidence must remain visible. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Compatible supplied-part production at declared gate; downstream appliance assembly or replacement scenario using actual part quantity |
| excluded_use | Universal appliance BOM; whole-appliance impacts; default use-stage duty/service life; automatically classified general parts; complete-appliance end-of-life |
| required_metadata | All reference qualifiers, Qattr/Naccepted/Dnet, native units, routes, site/supplier interfaces, tests, treatment, transport, allocation and actual upstream links |
| required_quality_disclosure | Measured/estimated/missing distinction; uncertainty; item-specific classification review; unresolved flows/providers and unshown architecture; checks skipped and completeness |
| update_trigger | Change in part configuration, compatible family, classification, material route, make/buy interface, provider, test protocol, site or measured period |

## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3-parts | official_guidance | Central Product Classification Version3.0 Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 30 June2025; printed pp240–241,4483/44831; full parts scope including industrial vacuum; classification only, no inventory amounts |
| braun-shaver-compatibility | handbook | Shaving system32B black, BraunCare+ part5412/20000309 | https://us.braun.com/en-us/service/products/parts/5412/20000309 | Undated service page, copyright2026; compatible-model list; original cassette fit only, not legal classification, recipe or replacement lifetime |
| nilfisk-vhs010-parts | handbook | VHS010 Instructions for use, UMC401 edition01/2024 | https://www.nilfisk.com/media/5ttbwdqo/user-manual-vhs010-acd.pdf | English printed pp12–13 and industrial-machine declaration; gasket80554900, adjacent filter and bag examples distinguish parts/consumables; no universal material, recipe or legal classification |
| stiebel-dhc-parts | handbook | DHC Classic Spare Parts List | https://www.stiebel-eltron-usa.com/sites/default/files/pdf/parts-dhc-classic.pdf | Effective August1,2021; footer rev.4.2022; list and exploded diagram pp1–2 show model-specific heating systems, thermostat, housings, connections; not proof that every independently classified item is residual part |
| stiebel-heating-systems | handbook | What heating systems are used in instantaneous water heaters? | https://www.stiebel-eltron.com/en/home/service/faq/what-heating-systems-are-used-in-instantaneous-water-heaters.html | Undated FAQ, copyright2026; bare-wire insulating block versus tubular spiral and unspecified filler; architecture counterexample only, not specific MgO or universal recipe |
