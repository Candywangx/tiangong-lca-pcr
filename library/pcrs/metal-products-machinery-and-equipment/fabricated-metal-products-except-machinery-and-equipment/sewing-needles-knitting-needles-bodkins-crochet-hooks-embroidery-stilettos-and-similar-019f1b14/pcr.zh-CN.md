---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sewing-needles-knitting-needles-bodkins-crochet-hooks-embroidery-stilettos-and-similar-019f1b14
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或钢制的手用缝衣针、编结针、锥子、钩针、刺绣打眼锥及类似品，安全别针及其他别针，服装和旅行用品配件，贱金属制管形或开口铆钉、珠子及金属装饰片

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 42997 所列小型金属制品的工厂门生产。覆盖铁或钢制手用缝衣针、编结针、锥子、钩针、刺绣打眼锥及类似品；未另列明的铁或钢制安全别针及其他别针；用于服装、鞋类、遮阳篷、手提包、旅行用具和其他制成品的贱金属制搭扣、附搭扣架框、环箍搭扣、钩、眼及眼孔；贱金属制管形或开口铆钉；以及贱金属制珠子和金属装饰片。

规则覆盖线材、带材或板材准备；切割、拉拔、冲压、冲孔、弯曲、镦制、成形、机加工、磨尖、研磨、抛光、热处理、清洗、酸洗、镀覆或其他实际表面处理；装配、检验和成品放行。只有声明产品和技术实际采用相应路线时才纳入路线特定交换。

不包括缝纫机针、普通实心铆钉和通用紧固件、锁具和家具配件、规定用途之外的金属饰物、作为产品出售的未加工通用线材/带材/板材或金属废料、现场之外的初级金属生产（仅通过供应商数据集连接）、资本设备、员工差旅、出厂后配送、默认排除的零售包装、使用、维护和寿命终结。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sewing-needles-knitting-needles-bodkins-crochet-hooks-embroidery-stilettos-and-similar-019f1b14 |
| classification_refs | CPC 3.0: 42997（精确分类语境） |
| covered_products | 手用铁或钢制针及相关工具；未另列明的铁或钢制安全别针和其他别针；贱金属制服装、鞋类、遮阳篷、手提包、旅行用品及其他制成品配件；管形或开口贱金属铆钉；贱金属珠子和金属装饰片。 |
| excluded_products | 缝纫机针；通用实心铆钉和紧固件；锁具、家具或建筑配件；无关饰物；作为产品出售的未加工通用线材、带材、板材或金属废料。 |
| representative_product | 类别范围内声明的一种制成品，并记录产品族、基体金属或合金、尺寸、表面状态和验收规范。 |
| production_route | 由钢丝、不锈钢丝、黄铜带或铝带进行冷成形或冲压；可选机加工、磨尖、热处理、碱洗、盐酸酸洗、镀锌或镀镍；装配和检验。 |
| market_state | 制造现场门口可销售的成品，默认不含包装；纳入的包装必须另行声明并清单化。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明手用、紧固、连接或装饰功能的范围内金属制成品。 |
| How much | 制造现场门口 1 kg 验收合格成品。 |
| How well | 符合产品族声明的合金、尺寸、机械状态、适用时的尖端或刃口几何、表面状态、镀层及验收准则。 |
| How long or cycle | 仅为生产阶段参考，不主张使用寿命等效性。比较使用需要耐久性时，应在本门到门参考之外增加声明使用寿命和更换率。 |
| reference_flow_link | 功能单位由 1 kg 验收合格的 CPC 42997 成品流实现。 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 铁或钢制的手用缝衣针、编结针、锥子、钩针、刺绣打眼锥及类似品，未另列明的铁或钢制的安全别针及其他别针，贱金属制的用于服装、鞋类、遮阳篷、手提包、旅行用具或其他制成物品的搭扣、附有搭扣的架框、环箍搭扣、钩、眼、眼孔及类似品，贱金属制的管形铆钉或开口铆钉，贱金属制的珠子及金属装饰片 `714e90b5-8c5e-4c5b-aac5-8c156b8f20f9` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 产品族；制品设计或零件号；基体金属和合金牌号；线材、带材或板材进料形态；尺寸或规格等级；适用时的热处理状态；表面状态和镀层体系；适用时的镀层厚度；验收合格产品无水质量基准；制造地理位置；技术路线；报告期；包装纳入状态 |

构建前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品描述或等效字段中声明 `Required qualifiers` 所列项目。缺少必需限定信息时，参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 验收合格参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有交换归一化到最终检验后 1 kg 验收合格制品。除非研究明确纳入并清单化，否则排除托盘、纸箱、袋、卷盘及其他包装。 |
| `count_to_mass_conversion` | 按件数记录的生产记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同一产品族、合金、规格和表面状态的代表性且可追溯批次称量，将件数换算为质量；保留抽样件数、净质量、秤具标识和抽样日期。 |
| `solution_mass_basis` | 氢氧化钠和盐酸溶液输入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按到货状态质量报告采购溶液并声明浓度。所选盐酸 UUID 只适用于 30% 溶液；其他浓度需要自身精确流标识。 |
| `gas_volume_basis` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明参考温度和压力报告计量体积；披露运行工况换算和共用仪表分配。 |
| `electricity_energy_basis` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留仪表能源量并按 1 kWh = 3.6 MJ 换算；披露电压等级、电网地理范围、损耗边界及共用电表分配。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造现场门口接收采购的钢丝、不锈钢丝、黄铜带或铝带及其他工艺输入，并声明供应商标识、材料牌号、质量、所用再生含量声明和上游数据集引用。 |
| starting_condition_role | 采购原料和化学品构成前景制造起始条件；其生产和入厂供应负荷由链接的上游数据集表示，不在前景过程重复建模。 |
| product_classification_scope | CPC 3.0 子类 42997 的制成品，以第 2 节覆盖和排除产品为边界。 |
| recursive_input_rule | 若采购半成品已属于相同产品类别，将其作为产品输入记录一次，识别继承制造阶段，只采集新增前景阶段；不得递归复制供应商的 CPC 42997 过程。 |
| upstream_dataset_requirement | 每种金属原料、化学品、电力和燃料使用供应商特定或在技术和地理方面具有代表性的数据集，并与前景限定信息一致。 |
| disclosure | 声明确切的起始原料形态、合金、所含制造和精整步骤、外包步骤、所含包装、截断决定、处理去向、制造地理位置和报告期。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_fabrication_gate` | 前景制造 | 纳入声明路线从现场切割、拉拔、冲压、冲孔、弯曲、成形、机加工、磨尖、研磨、热处理、清洗、酸洗、表面处理、装配和检验直至现场门口验收合格产品的所有实际步骤。 | `us-epa-fabricated-metal-products-1995` |
| `boundary_conditional_finishing` | 路线特定精整 | 仅在实际实施时纳入碱洗、酸洗、漂洗、镀锌和镀镍，并分别记录每种实际化学品、水、能源、废物流和直接排放。 | `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022` |
| `boundary_outsourced_operations` | 外包前景步骤 | 若覆盖操作外包，链接代表性供应商过程并披露地理位置、技术、产品状态和数据质量；不得因场外发生而遗漏。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 排除的生命周期阶段 | 排除资本设备、员工差旅、出厂后配送、使用和寿命终结。包装默认排除，除非明确纳入且单独清单化。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | 材料成形、机加工、热处理和表面精整 | `required` | 始终纳入成形路线；只有声明产品实际实施时，才纳入各机加工、热处理、清洗、酸洗或镀覆交换。 | 前景生产 | 每 1 kg 验收合格成品 |
| `inspection_dispatch` | 最终检验和工厂门放行 | `required` | 始终纳入最终验收和放行；包装仍在默认边界之外。 | 前景质量放行 | 每 1 kg 验收合格成品 |

### 过程：材料成形、机加工、热处理和表面精整（`fabrication_finishing`）

#### 输入

##### 产品流

###### 非合金钢丝原料（`steel_wire_input`）

声明制品采用铁或非合金钢丝路线时，记录进入拉拔、切割或成形的钢丝。

- Selected flow: 钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: 质量 / kg
- Amount rule: 发放到覆盖制造订单的批次净质量，减去可追溯的未使用退库量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 不锈钢丝原料（`stainless_steel_wire_input`）

仅对声明不锈钢丝路线的订单记录不锈钢丝；UUID 尚未解决，不得采用非合金或低合金代理。

- Selected flow: 不锈钢丝
- Flow property / unit: 质量 / kg
- Amount rule: 发放到覆盖制造订单的批次净质量，减去可追溯的未使用退库量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 黄铜板带原料（`brass_strip_input`）

声明采用黄铜时，记录进入冲压、冲孔、拉拔或成形的黄铜带或板。

- Selected flow: 黄铜板带 `fff74890-cdbb-4184-84cc-b2d90582b28f`
- Flow property / unit: 质量 / kg
- Amount rule: 发放到覆盖制造订单的批次净质量，减去可追溯的未使用退库量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 铝带原料（`aluminium_strip_input`）

声明采用铝带时，记录进入冲压、冲孔或成形的铝带。

- Selected flow: 铝板带 `2eac52b0-66e2-4fe0-9329-655d6ee0a1c2`
- Flow property / unit: 质量 / kg
- Amount rule: 发放到覆盖制造订单的批次净质量，减去可追溯的未使用退库量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 制造用电（`fabrication_electricity`）

记录覆盖订单的成形、拉丝、机加工、磨削抛光、热处理、泵、整流器和局部排风所用外购电力。

- Selected flow: 电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: 净热值 / MJ
- Amount rule: 分表电量，或按设备功率和经核实运行时间分配的共用电表电量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_energy_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 金属成形润滑油（`forming_lubricating_oil`）

记录拉丝、冲压、压制、机加工或磨削消耗的润滑油；排除原样退回库存的油。

- Selected flow: 润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: 质量 / kg
- Amount rule: 期初库存加采购和领用，减期末库存、未使用退回和单独回收油
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_material_inputs`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 直接燃烧热处理用天然气（`heat_treatment_natural_gas`）

仅在覆盖订单使用燃气加热设备时记录气态天然气；电加热不得填入本行。

- Selected flow: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: 体积 / m3
- Amount rule: 按声明参考工况计量的燃气量，扣除可证明无关的用户
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_energy_inputs`
- Sources: `eu-ferrous-metals-bat-2022`

###### 清洗、淬火或漂洗用工艺水（`process_water_input`）

记录覆盖制造、淬火、清洗、酸洗或镀覆路线跨越边界的工艺水；闭式循环冷却水仅记录净补水。

- Selected flow: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: 质量 / kg
- Amount rule: 分配到覆盖订单的计量或罐体衡算净工艺水输入
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 碱洗用氢氧化钠（`sodium_hydroxide_input`）

仅在使用碱性清洗槽时按到货质量记录氢氧化钠，并声明浓度和槽液复用。

- Selected flow: 氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: 质量 / kg
- Amount rule: 期初槽液库存加投加量，减期末库存和有记录转移量，再分配到覆盖订单
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 酸洗用盐酸溶液（`hydrochloric_acid_30_input`）

仅记录用于覆盖钢制品的采购 30% 盐酸溶液；其他浓度需要单独精确流标识。

- Selected flow: 盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: 质量 / kg
- Amount rule: 期初槽液库存加 30% 溶液投加量，减期末库存和有记录转移量，再分配到覆盖订单
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 镀锌用锌金属（`zinc_metal_input`）

仅在镀锌时记录特高纯锌金属，并声明纯度、阳极或补充料形态和镀槽体系。

- Selected flow: 特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: 质量 / kg
- Amount rule: 期初锌库存加收货和投加，减期末库存、回收锌和有记录转移量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 镀镍用镍金属（`nickel_metal_input`）

仅在镀镍时记录高纯镍金属，并声明纯度、阳极形态和镀槽体系。

- Selected flow: 镍金属 `8a1cacfb-0b44-404e-93e0-01a9b7a4403c`
- Flow property / unit: 质量 / kg
- Amount rule: 期初镍库存加收货和投加，减期末库存、回收镍和有记录转移量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_surface_chemicals`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 转入最终检验的未检制品（`uninspected_article_output`）

记录完成全部声明制造和精整操作后转入最终检验的覆盖制品净质量。该内部中间体尚无确认的天工 UUID。

- Selected flow: 未经检验的 CPC 42997 成品
- Flow property / unit: 质量 / kg
- Amount rule: 转入最终检验的净质量，包括随后验收合格和不合格单元
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_intermediate_and_output`
- Sources:

##### 废物流

###### 分选钢边角料（`steel_offcut_scrap`）

将切割、冲压、冲孔和成形产生的清洁钢边角料与含油切屑及混合废品分开记录。

- Selected flow: 钢废料，边角料 `57ac39af-dc0e-4c66-b357-56a68b7d892b`
- Flow property / unit: 质量 / kg
- Amount rule: 称量离开过程去往再利用、回收或处理的分选边角料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 分选黄铜带边角料（`brass_offcut_scrap`）

将清洁黄铜边角料与钢、铝和混合废料分开记录。UUID 尚未解决，禁止使用通用金属废料代理。

- Selected flow: 黄铜带材边角废料
- Flow property / unit: 质量 / kg
- Amount rule: 称量离开过程去往再利用、回收或处理的分选黄铜边角料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 分选铝带边角料（`aluminium_offcut_scrap`）

将清洁铝带边角料与钢、黄铜和混合废料分开记录。

- Selected flow: 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: 质量 / kg
- Amount rule: 称量离开过程去往再利用、回收或处理的分选铝边角料
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 磨尖和磨削钢切屑（`steel_grinding_swarf`）

将机加工、磨尖或磨削产生的钢切屑与清洁边角料分开记录，并声明含水和油污染状态。

- Selected flow: 钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: 质量 / kg
- Amount rule: 按产生状态称量离开过程的切屑，并记录水分和夹带油基准
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`

###### 废碱性清洗液（`spent_alkaline_cleaner`）

将从清洗设备排出的废碱性槽液与漂洗废水分开记录。

- Selected flow: 废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: 质量 / kg
- Amount rule: 称量或由罐体体积和实测密度计算送往回收、处理或处置的废液
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 废盐酸酸洗液（`spent_hydrochloric_pickling_solution`）

将废盐酸酸洗液与新酸、碱液和漂洗废水分开记录。UUID 尚未解决，通用废酸不是精确替代。

- Selected flow: 废盐酸酸洗液
- Flow property / unit: 质量 / kg
- Amount rule: 称量或由罐体体积和实测密度计算送往酸回收、处理或处置的废液
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `eu-ferrous-metals-bat-2022`

###### 镀锌漂洗废水（`zinc_plating_rinse_wastewater`）

将镀锌漂洗水与镀镍废水和废槽液分开记录。UUID 尚未解决。

- Selected flow: 镀锌漂洗废水
- Flow property / unit: 质量 / kg
- Amount rule: 由计量体积和实测密度换算，或直接称量送往处理的废水
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

###### 镀镍漂洗废水（`nickel_plating_rinse_wastewater`）

将镀镍漂洗水与镀锌废水和废槽液分开记录。UUID 尚未解决。

- Selected flow: 镀镍漂洗废水
- Flow property / unit: 质量 / kg
- Amount rule: 由计量体积和实测密度换算，或直接称量送往处理的废水
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_water_and_liquid_wastes`
- Sources: `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022`

##### 基本流

###### 天然气燃烧直接排放的化石二氧化碳（`fossil_co2_emission`）

只记录服务覆盖订单的现场天然气燃烧直接化石二氧化碳；本前景行排除上游电力排放。

- Selected flow: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: 质量 / kg
- Amount rule: 直接测量，或由采集天然气用量和另行记录且适用当地的燃烧因子计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### 酸洗排向空气的氯化氢（`hydrogen_chloride_air_emission`）

实施盐酸酸洗时，计入声明收集和处理系统后的直接氯化氢排放，区室为空气/未指定。

- Selected flow: 氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: 质量 / kg
- Amount rule: 烟道质量直接测量，或报告期代表性 HCl 实测浓度乘以烟气流量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集计算（`calculated_from_collection`）
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

### 过程：最终检验和工厂门放行（`inspection_dispatch`）

#### 输入

##### 产品流

###### 从制造接收的未检制品（`uninspected_article_input`）

记录从制造转入的同一内部中间体。考虑有记录的在制品变动后，报告期输入和输出转移质量必须一致。

- Selected flow: 未经检验的 CPC 42997 成品
- Flow property / unit: 质量 / kg
- Amount rule: 接收用于最终检验的净质量，并按有记录的期初和期末在制品调整
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_intermediate_and_output`
- Sources:

###### 检验用电（`inspection_electricity`）

记录覆盖订单的检验、测试和工厂门放行设备所用外购电力。

- Selected flow: 电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: 净热值 / MJ
- Amount rule: 分表电量，或按核实设备功率和运行时间分配的共用电表电量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_energy_inputs`
- Sources:

##### 废物流

本过程不规定废物输入。

##### 基本流

本过程不规定基本流输入。

#### 输出

##### 产品流

###### 验收合格成品（`reference_product_output`）

只记录符合声明验收规范的制成品。返工品保持在前景系统内；最终废弃材料计入相应分选废料或切屑输出。

- Selected flow: 铁或钢制的手用缝衣针、编结针、锥子、钩针、刺绣打眼锥及类似品，未另列明的铁或钢制的安全别针及其他别针，贱金属制的用于服装、鞋类、遮阳篷、手提包、旅行用具或其他制成物品的搭扣、附有搭扣的架框、环箍搭扣、钩、眼、眼孔及类似品，贱金属制的管形铆钉或开口铆钉，贱金属制的珠子及金属装饰片 `714e90b5-8c5e-4c5b-aac5-8c156b8f20f9`
- Flow property / unit: 质量 / kg
- Amount rule: 最终检验后 1 kg 验收合格成品
- Value mode: 固定值（`fixed_value`）
- Specificity: 通用（`generic`）
- Normalization basis: 每 1 kg 验收合格成品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 标识引用（`identity_reference`）
- Sources: `un-cpc-3-0-2025`

##### 废物流

不规定单独检验废物流。返工不合格品保持内部流转；废弃不合格品按实际金属和物理废物状态记录在制造废物流行中。

##### 基本流

本过程不规定直接基本流输出。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用设备和多产品生产线 | 首先细分仪表、生产订单、槽液投加、废物记录和运行时间，使交换可直接归属于覆盖产品族。 | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | 剩余共用前景交换 | 无法细分时采用驱动交换的有记录物理关系，例如电力按机器运行时间和负荷，镀槽按处理表面积。只有质量能够证明代表驱动关系时才按质量分配。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | 无可辩护物理关系 | 只有说明为何无法细分且无相关物理关系后，才采用包括经济价值在内的其他关系；报告因子、期间、联产品和敏感性。 | `eu-pef-2021-2279` |
| `allocation_scrap_no_avoided_burden` | 钢、黄铜和铝废料输出 | 按穿越前景边界的质量报告废料，不扣减避免的初级金属负荷。再生收益或循环足迹处理属于下游系统模型，必须另行披露。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集规程

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `fabrication_finishing` | 金属原料和润滑油 | 地磅单、发票、领退料记录和库存账 | product_family, order_id, material_id, alloy_grade, product_state, opening_mass, received_mass, issued_mass, returned_mass, closing_mass | 核对实物库存和订单领用，保留供应商及牌号证据。 | kg | 每次收货和订单；每月核对 | 至少连续 12 个代表性月份，短期生产则覆盖全部批次 | 服务声明产品的全部设备和仓库 | 按精确材料标识汇总净消耗并归一化到合格产品质量。 | 校准秤记录、采购文件、库存核对和未解释损失审查 |
| `cp_energy_inputs` | `fabrication_finishing`; `inspection_dispatch` | 电力和天然气 | 公用仪表、分表日志和设备运行记录 | meter_id, start_reading, end_reading, unit, reference_temperature, reference_pressure, equipment_id, operating_time, rated_or_measured_load, product_order | 优先专用仪表；否则按核实运行时间和负荷分配并记录无关用户。 | 电力 MJ；天然气 m3 | 仪表周期或批次；每月核对 | 至少连续 12 个代表性月份，短期生产则覆盖全部批次 | 全部覆盖生产和检验设备 | 电力按 1 kWh = 3.6 MJ 换算；各能源分别归一化。 | 仪表校准、账单、分配工作表和全厂核对 |
| `cp_surface_chemicals` | `fabrication_finishing` | 碱洗剂、酸洗酸、锌和镍 | 采购、补加、分析、带出回收和库存记录 | bath_id, chemical_identity, concentration, opening_inventory, additions, closing_inventory, recovered_mass, transfer_mass, product_order, treated_area | 建立槽体特定物料平衡，不同化学品和浓度分开。 | kg | 每次投加和换槽；每月衡算 | 完整报告期 | 每个服务覆盖产品的槽 | 净消耗等于期初加投加减期末、回收和转移，再归一化。 | 供应商规格、槽液分析、校准投加和库存记录 |
| `cp_water_and_liquid_wastes` | `fabrication_finishing` | 工艺水和液体废物 | 水表、罐位、密度测量、联单和废水分析 | stream_id, source_operation, volume, density, mass, pH, metal_concentration, acid_or_alkali_identity, destination, date | 可行时分别计量各分流；仅用代表性实测密度换算质量。 | kg | 连续或每次排放/换槽；每月核对 | 覆盖全部排放的完整报告期 | 全部覆盖清洗、酸洗和镀覆物流 | 工艺水、废碱、废酸、镀锌和镀镍漂洗废水分开并归一化。 | 仪表校准、罐体标定、实验室报告和废物联单 |
| `cp_solid_wastes` | `fabrication_finishing` | 金属边角料和钢切屑 | 料箱称量、皮重记录和运输联单 | waste_identity, alloy, contamination_state, gross_mass, tare_mass, net_mass, destination, date, product_order | 称量各分选废物容器并记录切屑含水或含油基准。 | kg | 每个容器或发运 | 完整报告期 | 全部覆盖成形、机加工、磨尖和磨削操作 | 按精确金属和物理状态汇总，不扣除再生信用。 | 秤具校准、分选检查和接收/回收联单 |
| `cp_direct_air_emissions` | `fabrication_finishing` | 化石二氧化碳和氯化氢 | 燃气表、燃烧因子、烟气流量和浓度测量 | fuel_volume, reference_conditions, factor_id, stack_flow, HCl_concentration, sampling_time, control_status, production_order | 由采集燃料和适用因子计算化石 CO2；由代表性浓度和烟气流量计算 HCl 或直接测量。 | kg | 燃气按仪表周期；HCl 按许可或代表性频率 | 覆盖运行和控制系统的完整报告期 | 服务覆盖订单的燃烧设备和盐酸酸洗排气 | 仅汇总技术和减排等效时段，再归一化。 | 燃料记录、因子来源、认可烟气报告、控制日志和覆盖声明 |
| `cp_intermediate_and_output` | `fabrication_finishing`; `inspection_dispatch` | 内部转移和合格产品 | 生产订单、在制品台账、检验和称量记录 | product_family, order_id, transfer_mass, opening_wip, closing_wip, accepted_mass, reject_mass, rework_mass, scale_id | 按产品族核对转移、合格、不合格、返工和在制品质量。 | kg | 每批或订单 | 完整报告期 | 全部覆盖生产和最终检验点 | 按在制品变动调整转移量；以合格输出为归一化分母。 | 校准秤、签字转移记录、检验处置和核对记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单行 | 归一化交换量 = 报告期交换量 / 报告期验收合格成品质量 | 交换量；`cp_intermediate_and_output` 的合格质量 | 每 1 kg 合格成品的交换量 |  |
| `calc_material_consumption` | 原料和槽液材料 | 净消耗 = 期初库存 + 收货或投加 - 期末库存 - 未使用退回 - 有记录回收或转移 | 库存、采购、领用、退回、回收和转移记录 | 消耗 kg |  |
| `calc_energy_allocation` | 共用电表或燃气表 | 覆盖能源 = 仪表差值 × 有记录分配比例；无更直接驱动时，比例基于核实运行时间和实测或额定负荷 | 仪表读数；运行时间；负荷；覆盖订单 | 电力 MJ 或天然气 m3 | `eu-pef-2021-2279` |
| `calc_liquid_mass` | 按体积记录的水和液体废物 | 液体质量 = 计量体积 × 代表性实测密度；保留参考温度和密度抽样基准 | 体积；密度 | 液体 kg |  |
| `calc_fossil_co2` | 直接燃烧天然气 | 化石 CO2 质量 = 采集天然气量 × 另行记录的适用燃烧因子；不得计入上游电力排放 | 天然气记录；因子标识和单位换算 | 化石 CO2 kg |  |
| `calc_hcl_air` | 盐酸酸洗排气 | HCl 质量 = 代表性实测浓度 × 同一工况基准烟气体积；控制系统旁路时段另算 | 浓度；烟气流量；采样时长；水分/参考工况 | 排向空气的 HCl kg | `eu-ferrous-metals-bat-2022` |
| `calc_metal_balance` | 每种声明金属路线 | 金属衡算差 = 原料金属 + 镀层金属 - 合格产品金属 - 分选废料 - 切屑 - 液体废物实测金属 - 库存变动；发布前调查差异 | 材料输入、产品组成、废物和库存变动 | kg 和金属质量衡算差百分比 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和原料 | 声明产品族、零件或设计、合金、原料形态、尺寸、热处理状态和表面状态；UUID 不能替代前景限定信息。 | 产品规格、物料清单、供应商证书和检验计划 |
| `dq_temporal_representativeness` | 所有前景交换 | 至少使用连续 12 个代表性月份，除非为较短生产活动；说明停产、试验、异常批次和替代。 | 报告期日历、生产日志和排除记录 |
| `dq_meter_and_scale_control` | 质量、电力、燃气和水 | 使用适合量程且经校准的仪器，并保留报告期校准状态。 | 校准证书、核查日志和仪器标识 |
| `dq_completeness` | 过程清单 | 核对生产、材料、能源、水、废物和直接排放记录；披露排除交换并尽可能按合格产品质量量化截断。 | 核对工作表和签字完整性审查 |
| `dq_route_specificity` | 条件操作 | 各热处理、清洗、酸洗和镀覆路线标记为已实施、已外包或不适用；不得因缺记录而填零。 | 工艺流程图、路线单、供应商记录和操作员确认 |
| `dq_liquid_stream_identity` | 表面处理废物 | 按操作和主要化学性质分开废槽液和漂洗水，保留 pH、浓度、金属分析和去向。 | 实验室报告、槽体标识和废物联单 |
| `dq_geography_technology` | 上游数据集 | 匹配金属状态、尽可能匹配合金、电网、燃料交付、地理和技术；记录代理和敏感性。 | 供应商数据、数据集元数据和代表性评估 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认精确参考产品 UUID、质量属性、质量单位组和 kg；拒绝遗漏任何必需限定信息的数据集。 | `un-cpc-3-0-2025` |
| `validate_inventory_reconciliation` | 过程清单 | 确认 26 个原子行全部存在或按路线条件明确不适用；不得用复数公用工程、化学品、包装、废物或排放选择器替代原子交换。 |  |
| `validate_internal_transfer` | 过程连接 | 在有记录在制品变动后核对 `uninspected_article_output` 与 `uninspected_article_input`。 |  |
| `validate_metal_balance` | 每种金属路线 | 按合金路线审查金属衡算差；说明未解释损失、混合废料或未记录镀层转移并判定可接受后才可发布。 |  |
| `validate_energy_separation` | 电力和天然气 | 将电力和天然气保持为单独交换；核查电力换算和天然气参考工况。 | `eu-ferrous-metals-bat-2022` |
| `validate_surface_treatment` | 清洗、酸洗和镀覆 | 对每项实际槽液操作确认单独化学品、水、废槽液或漂洗废物、适用时直接 HCl 排放和处理去向；BAT 或许可符合性与清单量分开。 | `us-epa-fabricated-metal-products-1995`; `eu-ferrous-metals-bat-2022` |
| `validate_allocation` | 共用过程 | 核查分配层级、物理驱动、因子、联产品、期间和敏感性；拒绝无记录的质量或经济分配。 | `eu-pef-2021-2279` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明产品族和制造路线的 `secondary_dataset` 与 `background_dataset` |
| downstream_use | 覆盖小型金属制品的前景供应链建模；产品、合金、表面状态、地理和技术兼容时可汇入 lifecyclemodel。 |
| allowed_use | 用于声明的工厂门产品族和路线；按合格产品质量缩放；与兼容上游原料、能源、化学品和处理数据集组合。 |
| excluded_use | 不得作为缝纫机针、通用紧固件、锁具、家具配件、无关饰物、其他合金或表面状态、使用阶段、带零售包装产品或未补充其他阶段的全生命周期比较的通用代理。 |
| required_metadata | PCR id 和版本；参考 UUID；产品族和零件/设计；合金和原料形态；尺寸；热处理；表面状态和镀层；路线；已实施和外包操作；场址和地理；报告期；合格输出；分配；包装状态；上游数据集；未解决 UUID。 |
| required_quality_disclosure | 时间覆盖；仪表和秤具校准；完整性；材料和内部转移核对；共用仪表和生产线分配；液流分隔；直接排放方法；供应商数据质量；技术和地理代表性；截断；代理和敏感性。 |
| update_trigger | 产品族、合金、原料形态、成形技术、热处理燃料、表面处理化学品、镀层、减排、废物路线、供应商地理、电力结构或分配基准实质变化，或获得更具代表性数据或精确 UUID 时更新。 |

## 11. 数据来源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《产品总分类 3.0 版结构》，2025 年 6 月 30 日，第 42997 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05；缓存文件 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | 官方分类标识及覆盖产品表述。 |
| `us-epa-fabricated-metal-products-1995` | official_guidance | 美国环境保护署，《金属制品行业概况》，EPA/310-R-95-007，1995 年 9 月。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT（检索于 2026-09-05） | 剪切、成形、机加工、表面预处理、清洗、酸洗、镀覆、漂洗及废物流的原文描述。 |
| `eu-ferrous-metals-bat-2022` | standard | 欧盟委员会实施决定 (EU) 2022/2110（黑色金属加工行业 BAT 结论），2022 年 10 月 11 日。https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng（检索于 2026-09-05） | 脱脂、酸洗、漂洗、水管理、润滑剂复用、废溶液、HCl 排放和处理控制的原文规则。 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会建议 (EU) 2021/2279（环境足迹方法），2021 年 12 月 30 日合并文本，附件 I 第 4.5 节。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-09-05） | 细分、系统扩展、物理分配和其他分配关系的原文层级。 |
