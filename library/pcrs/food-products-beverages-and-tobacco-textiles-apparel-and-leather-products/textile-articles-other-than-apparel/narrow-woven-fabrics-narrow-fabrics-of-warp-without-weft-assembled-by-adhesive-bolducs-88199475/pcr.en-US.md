---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.narrow-woven-fabrics-narrow-fabrics-of-warp-without-weft-assembled-by-adhesive-bolducs-88199475
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Narrow woven fabrics, bolducs, textile labels and badges, braids, ornamental trimmings, tassels, pompons and similar articles

## 1. Scope and Applicability

This PCR applies to the CPC 27911 product family: narrow woven fabrics; narrow warp fabrics assembled without weft by adhesive (bolducs); non-embroidered textile labels, badges and similar articles; braids in the piece; non-embroidered ornamental trimmings in the piece other than knitted or crocheted articles; and tassels, pompons and similar textile articles. The declared product may be greige, dyed, printed, coated with a finish, heat-set, cut, wound or otherwise made saleable when its actual construction and state are disclosed.

The foreground boundary begins with specified textile yarns or filaments and any directly used adhesive received at the manufacturing site. It includes applicable yarn arrangement, narrow weaving, braiding, adhesive assembly, trimming formation, wet processing, thermal finishing, cutting, winding, inspection and on-site wastewater treatment through a conforming saleable product at the plant gate.

It excludes embroidery; knitted or crocheted narrow fabrics and trimmings; broad woven fabrics; lace and tulle; completed apparel; fibre and yarn production except as linked upstream datasets; distribution beyond the plant gate; use; and end-of-life. A concrete data package shall identify one physical product and route rather than report an undifferentiated average across unlike articles.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.narrow-woven-fabrics-narrow-fabrics-of-warp-without-weft-assembled-by-adhesive-bolducs-88199475 |
| classification_refs | CPC 3.0: 27911 |
| covered_products | Narrow woven fabrics; adhesive-assembled warp-only narrow fabrics (bolducs); non-embroidered textile labels and badges; braids in the piece; non-embroidered, non-knitted and non-crocheted ornamental trimmings in the piece; tassels, pompons and similar textile articles. |
| excluded_products | Embroidered articles; knitted or crocheted narrow fabrics or trimmings; broad woven fabrics; tulle; lace; yarns sold as such; completed apparel and non-textile articles. |
| representative_product | Production mix, at plant, of one declared conforming CPC 27911 narrow textile article with specified fibre composition, construction, dimensions, finish and presentation. |
| production_route | Receipt of specified yarns or filaments; applicable narrow weaving, braiding, trimming formation or adhesive warp assembly; conditional wet or thermal finishing; cutting, winding and inspection; conditional on-site wastewater treatment. |
| market_state | Saleable dry narrow textile article at the manufacturing gate in the declared greige or finished state and declared roll, piece or unit presentation. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A saleable narrow woven fabric, bolduc, non-embroidered textile label or badge, braid, ornamental trimming, tassel, pompon or similar article meeting the declared product specification. |
| How much | 1 kg of conforming saleable product on the declared dry or conditioned mass basis at the manufacturing gate. |
| How well | Meets the declared fibre composition, construction route, width or dimensions, mass per unit length or area, colour, finish, tensile or appearance requirements and acceptance grade. |
| How long or cycle | One completed production lot or reporting-period production mix delivered at the plant gate; no use-stage lifetime is assigned. |
| reference_flow_link | The reference flow is the mass of conforming saleable CPC 27911 product required to provide the functional unit. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Narrow woven fabrics, narrow fabrics of warp without weft assembled by adhesive (bolducs), labels, badges and similar articles of textile materials, not embroidered, braids in the piece, ornamental trimmings in the piece, without embroidery, other than knitted or crocheted, tassels, pompons and similar articles `706a70f1-432b-41bc-b000-ddf409e94f3f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; fibre type and mass fraction for every constituent; narrow weaving, braiding, adhesive assembly or other declared construction; greige or finished state; nominal width or item dimensions; mass per unit length or area; colour and coloration route; applied finish; adhesive identity and solids content when used; dry or conditioned mass basis and reference moisture; roll, piece or unit presentation; manufacturing geography; reporting period; included and outsourced operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and textile material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether mass is dry or conditioned, record the conditioning method or moisture content, and convert textile inputs and outputs to the same basis before normalization. |
| `composition_balance` | reference product composition | Mass fraction | kg/kg | Determine constituent fibre and adhesive fractions from a bill of materials, specification or test for the represented lot; the fractions shall sum to 1 within the declared rounding tolerance. |
| `length_area_mass_conversion` | length-, area- or item-based records | Mass, length, area and item count | kg, m, m2, item | Convert to mass using measurements for the same represented product and lot, including width, length, mass per unit length or area, and item count as applicable; retain the raw records and conversion factors. |
| `net_water_accounting` | wet processing and wastewater treatment | Volume | m3 | Record supplied water and internally reused water separately. Report net water withdrawal without subtracting discharged wastewater, and reconcile wastewater by destination. |
| `energy_carrier_separation` | electricity, natural gas and purchased steam | Energy, mass or volume | kWh, MJ, kg or m3 | Keep purchased electricity, natural gas and purchased steam as separate exchanges. Preserve measured carrier units and document each conversion factor. |
| `normalization_to_reference` | all inventory exchanges | exchange-specific property | exchange-specific unit per kg | Normalize reporting-period quantities to 1 kg of conforming saleable reference product after accounting for stock change, rework, rejects and intermediate transfers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified textile yarns or filaments and, where applicable, water-based acrylic adhesive received at the narrow-textile manufacturing site, with supplier, composition, yarn or filament specification, moisture basis and upstream dataset references declared. |
| starting_condition_role | Gate-to-gate foreground starting point; fibre, polymer and yarn production are linked upstream datasets. |
| product_classification_scope | Products within CPC 3.0 code 27911 and the inclusions and exclusions stated in this PCR. |
| recursive_input_rule | If a CPC 27911 product is received for further finishing or conversion, record it once as a separate input with its state, amount and upstream dataset; do not recreate its earlier production inside the same foreground process. |
| upstream_dataset_requirement | Link composition-, technology- and geography-representative datasets for each yarn or filament, adhesive, process chemical, water supply, electricity, natural gas, steam and off-site treatment service crossing the boundary. |
| disclosure | Declare product subtype, route, starting and saleable states, on-site and outsourced operations, shared utilities, internal recycling, wastewater route, direct emissions, allocation decisions and every data gap or cut-off. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground production | Include every on-site operation that transforms received yarns, filaments or an incoming narrow textile into the declared saleable product, together with material, chemical, water, energy, waste, wastewater and direct-emission exchanges. | eu-textiles-bat-2022 |
| `boundary_rule_2` | route selection | Include narrow weaving, braiding, adhesive assembly, wet processing, thermal finishing and wastewater treatment only when performed for the declared product, and disclose each excluded or outsourced operation with its linked upstream dataset. | eu-textiles-bat-2022 |
| `boundary_rule_3` | first foreground inventory | Build a process-level inventory of consumed textile materials, chemicals, water and energy and generated wastewater, waste and direct emissions; disclose an unavailable identified exchange as a data gap rather than silently cutting it off. | eu-textiles-bat-2022; eu-pef-2021 |
| `boundary_rule_4` | upstream and downstream stages | Keep fibre and yarn production, off-site treatment, distribution, use and end-of-life outside the plant-gate foreground system unless the study explicitly extends the boundary; extended results shall remain separable. | eu-pef-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_assembly` | Narrow forming and assembly | required | Include the actual narrow weaving, braiding, trimming formation or warp-only adhesive assembly route. | Transform specified yarns or filaments into an unfinished narrow textile article. | kg unfinished narrow textile |
| `wet_thermal_finishing` | Wet and thermal finishing | conditional | Include when washing, bleaching, dyeing, printing, chemical finishing, drying or heat-setting is performed on site. | Produce the declared coloration, cleanliness, handle, dimension or functional finish. | kg finished narrow textile |
| `conversion_inspection` | Cutting, winding, assembly and inspection | required | Include the applicable final conversion and acceptance operations. | Deliver conforming saleable product and separate rejects or off-cuts. | kg conforming saleable product |
| `wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater from included wet processing is treated on site. | Treat aqueous waste before discharge or off-site transfer. | m3 wastewater treated |

### Process: Narrow forming and assembly (`forming_assembly`)

#### Inputs

##### Product flows

###### Cotton yarn (`cotton_yarn_input`)

Cotton yarn crosses the foreground boundary when it is physically issued to the declared product route. Record only the mass attributable to the represented lot.

- Selected flow: Cotton yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass adjusted for returned yarn and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Polyester filament yarn (`polyester_filament_yarn_input`)

Polyester filament yarn crosses the boundary when the declared product bill of materials specifies it. Record it separately from every other fibre input.

- Selected flow: Polyester filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass adjusted for returned yarn and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Polyamide filament yarn (`polyamide_filament_yarn_input`)

Polyamide filament yarn is recorded when it is consumed in the represented product. Its mass shall not be merged with polyester or elastane.

- Selected flow: Polyamide filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass adjusted for returned yarn and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Viscose filament yarn (`viscose_filament_yarn_input`)

Viscose filament yarn is recorded as one separate material exchange when used in the represented construction.

- Selected flow: Viscose filament yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass adjusted for returned yarn and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Elastane yarn (`elastane_yarn_input`)

Elastane yarn is recorded when elasticity is provided by this constituent. Record its issued mass independently of structural yarns.

- Selected flow: Elastane yarn
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass adjusted for returned yarn and stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Water-based acrylic adhesive (`acrylic_adhesive_input`)

Water-based acrylic adhesive crosses the boundary only for a route that assembles warp ends by adhesive or applies that exact adhesive formulation. Record supplied product mass and retained solids separately in the raw record.

- Selected flow: Water-based acrylic adhesive
- Flow property / unit: Mass / kg
- Amount rule: measured adhesive issue mass minus returned unused adhesive
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

###### Forming electricity (`forming_electricity_input`)

Purchased electricity operates looms, braiders, adhesive-assembly equipment, drives, compressed-air systems and attributable room conditioning.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished narrow textile (`unfinished_narrow_textile_output`)

The unfinished narrow textile is the measured output transferred to finishing or final conversion. Its subtype and construction shall match the represented route.

- Selected flow: Unfinished narrow woven polyester tape
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass of unfinished narrow textile
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`

##### Waste flows

###### Forming textile waste (`forming_textile_waste_output`)

Off-spec polyester tape, broken ends and edge trim that leave the process as waste are weighed by destination. Rework returned to forming remains an internal transfer.

- Selected flow: Waste polyester textile tape
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass sent to the declared recovery or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Forming dust to air (`forming_dust_output`)

Particulate matter released from the forming area is recorded only when a direct air emission crosses the site boundary after any capture system.

- Selected flow: Particulate matter, unspecified, to air
- Flow property / unit: Mass / kg
- Amount rule: measured outlet mass or a documented site emission calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unfinished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_material_energy`
- Sources: `eu-textiles-bat-2022`

### Process: Wet and thermal finishing (`wet_thermal_finishing`)

#### Inputs

##### Product flows

###### Unfinished narrow textile entering finishing (`finishing_textile_input`)

The measured unfinished narrow textile enters only when on-site wet or thermal finishing is part of the represented route.

- Selected flow: Unfinished narrow woven polyester tape
- Flow property / unit: Mass / kg
- Amount rule: measured lot input mass on the common textile mass basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`

###### Process water (`finishing_water_input`)

Water supplied to washing, bleaching, dyeing, rinsing, chemical finishing and equipment cleaning is metered separately from internal reuse.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: measured supplied water for included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Sodium hydroxide is recorded as one chemical exchange when consumed in the declared cleaning, scouring or pH-control recipe.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured supplied product mass attributable to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide (`hydrogen_peroxide_input`)

Hydrogen peroxide is recorded independently when the represented route uses it for bleaching or another declared treatment.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured supplied product mass attributable to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Sodium chloride (`sodium_chloride_input`)

Sodium chloride is one separately recorded process chemical when it is added to the declared dyeing recipe.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured supplied salt mass attributable to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Reactive Blue 19 dye (`reactive_blue_19_input`)

Reactive Blue 19 is recorded only when this exact dye is consumed for the represented colour recipe; it is not a placeholder for other colorants.

- Selected flow: Reactive Blue 19
- Flow property / unit: Mass / kg
- Amount rule: measured supplied dye product mass attributable to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Acetic acid (`acetic_acid_input`)

Acetic acid is separately recorded when used for pH adjustment, neutralisation or the declared finishing recipe.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured supplied acid mass attributable to the represented lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Finishing electricity (`finishing_electricity_input`)

Purchased electricity operates finishing machines, pumps, dosing, ventilation, drying drives and controls.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Natural gas (`natural_gas_input`)

Natural gas is recorded separately when combusted on site for direct or indirect heating of the included finishing route.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered gas consumption with documented net-calorific-value conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

###### Purchased steam (`purchased_steam_input`)

Purchased steam crossing the site boundary is recorded independently of on-site natural gas and electricity.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or metered mass converted with recorded pressure, temperature and enthalpy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished narrow textile (`finished_narrow_textile_output`)

The finished narrow textile is weighed after the declared wet and thermal operations and before final conversion and inspection.

- Selected flow: Finished dyed narrow woven polyester tape
- Flow property / unit: Mass / kg
- Amount rule: measured conforming transfer mass from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`

##### Waste flows

###### Textile finishing wastewater (`finishing_wastewater_output`)

Wastewater leaving the finishing process is recorded by measured volume and destination before treatment, reuse or off-site transfer.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume leaving included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_output`)

Fossil carbon dioxide is recorded when natural gas is combusted in an included on-site finishing heat source and the emission crosses the site boundary.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or documented site calculation from metered natural gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished narrow textile output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_material_energy_water`
- Sources: `eu-textiles-bat-2022`

### Process: Cutting, winding, assembly and inspection (`conversion_inspection`)

#### Inputs

##### Product flows

###### Unfinished narrow textile for direct conversion (`conversion_unfinished_input`)

An unfinished narrow woven polyester tape enters final conversion only when the saleable product is greige and no wet or thermal finishing step is represented.

- Selected flow: Unfinished narrow woven polyester tape
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into final conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_inspection`

###### Finished narrow textile for conversion (`conversion_finished_input`)

A finished dyed narrow woven polyester tape enters final conversion only when the represented route includes finishing.

- Selected flow: Finished dyed narrow woven polyester tape
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into final conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_inspection`

###### Conversion electricity (`conversion_electricity_input`)

Purchased electricity operates cutting, winding, assembly, inspection, testing and attributable material handling equipment.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated electricity consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_inspection`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming CPC 27911 product (`reference_product_output`)

The accepted dry or conditioned saleable output is the quantitative reference and shall carry all required product qualifiers.

- Selected flow: Narrow woven fabrics, narrow fabrics of warp without weft assembled by adhesive (bolducs), labels, badges and similar articles of textile materials, not embroidered, braids in the piece, ornamental trimmings in the piece, without embroidery, other than knitted or crocheted, tassels, pompons and similar articles `706a70f1-432b-41bc-b000-ddf409e94f3f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted output mass normalized to the 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_inspection`

##### Waste flows

###### Conversion textile off-cuts (`conversion_textile_waste_output`)

Polyester tape off-cuts and rejected finished pieces leaving final conversion as waste are weighed by recovery or disposal destination.

- Selected flow: Waste polyester textile tape
- Flow property / unit: Mass / kg
- Amount rule: measured rejected and off-cut mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conversion_inspection`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Textile finishing wastewater entering treatment (`treatment_wastewater_input`)

Wastewater from the included finishing route enters the on-site treatment system as one measured transfer.

- Selected flow: Textile finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured wastewater volume entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-textiles-bat-2022`

###### Wastewater-treatment electricity (`treatment_electricity_input`)

Purchased electricity operates pumps, aeration, dosing and sludge-handling equipment attributable to the treated textile wastewater.

- Selected flow: Electricity, supplied
- Flow property / unit: Energy / kWh
- Amount rule: metered or physically allocated treatment electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Sludge leaving on-site treatment is weighed on a declared wet or dry-solids basis and assigned to its actual destination.

- Selected flow: Textile wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured sludge mass with moisture or dry-solids content recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Treated water discharged (`treated_water_output`)

Treated water crossing the site boundary is measured at the discharge point and kept separate from water internally reused.

- Selected flow: Water, treated, to surface water
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume at the site boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-textiles-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | multi-product equipment and shared utilities | First meter or subdivide by process and product route. When subdivision is not feasible, use a documented physical driver that reflects causality, such as machine time, textile throughput, bath volume or measured energy demand. | eu-pef-2021 |
| `allocation_rule_2` | recovered textile material and wastewater sludge | Record the measured output and actual destination. Do not assign an avoided-product credit inside the plant-gate foreground inventory unless the chosen downstream method explicitly requires and documents it. | eu-pef-2021 |
| `allocation_rule_3` | unavoidable residual multi-functionality | Apply economic allocation only after subdivision and causal physical allocation are shown impracticable; disclose prices, reference period, sensitivity and the fraction assigned to the reference product. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_material_energy` | `forming_assembly` | yarns, adhesive, electricity, unfinished output, waste and dust | issue records, BOM, stock ledger, meters, production log, waste tickets and emission records | product code; lot; constituent identity; supplier; opening stock; issues; returns; closing stock; meter readings; output mass; waste mass and destination; dust measurement or calculation | collect by lot and reconcile material and energy records to the forming line | kg, kWh | each lot with monthly reconciliation | representative continuous 12-month period or documented campaign | all equipment and shared services attributable to forming | sum accepted records, subtract returns and stock increase, allocate shared meters with a documented physical driver, then divide by unfinished output | calibrated scales and meters; BOM approval; stock reconciliation; waste tickets; emission method and control-device status |
| `cp_finishing_material_energy_water` | `wet_thermal_finishing` | incoming textile, each listed chemical, water, energy, finished output, wastewater and direct emissions | lot sheet, chemical issue, water and energy meters, production log, discharge meter and emission record | incoming and outgoing textile mass; supplied chemical identity and concentration; chemical issue mass; supplied and reused water; electricity; natural gas; steam; wastewater volume; direct-emission result | collect by recipe and lot, with process-level annual reconciliation | kg, m3, kWh, MJ | each lot with monthly and annual reconciliation | representative continuous 12-month period or documented campaign | all included wet and thermal finishing equipment | sum measured inputs and outputs by recipe, preserve each chemical and energy carrier, and divide by finished output | calibrated meters; recipe approval; supplier specification; laboratory record; discharge record; process-change log |
| `cp_conversion_inspection` | `conversion_inspection` | textile input, electricity, accepted product and off-cuts | transfer ticket, meter, inspection log, scale and waste ticket | incoming state and mass; electricity; accepted product subtype and mass; reject mass; off-cut mass; rework; destination | collect each production lot through final acceptance | kg, kWh | each lot | representative continuous 12-month period or documented campaign | all final conversion and inspection operations | reconcile incoming textile with accepted output, rework, stock change and waste, then normalize to accepted output | scale calibration; acceptance specification; inspection record; waste ticket; rework log |
| `cp_wastewater_treatment` | `wastewater_treatment` | wastewater input, electricity, treated discharge and sludge | inlet and outlet meters, electricity meter, laboratory report and sludge ticket | inlet volume; outlet volume; reuse volume; electricity; discharge point; sludge mass; moisture or dry solids; destination; monitored parameters | monitor at treatment inlet, final outlet and sludge transfer point | m3, kWh, kg | continuous or per batch with monthly and annual reconciliation | same period as represented finishing production | complete on-site wastewater treatment system attributable to included operations | reconcile inlet, reuse, discharge and retained water; allocate shared treatment by measured pollutant load or volume with justification | meter calibration; sampling plan; laboratory accreditation; permit report; sludge transfer documentation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | reporting-period normalization | normalized exchange = attributable measured exchange / conforming saleable product mass on the common mass basis | attributable exchange; accepted product mass; moisture or conditioning conversion | exchange per 1 kg reference product | eu-pef-2021 |
| `calc_rule_2` | textile material balance | yarns + adhesive solids + incoming intermediate + opening stock = accepted product + waste + emissions + closing stock + documented moisture change, within declared measurement uncertainty | material issues and returns; stock; product; waste; adhesive solids; moisture | reconciled textile and adhesive mass balance | eu-textiles-bat-2022 |
| `calc_rule_3` | length, area or item conversion | mass = measured length × measured usable width × measured mass per unit area, or item count × measured mean item mass, using values for the represented lot | length; width; area density; count; sampled item mass | kg on reference mass basis | eu-pef-2021 |
| `calc_rule_4` | shared utility allocation | attributable utility = metered shared utility × documented causal driver for the product route / sum of the same driver for all served routes | shared meter; machine time, throughput, bath volume or measured demand | allocated utility amount | eu-pef-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_requirement_1` | product identity | Retain the specification, bill of materials and route record that establish CPC 27911 scope, subtype, constituents, construction, dimensions, colour, finish and saleable state. | approved product specification; BOM; lot traveller; acceptance report |
| `dq_requirement_2` | temporal and technological representativeness | Use a continuous 12-month period where available; otherwise document the campaign, seasonality, downtime, technology, capacity utilisation and reason the shorter period represents the declared product. | production calendar; equipment list; change log; coverage calculation |
| `dq_requirement_3` | completeness | Reconcile process-level textile material, chemical, water, energy, wastewater, waste and direct-emission records and list every identified missing exchange as a data gap. | balance sheets; meter register; chemical ledger; waste and discharge records; data-gap register |
| `dq_requirement_4` | measurement and conversion | Retain instrument identity, calibration status, raw unit, conversion factor, sampling method and uncertainty or known limitation for each measured or converted field. | calibration certificate; raw export; laboratory method; conversion worksheet |
| `dq_requirement_5` | source and upstream data | Match upstream datasets to constituent identity, supplier or geography, production technology and time period; disclose every proxy and its expected effect. | supplier declaration; dataset metadata; proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference flow | Reject a package unless the reference product uses UUID `706a70f1-432b-41bc-b000-ddf409e94f3f`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, unit kg, and all required qualifiers are present. | un-cpc-3-2025 |
| `validation_rule_2` | route consistency | Reject a package when process rows contradict the declared route: a performed operation is absent, an unperformed conditional operation carries non-zero exchanges, or an outsourced operation lacks a linked upstream dataset. | eu-textiles-bat-2022 |
| `validation_rule_3` | atomic exchange identity | Reject a process inventory that combines multiple yarns, chemicals, energy carriers, wastes or emissions in one exchange; each represented exchange shall name one physical or chemical flow and use one row. | eu-textiles-bat-2022 |
| `validation_rule_4` | mass and stock reconciliation | Require reconciliation of incoming textile and adhesive solids with accepted product, waste, emissions, stock change and moisture change; investigate and disclose any residual beyond declared measurement uncertainty. | eu-textiles-bat-2022 |
| `validation_rule_5` | wet-process inventory | When wet processing is included, require process-level records for supplied and reused water, each consumed chemical, electricity, each thermal-energy carrier, wastewater by destination, waste and direct emissions. | eu-textiles-bat-2022 |
| `validation_rule_6` | allocation and data quality | Reject undocumented allocation, silent cut-offs, unit conversions without factors, or proxy upstream datasets without representativeness disclosure. | eu-pef-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared CPC 27911 narrow textile product or a documented production mix of products with equivalent construction and process route. |
| downstream_use | May support a `secondary_dataset` or `background_dataset` for apparel, packaging, furnishings, industrial textiles or other systems after review of product and route representativeness. |
| allowed_use | Plant-gate product comparisons or downstream models using the same subtype, composition, construction, finish, geography, time period and included operations. |
| excluded_use | Unqualified use as an average for all CPC 27911 articles; substitution for embroidered, knitted, crocheted, lace, tulle, broad-fabric or apparel datasets; use-stage or end-of-life claims not modelled by the dataset. |
| required_metadata | PCR id and version; CPC reference; product subtype; constituent mass fractions; construction; dimensions or width; mass per length or area; colour and finish; mass basis; product presentation; geography; reporting period; technology; included and outsourced operations; allocation; upstream dataset list. |
| required_quality_disclosure | Raw-data coverage; meter and scale coverage; calibration; material and water balances; chemical completeness; wastewater and waste destinations; direct-emission methods; allocation drivers; proxies; cut-offs; uncertainty and unresolved identity references. |
| update_trigger | Change in product identity, constituent composition, construction, adhesive, coloration or finish; material technology or supplier; energy or water system; wastewater route; allocation method; site geography; or a material process or inventory change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `standard` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13). | Official CPC 27911 product scope and exclusions. |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, 2022, https://eur-lex.europa.eu/eli/dec_impl/2022/2508 (retrieved 2026-08-13). | Process decomposition; process-level material, chemical, water, energy, wastewater, waste and emission monitoring; wet-processing and treatment boundaries. |
| `eu-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint Method, 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-13). | Functional unit and reference flow, system boundary, allocation hierarchy, normalization, cut-off disclosure, data quality and representativeness. |
