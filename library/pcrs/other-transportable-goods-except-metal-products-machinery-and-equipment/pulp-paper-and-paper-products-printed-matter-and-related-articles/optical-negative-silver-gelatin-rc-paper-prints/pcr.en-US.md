---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.optical-negative-silver-gelatin-rc-paper-prints
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Optical-negative black-and-white silver-gelatin RC paper prints

## 1. Scope and Applicability

This physical manufacturing method selects purchased complete MULTIGRADE RC DELUXE black-and-white silver-halide gelatin sheets on a polyethylene resin-coated paper base. A conventional developed black-and-white optical negative is placed in a tungsten or tungsten-halogen enlarger, with verified compatible contrast filtration and measured image geometry. Expose, manually tray-develop in actual MULTIGRADE paper-developer working solution, stop in ILFOSTOP, fix in non-hardening RAPID FIXER, wash with fresh running tap water, remove surplus water and air-dry at ambient conditions. Inspect and deliver accepted unmounted sheets with the declared uncoated-paper wrapping. Sources `ilford-rc-2020`, `ilford-paper-developer`, `ilford-rapid-fixer` establish this selected method; CCI establishes silver-gelatin/RC structure and the silver-removal mechanism. No claim is made that a particular architectural-document business uses it.

The selected operational variant collects spent baths, print-wash water and equipment-rinse water for compatible external treatment; it has no assumed on-site silver recovery, neutralisation, sewer disposal or direct environmental liquid release. This is an explicit modelling variant, not a claim about supplier factories. A real site with another required treatment/transfer stage must link that complete actual stage before dataset completion; applicability must be reassessed where it changes the selected route. Do not delete actual treatment or emit total silver into an invented medium.

Exclude original artistic/design creation, carbon/CB-CF copying, digital laser/inkjet image formation, fibre-base paper, colour/chromogenic/reversal/activation processing, automatic processing, hardener, toner, final wetting-agent rinse, retouching, mounting, laminating, thermal drying and glazing. This untreated display/preservation variant does not claim archival permanency, display protection, readability-service equivalence or creative-value equivalence. A real required toning or protection treatment needs an expanded complete method rather than omission. Actual batch instructions, geometry, density/clarity and acceptance criteria determine control settings; none of the manufacturer's illustrative dilution, time, capacity, mass or lifetime values is an inventory default.

Image subject does not create a new process identity. The reference configuration here is an actual photographic copy of a hand-drawn plan or manuscript compatible with CPC32550. General photographs can reuse identical physical process rules, with their own correctly verified output identity/reference configuration and applicability decision; do not rename this documentary-reference UUID or create a thematic manufacturing PCR. 32191 dry unprinted CB cutting and ordinary sheetfed offset use different material and image-forming routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.optical-negative-silver-gelatin-rc-paper-prints |
| classification_refs | CPC 3.0 32550; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Accepted unmounted monochrome silver-image RC paper copies of specified hand-drawn plans or manuscripts produced by this optical-negative/manual-tray variant. |
| excluded_products | Original creation/services; carbon copying; digital outputs; FB/colour/toned/mounted/laminated/thermally dried products; other processing routes. |
| representative_product | One declared design/negative and purchased RC paper grade; physical print accepted at actual moisture and declared geometry/density/clarity. |
| production_route | Existing processed optical negative interface; enlarger exposure; MULTIGRADE/ILFOSTOP/non-hardening RAPID FIXER trays; fresh running-water wash; ambient air-dry; inspect and paper-wrap; external liquid treatment links. |
| market_state | Net accepted complete dry RC physical copies at imaging-unit gate; tool and packaging separately recorded. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a specified existing original image/text as a physically accepted monochrome silver-image RC reproduction; creative/design work is a separate function. |
| How much | 1 kg net accepted complete RC-copy mass, accompanied by actual sheet dimensions, copy count and image scale. |
| How well | Declared geometric accuracy, polarity, crop/completeness, density/contrast or measured clarity and acceptance moisture; actual quality tests, no universal service equivalence by kg. |
| How long or cycle | One production campaign to gate acceptance; no prescribed display or archival lifetime. |
| reference_flow_link | `finished_print` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Plans and drawings for architectural, engineering, industrial, commercial, topographical or similar purposes, being originals drawn by hand, hand-written texts, photographic reproductions and carbon copies of the foregoing `17677e21-5cbf-42ed-b467-8282c9429c18` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | original/negative identifier, support and ownership; actual upstream preparation process and tool-use allocation; conventional B&W negative and optical projection/geometry/polarity; actual RC paper grade/PE/gelatin/silver-halide composition and full-sheet quantity; tungsten/halogen enlarger and filter; each concentrate supplier/batch/formulation and mixing records; tray sequence/pH/temperature/control evidence; running-water source/quality and measured use; no optional toner/wetting/mounting; air-dry/ventilation; accepted net mass/moisture, size/count, scale, image quality; retained silver, bath/wash/sediment silver speciation; all actual residues, packaging and receiver/provider boundaries; utility basis; site/period, uncertainty and allocation. |

Declare every required qualifier in real data-package metadata, notes or reference-flow comments; absence leaves that package reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted complete RC copies at actual measured moisture, excluding packaging, negatives and rejects; collect using cp_finished. All inventory rows, collection aggregation and calculations use per 1 kg reference flow. |
| `concentrate_basis` | developer; stop; fixer | Mass | kg | Weigh actual net supplied concentrate. If collected by volume, convert with measured batch density and recorded temperature. Preserve concentrate versus working solution and carrier-water ownership; do not add contained ingredients again. |
| `electricity_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ by multiplying by 3.6. This exact energy conversion does not assert combustion or change provider delivery voltage. |
| `physical_ledgers` | all inventory rows | Mass; actual reference property | kg; MJ | Maintain separate physical total/dry-solid/H2O/elemental-Ag and actual reaction-component ledgers and allocated environmental-load ledgers. Track opening/closing stocks, retained coating and real internal handovers; no assumed moisture, density or silver fraction. |
| `silver_species` | spent_fixer; washwater; clean_rinse; tank_sediment; processed_reject; unprocessed_reject | Mass | kg | Total Ag assay is an elemental accounting measure. Obtain phase/speciation where needed for provider/LCI/LCIA; do not rename total Ag to Ag+ or metallic silver or infer pollutant species from COD/BOD. No direct liquid emission is selected. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual existing processed conventional B&W negative at an explicitly linked preparation-unit interface, and purchased complete unexposed RC sheets and supplied concentrates. No assertion that on-site prior work is purchased. |
| starting_condition_role | intermediate_product |
| product_classification_scope | Only route-qualified physical photographic copies of the specified hand originals/texts, proposed narrower CPC32550. |
| recursive_input_rule | Any same-category prior print used as a copying original/rework is a documented upstream or tool input with its real previous burdens; not virgin RC stock, not an indefinitely repeated reference-output loop. |
| upstream_dataset_requirement | Link actual negative preparation and original/master custody and use, even if on-site; include original image capture/film base/silver emulsion/exposure/development/washing/energy and real residues in its actual process. Link paper-core/PE/silver-halide gelatin manufacture, each supplied concentrate/formulation and supply packaging, utilities, transport and actual external treatment. A matching UUID alone is insufficient. |
| disclosure | Identify the imaging-unit foreground boundary and all on-site linked precursor units, tool ownership, allocation cohort, treatment destinations, stock/return accounting and transport. Imaging-only foreground burdens are not a complete life cycle. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `route_complete` | rc_image | Include optical exposure, all three tray baths, print washing, surplus-water removal/air drying, acceptance, actual paper pack-out, water-only vessel cleaning and attributable room/auxiliary operations; link all actual external treatment. No missing required prior or ancillary stage. | ilford-rc-2020; ilford-paper-developer; ilford-rapid-fixer |
| `master_interface` | master_input; master_return | Existing negative is a real measured tool interface. If prepared on-site, keep that actual precursor as a linked foreground unit rather than pretending it was externally purchased. Customer-supplied negatives/originals retain identity, custody and documented life-cycle allocation; no free preparation burden assumed. | ilford-rc-2020 |
| `liquid_destination` | spent_developer; spent_stop; spent_fixer; washwater; clean_rinse | Segregate actual outlets and link compatible external collection/treatment and transport. No on-site silver recovery, direct sewer/freshwater discharge or invented receiving compartment. If the actual site requires a different stage, model its complete actual inventory and reassess route compatibility. | ilford-developer-sds; ilford-stop-sds; ilford-fixer-sds |
| `inventory_extension` | rc_image | Survey all real auxiliary chemicals, supply/dispatch packaging components, maintenance, pollution control and refrigerants. Add one atomic verified exchange for each actual additional item before dataset completion; non-applicability needs evidence, not omitted activity or an invented zero. | ilford-rc-2020 |
| `stage_transfer` | rc_image | One imaging foreground unit aggregates processing and wrapping while retaining separate stage measurements. Record exposed/wet/dry print and bath handovers equal on both sides in physical records; only accepted final copies are the reference product. Bath recirculation/returned working solution is internal, not repeated fresh purchase or external waste. | ilford-rc-2020 |
| `supply_package_boundary` | supply_bottle; supply_carton; supply_bag; used_bottle; used_carton; used_bag | Actual supply containers are individual physical custody exchanges. State whether each supplier background includes packaging; count its production burden once, in that supplied-product background or in a separately linked package process. Reconcile full input/return/stock/waste masses; closures and other real components need their own atomic rows, not addition to concentrate net mass. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rc_image | Optical RC imaging, tray processing, air drying and dispatch | required | selected complete route | foreground_process | per 1 kg reference flow |

### Process: Optical RC imaging, tray processing and dispatch (`rc_image`)

Record complete stage physical/stock/tool-custody ledgers before load attribution; distinguish environmental outlets from external-treatment interfaces by actual destination. Conditional cards below are not default positive inputs, wastes or emissions.

#### Inputs

##### Product flows

###### Photographic plates and film, exposed and developed, other than cinematographic film (`master_input`)

One actual processed conventional black-and-white negative used for optical projection. Record full incoming tool mass, condition, ownership and prior use; repeated receipt is not repeated manufacture. Preparation burden is linked and attributed separately under master_service.

- Selected flow: Photographic plates and film, exposed and developed, other than cinematographic film `1429f228-90cb-4591-ac87-55d195b4426e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure the full actually crossing/retired physical tool mass under cp_master and divide by accepted net lot mass D in cp_finished. Never multiply this physical mass by a service or burden-allocation share; attribute linked preparation/maintenance loads separately under master_service. A positive transfer or retirement needs actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_master`
- Sources: ilford-rc-2020; cci-photo-processing

###### Photosensitive substrate rolls and sheets (`rc_stock`)

Select only purchased unexposed MULTIGRADE RC DELUXE complete sheets: paper core, polyethylene layers and silver-halide gelatin emulsion. Verify actual grade and net full-sheet mass; this broad identity does not prove the supplier recipe or background. Do not use the base-paper grammage alone or a generic coating increment.

- Selected flow: Photosensitive substrate rolls and sheets `279ecf48-49fd-4c60-9d16-24b91e258628`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_materials and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: ilford-rc-2020; cci-photo-processing

###### Photographic developer solution (`developer`)

One supplied MULTIGRADE paper-developer liquid concentrate, with its own carrier water and documented batch formulation. Weigh net concentrate and any replenishment; separately meter added water. Do not duplicate hydroquinone, dimezone-s, sulphite, carbonate or other contained ingredients as additional purchased exchanges.

- Selected flow: Photographic developer solution `66826d83-6996-4d69-9137-33a038735770`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_baths and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baths`
- Sources: ilford-paper-developer; ilford-developer-sds

###### Chemical preparations for photographic uses, except varnishes, adhesives and the like, unmixed products for photographic uses, put up in measured portions or put up for retail sale in a form ready for use (`stop`)

This row is exactly one ILFOSTOP supplied aqueous citric-acid stop-bath concentrate, not a collection of preparations. The broad identity contains a photographic chemical preparation with no opposing route. It is not pure citric acid: retain indicator, preservative and other actual components in supplier evidence, including 2-phenoxyethanol where present.

- Selected flow: Chemical preparations for photographic uses, except varnishes, adhesives and the like, unmixed products for photographic uses, put up in measured portions or put up for retail sale in a form ready for use `08352e30-2aad-48db-baba-b7da53fb53ae`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_baths and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baths`
- Sources: ilford-rc-2020; ilford-stop-sds

###### Photographic fixer solution (`fixer`)

One supplied RAPID FIXER non-hardening aqueous concentrate with ammonium thiosulphate chemistry. Preserve actual batch formulation and whole-concentrate mass; do not replace it with sodium thiosulphate or pure ammonium thiosulphate, or duplicate contained bisulphite/acetic acid/water. Supplier working-solution data must not be linked to kg concentrate without a measured conversion.

- Selected flow: Photographic fixer solution `35b74e82-255a-4c73-869d-93daf726a34a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_baths and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_baths`
- Sources: ilford-rapid-fixer; ilford-fixer-sds

###### Water, tap (`water`)

Meter actual supplied tap water for dilution, print washing, utensil rinsing and cleaning; distinguish those stages in raw records. Use measured water mass or measured volume and actual density; no generic 1000 kg/m3 default. Water already inside purchased concentrate is internal constituent water, not this additional inlet.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_water and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: ilford-rc-2020; ilford-rapid-fixer

###### Alternating current (`electricity`)

Select only grid-average supply to a user below 1 kV. Meter tungsten/tungsten-halogen enlarger, safelight, extraction/ventilation and attributable room conditioning and auxiliary equipment separately; include actual electric temperature control if used. Air drying has no invented dryer or fuel. Keep the provider geography/year and delivery losses compatible. The selected native supply geography is CN: use an actual compatible CN grid/provider background, or independently resolve a geographically compatible electricity identity/provider before completing another-site dataset. The broad AC name alone does not supply a global electricity mix.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` (unit group `93a60a57-a3c8-11da-a746-0800200c9a66`) / MJ
- Amount rule: Measure actual attributable exchange amount using cp_energy and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: ilford-rc-2020

###### Uncoated printing, writing and packaging paper (`wrapper`)

For the declared simple uncoated-paper wrapper variant, measure actual clean paper introduced. No adhesive, laminate, plastic sleeve or carton is assumed. Verify surface compatibility with the accepted print; packaging does not create an archival-life claim. Additional actual packaging components need individual exchanges before dataset completion.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Polyethylene photographic-chemical supply bottle (`supply_bottle`)

Conditional physical package receipt only when actual supply is in verified polyethylene bottles. Measure full bottle tare independently of concentrate and each distinct closure. If the chemical supplier background includes this package, link its burden once there; this custody input must not add the same package background again. No generic recycled-plastic route is assumed.

- Selected flow: Polyethylene photographic-chemical supply bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Photographic-paper supply paperboard carton (`supply_carton`)

Conditional for an actual supplied paperboard carton. Record material/layer/printing/adhesive declarations, full physical net package mass and reused/returned state. Do not infer lamination or uncoated construction from a generic paper-box candidate; supplier package burden is counted once under the declared paper background boundary.

- Selected flow: Photographic-paper supply paperboard carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Photographic-paper lightproof packaging bag (`supply_bag`)

Conditional actual received lightproof bag as one complete product, with its real polymer/laminate/opacity composition and tare verified before identity completion. Do not assume polyethylene, paper or foil merely from lightproof function. Keep supplier packaging background and custody mass distinct; unused stock remains in the original appropriate packaging.

- Selected flow: Photographic-paper lightproof packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: ilford-rc-2020

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Plans and drawings for architectural, engineering, industrial, commercial, topographical or similar purposes, being originals drawn by hand, hand-written texts, photographic reproductions and carbon copies of the foregoing (`finished_print`)

Deliver 1 kg net accepted complete black-and-white silver-image RC copies of specified hand-drawn plans or manuscripts, at the measured acceptance moisture, including retained paper/PE/gelatin/image silver and excluding wrapping and tools. This is the only reference product output. The broad identity explicitly includes photographic reproductions; it does not imply all its other forms use this method.

- Selected flow: Plans and drawings for architectural, engineering, industrial, commercial, topographical or similar purposes, being originals drawn by hand, hand-written texts, photographic reproductions and carbon copies of the foregoing `17677e21-5cbf-42ed-b467-8282c9429c18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_finished`
- Sources: unsd-cpc-3-2025; ilford-rc-2020; cci-photo-processing

###### Photographic plates and film, exposed and developed, other than cinematographic film (`master_return`)

Record actual full mass of the unchanged processed negative returned to its owner or tool store. Reconcile incoming, returned, retained stock and retired mass. Internal handovers have equal physical quantities on both ends. No avoided-production credit is generated merely by returning a tool.

- Selected flow: Photographic plates and film, exposed and developed, other than cinematographic film `1429f228-90cb-4591-ac87-55d195b4426e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure the full actually crossing/retired physical tool mass under cp_master and divide by accepted net lot mass D in cp_finished. Never multiply this physical mass by a service or burden-allocation share; attribute linked preparation/maintenance loads separately under master_service. A positive transfer or retirement needs actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_master`

###### Uncoated printing, writing and packaging paper (`delivered_wrapper`)

Record actual paper wrapping accompanying shipment, separately from net RC-copy mass. This is ancillary packaging output, not a separately sold co-product or a second reference product. Its physical mass is not multiplied by an environmental allocation fraction.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

##### Waste flows

###### Spent MULTIGRADE photographic paper developer bath (`spent_developer`)

Weigh actual discarded developer solution, including its dilution water and carried-out chemistry, with batch composition/pH and destination to a compatible external treatment provider. Opening/closing bath stock and internal reuse remain separately balanced; expired concentrate is separately identified if physically different. Do not substitute waste ink or fixer.

- Selected flow: Spent MULTIGRADE photographic paper developer bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_liquids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: ilford-developer-sds; ilford-paper-developer

###### Spent ILFOSTOP photographic stop bath (`spent_stop`)

Measure segregated spent aqueous stop bath, its actual developer carry-over, indicator state, contaminant composition and full liquid mass to external treatment. Do not estimate acid consumption from supplied SDS intervals or assume an inert waste destination.

- Selected flow: Spent ILFOSTOP photographic stop bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_liquids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: ilford-stop-sds; ilford-rc-2020

###### Spent fixer solution (silver-bearing) (`spent_fixer`)

Measure full spent fixer solution and actual dissolved total silver/speciation evidence before collection by the external provider. Removed unexposed silver-halide material enters this solution; silver remaining in the image is retained in product. No recovery yield, treatment technology or automatic silver credit is assumed. The native name explicitly identifies silver-bearing spent photographic fixer; its isolated CPC39940 waste-organic-solvent category is inconsistent with this actual aqueous bath and remains a source-classification clarification debt. No native CAS, concentration or mandatory organic-solvent treatment overrides the physical name. Complete bath composition/phase, silver forms and recipient/provider compatibility remain required.

- Selected flow: Spent fixer solution (silver-bearing) `8fecd765-6d4b-40eb-80fb-11b4b97152dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_liquids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: cci-photo-processing; ilford-fixer-sds; ilford-rapid-fixer

###### Collected RC photographic print wash water (`washwater`)

Collect the actual liquid print-washing outlet to external treatment, with measured mass, water quality, total silver and relevant chemical indicators. COD/BOD or total silver are analytical descriptors, not substitute chemical-species emissions. No on-site sewer or freshwater discharge is selected.

- Selected flow: Collected RC photographic print wash water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_liquids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: ilford-rc-2020; cci-photo-processing

###### Collected photographic equipment rinse water (`clean_rinse`)

Record water-only cleaning of trays, mixing vessels and washable utensils as its own actual collected aqueous outlet with contaminant composition and receiver. Do not combine the quantity with washwater and then count the same physical outlet twice; if a real common tank mixes them, record stage contributions and export the measured mixture once with a reviewed identity.

- Selected flow: Collected photographic equipment rinse water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_liquids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquids`
- Sources: ilford-rapid-fixer

###### waste paper (unspecified) (`unprocessed_reject`)

Measure unprocessed spoiled RC paper with its PE/gelatin/unreduced silver-halide state, separated from processed rejects. The broad paper-waste identity imposes no opposite treatment; acceptance of coated silver-bearing material by the actual receiver is still required. No recycling suitability or hazardousness is inferred.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_solids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solids`
- Sources: ilford-rc-2020; cci-photo-processing

###### waste paper (unspecified) (`processed_reject`)

Measure processed RC test prints and rejected prints as one defined processed-paper waste stream, including actual moisture, retained image silver and chemical carry-over. Keep reasons and processing history; do not count them as accepted output or silently pulp them as clean paper. Separately record the actual stopping stage: exposed but not wet-processed stock, developer/stop/fixer/wash-interrupted wet sheets, and fully processed rejected dry sheets have distinct moisture and unreduced/reduced/complexed silver states. Stage/stock records preserve all actual rejects and transfers; add a separate atomic waste identity if actual composition/recipient differs rather than treating every failed sheet as a finished dry silver image. Liquid carried on a wet rejected sheet is included once in that whole waste mass, not exported again as spent bath.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_solids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solids`
- Sources: ilford-rc-2020; cci-photo-processing

###### Photographic bath tank sediment (`tank_sediment`)

Conditional only when actual tank cleaning produces separated sediment. Weigh wet mass and dry matter, analyse actual silver form and other constituents, and document external receiver. Do not infer metallic silver, sludge generation or a recovery process from dissolved total silver.

- Selected flow: Photographic bath tank sediment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_solids and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solids`
- Sources: cci-photo-processing

###### Used polyethylene photographic-chemical bottle (`used_bottle`)

Conditional only for verified polyethylene supply bottles in the selected delivery configuration. Record polymer grade, tare, retained chemical and actual receiver; other bottle materials and closures require distinct identities. Supply packaging backgrounds and any rinsing water belong to actual purchased supplies; do not assume PET or a generic hazardous-plastic route.

- Selected flow: Used polyethylene photographic-chemical bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: ilford-developer-sds; ilford-stop-sds; ilford-fixer-sds

###### waste paper (unspecified) (`paper_pack_waste`)

Measure actual clean uncoated paper wrapping rejects separately from incoming paper packaging removal and RC silver-bearing rejects. Include actual opening/closing stock and reuse, and trace receiver. No percentage loss or paper-mill broke return is assumed.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Retired processed black-and-white photographic negative film (`retired_negative`)

Conditional only for actual retired negative tools under the declared ownership boundary. Record full physical mass, support polymer, image silver and receiver. Repeated use is not multiplied into repeated full-mass waste; client-retained negatives remain client property, not invented waste.

- Selected flow: Retired processed black-and-white photographic negative film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure the full actually crossing/retired physical tool mass under cp_master and divide by accepted net lot mass D in cp_finished. Never multiply this physical mass by a service or burden-allocation share; attribute linked preparation/maintenance loads separately under master_service. A positive transfer or retirement needs actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_master`

###### waste paper (unspecified) (`used_carton`)

Conditional actual removed paperboard supply carton, with real coatings/adhesives and chemical contamination declared and receiver verified. Returned/reused cartons remain custody/stock records, not simultaneously full waste. Keep this separate from print rejects and clean dispatch-paper waste.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

###### Used photographic-paper lightproof packaging bag (`used_bag`)

Conditional actual disposed lightproof bag, preserving the verified real polymer/laminate and residual chemistry. Weigh full physical mass and document receiver; reusable or retained bags remain stock rather than invented waste. No ordinary waste-paper, PET-bottle or generic packaging-waste substitute is adopted.

- Selected flow: Used photographic-paper lightproof packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_pack and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`

##### Elementary flows

###### water vapour (`water_vapour`)

Determine actual net H2O vapour leaving the foreground to outdoor air, unspecified subcompartment, from supported drying/ventilation measurement and a complete water ledger. Indoor worker exposure, remaining product moisture and off-site wastewater are different quantities. No assumed evaporation fraction; distinguish H2O from loss of non-water volatiles.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_air and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: ilford-rc-2020; cci-photo-processing

###### acetic acid (`acetic_air`)

Conditional species screen only: CAS64-19-7 acetic acid in the actual fixer formulation may be monitored in the outdoor-air outlet. Include a positive quantity only with actual outlet concentration/flow evidence and correct phase/species quantity. Ingredient presence and SDS intervals do not establish volatilisation, discharge or an emission factor.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_air and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: ilford-fixer-sds

###### 2-phenoxyethanol (`phenoxy_air`)

Conditional species screen only: CAS122-99-6 in the actual ILFOSTOP formulation. Monitor an actual outdoor-air crossing before including any positive quantity; do not assume all preservative is volatile or lost. An aqueous disposal concentration is not this air exchange. Add any other actually identified emitting species as separate verified rows.

- Selected flow: 2-phenoxyethanol `9b20daf3-c464-4f77-8dd6-4b80091e6198`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` (unit group `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- Amount rule: Measure actual attributable exchange amount using cp_air and divide by the same accepted net lot mass D in cp_finished; a positive amount requires actual occurrence evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: ilford-stop-sds

Original and negative custody must be recorded in the actual unit where each object crosses a boundary: full original support/material/incoming-return-retained-retired mass and actual original/capture/film-preparation environmental inputs and outputs remain linked, including on-site work. An original held outside this imaging unit is not a fictitious additional material receipt here. Retain actual source-image/negative identifiers, ownership, measured use cohort and any unreconciled stock; creative service valuation is separate from environmental preparation burdens. Tools, lamps, reusable trays/utensils, actual replacements/cleaners/gloves and containers require their real material/service boundaries and atomic site-specific exchanges before completeness; no assumed replacement life, supplier package burden twice or unobserved waste. [ilford-rc-2020; cci-photo-processing]

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | rc_image | Avoid allocation by separate meters/records and genuine process subdivision first. For actually shared operations use a supported causal physical basis; if another relationship is necessary, justify it with real evidence and uncertainty. No creative-value or product mass default for incompatible functions. |  |
| `master_service` | master_input; master_return; retired_negative | Keep full tool masses/receipts/returns/stocks in the physical ledger. Separately attribute the actual linked preparation and maintenance burdens across documented imaging uses using a justified measured service basis such as comparable exposed area or exposure time. Fractions sum to one across the stated actual-use cohort. Declare cohort closure, ownership, any unassigned stock and uncertainty; do not invent future lifetime/uses. Do not multiply the full upstream manufacture burden by every reused-tool receipt or subtract a return as an avoided-product credit. In the burden model, custody transfer records and the linked service-attributed load must remain distinct; software without this separation requires an explicit measured tool-owner/reuse unit, not repeated acquisition. |  |
| `shared_baths` | developer; stop; fixer; spent_developer; spent_stop; spent_fixer | Use actual bath identity, opening/closing composition, doses, reuse, processing history and service records to attribute shared campaign consumption/waste. Allocate measured loads, not full physical outlet mass; physical exports remain measured whole quantities. No supplier capacity or silver concentration default. | ilford-rc-2020 |
| `silver_destination` | spent_fixer; tank_sediment | Full liquid/sediment outputs retain measured water/chemistry/Ag. Off-site recovered silver belongs to actual treatment evidence and boundary; no assumed recovery, zero burden, monetary co-product or automatic avoided silver credit at the imaging gate. Retained image silver remains in copies and rejects. | cci-photo-processing |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols retain unnormalized campaign totals in the stated native exchange unit, with stock, tool-custody and shared-bath attribution kept separately. Their per-reference wording describes the final reporting basis only. Apply lot_normalization once after summing the complete matched campaign; never feed an already normalized quantity into another division by D.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_finished | rc_image | finished_print | accepted-product records | design/negative IDs; net accepted full-copy mass D; moisture method; sheet size/count; scale/crop/polarity; density/contrast/clarity tests; rejects | Calibrated net weighing after actual dry acceptance, excluding packaging/tools; actual moisture and dimensional/image acceptance tests. Accepted net mass and all quantities per 1 kg reference flow; preserve gross lot totals first. | kg | each accepted lot | complete campaign | imaging and acceptance | per 1 kg reference flow | scale calibration; acceptance records; sample/uncertainty |
| cp_master | rc_image | master_input; master_return; retired_negative | tool custody and linked precursor | negative ID; polymer/support; full incoming/return/retained/retired mass; ownership; original custody; actual preparation process inputs/outputs and datasets; exposure area/time/use cohort | Weigh/count actual tools and reconcile custody; acquire actual precursor production/collection records even for on-site or customer-supplied masters; document supported use-cohort burden allocation separately. Physical transfer/stock amounts per 1 kg reference flow; allocated preparation load uses documented service fractions, never repeated full manufacture. | kg | each transfer/use/retirement | actual documented use cohort | imaging and actual preparation-unit link | per 1 kg reference flow | tool register; precursor measurement/source links; causal allocation evidence |
| cp_materials | rc_image | rc_stock | material receipt/withdrawal | supplier/grade/batch; full net RC sheet mass; dimensions/area; silver/gelatin/PE declarations; opening/closing stocks; unused returns; reject state | Weigh complete sheets and reconcile stores; supplier verified grade and layer evidence, no base-grammage shortcut. Actual attributable full-sheet amount per 1 kg reference flow; reconcile physical totals and stocks first. | kg | receipt and campaign | complete campaign | stock and imaging | per 1 kg reference flow | supplier records; weighing; layer composition and uncertainty |
| cp_baths | rc_image | developer; stop; fixer | bath formulation and usage | supplier/batch/actual SDS/formulation; concentrate net mass; bottle tare; added water; density/temperature if volume conversion; bath ID/volume/mass/pH/temperature; dose/carryover/reuse/stock changes; processed area | Weigh net supplied concentrate and doses; meter added water independently; measure actual bath control and opening/closing stock; trace supplier concentrate-versus-working-solution background. Actual attributable supplied concentrate per 1 kg reference flow; internal working-liquid recirculation is not fresh purchased input. | kg | each mix/dose/bath change | complete campaign and shared-bath cohort | mixing and trays | per 1 kg reference flow | calibrated measures; actual batch documents; bath logs |
| cp_water | rc_image | water | water flow and H2O ledger | source/provider; stage inlet meters; kg or volume/density/temperature; concentrate-carrier water; print water retained; bath/cleaning outlets and stocks; actual drying loss | Meter stage inlets and verify actual density where needed; maintain complete H2O balance without treating all volatile mass loss as water. Record actual bath/print/gelatin carrier water, reaction-generated or consumed water where supported, and inlet/outlet ambient humidity on matching exhaust-volume/time/wet-dry/T/P bases. Ambient through-water is not newly generated foreground evaporation; liquid carried to another bath, a wet reject or external waste remains a physical transfer, not evaporation. Sum attributable additional supplied water per 1 kg reference flow; purchased-formulation water is already within concentrate mass. | kg | stage and campaign | complete campaign | mixing/washing/cleaning | per 1 kg reference flow | meters/density evidence; independent outlet/stock cross-check |
| cp_energy | rc_image | electricity | electricity meters | user delivery below1kV; provider/location/year; stage kWh; lamp/safelight/ventilation/conditioning/auxiliary operation times; shared-operation allocation | Meter actual electricity separately or apply justified measured shared-use attribution; exact kWh-to-MJ conversion. Attributable measured MJ per 1 kg reference flow. | MJ | stage and campaign | complete campaign | imaging room and auxiliaries | per 1 kg reference flow | meters; supply point and provider basis; 3.6 conversion |
| cp_liquids | rc_image | spent_developer; spent_stop; spent_fixer; washwater; clean_rinse | liquid collection and composition | each bath/outlet ID; full mass; actual density if needed; water/solids; pH; total Ag and supported species; COD/BOD descriptors; actual receiver/transport; opening/closing stocks and carryover | Weigh or meter each segregated full liquid outlet, sample with traceable methods and detection limits, and obtain compatible receiver treatment records; identify any actual common mixture once. Full measured attributable liquid amount per 1 kg reference flow; individual constituents are descriptors, not duplicated full-liquid inventory. | kg | each collection/bath change and campaign | complete campaign | collection gate and linked external provider | per 1 kg reference flow | transfer notes; laboratory QA; actual treatment/transport links |
| cp_solids | rc_image | unprocessed_reject; processed_reject; tank_sediment | solid waste and silver ledger | separate state; wet/dry mass/moisture; paper/PE/gelatin; image silver/unreduced halide/complexes where supported; receiver; physical stock changes | Weigh segregated actual residues; analyse dry solids and silver accounting/speciation, distinguish unprocessed and processed paper; verify receiver acceptance. Full measured attributable residue amount per 1 kg reference flow; no yield or recovery default. | kg | each waste removal and campaign | complete campaign | imaging/cleaning and waste gate | per 1 kg reference flow | weighing; lab/sample evidence; receiver and state |
| cp_pack | rc_image | wrapper; delivered_wrapper; supply_bottle; supply_carton; supply_bag; used_bottle; used_carton; used_bag; paper_pack_waste | packaging and supply-container records | each material/component/grade; supplied/retained/delivered/rejected/returned masses; concentrate versus bottle tare; PE confirmation and residual chemistry; actual receiver | Weigh each real component separately; reconcile paper wrapping input/output/waste/stocks; verify any polyethylene chemical bottle; add other real polymers/closures/components separately. Measured component amounts per 1 kg reference flow, outside net RC body mass; supplier package boundary prevents duplicate input burdens. | kg | receipt/pack-out/collection | complete campaign | supply and dispatch packaging | per 1 kg reference flow | tare and material declarations; physical reconciliation; receiver |
| cp_air | rc_image | water_vapour; acetic_air; phenoxy_air | outdoor-air outlet/species survey | actual emission outlet/phase/species/CAS; sampled concentration/flow/time/temperature/pressure; ventilation/H2O inlet-outlet balance; blank/detection limit/coverage; actual formulation | Measure real environmental air crossings with appropriate validated species and flow methods; screen recipe-supported species, then include positives only with evidence. Distinguish indoor exposure, water-vapour balance, liquid analysis and ambient background; add other actual species individually. Supported attributable species amount per 1 kg reference flow; integrate concentration with compatible measured flow/time, no assumed ingredient-to-emission fraction. | kg | representative actual operating intervals and campaign | documented complete or qualified coverage | environmental air outlet | per 1 kg reference flow | laboratory/meter QA; physical scope; non-detect/uncertainty and coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_normalization` | all inventory rows | Divide each actual attributable raw exchange total by D, the sum of accepted net complete-copy masses over the same complete campaign. For finished_print, D/D gives 1 kg reference flow. Preserve unallocated physical totals separately. Use one complete matched reporting-period pool for the same product, grade, route, site and reference state, including all attributable startup/shutdown, wholly failed or zero-output batches, rejects, work in progress and rework. Sum raw numerator totals before dividing once by the strictly positive accepted net output; count reworked product once only at final acceptance. Never average batch ratios or omit failed activity. A pool with no accepted output retains its absolute unnormalized inventory and requires review. | cp_finished; applicable row protocol | exchange amount per 1 kg reference flow |  |
| `energy_units` | electricity | Measured attributable kWh multiplied by 3.6 gives MJ; divide by D for per 1 kg reference flow. | cp_energy; cp_finished | MJ per 1 kg reference flow |  |
| `bath_balance` | developer; stop; fixer; spent_developer; spent_stop; spent_fixer | Opening bath stock plus supplied concentrate/added water/actual carry-in equals closing stock plus actual carry-out, exported liquid, other measured sinks and balance residual. Track internal recirculation on both ends without adding external purchases; no default dilution or evaporation. | cp_baths; cp_liquids; cp_water; cp_solids; cp_air | physical bath/component balances and attributable amounts per 1 kg reference flow |  |
| `silver_balance` | rc_stock; finished_print; unprocessed_reject; processed_reject; spent_fixer; washwater; clean_rinse; tank_sediment | Reconcile measured incoming/stock-change elemental Ag with Ag retained in accepted copies and rejects, dissolved bath/wash/cleaning exports, sediment and any actually demonstrated other sinks. Total Ag is not species inventory; no assumed retention or recovery rate. | cp_materials; cp_finished; cp_liquids; cp_solids | separate elemental Ag reconciliation and compatible physical amounts per 1 kg reference flow | cci-photo-processing |
| `air_measurement` | water_vapour; acetic_air; phenoxy_air | Use compatible sampled species concentration integrated with measured environmental outlet flow/time and actual stage attribution; account for blanks/background and coverage. H2O uses independently supported moisture/ventilation balance; no chemical-composition-to-release multiplier. Divide attributable measured mass by D. | cp_air; cp_water; cp_finished | kg of identified species per 1 kg reference flow |  |
| `reaction_components` | rc_image | Trace actual silver-halide reduction, silver-complex transfer, developer oxidation and acid/base carryover using documented formulation, observed phase/speciation and measured component/stock balances. Retain actually relevant elemental Ag, halides, sulphur, carbon and O/H exchange across baths, paper/gelatin, liquids, sediments and measured gases. Changed molecular forms are not conserved unchanged ingredients; oxygen uptake or supported reaction-water changes are not an unexplained evaporation loss. No stoichiometric yield, default species, gas amount or ingredient-to-release factor is imposed. Additional demonstrated gas/species requires its own verified atomic row and medium. | cp_baths; cp_water; cp_liquids; cp_solids; cp_air; cp_finished | actual component/element balances and disclosed residuals | cci-photo-processing |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_provider` | all inventory rows | Verify actual grade/route/CAS/phase and the declared reference property/unit group; link supplier background with matching quantity basis. Unresolved UUID and provider compatibility are separate gaps, disclosed before dataset use. | actual supplier records; direct identity; measurement basis |
| `product_quality` | finished_print | Declare and measure image geometry/polarity/completeness/density or clarity, actual net mass and moisture; no kg equivalence of creative, design or reading function. | cp_finished; acceptance specification |
| `method_settings` | rc_image | Use actual batch-compatible manufacturer control instructions and verified site settings. Full formulas require supplier/foreground evidence; SDS hazardous ingredients and old illustrative numerical tables are not universal recipe or quantity defaults. | batch documentation; ilford-rc-2020; SDS |
| `mass_water_silver` | rc_image | Close total mass, dry-solids, H2O and elemental Ag with stocks and uncertainties; investigate residuals. Separate physical exports from allocated environmental loads, COD/BOD analytical indicators from species exchanges and indoor concentrations from outdoor releases. | cp_water; cp_liquids; cp_solids; cp_air |
| `auxiliary_coverage` | rc_image | All real additional cleaners, absorbents, gloves, maintenance parts/lamps, closures, packaging, transport and pollution-control exchanges must be individually identified, measured and linked. Water-only cleaning/no-toner/no-thermal/no-treatment assumptions must match the actual selected variant. | actual operation/component survey; receiver links |
| `temporal_coverage` | all inventory rows | Document site, period, sampling/meter coverage, detection limits, variability, calibration and actual allocated cohorts. An absence claim needs evidence; unresolved quantity is not zero. No complete factory LCI is implied by methodology. | protocol raw evidence and uncertainty |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `reference_unique` | finished_print | Require exactly one accepted final reference product output of 1 kg; include retained full RC structure/silver and actual moisture. Do not reuse this reference UUID for intermediate wet prints or returned originals; those stages have equal internal physical records in the aggregated unit. |  |
| `actual_route` | rc_image | Check negative/enlarger/RC grade and manual non-hardening tray route against actual records; reject incompatible creation/carbon/digital/FB/colour/machine/toned/mounted routes under this configuration. Required original/master preparation and real treatment must remain linked. | ilford-rc-2020; ilford-paper-developer; ilford-rapid-fixer |
| `basis_complete` | all inventory rows | EN/ZH reference quantity, inventory denominator, protocol aggregation and calculations all use per 1 kg reference flow. Concentrate, diluted bath, full liquid export, tool transfer and service-attributed burden are distinct quantities; no double counting. |  |
| `liquid_silver` | spent_fixer; washwater; clean_rinse; tank_sediment | Verify actual full liquid/residue and silver retention/export balances, receiver compatibility and actual treatment/transport. Reject treating total silver or COD/BOD as a specific elementary flow; no invented recovery or direct receiving medium. | cci-photo-processing |
| `air_conditional` | water_vapour; acetic_air; phenoxy_air | A positive elementary exchange requires physical environmental crossing, phase/species/CAS, appropriate medium and measured/calculated-from-measurement amount. SDS composition alone is not evidence of release; unresolved or unsupported screening remains disclosed. |  |
| `complete_records` | rc_image | Require actual stages, all ancillary atomic exchanges, current supplier/batch instructions, stocks, allocation, sampling quality and uncertainty. Complete mechanical checks do not establish independent methodology approval or full-site data validation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset of the declared optical-negative RC imaging variant |
| downstream_use | secondary_dataset; background_dataset only when actual complete links, evidence and applicability are verified |
| allowed_use | Physical product manufacturing burdens for the declared documentary-copy configuration and appropriately reviewed same-method reference configurations. |
| excluded_use | Creative/design service valuation, whole-CPC coverage, digital or other processing routes, archived/display permanence claims, unlinked imaging-only burdens presented as full life cycle. |
| required_metadata | original/negative identifier, support and ownership; actual upstream preparation process and tool-use allocation; conventional B&W negative and optical projection/geometry/polarity; actual RC paper grade/PE/gelatin/silver-halide composition and full-sheet quantity; tungsten/halogen enlarger and filter; each concentrate supplier/batch/formulation and mixing records; tray sequence/pH/temperature/control evidence; running-water source/quality and measured use; no optional toner/wetting/mounting; air-dry/ventilation; accepted net mass/moisture, size/count, scale, image quality; retained silver, bath/wash/sediment silver speciation; all actual residues, packaging and receiver/provider boundaries; utility basis; site/period, uncertainty and allocation. |
| required_quality_disclosure | Site/period and measured coverage; actual supplier/precursor/treatment links; tool/bath attribution and physical balances; unknown UUID/provider/quantity/species; source date/edition limits; no independent review implied. |
| update_trigger | Actual paper/chemistry/negative/exposure/finishing/treatment/provider or allocation basis changes; new composition or source-version evidence; changed product quality or identified additional exchange. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes, 30 June2025, PDF/printed152, 32550; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Physical documentary originals and reproductions classification only; proposed subset, not manufacturing route. |
| ilford-rc-2020 | handbook | ILFORD MULTIGRADE RC Papers Technical Information, October2020, PDF1-2 optical negative/enlarger and paper layers; PDF4 manual baths; PDF5 washing/air drying; PDF6 display protection. https://www.ilfordphoto.com/amfile/file/download/file/1956/product/1701/ | Actual RC optical/manual-tray variant and exclusions; supplier illustrative settings/grammage/capacity are not default quantities. |
| ilford-paper-developer | handbook | ILFORD Black and White Paper Developers, undated publisher-linked sheet, PDF1-2; https://www.ilfordphoto.com/amfile/file/download/file/1828/product/709/ | MULTIGRADE paper developer, ambient tray use and supplied concentrate mixing interface; not film developer or universal formula. |
| ilford-rapid-fixer | handbook | ILFORD RAPID FIXER Technical Information, undated publisher-linked sheet, PDF1; https://www.ilfordphoto.com/amfile/file/download/file/1833/product/711/ | Non-hardening ammonium-thiosulphate supplied fixer, manual use, cleaning/control and quantity basis; no sodium-thiosulphate substitution or defaults. |
| ilford-developer-sds | handbook | ILFORD MULTIGRADE Paper Developer Australian SDS, issued18July2024 revision1, PDF2 section3; PDF3 section6; PDF5 section13; https://www.ilfordphoto.com/wp/wp-content/uploads/2024/10/AUS-Multigrade-Developer.pdf | Actual supplied-mixture interface and handling/disposal; hazardous ingredient list is not complete recipe; verify actual batch/current edition. |
| ilford-stop-sds | handbook | ILFORD ILFOSTOP Australian SDS, issued18July2024 revision1, PDF2 sections3/6; PDF4 section13; https://www.ilfordphoto.com/wp/wp-content/uploads/2024/10/AUS-Ilfostop.pdf | Citric-acid/2-phenoxyethanol mixture interface and conditional species screening, not pure acid or release factor. |
| ilford-fixer-sds | handbook | ILFORD RAPID FIXER Australian SDS, issued18July2024 revision1, PDF2 sections3/6; PDF4 section13; https://www.ilfordphoto.com/wp/wp-content/uploads/2024/10/AUS-Rapid-Fixer.pdf | Ammonium-thiosulphate/bisulphite/acetic-acid mixture interface; waste containment and conditional species screen, no release/recovery defaults. |
| cci-photo-processing | official_guidance | Canadian Conservation Institute Notes16/6, originally1986 revised2007, Photographic Process/Fixing and Processing Resin-Coated Papers sections; https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/black-white-photographic-films-papers-permanence.html | Silver-halide gelatin/RC PE structure, image silver versus fixer silver and RC/FB differences; historical permanence protocols do not supply plant amounts or current RC settings. |
| ilford-current-products | handbook | Official current product pages: https://www.ilfordphoto.com/multigrade-rc-deluxe-glossy-sheets ; https://www.ilfordphoto.com/multigrade-developer-product ; https://www.ilfordphoto.com/rapid-fixer-product ; https://www.ilfordphoto.com/1893870 | Currently advertised RC paper and three supplier products; confirm actual supplied batch documentation. Not proof a document-printing enterprise uses this route. |
