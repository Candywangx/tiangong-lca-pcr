---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-footwear
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Counter retail services for paired casual shoes with leather uppers and rubber outsoles

## 1. Scope and Applicability

This service PCR covers the declared shoe construction and in-store route only. This is a partial incremental foreground before mandatory common administrative/remote-IT support completion under b_completion and c_completion; it cannot be used as a complete retail-service dataset before that aggregation. The reference is a completed pair retail service, while merchandise manufacture remains a separately coupled receiving background. All quantity and provider evidence must be collected; an unknown is not a zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-footwear |
| classification_refs | CPC 3.0 62134; narrower subset of non-specialized store retail trade services, of footwear |
| covered_products | One declared homogeneous SKU, colour, size system, size and width of new matched left/right low casual shoes, leather upper and rubber outer sole; actual animal species, tanning/coating, lining, sock, laces, adhesive and sole compound declared from supplier BOM. Leather is not proof of bovine origin. |
| excluded_products | Sports, protective, orthopaedic, skating, asbestos or second-hand footwear; sandals, boots, parts, loose insoles, mixed sizes and mixed materials; online delivery, repair, polishing, manufacture and consumer wearing. |
| representative_product | Counter retail services for paired casual shoes with leather uppers and rubber outsoles; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Ambient all-electric non-specialized store with electric resistance fan heating and natural ventilation, no mechanical cooling or refrigerant circuit; manual stock handling and disposable cellulose floor wipes; receiving, pair/size inspection, dry storage/display, supervised indoor try-on, counter checkout and handover, return inspection and disjoint residual dispatch. No shoe treatment or on-site manufacture. Personal employee meals, sanitation and commuting, and consumer travel/use are outside this incremental service; disclose this exclusion without claiming a whole-store or shoe life-cycle inventory. |
| market_state | New dry finished shoes; indoor-tried but still saleable status explicitly inspected. Original pair box and stuffing remain a receiving-background component until physically discarded; replacement store packaging is separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail inspection, fitting assistance and qualified counter handover of the declared shoe pair |
| How much | 1 completed pair-service; 1 Item(s) is one service for exactly one matching left shoe and right shoe, never one single shoe |
| How well | Both shoes match SKU, size, width, colour and declared construction; inspection records condition and fit decision; recipient accepts possession and agreed condition. Price/payment alone does not prove acceptance. |
| How long or cycle | One prospectively fixed same-configuration accounting pool through the declared return-maturation cutoff, retaining all operating, idle, failed and zero-sale intervals; late events revise that original pool. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter retail service for paired leather-upper rubber-sole casual shoes in a non-specialized store |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and pool ID; SKU/colour; animal species and upper coating; sole compound; lining/sock/lace/adhesive BOM; size system/size/width; original_pair_id and left/right_source_id (no re-pairing); actual pair mass excluding packaging; try-on and acceptance gates; return cutoff/version; original packaging; shared drivers; asset lifetime model; background ownership S/F/T/O; provider scope |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q counts actual matched pairs; no automatic 2 shoes=1 pair without matching identities and final acceptance. |
| m_mass | water; cleaner; cleaner_container; receipt_core; receipt_wrap; receipt_carton; floor_wipe; tryon_socks; receipt; bag; box; stuffing; film; unworn_transfer; failed_retained; cleaner_bottle_waste; shoe_waste; cardboard_waste; mixed_dry_waste; effluent | Mass | kg | Use measured net kg in the declared material state. g/1000; a count conversion uses actual batch component kg/count and rejects mixed batches. A matched pair mass M_pair=m_left+m_right excluding packaging, not a fixed conversion for other sizes or single failures. |
| m_energy | electricity | Net calorific value | MJ | 1kWh=3.6MJ; apply conversion once after raw meter reconciliation, before one division by Q. |
| m_asset | building; shelf; bench; mirror; pos; luminaire; hvac | Number of items | Item(s) | An item is a complete identified asset lifecycle package; fractional amount is exposure/lifetime, not kg of repair parts or hours labelled as count. |
| selected_freight_identity | van_loaded; truck_loaded | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The selected road-freight identity uses the official goods-transport property/unit.1kg*km=0.001t*km; preserve the declared original quantity/attribution mode and convert only once. Actual vehicle, cargo conditions and provider stages remain independent applicability gates, with no assumed background or extra loaded share. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Shoes and original packaging physically received at the store gate with supplier manufacture and inbound freight backgrounds identified separately; gross receiving events are not the service output. |
| starting_condition_role | Incremental retail service with explicit receiving-gate merchandise background coupling; not a shoe-manufacturing dataset. |
| product_classification_scope | Only the declared narrower 62134 construction and counter route; groups 294/295/296 do not become equivalent to this scope. |
| recursive_input_rule | No same-category retail-service input is silently replaced by the current output. External retail steps require a separately delimited service and no overlap. |
| upstream_dataset_requirement | Attach each receiving lot original product/packaging and inbound freight background at actual gate, original quantity and version. Successful sold goods stay separately attachable as B_S/Q; retail-caused irrecoverable failure B_F/Q enters this service. Supplier/internal transfer B_T and open stock B_O retain an explicit signed owner, never disappear. |
| disclosure | Publish incremental service plus separate B_S, B_F, B_T, B_O reconciliation, original gross events, actual dates and cutoff/version; no full shoe life-cycle or legal conformity claim. |

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| b_product_family | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. | all inventory rows |  |
| b_scope | The declared construction and route are eligibility gates. Only original matched pairs qualify: retain original_pair_id and left/right_source_id. Re-pairing shoes from different original pairs is outside this route and blocks completeness until a separately reviewed extension allocates each original shoe background and all leftover singles. Same-label shoes with different animal species, sole compounds, sizes or widths form separate homogeneous pools; no sport/part/service expansion from classification breadth. | all | src_un; src_clarks; src_label |
| b_operations | Include receipt inspection, storage, fitting bench/mirror, try-on resources, lighting, checkout/POS, electric resistance fan heating, cleaning, packaging, returns and actual residual transfers. The all-electric route excludes combustion only with signed site inspection and utility evidence; all observed outgoing supplier/internal handover and waste-carrier backgrounds must declare whether pickup/haul and treatment are included. Verify provider actual loaded and empty routes, distance, gross load and idle time; an empty route is not zero activity because t*km=0. Missing provider transport scope or additional observed substances/transport require atomic cards, single-process protocols and bilingual sync before completeness. | all | src_retail |
| b_assets | Each asset card is one evidenced complete-unit lifecycle provision package: manufacturing, installation, non-operational maintenance/replacements and terminal treatment for the specified asset only. Exclude its operating electricity, cleaning and merchandise from that package. Building shell excludes all separately listed fixtures, bench, mirror, POS, luminaires and fan-heater. Maintenance replacements mean parts only, never a complete successor asset: a whole replacement gets its own new serial and lifetime history, with no duplicate package-contained part exchange. No package is presumed available: missing signed scope/model, lifecycle mass/carrier evidence or missing actual equipment blocks completed dataset use. | assets | src_retail; src_ghg |
| b_background | Maintain original receiving backgrounds once per uniquely traced shoe and packaging component: B_in+B_opening=B_S+B_F+B_T+B_O. Money credits cannot move physical goods or change ownership without evidence. No-sale failures remain in the prospectively fixed pool. Unworn transfer and damaged waste/retained-failure carriers have different actual destinations/states; do not infer waste from a refund. | retail; residual | src_ghg |
| b_completion | Mandatory common support modules cover actual administrative/back-office work, transaction-network/remote IT, omitted facility support and actual extra equipment. For each module: fix provider/site/process and same pool/version; enumerate atomic actual utilities/materials/carriers, direct raw meters/invoices/stock and event ledgers, actual complete-unit assets under c_assets, provider operation/maintenance/EOL scope and absence evidence. Record collector/time/unit/calibration/coverage and all beneficiaries. Direct subdivision first; shared active administration by observed task seconds and remote transaction service by actual message/transaction counts; retain idle support via occupied support area-hours and all closed/failed periods. Unknown scope or zero/unknown all-beneficiary driver blocks completion. No unnamed combined resource flow may stand in for these module exchanges; each module must expose parsed cards, protocols, formulas, raw numerators and evidence before aggregation. | all | src_ghg; src_retail |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Receiving, fitting and counter service | required | All declared pools; each atomic row conditional on observed presence | Core service and support | 1 Item(s) retail_service |
| residual | State-specific residual dispatch | required | All declared pools; each atomic row conditional on observed presence | Core service and support | 1 Item(s) retail_service |
| assets | Complete asset lifecycle provision | required | All declared pools; each atomic row conditional on observed presence | Core service and support | 1 Item(s) retail_service |
| logistics | Actual disjoint outward logistics | required | All declared pools; each atomic row conditional on observed presence | Core service and support | 1 Item(s) retail_service |
| support_completion | Mandatory common-support completion | required | All declared pools; each atomic row conditional on observed presence | Core service and support | 1 Item(s) retail_service |

### Process: Receiving, fitting and counter service (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

3.6 times attributed raw kWh E from disjoint meters under c_shared, divided by Q; includes stockroom, fitting, lights, POS, fan-heater, cleaning and standby; supplier grid/voltage/background separately verified.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Tap water (`water`)

Attributed imported raw V_water*rho_water(T) / Q; only service floor-cleaning water; personal sanitation is excluded. Import meter already excludes internal reuse: never subtract it again.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Aqueous sodium dodecyl sulfate floor-cleaning solution (`cleaner`)

Actual dispensed whole solution kg attributed / Q; SDS safety data sheet, concentration, supplier batch and water content required; no extra surfactant-component exchange or duplicate solution water input. Only this declared cleaner route qualifies.

- Selected flow: Aqueous sodium dodecyl sulfate floor-cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Disposable cellulose floor-cleaning wipe (`floor_wipe`)

Actual net raw kg consumed (actual dry new wipe kg, no double-counted absorbed cleaner/water; dirty entire carrier output includes it once), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Disposable cellulose floor-cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Disposable nylon try-on foot sleeve (`tryon_socks`)

Actual net raw kg consumed (unused/used issue-return stock including unsuccessful trials, single-foot trials and damaged unused sleeves), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Disposable nylon try-on foot sleeve
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Thermal receipt paper (`receipt`)

Actual net raw kg consumed (net thermal-paper kg excluding actual core and transport tare, including test/void print; unprinted rolls, printed WIP and issued/void paper separately balanced by c_consumables), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Thermal receipt paper
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_receipt_roll`; `src_ghg`

###### Kraft paper carry bag (`bag`)

Actual net raw kg consumed (actual issued replacement/new bags, returns and scrap by state), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Kraft paper carry bag
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Corrugated paperboard replacement shoe box (`box`)

Actual net raw kg consumed (retailer-added boxes only; original received shoe box remains in original background), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Corrugated paperboard replacement shoe box
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Paper shoe-stuffing tissue (`stuffing`)

Actual net raw kg consumed (retailer-added tissue only, including discarded unused tissue), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Paper shoe-stuffing tissue
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Polypropylene protective shoe bag (`film`)

Actual net raw kg consumed (retailer-added bags only; original supplier packaging excluded), direct attributed by pair/event or c_shared then / Q; count-to-mass requires same-batch calibrated weighing, no nominal pair mass.

- Selected flow: Polypropylene protective shoe bag
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Complete HDPE-body floor-cleaner bottle assembly (`cleaner_container`)

Actual complete original dry bottle-assembly kg attributed by c_consumables / Q: HDPE body plus its actual closure/tamper ring/liner, label and adhesive as present in verified BOM, not dry HDPE polymer alone. Weigh the entire empty dry assembly; supplier manufacturing scope must cover that exact complete assembly once. Cleaner solution/residue is excluded from this input; do not duplicate it or bottle components. Under verified whole-package provider mode this row records physical kg only, with no second bottle-manufacture background.

- Selected flow: Complete HDPE-body floor-cleaner bottle assembly
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_retail`

###### Spiral-wound paperboard receipt-roll core (`receipt_core`)

c_consumables determines actual whole dry component kg and its one manufacturing background attribution / Q. It is not thermal-paper kg or a corrugated shoe box. Under verified whole-package provider mode this row is physical kg reconciliation only, with no separate component-manufacture background. Verify exact component BOM including attached adhesive/tape/labels/inserts; actual material/state differs require a matching card, never a default mass.

- Selected flow: Spiral-wound paperboard receipt-roll core
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_receipt_roll`; `src_ghg`

###### Complete paper receipt-roll wrapping assembly (`receipt_wrap`)

c_consumables determines actual whole dry component kg and its one manufacturing background attribution / Q. It is not thermal-paper kg or a corrugated shoe box. Under verified whole-package provider mode this row is physical kg reconciliation only, with no separate component-manufacture background. Verify exact component BOM including attached adhesive/tape/labels/inserts; actual material/state differs require a matching card, never a default mass.

- Selected flow: Complete paper receipt-roll wrapping assembly
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_receipt_roll`; `src_ghg`

###### Complete corrugated receipt-roll transport-carton assembly (`receipt_carton`)

c_consumables determines actual whole dry component kg and its one manufacturing background attribution / Q. It is not thermal-paper kg or a corrugated shoe box. Under verified whole-package provider mode this row is physical kg reconciliation only, with no separate component-manufacture background. Verify exact component BOM including attached adhesive/tape/labels/inserts; actual material/state differs require a matching card, never a default mass.

- Selected flow: Complete corrugated receipt-roll transport-carton assembly
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_receipt_roll`; `src_ghg`

#### Outputs

##### Product flows

###### Counter retail service for paired leather-upper rubber-sole casual shoes in a non-specialized store (`retail_service`)

Q/Q=1; c_accept determines Q from qualified matching-pair acceptance and revocations, independent of physical stock and cash.

- Selected flow: Counter retail service for paired leather-upper rubber-sole casual shoes in a non-specialized store
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_retail`
- Sources: `src_un`; `src_ghg`

### Process: State-specific residual dispatch (`residual`)

#### Outputs

##### Product flows

###### Unworn leather-upper rubber-sole casual shoe (`unworn_transfer`)

Measured gross physical outward unworn shoes to named supplier/internal recipient / Q, one actual state and custody event per shoe ID; intact singles are measured individually, not half a nominal pair. Excludes consumer qualified handover (not a second product output here).

- Selected flow: Unworn leather-upper rubber-sole casual shoe
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

###### Defective leather-upper rubber-sole casual shoe retained by external recipient (`failed_retained`)

Actual externally retained defective non-waste shoe carrier kg / Q only with named recipient, original shoe IDs, verified retail-gate defect/condition, acceptance revocation and signed B_F/B_T ownership. A later revocation without return reclassifies the original gross handover fate; it creates no new physical outward event. Consumer-wear damage is outside this route; no automatic waste from refund or financial credit.

- Selected flow: Defective leather-upper rubber-sole casual shoe retained by external recipient
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

##### Waste flows

###### Discarded leather-upper rubber-sole casual shoe (`shoe_waste`)

Actual dispatched consignment net whole-shoe kg / Q, including observed singles, matched pairs or damaged fragments linked to original shoe IDs; attached sole/upper/adhesive are within this carrier, not duplicate waste constituents.

- Selected flow: Discarded leather-upper rubber-sole casual shoe
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

###### Waste corrugated shoe-box paperboard (`cardboard_waste`)

Actual separately dispatched net dry paperboard consignment kg / Q including original boxes physically discarded; no duplicate original-box production input. Measure moisture/contamination and bind correct treatment background.

- Selected flow: Waste corrugated shoe-box paperboard
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

###### Non-hazardous mixed solid retail cleaning and fitting waste (`mixed_dry_waste`)

Actual consignment whole mixed-solid carrier net wet kg / Q under one collection contract, measured moisture/cleaner content, containing observed used nylon sleeves, tissue, receipt paper, kraft paper carry bags (including unused scrap), receipt-roll paperboard cores/paper wraps/corrugated transport-carton assemblies, PP bags and cellulose cleaning wipes; contract explicitly admits those actual source-ID carriers, and sorted representative component weighings/moisture, contract/consignment/BOM records reconcile every input-derived discard, retained stock and customer handover. Unknown acceptance or a separately collected component requires its own actual named carrier/protocol before completeness, not assumed disappearance or reuse of the shoe-box-only card. Composition and contamination measured, no constituent duplication and exclude liquid carriers and only the shoe/paperboard consignments already separately weighed and dispatched. A receipt carton included in this mixed consignment must not also enter cardboard_waste; record one actual carrier per source component. Hazardous contamination requires a separate actual card.

- Selected flow: Non-hazardous mixed solid retail cleaning and fitting waste
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

###### Aqueous retail floor-cleaning effluent (`effluent`)

Direct actual discharged V_eff*rho_eff(T,composition) attributed / Q, full liquid with dissolved cleaner and dirt; independent supply/evaporation/storage balance is QA only. No water-only reconstruction, no subtracting contained solids or water twice.

- Selected flow: Aqueous retail floor-cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

###### Discarded complete HDPE-body cleaner-bottle assembly with aqueous SDS residue (`cleaner_bottle_waste`)

Direct actual consignment whole bottle-assembly-plus-residue net kg / Q, including actual attached closure/liner/tamper ring/label/adhesive from its BOM; measure dry entire assembly and actual solution residue for identity, contamination and water QA, not duplicate constituent waste outputs. No assumption empty/non-hazardous: actual SDS and contractor determine classification; different material/hazard state needs its own matching card before completeness. Any actually detached cap/label/other part is source-ID traced to its actual separate carrier, removed once from this whole assembly and never lost; its absence/BOM is signed. Residue is not again effluent unless physically drained, measured and removed from this carrier.

- Selected flow: Discarded complete HDPE-body cleaner-bottle assembly with aqueous SDS residue
- Flow property / unit: Mass / kg
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residual`
- Sources: `src_retail`

### Process: Complete asset lifecycle provision (`assets`)

#### Inputs

##### Product flows

###### Complete store building-shell lifecycle provision (`building`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=occupied floor area times all calendar hours. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete store building-shell lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete shoe display-shelf lifecycle provision (`shelf`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=occupied shelf-volume times calendar hours. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete shoe display-shelf lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete fitting-bench lifecycle provision (`bench`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=occupied supported floor area times calendar hours including idle support. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete fitting-bench lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete fitting-mirror lifecycle provision (`mirror`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=served fitting-area times calendar hours. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete fitting-mirror lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete checkout-terminal lifecycle provision (`pos`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=active checkout seconds plus attributed standby seconds across all beneficiaries. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete checkout-terminal lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete store-luminaire lifecycle provision (`luminaire`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=served floor area times calendar hours. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete store-luminaire lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

###### Complete store electric resistance fan-heater lifecycle provision (`hvac`)

c_assets: sum complete serial-unit equivalents w_a,p,v / Q, exposure=served heated volume times calendar hours. One Item(s) is one complete specified asset lifecycle package under b_assets. Validate actual model, installed whole-unit mass/BOM, manufacture/installation, maintenance and terminal carrier model; no separate constituent, purchase or package-contained retirement flow.

- Selected flow: Complete store electric resistance fan-heater lifecycle provision
- Flow property / unit: Number of items / Item(s)
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `src_ghg`; `src_retail`

### Process: Actual disjoint outward logistics (`logistics`)

#### Inputs

##### Product flows

###### Loaded freight transport by diesel light commercial van (`van_loaded`)

c_transport computes actual raw loaded activity / Q; include only actual observed diesel light commercial van scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

###### Unladen route operation by diesel light commercial van (`van_empty`)

c_transport computes actual raw empty activity / Q; include only actual observed diesel light commercial van scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

- Selected flow: Unladen route operation by diesel light commercial van
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

###### Stationary idling operation by diesel light commercial van (`van_idle`)

c_transport computes actual raw idle activity / Q; include only actual observed diesel light commercial van scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

- Selected flow: Stationary idling operation by diesel light commercial van
- Flow property / unit: Time / h
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

###### Loaded freight transport by diesel rigid collection truck (`truck_loaded`)

c_transport computes actual raw loaded activity / Q; include only actual observed diesel rigid collection truck scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

The selected identity denotes road-freight activity, not an actual vehicle or LCI provider. Retain this card's stated cargo/vehicle, original mass basis and complete disjoint loaded-stage requirements. The official unit group uses1t*km=1000kg*km; apply any needed unit conversion once without another consignment/owner share. Empty and powered-idle sources keep their separate actual vehicle-km/vehicle-hour identities.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

###### Unladen route operation by diesel rigid collection truck (`truck_empty`)

c_transport computes actual raw empty activity / Q; include only actual observed diesel rigid collection truck scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

- Selected flow: Unladen route operation by diesel rigid collection truck
- Flow property / unit: Vehicle distance / vehicle*km
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

###### Stationary idling operation by diesel rigid collection truck (`truck_idle`)

c_transport computes actual raw idle activity / Q; include only actual observed diesel rigid collection truck scope not already contained in original inbound background, carrier treatment/pickup or another transport provider. It is one defined contracted vehicle service, not a fuel/component duplicate.

- Selected flow: Stationary idling operation by diesel rigid collection truck
- Flow property / unit: Time / h
- Amount rule: Attributed raw quantity divided once by final Q.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `src_ghg`; `src_retail`

### Process: Mandatory common-support completion (`support_completion`)

## 7. Allocation and Co-product Handling

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| a_shared | Subdivide and directly meter first. For residual shared fixed lighting/fan-heater/building/cleaning pools use declared occupied floor-area-hours including closed/idle intervals, summed over every actual beneficiary; POS use observed checkout-active seconds plus remaining standby distributed by beneficiary service-support area-hours. Allocate direct trial/packaging events by pair ID. Sum all beneficiary allocations back to full measured pools, retain no-sale beneficiaries and missing-driver uncertainty. No driver or zero all-beneficiary driver means unresolved allocation, not zero burden. | all | src_ghg |
| a_assets | Use persistent asset serial a, exposure e_a,p and signed expected total lifetime exposure L_a,v covering past, current and future beneficiaries: w_a,p,v=e_a,p/L_a,v. Manufacturing provision is w complete package units, never a new whole purchase per period. Revisions replace prior allocations using delta=w_new-w_old for each historical beneficiary; cumulative fractions must not exceed1. At retirement replace forecast L with the measured sum of all lifetime exposures, recompute and replace every past beneficiary allocation with e_p/sum_all_lifetime_e, then reconcile only the remaining rounding/model residual once over those same actual lifetime shares; never assign1-prior only to the last period. Terminal package carrier kg is actual whole-device kg times its lifetime responsibility once, not again by manufacturing fraction. Removed parts are separate within supplier package model; direct net terminal weighing never subtracts them again. | assets | src_ghg |
| a_pool | Use one common final Q for all raw attributed numerators; never divide an already normalized row again. Different exchange identities/properties/units cannot be added. Return/resale follows original unique shoe history; a revoked old service removes its old output even with no physical return. A later qualifying resale creates only its actual new service, never another merchandise manufacture background. No substitution/recycling credit is automatic. | all | src_ghg |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_retail | retail | retail_service and operational inputs | event_meter_stock_ledger | pool_id; version; cutoff; SKU; animal_species; BOM; size_system; size; width; colour; pair_id; original_pair_id; left_id; right_id; left_source_id; right_source_id; lot; event_id; event_date; physical_state; gross_received_shoes; gross_handover_shoes; gross_return_shoes; internal_in_shoes; supplier_out_shoes; internal_out_shoes; physical_waste_shoes; to_held_waste; waste_open; generated_from_goods; waste_close; source_portion_kg; external_moisture_dirt_kg; measured_source_loss_kg; mass_uncertainty; actual_count; paired_match; tryon_attempt_id; tryon_foot_side; trial_result; goods_open; goods_close; opening_stock; closing_stock; accepted_pair_event; revoked_event; old_event_id; financial_only_flag; destination; B_in; B_S; B_F; B_T; B_O; original_gate_quantity; supplier_side_allocation; side_composition; mass_allocation_justification; sensitivity; M_left; M_right; meter_id; parent_meter_scope; read_start; read_end; kWh; all_beneficiary_area_hours; active_seconds; standby_seconds; imported_water_volume; water_density; temperature; material_batch; bottle_source_id; bottle_complete_BOM; bottle_body_kg; closure_liner_tamper_kg; label_adhesive_kg; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; receipt_roll_id; roll_gross_kg; core_id; core_material; core_full_dry_kg; actual_nonpaper_adjunct_kg; actual_net_thermal_paper_kg; wrapping_BOM; wrapping_dry_kg; transport_carton_BOM; transport_carton_dry_kg; opening_unprinted_paper_kg; closing_unprinted_paper_kg; opening_printed_WIP_kg; closing_printed_WIP_kg; printed_WIP_source_ID; original_paper_source_ID; printing_meter_ID; printing_energy_share_MJ; prior_assigned_paper_kg; prior_assigned_printing_MJ; unallocated_WIP_paper_kg; unallocated_WIP_printing_MJ; original_pool_version; replacement_contribution_ID; issued_receipt_kg; test_void_scrap_kg; transferred_printed_kg; all_beneficiary_paper_draw_kg; all_beneficiary_solution_draw_kg; component_background_scope_ids; provider_mode; original_package_id; original_package_quantity; original_package_unit; package_background_scope_id; gross_kg; tare_kg; issue_kg; unused_return_kg; printed_stock; SDS; concentration; measured_kg_per_count; presence_absence_status | Receiving/checkout supervisor logs every shoe and trial/handover/return/revocation with original IDs and timestamps; utilities technician reads matched disjoint meters; warehouse keeper weighs input/return stocks by material batch and calibrates balance with traceable check masses. Supplier confirms species/BOM and original backgrounds. Signed site survey confirms each present/absent route, no blank means absent. | Item(s); kg; kWh; m3; s; m2*h | Every physical or acceptance event; daily stocks and meter reads, continuous electricity logger for shared circuits; batch conversions before use | Whole fixed pool, all shifts, closure and idle; follow every original shoe through cutoff and later corrections | Receiving gate, stockroom, fitting area, checkout and full shared store beneficiary ledger | per reference flow | Signed gate/acceptance/return slips, supplier BOM/ownership and inbound-freight evidence, meter map/calibration, stock weighings and all-beneficiary reconciliation; unknown stays unknown |
| cp_residual | residual | state-specific transfers and terminal carriers | consignment_ledger | pool_id; event_id; original_shoe_id; original_pack_component_id; bottle_source_id; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; core_id; receipt_roll_id; source_component_kg; kraft_bag_source_id; wrapping_carton_source_id; collection_contract_id; admitted_materials; sorted_composition_kg; retained_component_stock_kg; customer_handover_kg; recipient; state; gross_kg; tare_kg; consignment_net_kg; opening_waste_stock; generation_kg; closing_waste_stock; actual_dispatch; waste_open; generated_from_goods; waste_close; transfer_acceptance; provider_scope; loaded_route_km; empty_route_km; load_kg; idle_seconds; transport_activity_id; treatment_id; B_F; B_T; responsibility_signature; effluent_volume; effluent_density; temperature; composition; contamination; measured_water_supply; evaporation; storage_change; cleaning_solution_water; f_water_effluent; W_open; W_import; W_cleaner; W_other_source; W_solid_dispatched; W_evaporated; W_close; source_portion_water_id; balance_uncertainty; presence_absence_status | Dispatch officer weighs every consignment on calibrated scale and records recipient custody/treatment; separate intact shoe, damaged externally retained shoe, whole waste shoe, paperboard, mixed solid carrier and liquid. Technician directly meters/collects full liquid discharge and measures representative density/temperature/composition per cleaning batch. | kg; m3; kg/m3 | Every dispatch and cleaning batch; daily residual stock | Same original pool and all later linked dispatch/return corrections | Named store waste/return gates and actual receiving contractor | per reference flow | Scale checks, consignment receipts, photos/material-state audit, signed ownership/treatment and water balance; unknown destination/absence blocks completeness |
| cp_assets | assets | each identified complete asset lifecycle provision | serial_lifetime_ledger | asset_serial; package_id; package_version; exact_model; unit_count; installed_whole_kg; BOM; manufacture_scope; installation_scope; operational_exclusions; maintenance_event_id; replaced_parts; terminal_carrier_net_kg; terminal_measurement_mode; expected_total_lifetime_exposure; historical_exposure; current_exposure; future_exposure; all_beneficiaries; allocation_version; signed_revision; previous_allocations; delta_corrections; retirement_date; presence_absence_status | Facility engineer inventories building shell and every shelf, bench, mirror, POS, luminaire and fan-heater serial/model; verifies supplier complete-lifecycle package model, disjoint scopes and terminal carriers; measures asset-specific exposure under each card, signed total-life forecast and every revision against historical allocations. | Item(s); kg; m2*h; m3*h; s | At installation, monthly exposure, every maintenance/revision and retirement | Full asset history across all past/current/future periods and beneficiaries, not only current shop reporting window | Whole installed asset and exact contracted lifecycle package, excluding separately metered operations | per reference flow | Signed engineering forecast, full-life history/beneficiary totals, supplier stage/maintenance/EOL model and net whole-device/BOM-mode checks; no unverified package assumed complete |
| cp_transport | logistics | Actual carrier transfer vehicle activities | route_ledger | pool_id; route_id; vehicle_id; vehicle_class; fuel_type; consignment_id; actual_payload_kg; loaded_leg_km; empty_leg_km; stationary_idle_seconds; route_start_end; all_beneficiary_payload; reserved_capacity_kg; reservation_seconds; benefiting_loaded_legs; provider_scope; original_background_id; treatment_scope_id; included_empty_idle; exact_overlap_ids; presence_absence_status | Dispatcher records every loaded/empty leg and stationary idling interval from odometer/GPS and engine logger, actual calibrated payload scale and signed consignment; provider signs exact fuel/vehicle/capital/empty/idle/pickup/treatment boundaries. Reviewer removes exact overlap only, with all-beneficiary drivers. | kg; km; s; t*km; vehicle*km; h | Every leg and idle event | All actual outward carrier routes including failures and no-sale periods | Van supplier/internal transfers and rigid-truck collection routes; other observed vehicle types require matching cards | per reference flow | GPS/odometer checks, engine logs, payload-scale checks, signed provider scope and exact activity-ID deduplication |
| cp_completion | support_completion | Mandatory common administrative, remote IT and facility support modules | support_module_ledger | module_id; provider; site; process; original_pool; cutoff; version; atomic_exchange_id; state; medium; property; unit; direct_raw; shared_raw; meter_invoice_stock_ids; collector; timestamp; calibration; coverage; administrative_task_seconds; transaction_message_count; occupied_support_area_hours; all_beneficiary_drivers; asset_serial; lifetime_version; original_denominator_D_m; prior_contributions; exact_overlap_source_activity_ids; Q; presence_absence_status | Support manager obtains every actual module raw meter/invoice/stock, task/network activity and complete asset ledger under b_completion, verifies each atomic exchange identity/provider stage and module-specific parsed protocol, signed whole-pool/beneficiary attribution and exact overlap IDs. | kg; MJ; Item(s); s; m2*h | Every support activity, monthly whole-pool reconciliation and every version update | Same original pool including closed/failed/no-sale intervals, full asset histories | Every actual local and remote common support beneficiary | per reference flow | Raw module/provider evidence, parsed cards/protocols, calibrations, signed attribution and c_completion reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service | Q=count_distinct(original_pair_id having exactly one final valid qualifying acceptance at cutoff/version), after applying each linked revocation once to its original acceptance. Retain gross acceptances/revocations separately; do not subtract revocations again from this already final-valid count. Repeated scans and trials are not extra service. Pure financial adjustment with valid acceptance changes neither Q nor physical stock. Wrong size, left-left or mismatched pair and recipient retention without qualified acceptance contribute no service. Zero-output whole pools are retained unnormalizable, never dropped. | accepted_pair_event; revoked_event; old_event_id; original_pair_id; pair_id; left_id; right_id; SKU; size; width; financial_only_flag; cutoff/version | Q Item(s) and corrected original-pool version | src_ghg |
| c_stock | retail; residual | For each shoe ID/state: goods_open+gross_received+gross_return+internal_in=gross_handover+supplier_out+internal_out+to_held_waste+goods_close. Separate held-waste control volume: waste_open+generated_from_goods=actual_dispatch+waste_close; never count generation and dispatch as two goods exits. Acceptance revocation is not physical return. Track original shoe source portions through fragments and held waste; separate packaging ledger. These count/identity equations do not establish kg closure: net measured shoe/pack source kg plus measured external moisture/dirt gains equals outgoing source portions, remaining stock, waste generation and measured source-material/moisture losses in one declared control volume, with uncertainty. Actual removed source portions enter exactly one carrier; unresolved mass changes are investigated, not set to zero. Q is independent. | opening_stock; gross_received_shoes; gross_return_shoes; gross_handover_shoes; supplier/internal movements; to_held_waste; waste_open; generated_from_goods; actual_dispatch; waste_close; goods_close; original_pack_component_id; source_portion_kg; external_moisture_dirt_kg; measured_source_loss_kg; mass_uncertainty | Count and measured kg reconciliations by physical state | src_retail |
| c_background | retail; residual | For split single-shoe fates, first subdivide supplier manufacture and inbound load by actual left/right source records; if unavailable, declare measured same-original-pair net-mass allocation m_side/(m_left+m_right), with both actual masses, composition and physical-basis justification plus sensitivity, never default1/2. Original packaging already serving its intended shoe-protection function follows the parent shoe background fate, not automatic F merely because unboxed; its actual waste treatment stays here. Partition each original receiving product/packaging and inbound freight background once among final S successful, F retailer-responsible failed, T transferred-owner and O open. For each source dataset/version z, B_z,k is an original-gate activity quantity in the declared unit of that source (pair, shoe, kg or freight unit); keep source/unit coordinates separate, never sum kg, counts or impacts. B_S/Q remains separately attachable to goods; B_F/Q is explicitly added to service; B_T/B_O retained with owner and original quantities. Resale never duplicates original production; failure descendants inherit shares summing original, not one whole background each. Late corrections update original numerator, ownership and Q together. | original_gate_quantity; original_shoe_id; original_pack_component_id; supplier product/packaging and inbound-freight dataset/version; B_in; B_S; B_F; B_T; B_O; signed ownership; actual dates; supplier left/right manufacturing allocation; actual m_left/m_right; allocation justification/sensitivity | B_S/Q; B_F/Q; retained B_T and B_O with original units, no duplicate physical carrier | src_ghg |
| c_mass | retail; residual | For each batch/material state m=gross-tare, or observed count*same-batch measured kg/count; these are exclusive modes. For consumables other than receipt paper and its source packaging, raw consumption=opening+receipts-unused returns-closing usable stock, retaining scrap/voids. Receipt paper/WIP and complete source packaging must use c_consumables rather than that unprinted-stock shortcut. Direct dispatch kg is already net and uses no generation/stock correction. Pair M=m_left+m_right excludes package. No area/volume-based material label percentage is a mass fraction. | gross_kg; tare_kg; measured_kg_per_count; actual count; batch; state; M_left; M_right; opening/receipt/unused_return/closing/printed stock | Raw batch kg, no normalization yet | src_label |
| c_shared | electricity; water; cleaner; cleaner_container; receipt_core; receipt_wrap; receipt_carton; floor_wipe; tryon_socks; receipt; bag; box; stuffing; film; effluent | x_p=x_direct,p+sum(x_shared_pool*d_p/sum_all d). Use disjoint meter totals; subtract submeter only when its parent actually contains it. d=area-hours for fixed store support; checkout active-seconds plus standby area-hour share as a_shared. Direct events have d=actual pair/event allocation. Unknown driver or coverage prevents completion; retain closures, failures and all beneficiaries. E_MJ=3.6*E_kWh once. | raw disjoint meter totals; parent_meter_scope; direct event kg; all_beneficiary_area_hours; active_seconds; standby_seconds; full-pool totals | Attributed raw kg and MJ, reconciled to full pool | src_ghg; src_retail |
| c_liquid | water; effluent | Imported water m=V_water*rho_water(T). Direct full effluent m=V_eff*rho_eff(T,composition); measured discharge already reflects storage/evaporation. Independent water-species QA uses W_open+W_import+W_cleaner+W_other_source=J*f_water_effluent+W_solid_dispatched+W_evaporated+W_close, all kg water; J is direct whole liquid kg, f_water_effluent is measured water mass fraction. Match water source portions and mutually exclusive destinations: wipe absorbed water belongs to measured retained stock or one solid dispatch or one liquid discharge, never several. Include original wet material water only when it crosses this control volume. No reconstruction replaces J or corrects it a second time. Unknown dissolved dirt or carrier coverage blocks closure, not zero. | imported_water_volume; water_density; effluent_volume; effluent_density; temperature; composition; cleaning_solution_water; f_water_effluent; W_open; W_import; W_cleaner; W_other_source; W_solid_dispatched; W_evaporated; W_close; source_portion_water_id; uncertainty | Direct raw kg water and whole-liquid carrier with independent QA balance | src_retail |
| c_assets | building; shelf; bench; mirror; pos; luminaire; hvac | For each actual serial unit w=e_current/L_total,v; raw provision=sum w. e and L use the same card-specific exposure unit. L=past+current+forecast future across all beneficiaries, signed/versioned. Recompute and replace historical shares at revision, record deltas; at retirement first recompute/replace all historical allocations using the actual full-life denominator; distribute only any final rounding/model residual once across all lifetime shares, not to the last period alone. Count one complete package per actual asset over full history, not acquisition stock plus consumed provision. | asset_serial; current_exposure; historical_exposure; future_exposure; expected_total_lifetime_exposure; all_beneficiaries; signed_revision; previous_allocations; package_version; installed_whole_kg; maintenance and terminal_carrier_net_kg/mode | Raw complete-unit provision Item(s), plus full-life carrier/scope reconciliation | src_ghg |
| c_normalize | all | For each compatible actual exchange x_i attributed raw amount, q_i=x_i/Q once. Reference q_service=1. If an external package is normalized, first recover its raw numerator by its evidenced original denominator/pool/version; deduplicate exact activity/stage IDs, sum only identical exchange/property/unit raw numerators, divide common Q once. Supplier package carriers remain internal. Q<=0 is retained unnormalizable; unknown values never become zero. | Q; each attributed raw kg/MJ/Item(s); external original denominator/pool/version; exact activity and scope IDs | Per one final accepted matching-pair service inventory | src_ghg |
| c_transport | van_loaded; van_empty; van_idle; truck_loaded; truck_empty; truck_idle | Loaded raw activity=sum(actual payload kg/1000*actual loaded leg km), attributed by actual consignment load. Empty vehicle*km=sum actual empty leg km; idle h=sum stationary idle seconds/3600, never empty t*km=0. Direct-purpose route allocation first; shared empty/idle use the documented benefiting loaded-leg payload*distance shares, retaining every beneficiary and failed trip. If all loaded drivers are zero, use positive evidenced reserved capacity kg*reservation seconds over all intended beneficiaries; unknown or all-zero drivers block completion. When signed provider activity already includes actual empty/idle, keep those records as QA and do not add separate activity; otherwise add only uncovered actual phases via their specific cards, with no fuel/capital/pickup/treatment duplicate. All attributed raw activities divide Q once. | actual_payload_kg; loaded_leg_km; empty_leg_km; stationary_idle_seconds; all_beneficiary_payload; benefiting_loaded_legs; reserved_capacity_kg; reservation_seconds; provider_scope; included_empty_idle; original_background_id; treatment_scope_id; exact_overlap_ids; Q | Attributed raw t*km, vehicle*km and h separately, then each / Q | src_ghg; src_retail |
| c_completion | all | For support module m and atomic exchange i: X_m,i=direct_raw_m,i+shared_raw_m,i*d_m,p/sum_allbeneficiary_d_m. d is actual administrative task seconds, remote transaction/message count, or occupied support area-hours for idle/fixed facility support under b_completion; retain failed/no-sale periods and reconcile allocations to measured full module totals. Restore a normalized source module using its evidenced original denominator D_m and version: raw=normalized_value*D_m, once. Match common original pool/cutoff/version and replace revised old contributions, remove exact source-activity/provider-stage overlaps. Add only identical exchange identity/state/medium/property/unit raw numerators to foreground; capital uses c_assets over its full lifetime. Divide the final compatible raw sum by the same final Q once. No completed retail claim without every actual support module and signed compatibility/deduplication reconciliation. | module_id; provider/site/process; original_pool/cutoff/version; atomic_exchange_id; state; medium; property; unit; direct_raw; shared_raw; administrative_task_seconds; transaction_message_count; occupied_support_area_hours; all_beneficiary_drivers; asset_serial/lifetime_version; original_denominator_D_m; prior_contributions; exact_overlap_source_activity_ids; Q | Complete compatible raw sum and one common-Q normalization, or explicit incomplete status | src_ghg; src_retail |
| c_consumables | cleaner_container; cleaner_bottle_waste; receipt; receipt_core; receipt_wrap; receipt_carton; bag; mixed_dry_waste | Bottle input is the directly weighed complete empty dry assembly; its checked BOM body+closure/liner/tamper ring+label/adhesive must reconcile to that mass. Final bottle carrier is actual complete remaining assembly+actual residue, directly weighed once; detached source parts and drained residue go to their measured actual carrier only. Allocate bottle manufacturing once across all source-bottle solution draws by actual solution kg, retaining failed/idle pools; retained bottle/solution stock keeps unconsumed responsibility. Receipt route is verified paperboard-core rolls with actual paper wrapping and corrugated transport-carton assemblies; plastic/unknown/coreless states are not presumed equivalent or zero and require matched extension/absence evidence. Roll net paper=actual roll gross minus actual whole core and any measured non-paper adjunct, excluding separate wrapping/carton tare; do not subtract thermal coating, which belongs to paper. Current raw paper consumption=opening_unprinted+received_net_paper-unused_returns-closing_unprinted+opening_printed_WIP-closing_printed_WIP-transferred_printed; reconcile to issued_receipts+test_void_scrap+actual paper losses with uncertainty. Printing WIP is never treated as an unused roll or counted again as a new supply. Carry each printed-WIP source_ID with both its original-paper responsibility and the corresponding actually metered printing-energy share across periods. Amounts already assigned to a beneficiary are never charged again; unallocated paper/printing-energy responsibility follows that original WIP source into its evidenced later use. Attribution corrections replace the prior contribution in the same original pool/version, not add a new duplicate. The printing-meter share cannot remain charged to the old pool and be charged a second time on WIP withdrawal; reconcile all periods and beneficiaries to the original paper quantity and actual printing-meter total, keeping site standby allocation separate. Measure core/wrap/carton whole dry kg per source lot, trace all component source IDs and allocate their manufacture once by the actual net-paper draw of each beneficiary divided by all net-paper draws supported by that source component; retain open component responsibility and replace old shares at final audited disposal. Before completed use select exactly one evidenced provider mode for each bottle/roll source: component mode requires disjoint solution/complete-bottle or net-paper/core/wrap/carton manufacturing scopes attached once to the corresponding physical rows; whole-package mode attaches the verified complete source-package manufacture once at its measured original package quantity, while the component rows are physical quantity/stock reconciliation only with no second component background. This original package binding and physical component records must be explicitly linked; a package cannot also be applied as net-paper kg or solution kg. Unknown mode/scope blocks completeness. Never combine the two modes for one source package; no gross packaged-roll kg is labelled net paper, and no bundled original manufacture is added beside its component manufacture. Every known input-derived discard including kraft bags and receipt components must reconcile to held stock, actual customer handover or the contract-admitted mixed solid carrier; single consignment component audit establishes coverage and per-source attribution, not additional duplicate constituent waste outputs. Unknown core/BOM/provider/contract coverage blocks completeness, never zero. Attribute compatible raw quantities, then divide the common Q once. | bottle_source_id; bottle_complete_BOM; bottle_body_kg; closure_liner_tamper_kg; label_adhesive_kg; complete_dry_bottle_kg; actual_solution_residue_kg; detached_part_source_id; receipt_roll_id; roll_gross_kg; core_id; core_material; core_full_dry_kg; actual_nonpaper_adjunct_kg; actual_net_thermal_paper_kg; wrapping_BOM; wrapping_dry_kg; transport_carton_BOM; transport_carton_dry_kg; opening_unprinted_paper_kg; closing_unprinted_paper_kg; opening_printed_WIP_kg; closing_printed_WIP_kg; printed_WIP_source_ID; original_paper_source_ID; printing_meter_ID; printing_energy_share_MJ; prior_assigned_paper_kg; prior_assigned_printing_MJ; unallocated_WIP_paper_kg; unallocated_WIP_printing_MJ; original_pool_version; replacement_contribution_ID; unused_return_kg; issued_receipt_kg; test_void_scrap_kg; transferred_printed_kg; all_beneficiary_paper_draw_kg; all_beneficiary_solution_draw_kg; component_background_scope_ids; provider_mode; original_package_id; original_package_quantity; original_package_unit; package_background_scope_id; source_component_kg; collection_contract_id; admitted_materials; sorted_composition_kg; retained_component_stock_kg; customer_handover_kg; Q | Disjoint raw complete bottle/core/wrap/carton and net-paper kg; one manufacturing attribution and source-carrier reconciliation before /Q | src_bottle_spec; src_receipt_roll; src_ghg |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all | Each unbound row requires original official response/receipt, exact hash, observed state, bilingual name, product/waste/elementary type, qualifiers, compartment, property-unit chain and matching foreground provider. Electricity identity does not identify a grid supplier. No invented UUID or batch mass. | Row-specific binding checklist and source/provider matrix; unresolved is unverified, not zero |
| q_measurement | all | All protocols require complete raw records, identified collector/responsible reviewer, timestamp, coverage, calibration/check mass, meter topology and uncertainty. Missing/absent/observed zero are distinct. Signed survey supports each excluded route; additional actual materials or equipment need named atomic cards before completed use. | Signed raw ledgers, calibration and scope reconciliation over all beneficiaries and complete pool |
| q_assets | assets | Complete-unit packages must be evidenced stage by stage for actual whole installed object and all maintenance/EOL carriers; no double-counted building/fixture/device components or operating electricity. Missing model, whole-mass history, positive known full-life exposure, signed revision or beneficiary coverage blocks completeness. | Engineer/supplier signed exact package scope, serial ledger and lifetime version/delta ledger |
| q_bilingual | all | Both languages must preserve each card identity, direction/type/state, condition, negation, unit, denominator, formula, responsibility and mandatory completion condition. Parsed arrays, protocol process IDs and stable references must all agree. | Actual bilingual semantic review and parsed business-array comparison |

## 9. Validation Rules

| rule_id | Rule | Applies to | source_ids |
| --- | --- | --- | --- |
| v_accept | Reject mixed/unknown construction, unmatched pairs, missing acceptance or inconsistent corrected Q; keep zero pools explicitly unnormalizable. Physical stock, background S/F/T/O and financial ledgers reconcile independently with actual dates. | all | src_un; src_ghg |
| v_inventory | Require every present row and route, complete raw attribution, one final normalization, no overlapping meter/package/provider scope and complete observed destinations. Conditional absence requires signed evidence; unknown quantity/identity/destination/package is incomplete, not not_applicable or zero. | all | src_retail; src_ghg |
| v_assets | Reconcile all serial exposures and lifecycle package stages over every beneficiary; cumulative responsibility<=1, signed lifetime revision replaces old allocations, terminal residual once. A complete capital package cannot coexist with duplicate component/EOL foreground exchanges. | assets | src_ghg |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | candidate partial incremental foreground retail methodology with mandatory common-support completion |
| downstream_use | secondary_dataset; background_dataset after identity, collection, provider and methodology review |
| allowed_use | One declared same-configuration matching-pair service with separate receiving-background coupling |
| excluded_use | All-footwear equivalence, sole production, consumer wearing, automatic legal compliance or unverified completed inventory |
| required_metadata | All reference qualifiers, pool/cutoff/version, physical history, BOM/species/state, S/F/T/O original-gate responsibility, scope/provider IDs, asset lifetime and measurement uncertainty |
| required_quality_disclosure | Unbound identities, missing raw/provider evidence, absent-route proof, allocation uncertainty, zero pools and package lifetime revisions |
| update_trigger | SKU/species/size/construction, route/provider/cleaner/packaging, return gate, meter scope, asset/revised lifetime or source change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| src_un | official_guidance | UNSD CPC Version3.0, subclass62134 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62134 | Classification includes groups293–296; this PCR is a narrower construction/route, not full equivalence |
| src_clarks | literature | Clarks SS16 In-Season Catalogue2016, PDF35/printed33, Stratton Way26102520/26102519; https://clarks.scene7.com/is/content/clarks/Americas/US/B2B/Marketing/SS16/Catalog/Dual%20Gender%20Independent%20CatalogSS16.pdf | Historical leather-upper rubber-sole casual construction and multiple sizes/widths; no current supply, bovine species, mass, formulation or return-policy default |
| src_label | official_guidance | UK Government, Footwear labelling, web snapshot2026-10-28; https://www.gov.uk/guidance/footwear-labelling | UK-market guidance distinguishes upper, lining/sock, outer sole; material labels do not supply a mass BOM or universal legal approval. Actual applicability/jurisdiction separately checked. |
| src_retail | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN2013, executive summary and energy/waste/water chapters; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail scope relevance of electricity, water, chemicals, logistics and waste; no inventory benchmarks. Specific gates, cleaner route and collection/allocation equations are declared PCR designs requiring foreground evidence. |
| src_ghg | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard2011, chapters6–7,9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit-of-analysis and allocation hierarchy principles; PCR-specific asset/ownership equations are disclosed design choices, no full-standard conformity claim |
| src_bottle_spec | literature | Heres Plastics, HP7013 Bottle2000ml product specification, original web snapshot2026-10-28; https://www.heresplastics.com/en/products/bottles/1195-bottle-2000ml-hdpe-hp7013 | Manufacturer lists HDPE body, tamper-evident closure and label dimensions separately; supports component-scope checking only. It does not prove this store bottle/closure/label BOM or complete dry mass, and no stated weight or capacity is adopted. |
| src_receipt_roll | literature | Wedderburn, Thermal Receipt Roll57x45x12, original web snapshot2026-10-28; https://www.wedderburn.com.au/product/available-for-purchase/consumables/thermal-receipt-roll/ | Supplier describes thermal paper mounted on cardboard core; supports paper/core distinction only. No paper/core mass, printer compatibility, actual grade or wrapping/carton BOM default is transferred; those remain source-lot foreground measurements. |
