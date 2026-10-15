---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.imaged-developed-positive-thermal-aluminium-offset-plates
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Imaged and developed positive thermal aluminium offset plates

## 1. Scope and Applicability

This PCR covers one physical image-carrier subset: unused, unbaked positive-working thermal CTP aluminium offset plates, delivered after imaging, aqueous development, rinsing, protective gumming and electric drying. Coated blanks are purchased. A plate shop is the foreground, not a paper mill or printing press. The precursor manufacturer remains an upstream supplier. The scope follows the route distinction in `eu-sts-image-carrier-2007` and the product-specific example in `fuji-lh-ple-2019`; neither supplies a general recipe or consumption factor.

Exclude process-free or negative-working photopolymer plates, violet/conventional film-exposed plates, waterless silicone plates, plastic/paper-base plates, gravure cylinders, screen-printing stencils, lithographic stones, composed type, finished printed products and plate-regeneration services. New substrate production, graining/anodising and coating occur upstream in this declared route. A shop performing them, post-baking, solvent development, stripping/regeneration or electroplating needs a separately assessed boundary and inventory; do not infer those processes from a product noun. A different end-use label does not establish another methodology identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.imaged-developed-positive-thermal-aluminium-offset-plates |
| classification_refs | CPC 3.0 32800; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Imaged, developed, gummed, unbaked positive thermal aluminium offset plates |
| excluded_products | Process-free/negative/waterless/non-aluminium plates; gravure cylinders; stones; type; printed goods; regeneration services |
| representative_product | Accepted purchased precoated positive thermal aluminium plate after CTP imaging and aqueous processing |
| production_route | Receipt → imaging → aqueous development/rinse → gum/electric drying → acceptance/packing |
| market_state | Unused, imaged/developed, unbaked, complete plate at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an image carrier compatible with a declared wet-offset job |
| How much | 1 kg accepted complete net plate mass |
| How well | Declared grade, gauge, image/defect acceptance, gum and drying state; printing service is separately qualified |
| How long or cycle | One manufacture-to-gate cycle; actual later service is a separate account, with no assumed universal print-run life |
| reference_flow_link | reference_plate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Composed type, prepared printing plates or cylinders, impressed lithographic stones or other impressed media for use in printing `7294740f-d360-49af-ba60-a832f331757d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | aluminium alloy and whole-plate gauge; positive thermal coating grade and supplier; imaging system and acceptance; actual developer/replenisher concentration; rinse and gum/drying state; unbaked and unused state; complete net mass, retained moisture and plate area; declared press/run compatibility without assumed life; electricity delivery voltage/property basis; effluent route and waste receivers |

Declare all required qualifiers in dataset metadata, reference-flow comments or equivalent fields; a missing qualifier makes the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted complete net plate mass; calibrated cp_mass weighing excludes packaging/clamps/free water and includes substrate plus retained coating/protective layer and its residual water at the declared delivery condition. Preserve dry solids and residual-water subaccounts; do not convert the whole output to dry aluminium. |
| campaign_basis | common accepted-reference denominator only | Mass | kg | Per 1 kg reference flow; divide attributable campaign exchanges by the same-grade accepted complete net plate kg. Item count, image count and plate area are not kg; measured same-grade count/area/mass conversions are traceable diagnostics. Preserve each raw numerator native property/unit: electricity MJ and freshwater-carrier m3 are not Mass/kg quantities. |
| solution_basis | developer; replenisher; gum; water; wastewater | Mass | kg | Preserve complete wet solution mass and temperature/density/composition; separate as-supplied replenisher, dilution water and recirculation without assumed concentration/density. |
| species_basis | elementary outputs | Mass; Volume | kg; m3 | Elemental analysis uses mass as element; COD uses oxygen-demand mass; liquid discharge uses m3; vapour uses kg to air. Media and species/constituent masses are not interchangeable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unexposed, surface-prepared/coated positive thermal aluminium blanks |
| starting_condition_role | Upstream delivered condition; not virgin aluminium or regenerated-plate service |
| product_classification_scope | One physical offset-plate subset of CPC 32800 |
| recursive_input_rule | Do not reuse finished-reference UUID as an unexposed precursor; reused plates require separate regeneration boundary |
| upstream_dataset_requirement | Supplier coverage of alloy, surface preparation, coating composition/solvents/drying and delivery; compatible actual material basis |
| disclosure | Declare provider/grade, missing upstream coverage, process location, electricity basis, effluent fate and receivers; supplier manufacture is not an on-site operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | plate_making | Collect only the declared positive thermal aqueous-developed plate-shop route. Retain measured imaging/development/rinse/gum/drying stages and all actual auxiliaries. Upstream alloy/surface/coating manufacture is not silently omitted or repeated in the shop. | eu-sts-image-carrier-2007;fuji-lh-ple-2019 |
| boundary_liquid_fate | wastewater; elementary releases | Declare actual off-site treatment versus site treatment/direct outfall. A liquid transferred to a treatment receiver is a waste exchange, not a site elementary emission. A site release reports carrier water and species at the same real outfall after treatment where present; do not duplicate the discharged liquid as an off-site waste. | epa-metals-2007-1994 |
| boundary_recursion | reference_plate; plate_blank | Record a purchased coated blank at its actual unexposed state, with upstream coverage. A reused finished plate belongs to a regeneration/service boundary rather than recursively passing through this manufacture as new material. Stop unsupported upstream links and disclose the missing provider coverage. | eu-sts-image-carrier-2007 |
| boundary_completeness | all inventory rows | No default cutoff may hide coating chemicals, small-mass toxic species or solvents. Include actual inbound transport through verified supplier/transport coverage and document cutoffs and infrastructure treatment. Keep upstream printing-paper manufacture and downstream printing/service use distinct from platemaking. |  |

## 6. Process Inventory Structure

### Process Map

One aggregate foreground unit preserves separately metered stages: incoming inspection and separation of packaging → laser imaging → aqueous development/replenishment → rinse → gum application/electric drying → inspection/punching where applicable → packing and gate delivery. Internal work-in-progress is not another exported product. If stages are disaggregated later, both ends of every internal transfer must use the same physical amount and state. Source boundaries do not imply that every conditional row is present. Record evidence of absence; otherwise add every actually used chemical, packaging component, waste and emitted species as its own atomic row with its own identity audit.

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| plate_making | Positive thermal aluminium plate imaging and aqueous processing (aggregate) | required | Declared purchased-coated-blank route | Foreground manufacture | 1 kg reference_plate |

### Process: Positive thermal aluminium plate imaging and aqueous processing (`plate_making`)

#### Inputs

##### Product flows

###### Unexposed coated positive thermal aluminium CTP plate (`plate_blank`)

One purchased coated blank, including alloy substrate, prepared/anodised surface and dry imaging coating. Record supplier, positive thermal grade and whole-plate net mass; an uncoated substrate cannot substitute. Supplier upstream evidence must cover substrate production, surface treatment, coating chemicals, coating solvent recovery and drying.

- Selected flow: Unexposed coated positive thermal aluminium CTP plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `eu-sts-image-carrier-2007`; `fuji-lh-ple-2019`

###### Developer, for offset printing plate, at plant (`developer`)

One as-supplied formulated developer, for example the manufacturer-listed grade DT-2WE, charged at its documented working strength. The brochure names the grade but establishes neither supplied nor working concentration. Count complete solution mass, not pure alkali mass. The generic identity does not establish formulation, density or supplier background equivalence. Capture current SDS and supplier concentration; do not import photographic-film developer chemistry.

- Selected flow: Developer, for offset printing plate, at plant `26694f8a-891f-4ee5-b583-55b689acbb09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fuji-lh-ple-2019`

###### Positive thermal offset plate developer replenisher solution (`replenisher`)

One separately purchased formulated replenisher, for example the manufacturer-listed DT-2RE. Record its as-supplied concentration, actual dilution and working bath conditions; the grade name does not prove it is a concentrate. Keep complete replenisher mass and any separately added water distinct; do not count processor recirculation as new input. Record actual automatic dosing and stock changes.

- Selected flow: Positive thermal offset plate developer replenisher solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fuji-lh-ple-2019`

###### Aqueous offset plate protective gum finishing solution (`gum`)

One actual formulated finishing solution, for example FG-8CWE. Gum arabic, starch or an adhesive identity does not represent the complete proprietary mixture. Record wet solution mass, solids, water and any solvent separately in the composition ledger.

- Selected flow: Aqueous offset plate protective gum finishing solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `fuji-lh-ple-2019`

###### Process Water (`water`)

Purchased treated process water for dilution, rinsing and processor cleaning. Collect each stage meter, supplier quality and density for volume-to-mass conversion; water already in purchased solutions is composition, not a second purchased exchange. No on-site abstraction is assumed.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_water divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fuji-lh-ple-2019`

###### Alternating current (`electricity`)

Measure platesetter, processor, rinse pumps, electric drying and auxiliaries, retaining stage readings inside this aggregated unit. The selected identity is China consumer-side grid-average supply at 1–35 kV with Net calorific value reference property. It is usable only for that actual supply region, metering boundary and supplier basis; other voltage/service conditions require a separately verified identity. A plate exposure specification is not whole-equipment electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable campaign amount under cp_energy divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `fuji-lh-ple-2019`

###### Corrugated paperboard plate shipping box (`box`)

One corrugated box where actually supplied with accepted plates; collect net box mass and supplier construction/fibre composition. A specific fixed-fibre-recipe database box is not a generic substitute. Packaging mass is excluded from the reference plate mass.

- Selected flow: Corrugated paperboard plate shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Separator paper (`interleaf`)

One paper interleaf barrier between plates. Confirm actual paper grade and any treatment; a broad barrier-paper identity is physically compatible but does not supply a background recipe. Distinguish interleaf delivered with product from removed incoming interleaf waste and avoid charging a supplier-included component twice.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Conditional: one separately supplied isopropanol component used in actual platesetter/processor maintenance. Record CAS 67-63-0, purity, fossil/biogenic origin and supplier grade from current SDS; the selected native record names IPA but supplies no CAS field, so that field is not database-verified. Confirm CAS and composition against the supplier before linking; the generic China-production identity is conditional on those conditions. It is not an entire solvent cleaner or a default cleaning practice.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_material divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `epa-printing-eiip-2002`

#### Outputs

##### Product flows

###### Composed type, prepared printing plates or cylinders, impressed lithographic stones or other impressed media for use in printing (`reference_plate`)

Accepted imaged, developed, rinsed, gummed, electrically dried, unbaked positive thermal aluminium offset plate, unused and ready for conventional wet offset. Count complete substrate plus retained coating, protective layer and residual water at the declared delivery condition, excluding packaging, free rinse water and clamps. Retained moisture remains in the complete mass and in a separate water subaccount. The broad reference identity must carry these physical qualifiers; it does not make cylinders, type or stones method-equivalent.

- Selected flow: Composed type, prepared printing plates or cylinders, impressed lithographic stones or other impressed media for use in printing `7294740f-d360-49af-ba60-a832f331757d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `eu-sts-image-carrier-2007`; `fuji-lh-ple-2019`

###### Corrugated paperboard plate shipping box (`delivery_box`)

Conditional: the same corrugated box physically leaving with the accepted plates, not a second box purchase or an independently allocated co-product. Record complete delivered box mass, including any actual moisture, excluding plate kg. Reconcile incoming/new boxes, stocks, reuse, return and waste in the packaging ledger; constituent identities and background remain subject to supplier verification.

- Selected flow: Corrugated paperboard plate shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Separator paper (`delivery_interleaf`)

Conditional: paper interleaf physically delivered between accepted plates at its actual grade/treatment/moisture state; track its full mass outside plate net kg. This output carries packaging, not another purchase, printing service or saleable paper co-product. Reconcile supplied interleaf, stock, reuse, removed paper waste and delivered interleaf without counting both supplier-included and separately bought material.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Waste flows

###### Aluminium Scrap (`reject_plate`)

One segregated manufacturing reject or punching scrap aluminium-plate stream sent to a documented recycler. Retain coating/gum contamination, aluminium content, wet/dry state and receiver acceptance. Whole scrap mass is not recovered-metal yield; this generic scrap identity does not imply remelting inside the plate shop.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `eu-sts-image-carrier-2007`

###### Spent positive thermal aluminium offset plate aqueous developer (`spent_developer`)

One spent developer bath purge crossing to off-site treatment, including dissolved coating and measured metals. Wet bath mass, solids and composition are collected; keep separate sludge, rinses and stock. A generic photographic or paint waste is not a replacement.

- Selected flow: Spent positive thermal aluminium offset plate aqueous developer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fuji-lh-ple-2019`

###### Aluminium offset platemaking rinse wastewater to off-site treatment (`wastewater`)

Conditional off-site route: one rinse/cleaning wastewater stream to a named treatment receiver. Record stream composition, flow and mass; a database record explicitly to water cannot represent transfer to treatment. Its subsequent releases belong to the receiver dataset, not this foreground outfall.

- Selected flow: Aluminium offset platemaking rinse wastewater to off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fuji-lh-ple-2019`

###### Wet aluminium offset plate developer filtration sludge (`sludge`)

Conditional: one separately removed developer-filter sludge stream. Record water content, coating polymers, aluminium and receiver conditions. It is neither papermaking sludge nor municipal biological sludge. Exclude material already in a weighed spent bath. Filter or screen media and captured solids are separately weighed; add each actual replacement medium and its contaminated waste as its own exchange rather than hiding the support material in sludge.

- Selected flow: Wet aluminium offset plate developer filtration sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fuji-lh-ple-2019`

###### waste paper (unspecified) (`paper_waste`)

One removed paper interleaf stream segregated for a named receiver. Declare any coating/chemical contamination, moisture and recycling eligibility; contaminated and clean grades must be separate exchanges when different receivers or identities apply. Generic waste-paper identity establishes no recycling credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent isopropanol maintenance cleaning solution (`spent_ipa`)

Conditional: one separately captured spent IPA cleaning solution to treatment or recovery; record solvent mass fraction, net solution mass, contaminants and destination. Count recovered material as physical output before any allocation and distinguish recovered solvent from its recovery service burden.

- Selected flow: Spent isopropanol maintenance cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-printing-eiip-2002`

###### Spent aqueous aluminium offset plate gum solution (`spent_gum`)

Conditional: one separately collected gum-bath purge, excluding material combined and already weighed in rinse wastewater. Keep product-retained gum and spent solution distinct; measure dissolved/solid fraction and treatment destination.

- Selected flow: Spent aqueous aluminium offset plate gum solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_waste divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `fuji-lh-ple-2019`

##### Elementary flows

###### aluminium (`aluminium_water`)

Conditional only at a real site outfall to fresh water: aluminium, CAS 7429-90-5, kg as Al. Use flow-weighted total-recoverable analysis with appropriate digestion and retain dissolved/particulate fractions; do not sum dissolved and inclusive total. ICP-AES is not oxidation-state speciation. Do not apply this exchange to wastewater sent off site.

- Selected flow: aluminium `fe0acd60-3ddc-11dd-a732-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_effluent divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `epa-metals-2007-1994`

###### chemical oxygen demand (`cod_water`)

Conditional fresh-water outfall COD load in kg oxygen demand with stated test method and matrix QA. COD is a sum indicator with no substance CAS; retain named organics separately and disclose potential LCIA overlap instead of treating COD as a chemical or total organic carbon.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_effluent divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `epa-printing-eiip-2002`

###### Water (`water_discharge`)

Conditional: liquid water, CAS 7732-18-5, discharged at a real fresh-water outfall; record m3 liquid water on the selected reference Volume basis. This is an emission, not freshwater withdrawal or wastewater-treatment service. Reconcile carrier water with wastewater wet mass and composition, without making the whole wastewater chemically pure water.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable campaign amount under cp_effluent divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `fuji-lh-ple-2019`

###### isopropanol (`ipa_air`)

Conditional: actual unrecovered IPA release to outdoor air, unspecified subcompartment, CAS 67-63-0. Prefer chemical-specific monitoring or a closed species balance. Record capture, recovered solvent, waste retention and stock changes; do not emit a second aggregate VOC mass for the same substance. Workplace exposure is not the outdoor release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_air divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `epa-printing-eiip-2002`

###### isopropanol (`ipa_water`)

Conditional fresh-water outfall release of IPA, CAS 67-63-0, chemical kg from speciated analysis. Actual solvent use and measured release are separate facts; no positive release or destruction fraction follows from finding a flow identity. Exclude solvent still contained in off-site wastewater.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a847-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_effluent divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_effluent`
- Sources: `epa-printing-eiip-2002`

###### water vapour (`water_vapor`)

Conditional: evaporated water from real electric drying or open baths to outdoor air, unspecified subcompartment, CAS 7732-18-5, kg vapour. Determine moisture and stocks rather than converting all water intake to vapour. Subtract inlet-air humidity from outlet-air water on a consistent dry-air basis and reconcile condensation/capture and stocks. Gross exhaust humidity is not all process-generated water. Water-vapour records classified to fresh water are not used for air evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign amount under cp_water divided by accepted campaign net plate kg; conditional absence requires actual absence evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `fuji-lh-ple-2019`

###### sodium hydroxide (`alkali_na_air`)

Conditional actual sodium hydroxide mist escaping to outdoor air, unspecified subcompartment, CAS 1310-73-2, kg as NaOH. Confirm that the actual supplied bath contains this substance and that monitored aerosol identifies it after any control. Neither alkaline pH nor total sodium establishes NaOH. Aerosol water is separate from chemical mass; reconcile any overlapping PM result and LCIA treatment. No default emission or default NaOH recipe follows from the manufacturer example.

- Selected flow: sodium hydroxide `72848d23-c462-4f5b-ae59-34e6fa16103e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign chemical mass under cp_air divided by accepted campaign net plate kg; conditional absence requires actual bath/SDS and release-path evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources:

###### Potassium hydroxide (`alkali_k_air`)

Conditional actual potassium hydroxide mist escaping to outdoor air, unspecified subcompartment, CAS 1310-58-3, kg as KOH. Confirm actual bath composition and outdoor aerosol speciation after any control; total potassium and alkaline pH are not KOH mass. Keep aerosol carrier water, recovered material and overlapping PM distinct. Do not assume the bath contains both hydroxides; supplier grade and monitoring decide each row independently.

- Selected flow: Potassium hydroxide `d95b00da-1a10-4a79-89ca-aa4ecef24067`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign chemical mass under cp_air divided by accepted campaign net plate kg; conditional absence requires actual bath/SDS and release-path evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | shared operations | First use stage meters, bath throughput and job records to separate attributable burdens. For inseparable baths/shared electricity, collect causally relevant processed area, operating/idle time and grade; document the chosen driver and shares. Do not impose a universal mass or price allocation factor. |  |
| allocation_physical_ledger | reference_plate; reject_plate; recovered material | Allocate environmental burdens only after preserving the complete physical ledger. Keep accepted/reject/recovered-stream masses intact; never multiply a co-product physical output by its burden share. Document whether scrap is waste or an actual saleable co-product, receiver route and chosen recycling convention. No automatic avoided-virgin-aluminium credit or 100% recovery yield. |  |
| allocation_service_life | reference_plate; downstream print job | Manufacturing output remains complete plate kg. A downstream print job may distribute the linked manufacture burden using documented compatible service, actual accepted impressions or qualified area and plate replacements. Keep whole-plate physical mass, recovered-carrier mass, regeneration mass loss and service allocation in separate accounts. Never reduce physical kg by impression count or count recycled aluminium as the same reused imaged plate. Manufacturer maximum run claims do not establish actual life. | fuji-lh-ple-2019;eu-sts-image-carrier-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Maintain the unallocated physical process diagram, total wet mass, aluminium, water and carbon/species ledgers before normalisation or burden allocation. Account for opening/closing stocks, accepted plates, rejects, dissolved coating, retained gum, separated sludge, exported liquids, recovery and actual releases. Reconcile incoming carrier aluminium with plate aluminium, scrap, measured aqueous aluminium and stocks; distinguish alloy mass from kg as Al. Avoid adding COD oxygen demand to physical carbon or solution mass. Record each residual and measurement uncertainty; do not force closure with a fictitious emission or negative correction flow.

Current supplier SDS/formulation records and actual outfalls determine additional species. Do not inherit copper/chromium electroplating emissions from a gravure description, or silver/fixer chemistry from photographic-film processing. Screen actual developer alkali, coating organics, surfactants and biocides and any cleaning solvent. Alkali mist requires actual bath/SDS and outdoor-release evidence: identify sodium hydroxide, potassium hydroxide or the measured actual substance separately. An alkaline pH or total sodium/potassium analysis cannot identify hydroxide mass. For a chemically speciated aerosol also measured as PM, retain the analytical relationship and prevent the same constituent mass from being added twice or characterised twice in overlapping LCIA indicators; do not discard a hazardous named species to close a PM sum. total metal analysis does not prove oxidation state, free-ion CAS or an entire salt mass. Require matching CAS/species, medium/submedium, property and quantity definition. A near-name xanthate, correction flow or wastewater row cannot fill a missing elementary identity. If punching/dry handling produces airborne particulate, distinguish non-overlapping PM2.5, PM2.5–10 and >PM10 from collected scrap/dust; an inclusive PM10 result cannot be added to its subsets. No default dust factor is prescribed. On-site combustion or solvent oxidation is outside the representative electric route and requires separately evidenced fuel/control processes and species, including biogenic CO2 when actually released.


Maintain a component-resolved packaging and maintenance ledger across the same gate: supplier-included incoming interleaves/boxes, separately purchased packaging, packaging retained in stock, shipment packaging, removed packaging, reusable-carrier returns and losses. Delivered packaging remains a physical output excluded from plate net kg; add each additional actual tape, film, strap, pallet, container or packaging waste as a distinct exchange. Record gross delivery mass minus measured packaging tare as a cross-check, not an assumed package fraction. Reused packaging is not newly manufactured each turn; its manufacture and cleaning/return-transport burdens require documented reuse and losses. A returned coated blank or chemical container is a real outward material transfer, not unexplained consumption or an automatic recycling credit. Never omit its carrier water or residual chemical.

Screen maintenance records for each actually used cleaner component/formulated product, wipe, filter/screen medium, lubricant, pump/roller consumable, cooling medium and any refrigerant loss. Include matching contaminated wipes, replacement-media waste, collected dust and chemical-container residues on their actual receiver basis. Disaggregate an on-site treatment operation if present and collect its reagents, power, water and sludge once; off-site treatment belongs to the receiving process. A proprietary supplied mixture is one complete product exchange with a constituent ledger; its water and chemicals are not extra purchases unless separately supplied. A component-based upstream model may replace that mixture link only with complete measured composition and processing coverage, without counting both alternatives. Distinguish wet-offset dampening during downstream printing from plate-shop rinsing, and FM image screening from a physical screen-printing stencil.

Reconcile the supply meter with imaging, processor heaters/pumps, electric drying, ventilation, cooling and attributable lighting/idle/maintenance loads; document meter coverage, transformer loss and shared-load allocation. Supply and submeter readings are reconciliation levels, not additive purchases. Retain sensible/latent heat and condensate where measured for a drying energy check; do not invent an efficiency or replace purchased electrical energy with laser exposure dose or vapour enthalpy. Unknown energy terms remain uncertainty rather than a fictitious heat exchange.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | plate_making | linked atomic exchanges | acceptance/weighing | campaign; grade; alloy; coating; gauge; plate count; area; complete net kg; retained coating/gum solids and water; drying/conditioning time, temperature and humidity; rejected kg | Calibrated net weighing of complete accepted plates after declared drying, with same-grade acceptance records; exclude packaging/free water/clamps. Aggregation: accepted net plate mass; all records normalized per 1 kg reference flow | kg | each lot | representative campaign including startup, idle and rejects | declared plate shop/grade | per 1 kg reference flow | scale calibration; grade traceability; area/count cross-check |
| cp_material | plate_making | linked atomic exchanges | stock/receipt/dosing | material grade; provider; current SDS; wet kg; density; solids; all constituent/CAS and solvent/water fractions; packaging inclusion/tare; opening/closing stocks; returns; maintenance consumables; stage | Reconcile receipts, calibrated dosing/weights, formulation basis and stocks; record supplier upstream manufacture and delivered reference quantity. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | kg | lot and campaign | same campaign as cp_mass | declared shop and supplier | per 1 kg reference flow | receipts; meter calibration; current composition and provider chain |
| cp_energy | plate_making | linked atomic exchanges | meter | stage kWh; startup/idle; supplier; voltage and supply region; property/unit basis; transformer loss; ventilation/cooling/maintenance; drying heat and condensate; shared-operation driver | Read calibrated supply/stage meters; keep supply voltage and boundaries compatible with the background link. Preserve electrical energy despite database NCV label. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | kWh; MJ | stage and campaign | same campaign as cp_mass | actual supply intake and shop stages | per 1 kg reference flow | calibration; supply contract; driver and loss reconciliation |
| cp_water | plate_making | linked atomic exchanges | water/moisture balance | stage fresh water; density; bath stocks; solution water; plate moisture; wet wastes; inlet/outlet air humidity and dry-air flow; condensate; evaporated water; recirculation | Meter new supply and reconcile solution/stock/moisture/destination records; internal recirculation is not fresh input. Evaporation needs measured or independently supported water balance. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | kg; m3 | stage and campaign | same campaign as cp_mass | actual shop liquid system | per 1 kg reference flow | meters; density/temperature; moisture and closure uncertainty |
| cp_waste | plate_making | linked atomic exchanges | weighing/transfer | stream ID; shipment packaging/returns; wet kg; moisture/solids; coating; metal/solvent content; waste/co-product decision; receiver; recovery yield | Weigh segregated streams and reconcile transfer records, contamination and receiver acceptance; record physical output before burden allocation. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | kg | each transfer | same campaign as cp_mass | shop gate and verified receiver | per 1 kg reference flow | weigh tickets; composition; receiver/treatment evidence |
| cp_effluent | plate_making | linked atomic exchanges | flow-weighted laboratory monitoring | outfall; freshwater receiving body; bulk solution m3; carrier-water fraction and m3; wastewater wet kg; analyte/CAS; concentration; dissolved/total; COD method; detection limits; QA | Sample actual discharge with representative flow-weighted concentrations; for Al use validated matrix-appropriate total-recoverable/dissolved method such as EPA 200.7 with digestion/filtration recorded. Identify other species separately. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | m3; mg/L; kg | representative discharge events and campaign | same campaign as cp_mass | site freshwater outfall; not off-site treatment transfer | per 1 kg reference flow | chain of custody; blanks; recovery; matrix/interference; flow calibration |
| cp_air | plate_making | linked atomic exchanges | species monitoring/balance | chemical CAS; solution composition/purity/origin; input; retained/recovered/waste kg; water and other medium releases; disjoint stocks; vent flow; species and aerosol/PM relationship; capture/control evidence | Measure outdoor release or use an independently supported closed species balance with capture, recovery, waste and stocks; VOC-as-carbon totals require documented speciation and conversion. Aggregation: retain raw attributable campaign totals in each exchange native unit; normalize_campaign performs the sole output-mass division. | kg | maintenance/bath handling event and campaign | same campaign as cp_mass | actual outdoor shop release | per 1 kg reference flow | SDS; monitoring calibration; independent balance terms and uncertainty |
| cp_service | plate_making | linked atomic exchanges | allocation/service account | stage driver; burden shares; print job; compatible plate ID; actual accepted impressions; area; replacement; recovered-carrier kg | Keep manufacturing physical ledger immutable; use job/receiver records for separately declared burden allocation and downstream service only. Do not assume brochure run life. Aggregation: manufacturing inventory remains per 1 kg reference flow; downstream service burden is a separate account | kg; m2; impressions | campaign and declared downstream jobs | declared matching period | shop plus explicitly linked downstream job | per 1 kg reference flow | driver causality; compatible job records; recovery receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | inventory_amount = attributable campaign exchange / accepted campaign net plate kg. Retain numerator unit and divide all grade-matched records by the same positive denominator. Use one complete matched reporting-period pool for the same product, grade, route, site and reference state, including all attributable startup/shutdown, wholly failed or zero-output batches, rejects, work in progress and rework. Sum raw numerator totals before dividing once by the strictly positive accepted net output; count reworked product once only at final acceptance. Never average batch ratios or omit failed activity. A pool with no accepted output retains its absolute unnormalized inventory and requires review. | cp_mass; cp_material; cp_energy; cp_water; cp_waste; cp_effluent; cp_air | exchange per 1 kg reference flow |  |
| electricity_units | electricity | electricity_MJ = measured_kWh * 3.6; preserve supply voltage and meter boundary. This unit conversion does not establish supplier technology or a steam enthalpy basis. | cp_energy | MJ electricity |  |
| liquid_mass | water; developer; replenisher; gum; wastewater | solution_kg = measured_solution_L * measured_density_kg_per_L at recorded temperature/grade. Apply composition fractions only in the species ledger; retain complete product/waste solution exchanges. | cp_material; cp_water; cp_waste | wet solution kg and separate constituent kg |  |
| outfall_load | aluminium_water; cod_water; ipa_water | load_kg = sum(concentration_mg_per_L * discharged_bulk_solution_m3) / 1000 over matched samples. Concentration and volume must describe the same whole liquid, not carrier-water volume. Preserve analyte definition and representative flow weighting; nondetect handling and uncertainty are explicit. | cp_effluent | actual chemical kg or COD oxygen-demand kg | epa-metals-2007-1994 |
| species_balance | ipa_air | air_release_kg = chemical_input_kg + opening_stock_kg - closing_stock_kg - product_retained_kg - exported_waste_constituent_kg - recovered_export_kg - actual_water_release_kg - other_evidenced_release_kg - evidenced_destroyed_kg. Every term is IPA constituent mass over the same perimeter; stock, retained, waste, recovery and medium terms are mutually exclusive. Internal reuse cancels; unexplained residual is not an assumed release. | cp_air; cp_material; cp_waste | IPA chemical kg to actual outdoor air | epa-printing-eiip-2002 |
| plate_area_mass | reference_plate; plate_blank | complete_plate_kg = measured_same_grade_area_m2 * measured_complete_kg_per_m2 at the same coating/gum/moisture state; or measured count * measured same-grade complete kg per plate. Derive factors from traceable weighed samples and area/count, with sampling uncertainty. Gauge times nominal metal density excludes coating/protective layers/water and is not a whole-plate conversion. | cp_mass; cp_material | complete plate kg, with dry-solids/water subaccounts |  |
| carrier_water | water_discharge | carrier_water_m3 = measured_bulk_solution_kg * measured_water_mass_fraction / water_density_kg_per_m3 at documented temperature. Use a supported water density and compatible composition method; bulk solution density is not automatically carrier-water density. Reconcile with separately inventoried constituents; whole solution volume remains the basis for concentration-derived analyte loads. | cp_water; cp_effluent | actual carrier water m3 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | all inventory rows | Match route, plate grade, campaign and acceptance state; no recipe, yield, area-to-mass or run-life default. | cp_mass; cp_material |
| quality_identity | all inventory rows | A broad identity is conditional on physical inclusion and compatible provider/reference quantity. Blank UUIDs and source metadata conflicts remain disclosed and block unsupported linking. | current SDS; provider specification; direct identity/reference evidence |
| quality_monitoring | elementary outputs | Record actual receiving compartment, flow-weighted measurements, species basis, blanks/recovery, detection limits, matrix interference and uncertainty. A sum indicator does not hide a toxic species. | cp_effluent; cp_air; epa-metals-2007-1994 |
| quality_balances | all inventory rows | Retain physical and allocated-burden accounts separately, justify residuals and conditional absence, and document temporal/site/technology representativeness and data gaps. | cp_water; cp_waste; cp_service |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_plate | Require the exact physical qualifiers, one accepted complete plate output, a compatible product identity and Mass/kg reference. Broad classification language does not establish an average mixed-media recipe or scientific approval. |  |
| validate_denominator | all inventory rows | All rows and stage aggregates use per 1 kg reference flow, divided by the same accepted complete net plate kg for the matching grade/campaign. Item count and surface area are diagnostic fields; neither substitutes for whole-product kg without measured same-grade conversion. |  |
| validate_balance | all inventory rows | Reconcile physical aluminium, water including retained moisture and inlet/outlet humidity, coating/solvent carbon, packaging/returns, maintenance consumables, energy and stocks before any burden allocation. Unknown composition, missing flow identity, provider basis or unexplained material residual remains an explicit data-package gap; a successful UUID read alone cannot complete the dataset. |  |
| validate_species | elementary outputs | Check actual release point, CAS, medium and quantity basis. Aluminium is kg as Al, COD is kg oxygen demand, water discharge is liquid m3 and water vapour is kg to air. Keep individual solvent/species inventories and report COD/LCIA overlap; no VOC/PM/metal double count, wastewater-as-pure-water substitution or correction-flow identity. | epa-metals-2007-1994;epa-printing-eiip-2002 |
| validate_applicability | conditional rows | Require recorded absence or actual records for each conditional stream. Current supplier/SDS and stage records determine additional atomic exchanges. Historic plant factors, brochure bath capacities, exposure dose and press-run maxima are not universal foreground quantities. | fuji-lh-ple-2019 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground platemaking dataset; explicit gate/physical boundary metadata |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Background for matching positive thermal aqueous-developed aluminium plate printing models after upstream verification |
| excluded_use | Cylinder/stone/type/process-free/printed-goods methodology; unverified regeneration or mixed-media averages; default per-impression burdens |
| required_metadata | aluminium alloy and whole-plate gauge; positive thermal coating grade and supplier; imaging system and acceptance; actual developer/replenisher concentration; rinse and gum/drying state; unbaked and unused state; complete net mass, retained moisture and plate area; declared press/run compatibility without assumed life; electricity delivery voltage/property basis; effluent route and waste receivers |
| required_quality_disclosure | Campaign/site representativeness, UUID/provider-basis gaps, composition/species gaps, balance residuals, conditional-absence evidence, allocation/recycling convention and actual service account |
| update_trigger | Changed plate/coating/development route, provider basis, outfall, receiver or energy-delivery conditions, or new reliable evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-sts-image-carrier-2007 | official_guidance | European Commission, Surface Treatment using Organic Solvents BREF, August 2007, §2.2.2, printed pp15–16 / PDF pp59–60. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-04/STS_Adopted082007.pdf | Historical route distinction: aluminium offset/CTP versus gravure plating; no historic recipe, emission or quantity defaults. |
| fuji-lh-ple-2019 | handbook | FUJIFILM, Superia LH-PLE Overview, EU3877 V01 11 19, PDF pp1–2. https://asset.fujifilm.com/www/be/files/2020-11/f0d8ad4d63b41189ffbfb788aee18814/EU3877_Superia_LH-PLE_Overview_V1_web.pdf | Product-specific positive thermal developer/replenisher/gum and unbaked/baked distinction; brochure run, exposure and consumption values are not generic quantities. |
| epa-printing-eiip-2002 | official_guidance | US EPA, EIIP Volume II Chapter 15, Printing, Packaging and Graphic Arts, May 2002, §4.1.1, printed 15.4-1–2 / PDF pp31–32. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Material-balance measurement and capture/reuse distinction for imaging/prepress cleaning; collect site waste/stock/species terms without retained/control default factors. |
| epa-metals-2007-1994 | official_guidance | US EPA, Method 200.7 Revision 4.4, 1994, §1.1, §1.3–1.5, printed 200.7-2–3 / PDF pp3–4. https://www.epa.gov/sites/default/files/2015-08/documents/method_200-7_rev_4-4_1994.pdf | Aluminium CAS 7429-90-5 and dissolved/total-recoverable sampling/digestion conditions; no oxidation-state identity or emission quantity. |
