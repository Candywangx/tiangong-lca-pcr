---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻水牛肉

## 1. 范围与适用性

本 PCR 锁定一条在屠宰与肉类加工一体化工厂内生产**包装去骨速冻水牛肉**的代表性出厂路线。前景边界始于工厂接收活水牛，依次包括待宰、屠宰与整修、胴体冷却、分割去骨、包装、鼓风速冻、冷冻贮藏和工厂卫生清洁。声明产品不是胴体、带骨肉、食用内脏、绞肉、机械分离肉，也不是上述产品的加权平均。

活水牛上游生产及进厂运输，电力、燃料、供水、化学品和包装材料生产，外运废物和废水处理，出厂运输、零售、解冻、烹调和消费均不属于前景过程；构建从摇篮到大门或全生命周期模型时，应作为递归上游或下游数据集连接。产品热中心在热稳定后必须达到 `-18 °C` 或更低，并在冷冻贮藏中保持 `-18 °C` 或更低（`fao-who-cxc-8-1976`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-frozen` |
| classification_refs | CPC 3.0 `21132`，“Meat of buffalo, frozen”（`unsd-cpc-3-0-2025`） |
| covered_products | 未烹调、经包装、去骨并速冻，且从冷冻库出厂的水牛骨骼肌肉 |
| excluded_products | 鲜或冷藏水牛肉；胴体；带骨肉；食用内脏；绞碎、机械分离、腌制、熟制或其他调制肉；混合物种产品 |
| representative_product | 作为一个冷冻产品等级包装的商业去骨水牛肉块及修整肉；可销售骨、脂肪、皮、血和食用内脏保持为独立共产品 |
| production_route | 一体化工厂：活水牛接收与待宰 → 屠宰与整修 → 胴体冷却 → 分割去骨 → 包装 → 鼓风速冻与冷冻贮藏 → 工厂大门 |
| market_state | 工厂大门处的冷冻、包装、未烹调、去骨产品 |

CPC 解释性说明 PDF 存在内部矛盾：类别标题和排除项指向冷冻水牛肉，但一处纳入文字写作“fresh or chilled”。本 PCR 遵循官方类别标题及其对鲜或冷藏水牛肉的明确排除，并披露该矛盾供评审（`unsd-cpc-3-0-2025`）。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 来自声明一体化路线的包装、去骨、速冻水牛肉 |
| How much | 净产品质量 `1,000 kg`，不含托盘和运输包装 |
| How well | 声明水牛物种；去骨；未烹调；声明内外包装；热中心 `≤ -18 °C`；不含胴体、带骨肉、食用内脏或其他共产品 |
| How long or cycle | 一个生产批次经过鼓风速冻，并计入出厂转移前声明的冷冻贮藏吨·日 |
| reference_flow_link | Tiangong 产品流 `be81d099-544d-4fdf-be56-81f76427d52f` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1,000 kg` |
| 参考产品流 | 冷冻水牛肉 `be81d099-544d-4fdf-be56-81f76427d52f` |
| 参考流属性 | Mass；Tiangong UUID `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | `kg` |
| 必需限定信息 | `species_or_commercial_buffalo_designation`; `deboned=true`; `uncooked=true`; `freezing_method`; `thermal_centre_temperature_c`; `frozen_storage_temperature_c`; `frozen_storage_duration_days`; `net_product_mass_kg`; `primary_packaging`; `outer_packaging`; `plant_geography`; `reference_period`; `co_product_allocation_method` |

构建前景数据包时，每项必需限定信息都必须写入元数据、过程说明、参考流备注、产品说明或等效字段。产品流 UUID 识别 CPC 产品类别，但本身不能证明去骨路线限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_mass` | 动物、肉、胴体、共产品、废物、包装和化学品 | Mass | `kg` | 使用经校准秤记录；报告湿基/收货状态质量，不得混合胴体、带骨和去骨产品质量。 |
| `mu_water` | 饮用级及工艺水；废水 | Volume | `m3` | 使用生产线或区域水表并校正期初期末库存；废水可使用经校准排放表或有记录的水量平衡。 |
| `mu_electricity` | 电力 | Energy | `kWh` | 按过程分表计量；共用电表时按实测运行时间和额定或记录负荷分配并披露计算。 |
| `mu_fuel` | 天然气 | Net calorific energy | `MJ` | 用同期供应商或司法辖区特定净热值换算计量的燃料体积或质量。 |
| `mu_temperature` | 产品热中心及冷库空气 | Temperature | `°C` | 使用经校准传感器并保留带时间戳记录；确认热稳定后产品热中心达到 `≤ -18 °C`。 |
| `mu_storage` | 冷冻贮藏 | Mass-time | `tonne-day` | 每日冷冻净产品平均库存吨数乘以经过的贮藏日数。 |
| `mu_refrigerant` | 氨补充和排放 | Mass | `kg` | 核对期初/期末充注量、补充量和回收量；不得因缺少日志而推断零排放。 |
| `mu_air_emission` | 化石二氧化碳和氮氧化物 | Mass | `kg` | 优先使用源特定测量；否则使用燃料量和具名司法辖区因子，并保持污染物身份分离。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进厂运输结束后在一体化工厂接收点验收的活水牛 |
| starting_condition_role | `animal_receiving_lairage` 的外部产品输入 |
| product_classification_scope | 仅 CPC 3.0 `21132` 冷冻水牛肉，并附加去骨、包装和未烹调路线限定 |
| recursive_input_rule | 构建更广模型时，活水牛、电力、天然气、饮用水供应、清洁化学品、制冷剂和包装材料均需连接上游数据集 |
| upstream_dataset_requirement | 地理、技术及时期具有代表性；不得用牛数据集替代活水牛，除非明确披露代理并做敏感性分析 |
| disclosure | 声明屠宰、去骨、速冻和贮藏是否同址；披露外部冷库、遗漏的辅助过程、冷冻贮藏时长和截断项 |

前景纳入动物暂存、饮用水使用、致昏/放血/整修、食用与不可食材料分离、冷却、温控去骨、包装、速冻、冷冻贮藏、制冷剂损失、清洗消毒、废水、固体残余物和现场燃烧排放。Codex 要求卫生隔离、受控去骨与包装、快速降温和冷链记录（`fao-who-cxc-58-2005`; `fao-who-cxc-8-1976`）。屠宰场环境绩效清单明确涉及资源、废水、废物和制冷剂，故均为必需项（`eu-sa-bat-2023-2749`）。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_lairage` | 动物接收与待宰 | required | Always | Foreground transformation | Accepted live-buffalo mass |
| `slaughter_dressing` | 屠宰与整修 | required | Always | Foreground transformation | Hot dressed-carcass mass |
| `carcass_chilling` | 胴体冷却 | required | Always | Foreground transformation | Chilled-carcass mass |
| `cutting_deboning` | 分割与去骨 | required | Always | Foreground transformation | Unpacked deboned-meat mass |
| `packaging` | 内外包装 | required | Always | Foreground transformation | Packed chilled-meat mass |
| `blast_freezing_storage` | 鼓风速冻与冷冻贮藏 | required | Always | Foreground transformation | `1,000 kg` net reference product plus declared tonne-days |
| `hygiene_sanitation` | 工厂卫生清洁 | required | Always; allocate by served area or verified activity driver | Foreground support | Normalized to `1,000 kg` reference product |

### 过程：动物接收与待宰（`animal_receiving_lairage`）

#### 输入

##### 产品流

###### 验收活水牛（`live_buffalo_input`）

跨过工厂大门的活水牛是声明物种专属路线唯一的动物原料。
- Selected flow: 验收活水牛
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or individual live-weight records normalized to `1,000 kg` reference product; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `eu-pef-2021-2279`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2000
  - Upper: 4000
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 待宰饮用级水（`lairage_water_input`）

动物饮水和待宰区冲洗的饮用级水与后续工艺水分开记录。
- Selected flow: 待宰饮用级水
- Flow property / unit: Volume / m3
- Amount rule: receiving-area meter or documented allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### 待宰用电（`lairage_electricity_input`）

照明、通风、泵及动物处置设备的电力作为独立能源载体记录。
- Selected flow: 待宰用电
- Flow property / unit: Energy / kWh
- Amount rule: receiving-area submeter or documented load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待屠宰水牛（`slaughter_ready_buffalo_output`）

离开待宰区的动物作为内部产品流转入屠宰，物种身份不变。
- Selected flow: 待屠宰水牛
- Flow property / unit: Mass / kg
- Amount rule: transferred live weight or reconciled accepted weight and lairage losses; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

##### 废物流

###### 待宰粪污和垫料（`lairage_manure_output`）

收集的粪便、含尿固体和废垫料按湿态固体废物单独称量。
- Selected flow: 待宰粪污和垫料
- Flow property / unit: Mass / kg
- Amount rule: container weights net of tare, with dry matter recommended; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

###### 待宰废水（`lairage_wastewater_output`）

冲洗水和受动物污染的排水在现场或外部处理前计量。
- Selected flow: 待宰废水
- Flow property / unit: Volume / m3
- Amount rule: area discharge meter or water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 基本流

### 过程：屠宰与整修（`slaughter_dressing`）

#### 输入

##### 产品流

###### 待屠宰水牛（`slaughter_ready_buffalo_input`）

内部活体动物流进入致昏、放血、剥皮、去内脏及整修。
- Selected flow: 待屠宰水牛
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `slaughter_ready_buffalo_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 屠宰饮用级水（`slaughter_water_input`）

接触胴体、设备冲洗和屠宰区操作的饮用级水单独计量。
- Selected flow: 屠宰饮用级水
- Flow property / unit: Volume / m3
- Amount rule: slaughter-floor meter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: m3/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 屠宰用电（`slaughter_electricity_input`）

输送机、提升机、锯、通风和泵的用电与制冷用电分开。
- Selected flow: 屠宰用电
- Flow property / unit: Energy / kWh
- Amount rule: slaughter-line submeter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 300
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热整修水牛胴体（`hot_carcass_output`）

去内脏后的整修胴体以热胴体质量称量并转入冷却；它不是参考产品。
- Selected flow: 热整修水牛胴体
- Flow property / unit: Mass / kg
- Amount rule: calibrated hot-carcass scale; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 水牛食用内脏（`edible_offal_output`）

检验合格的食用器官是独立共产品，不得平均并入去骨冷冻肉。
- Selected flow: 水牛食用内脏
- Flow property / unit: Mass / kg
- Amount rule: edible-offal scale and sales ledger; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `fao-who-cxc-58-2005`, `eu-pef-2021-2279`

###### 水牛皮（`hide_output`）

销售供进一步加工的湿皮按发运湿质量作为独立共产品记录。
- Selected flow: 水牛皮
- Flow property / unit: Mass / kg
- Amount rule: dispatch scale and sales ledger; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

###### 收集的水牛血（`blood_output`）

有意收集并销售或回收的血液是独立产品输出；未收集血液计入废水。
- Selected flow: 收集的水牛血
- Flow property / unit: Mass / kg
- Amount rule: tank mass or volume-density conversion and disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `fao-who-cxc-58-2005`, `eu-pef-2021-2279`

##### 废物流

###### 胃肠内容物（`gut_contents_output`）

去内脏时清除的消化道内容物按湿态固体废物记录，并与食用内脏分离。
- Selected flow: 胃肠内容物
- Flow property / unit: Mass / kg
- Amount rule: dedicated container mass net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### 不可食屠宰材料（`inedible_slaughter_material_output`）

判废组织和其他不可食动物材料单独称量并赋予实际处理路线。
- Selected flow: 不可食屠宰材料
- Flow property / unit: Mass / kg
- Amount rule: container mass by destination; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### 屠宰废水（`slaughter_wastewater_output`）

含血及冲洗废水在处理前离开屠宰过程，不与固体残余物合并。
- Selected flow: 屠宰废水
- Flow property / unit: Volume / m3
- Amount rule: slaughter drainage meter or documented water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 基本流

### 过程：胴体冷却（`carcass_chilling`）

#### 输入

##### 产品流

###### 热整修水牛胴体（`hot_carcass_input`）

经称量的热胴体进入受控冷却，不作为可销售冷冻肉处理。
- Selected flow: 热整修水牛胴体
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `hot_carcass_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 胴体冷却用电（`chilling_electricity_input`）

服务胴体冷却间的压缩机、风机和泵用电单独分表。
- Selected flow: 胴体冷却用电
- Flow property / unit: Energy / kWh
- Amount rule: chiller-system submeter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 250
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 胴体冷却氨补充（`chilling_ammonia_input`）

加入胴体冷却制冷回路的无水氨作为单独材料输入核对。
- Selected flow: 胴体冷却氨补充
- Flow property / unit: Mass / kg
- Amount rule: make-up, recovery and charge records allocated to the chilling circuit; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却水牛胴体（`chilled_carcass_output`）

分割前测量冷却胴体质量，使冷却损失在质量平衡中可见。
- Selected flow: 冷却水牛胴体
- Flow property / unit: Mass / kg
- Amount rule: calibrated rail or batch scale after chilling; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

##### 废物流

##### 基本流

###### 胴体冷却氨排入空气（`chilling_ammonia_air_output`）

冷却回路未回收的氨损失作为具体基本流排放，不得写作笼统“制冷剂”。
- Selected flow: 胴体冷却氨排入空气
- Flow property / unit: Mass / kg
- Amount rule: reconciled make-up less documented recovery and stock change; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

### 过程：分割与去骨（`cutting_deboning`）

#### 输入

##### 产品流

###### 冷却水牛胴体（`chilled_carcass_input`）

仅分配给声明去骨线的冷却水牛胴体进入本过程。
- Selected flow: 冷却水牛胴体
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `chilled_carcass_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 分割饮用级水（`cutting_water_input`）

温控分割和设备漂洗所用饮用级水与卫生清洁水分开计量。
- Selected flow: 分割饮用级水
- Flow property / unit: Volume / m3
- Amount rule: cutting-room meter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### 分割去骨用电（`cutting_electricity_input`）

锯、输送机、修整台和房间温控用电与鼓风速冻用电分离。
- Selected flow: 分割去骨用电
- Flow property / unit: Energy / kWh
- Amount rule: cutting-room submeter or documented load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装去骨水牛肉（`deboned_meat_output`）

与骨分离并获准进入声明冷冻等级的肉，经计量后转入包装。
- Selected flow: 未包装去骨水牛肉
- Flow property / unit: Mass / kg
- Amount rule: calibrated line or batch scale; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 食品级水牛脂肪和修整肉（`food_grade_trim_output`）

转作其他食品的可销售脂肪或修整肉作为共产品，不得混入参考流。
- Selected flow: 食品级水牛脂肪和修整肉
- Flow property / unit: Mass / kg
- Amount rule: dedicated scale and sales/disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

###### 食品级水牛骨（`food_grade_bones_output`）

销售用于食品或配料加工的净骨作为独立共产品称量。
- Selected flow: 食品级水牛骨
- Flow property / unit: Mass / kg
- Amount rule: dedicated scale and sales/disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

##### 废物流

###### 不可食分割修整物（`inedible_cutting_trim_output`）

判废或其他不可食分割残余物与可销售脂肪、修整肉和骨分开称量。
- Selected flow: 不可食分割修整物
- Flow property / unit: Mass / kg
- Amount rule: container mass by treatment destination; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### 分割废水（`cutting_wastewater_output`）

分割及设备漂洗排水在处理前记录。
- Selected flow: 分割废水
- Flow property / unit: Volume / m3
- Amount rule: cutting-room discharge meter or water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 基本流

### 过程：内外包装（`packaging`）

#### 输入

##### 产品流

###### 未包装去骨水牛肉（`deboned_meat_input`）

完整计量的去骨肉中间流进入包装，不包括骨或内脏。
- Selected flow: 未包装去骨水牛肉
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `deboned_meat_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### 聚乙烯内包装（`pe_packaging_input`）

随产品保留的食品接触聚乙烯膜或袋按聚合物和质量记录。
- Selected flow: 聚乙烯内包装
- Flow property / unit: Mass / kg
- Amount rule: issued packages plus opening inventory minus closing inventory and scrap; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ledger`
- Sources: `fao-who-cxc-8-1976`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 40
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 瓦楞外箱（`carton_packaging_input`）

随参考产品发运的瓦楞纸箱与聚乙烯分开记录。
- Selected flow: 瓦楞外箱
- Flow property / unit: Mass / kg
- Amount rule: carton issue and inventory records net of scrap; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ledger`
- Sources: `fao-who-cxc-8-1976`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 120
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 包装用电（`packaging_electricity_input`）

真空封装、输送和纸箱成型用电单独测量或分配。
- Selected flow: 包装用电
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line submeter or load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装冷却去骨水牛肉（`packed_chilled_meat_output`）

封口并装箱的冷却肉作为单一内部产品流转入鼓风速冻。
- Selected flow: 包装冷却去骨水牛肉
- Flow property / unit: Mass / kg
- Amount rule: net meat mass, excluding packaging, reconciled to packed units; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`, `fao-who-cxc-8-1976`

##### 废物流

###### 聚乙烯包装边角料（`pe_packaging_scrap_output`）

产品发运前产生的聚乙烯边角和不合格材料作为独立废物称量。
- Selected flow: 聚乙烯包装边角料
- Flow property / unit: Mass / kg
- Amount rule: polymer-specific scrap containers net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

###### 瓦楞纸板废料（`carton_scrap_output`）

不合格及裁切的瓦楞纸板与塑料废料分开称量。
- Selected flow: 瓦楞纸板废料
- Flow property / unit: Mass / kg
- Amount rule: cardboard scrap containers net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

##### 基本流

### 过程：鼓风速冻与冷冻贮藏（`blast_freezing_storage`）

#### 输入

##### 产品流

###### 包装冷却去骨水牛肉（`packed_chilled_meat_input`）

包装冷却产品及时进入鼓风速冻机，并与带骨肉和其他物种产品隔离。
- Selected flow: 包装冷却去骨水牛肉
- Flow property / unit: Mass / kg
- Amount rule: identical net meat quantity from `packed_chilled_meat_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-8-1976`

###### 速冻与冷冻贮藏用电（`freezing_storage_electricity_input`）

鼓风速冻机及冷库的压缩机、风机、泵和制冷用电作为具名负荷记录，建议分开速冻和贮藏子负荷。
- Selected flow: 速冻与冷冻贮藏用电
- Flow property / unit: Energy / kWh
- Amount rule: refrigeration submeter, with storage component normalized by tonne-day; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `fao-who-cxc-8-1976`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 500
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 30
  - Unit: kWh/tonne-day
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 速冻系统氨补充（`freezing_ammonia_input`）

鼓风速冻及冷库回路补充的无水氨与胴体冷却回路分开核对。
- Selected flow: 速冻系统氨补充
- Flow property / unit: Mass / kg
- Amount rule: make-up, recovery and charge records for the freezing/storage circuit; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂大门去骨冷冻水牛肉（`frozen_buffalo_meat_output`）

这是唯一的定量参考：净包装、去骨、未烹调的水牛肉，热中心已达到 `≤ -18 °C` 且冷冻贮藏信息已声明。
- Selected flow: 工厂大门去骨冷冻水牛肉 `be81d099-544d-4fdf-be56-81f76427d52f`
- Flow property / unit: Mass / kg
- Amount rule: calibrated dispatch scale and lot-level temperature release record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `unsd-cpc-3-0-2025`, `fao-who-cxc-8-1976`

##### 废物流

##### 基本流

###### 速冻与贮藏氨排入空气（`freezing_ammonia_air_output`）

速冻与贮藏回路未回收的氨损失作为具体基本流排放。
- Selected flow: 速冻与贮藏氨排入空气
- Flow property / unit: Mass / kg
- Amount rule: reconciled make-up less documented recovery and stock change; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

### 过程：工厂卫生清洁（`hygiene_sanitation`）

#### 输入

##### 产品流

###### 卫生清洁饮用级水（`sanitation_water_input`）

生产工艺水记录之外用于清洗消毒的饮用级水单独计量。
- Selected flow: 卫生清洁饮用级水
- Flow property / unit: Volume / m3
- Amount rule: sanitation header meter allocated by cleaned area or cleaning duration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 6
  - Unit: m3/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 卫生清洁用电（`sanitation_electricity_input`）

高压清洗、泡沫系统、泵及清洁辅助用电不得隐藏在通用公用工程中。
- Selected flow: 卫生清洁用电
- Flow property / unit: Energy / kWh
- Amount rule: sanitation equipment meter or load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

###### 卫生热水天然气（`sanitation_natural_gas_input`）

现场燃烧生产卫生热水的天然气作为独立燃料输入；若购入蒸汽，则必须另建具名蒸汽流。
- Selected flow: 卫生热水天然气
- Flow property / unit: Energy / MJ
- Amount rule: boiler meter and period-specific net calorific value; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_meter`
- Sources: `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 1500
  - Unit: MJ/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### 氢氧化钠清洁剂（`sodium_hydroxide_input`）

碱性清洗所用氢氧化钠按交付活性物质记录，不得写作集合型“清洁化学品”。
- Selected flow: 氢氧化钠清洁剂
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by documented active concentration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `eu-sa-bat-2023-2749`

###### 过氧乙酸消毒剂（`peracetic_acid_input`）

过氧乙酸消毒剂按交付活性物质记录，并与碱性清洁剂分离。
- Selected flow: 过氧乙酸消毒剂
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by documented active concentration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `eu-sa-bat-2023-2749`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 卫生清洁废水（`sanitation_wastewater_output`）

清洗消毒排水在处理前记录，并与水输入保持分离。
- Selected flow: 卫生清洁废水
- Flow property / unit: Volume / m3
- Amount rule: sanitation discharge meter or documented water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### 基本流

###### 化石二氧化碳排入空气（`sanitation_fossil_co2_air_output`）

现场天然气燃烧产生的化石二氧化碳与其他空气排放分开报告。
- Selected flow: 化石二氧化碳排入空气
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or metered fuel multiplied by an identified jurisdictional factor; normalize to the declared reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-sa-bat-2023-2749`

###### 氮氧化物排入空气（`sanitation_nox_air_output`）

卫生热水锅炉的氮氧化物按明确报告物种计量，例如 `NOx as NO2`。
- Selected flow: 氮氧化物排入空气
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or metered fuel multiplied by an identified jurisdictional factor; normalize to the declared reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-sa-bat-2023-2749`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 全部过程 | 在任何分配之前，按实体生产线或过程细分计量的投入、废物和排放。 | `eu-pef-2021-2279` |
| `al_direct_causality` | 冷却、去骨、包装、速冻和贮藏 | 使用质量通过量、运行时间、制冷体积或吨·日，将流直接归给导致该流的产品或共产品；仅在能证明驱动关系时使用。 | `eu-pef-2021-2279` |
| `al_slaughter_coproducts` | 屠宰与整修 | 胴体、食用内脏、皮和收集血液保持为独立输出。无法细分时，以同期工厂大门收入进行场址特定经济分配，并披露质量、价格、时期和敏感性。 | `eu-pef-2021-2279` |
| `al_deboning_coproducts` | 分割与去骨 | 去骨肉、可销售脂肪/修整肉和食品级骨保持分离；采用同样的优先细分和场址特定经济后备层级。 | `eu-pef-2021-2279` |
| `al_no_bovine_default` | 全部共产品 | 不得把牛的默认分配因子用于水牛；所引 PEF 屠宰场默认值没有水牛因子。 | `eu-pef-2021-2279` |
| `al_waste_no_credit` | 废物 | 零收入废物不获得共产品分配，但产生过程承担收集和预处理负荷；任何避免负荷情景须另行报告。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | all route processes | animal, intermediate, meat, co-product, solid waste | scale record | timestamp, lot, flow id, gross, tare, net | calibrated scale export | `kg` | each lot | representative 12 months preferred | declared plant and line | sum by flow and lot; reconcile transfers | calibration and reconciliation |
| `cp_reference_product` | `blast_freezing_storage` | reference output | release record | lot, net mass, thermal-centre trace, store trace, release time | scale plus temperature logger | `kg` | each lot | study period | declared plant | sum released conforming lots | scale calibration and signed release |
| `cp_water_meter` | applicable process | potable water | meter record | opening, closing, reset, downtime | calibrated meter | `m3` | daily or batch | study period | process area | difference minus documented non-route use | meter calibration and water balance |
| `cp_wastewater_meter` | applicable process | wastewater | meter or balance | discharge volume, diversion, inventory | calibrated meter; balance only if meter absent | `m3` | daily | study period | drainage area | sum by process; no double count | meter QA or closure evidence |
| `cp_electricity_meter` | applicable process | electricity | meter record | import, export, runtime, load | submeter; engineering allocation if absent | `kWh` | hourly/daily | study period | process/load | sum imports net of export | meter check and allocation file |
| `cp_natural_gas_meter` | `hygiene_sanitation` | natural gas | invoice/meter | volume, pressure, temperature, NCV | boiler meter and supplier NCV | `MJ` | daily/monthly | study period | sanitation boiler | convert to net calorific energy | invoice and conversion record |
| `cp_packaging_ledger` | `packaging` | packaging material | inventory record | opening, receipts, closing, scrap, polymer/grade | stock reconciliation | `kg` | batch/month | study period | packaging line | opening + receipts - closing - scrap | purchase and stock ledger |
| `cp_coproduct_record` | slaughter/deboning | saleable co-product | scale and sales record | mass, price, currency, date, destination | scale joined to sales ledger | `kg` | each dispatch | same period as reference product | declared plant | mass and revenue by co-product | scale, invoice, price-period evidence |
| `cp_waste_weighing` | applicable process | solid waste | waste ticket | flow id, gross, tare, destination | container scale or haulier ticket | `kg` | each movement | study period | generating area | sum net wet mass by flow and destination | ticket and tare record |
| `cp_refrigerant_log` | chilling/freezing | ammonia | maintenance log | charge, additions, recovered mass, date, circuit | refrigerant reconciliation | `kg` | each event and annual closure | study period plus opening/closing state | named circuit | additions + opening - closing - recovered | service record and charge inventory |
| `cp_chemical_ledger` | `hygiene_sanitation` | NaOH or peracetic acid | issue record | solution mass, concentration, product | stock reconciliation and SDS concentration | `kg active` | batch/month | study period | sanitation system | solution mass × active fraction | SDS and inventory ledger |
| `cp_combustion_emissions` | `hygiene_sanitation` | CO2 fossil or NOx | stack/factor calculation | fuel, NCV, factor, pollutant basis | measurement preferred; named factor fallback | `kg` | campaign/month | study period | sanitation boiler | measured emission or fuel × factor | test report or factor citation |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | Every inventory flow | `normalized amount = period flow × 1,000 / conforming net reference-product kg` | period flow; conforming product mass | amount per `1,000 kg` | `eu-pef-2021-2279` |
| `cr_transfer_match` | Internal product flows | 上游输出和下游输入必须按批次匹配，之后才计算下一过程损失。 | paired transfer records | reconciled internal flow | `eu-pef-2021-2279` |
| `cr_mass_closure` | Each transformation | 报告 `mass inputs - product outputs - waste outputs - measured mass loss`；无法解释的绝对差额超过总质量输入 `2%` 时调查。 | mass records | closure and unexplained balance | none; threshold is `reasoned_estimate` |
| `cr_storage_energy` | Frozen storage | `storage intensity = frozen-store electricity / tonne-days`；另行加入归属于批次的鼓风速冻用电。 | kWh; daily inventory; days | kWh per reference product | `fao-who-cxc-8-1976` |
| `cr_refrigerant_release` | Chilling/freezing | `release = opening charge + additions - closing charge - recovered amount`；负值必须调查。 | circuit refrigerant log | kg ammonia to air | `eu-sa-bat-2023-2749` |
| `cr_economic_allocation` | Unsubdividable co-product burden | `allocated share_i = revenue_i / sum positive co-product revenue`；报告价格基础和敏感性。 | mass, plant-gate price, period | allocated burden share | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | Dataset | 证明水牛物种、去骨路线、产品等级、包装形式和冷冻放行状态；不得合并胴体或带骨产品。 | lot specification, labels, process map |
| `dq_temporal` | Foreground | 优先采用覆盖季节性产量的最近完整 12 个月；较短批次须披露日期和贮藏条件。 | meter and production coverage report |
| `dq_technology` | Foreground | 识别致昏/整修技术、去骨配置、包装设备、制冷剂、速冻机类型和冷库布置。 | equipment list and process description |
| `dq_geography` | Foreground/upstream | 声明工厂地理、电力市场、水源、燃料规格和废物/废水去向。 | site and supplier records |
| `dq_metering` | Utilities | 声明计量覆盖率和每项工程分配；禁止未量化的通用“公用工程”。 | meter register and allocation workbook |
| `dq_estimate_replacement` | Provisional ranges | 本候选 PCR 中全部 `reasoned_estimate` 范围仅作 QA 标记，评审前须由水牛路线实测记录替换或确认。 | comparison table and reviewer disposition |
| `dq_source_gap` | Quantitative claims | 不得把牛、猪、绵羊或山羊的 BAT/PEF 数值默认值作为水牛值；任何代理均需论证及敏感性。 | source/species check |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_uuid` | 参考流身份 | 参考输出 UUID 为 `be81d099-544d-4fdf-be56-81f76427d52f`，流类型为 Product flow，CPC 为 `21132`，流属性为 Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`。 | `unsd-cpc-3-0-2025` |
| `vr_reference_amount` | 参考量 | 定量参考等于净去骨冷冻水牛肉 `1,000 kg`。 | `unsd-cpc-3-0-2025` |
| `vr_temperature` | 冷冻与冻藏 | 经校准记录证明热稳定后产品热中心 `≤ -18 °C`，冷冻贮藏 `≤ -18 °C`。 | `fao-who-cxc-8-1976` |
| `vr_route_complete` | 必需工艺路线 | 七个必需过程全部存在，或披露的等效结构保留每个清单边界。 | `ec-jrc-sa-bref-2024` |
| `vr_atomic_flows` | 全部前景交换 | 电力、天然气、水、废水、氨、包装、化学品、固体残余物、化石 CO2 和 NOx 保持为独立原子流。 | `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `vr_transfer_balance` | 内部转移 | 每个内部产品流输出按批次匹配下一过程输入。 | `eu-pef-2021-2279` |
| `vr_species_product_separation` | 参考产品与共产品 | 胴体、带骨肉、食用内脏、皮、血、骨和可销售修整肉不计入参考产品质量。 | `unsd-cpc-3-0-2025` |
| `vr_allocation` | 共享负荷与共产品 | 优先尝试细分；经济后备分配披露水牛特定质量、价格、时期和敏感性，不使用牛默认因子。 | `eu-pef-2021-2279` |
| `vr_storage_duration` | 冻藏 | 声明冷冻贮藏时长和吨·日；贮藏用电不得只表示为无条件月总量。 | `fao-who-cxc-8-1976` |
| `vr_estimates` | 推理估算 | 每个 `reasoned_estimate` 均标注临时性，并附替换或确认记录。 | `eu-pef-2021-2279` |
| `vr_uuid_resolution` | 非参考 UUID 字段 | 非参考流 Tiangong UUID 保持 `unresolved`，不得虚构；发布带 UUID 交换前须解析。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一条去骨冷冻水牛肉路线的前景单元过程包和出厂聚合 |
| downstream_use | 连接上游供应及下游处理/市场数据集后的从摇篮到大门或生命周期模型 |
| allowed_use | 路线限定匹配时的场址 LCA、EPD/PCR 开发支持、过程改进和经审计清单编制 |
| excluded_use | 通用牛肉或混合肉代理；胴体、带骨、内脏、绞碎或调制水牛产品；无条件国家平均 |
| required_metadata | 参考限定、地理、时期、技术、过程图、计量覆盖、质量平衡、分配、共产品质量/价格、冷冻贮藏时长、温度证据、处理去向 |
| required_quality_disclosure | 全部代理、排除、工程分配、临时估计、未解析 UUID 及偏离七过程图的情况 |
| update_trigger | 物种/产品规格、产率、分配、制冷剂、速冻机、能源、包装、贮藏时长、工厂地理或证据基础发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，*CPC Version 3.0 Explanatory Notes*，类别 21132，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 核验官方类别标题和明确排除项；已披露内部文字矛盾。 |
| `fao-who-cxc-58-2005` | `standard` | Codex Alimentarius，*Code of Hygienic Practice for Meat*，CXC 58-2005。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf | 核验工艺顺序、隔离、饮用水、受控去骨/包装、冷却/速冻和贮藏记录。 |
| `fao-who-cxc-8-1976` | `standard` | Codex Alimentarius，*Code of Practice for the Processing and Handling of Quick Frozen Foods*，CXC 8-1976。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf | 核验速冻限定、热中心和贮藏温度、包装、快速转移及温度记录。 |
| `eu-sa-bat-2023-2749` | `official_guidance` | 欧盟委员会执行决定 (EU) 2023/2749，屠宰场和动物副产品 BAT 结论。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202302749 | 核验能源、水、废水、废物、化学品和制冷剂损失清单要求；未将牛特定数值用于水牛。 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | 核验企业特定数据采集、优先细分分配层级及屠宰场经济后备分配；未采用非水牛默认因子。 |
| `ec-jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会 JRC，*Slaughterhouses, Animal By-products and Edible Co-products BREF*，2024，DOI `10.2760/18199`。https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 仅用于官方范围佐证；本 PCR 未采用 BREF 数值。 |

总调度已通过 `paper-search search -s openalex` 完成四组路线定向 OpenAlex 检索，覆盖水牛肉、屠宰、去骨、鼓风速冻、冷冻贮藏、LCA、能源、水、废水、废物、制冷剂和排放，并筛查了 30 条结果记录。没有结果直接记录本 PCR 声明的去骨冷冻水牛肉工厂路线，也没有提供可适用的前景清单规则或数值；宽泛畜牧、水牛奶、牛屠宰场、培养肉和肉品质量文献均被拒绝。因此，没有任何 OpenAlex 元数据、摘要、搜索摘要或未经原文核验的论文支撑本 PCR 的规则或数值。
