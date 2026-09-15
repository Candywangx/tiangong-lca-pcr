---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-articles-of-cutlery-manicure-or-pedicure-sets-and-instruments
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他利口器；修指甲或修脚套具及器械

## 1. 范围与适用性

本 PCR 适用于非动力贱金属制其他利口器以及修指甲或修脚套具及器械的工厂门生产。产品示例包括裁纸刀、开信刀、改错刀、铅笔刀及刀片、指甲锉、指甲钳、死皮钳和推刀，可单件或按声明套具供应。产品或套具应以贱金属为功能主体，允许含少量非金属部件。

边界起点为制造场址门口购入的金属板、带或其他已声明金属半成品，终点为工厂门口的合格产品或套具及销售包装。纳入成形、条件性热处理、磨削/抛光、条件性水基清洗或表面处理、装配、包装、直接排放、废料、废水和处理残渣。购入投入的生产由上游数据集连接。分销、零售、使用、维护、寿命终结、资本设备和厂房不在本门到门记录内。

剃刀及刀片；另行分类的刀、剪刀、匙、叉及类似厨房或餐桌用具；动力美容器具；修甲/修脚制剂；制造、修理或贸易服务均不适用。`un-cpc-3-0-2025` 确认 CPC 身份，`china-hainan-import-tax-list-2025` 核验专业中文术语以及与厨房或餐桌用具的区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-articles-of-cutlery-manicure-or-pedicure-sets-and-instruments |
| classification_refs | CPC 3.0：42915，精确分类语境 |
| covered_products | 非动力贱金属制其他利口器及修指甲/修脚单件或套具 |
| excluded_products | 剃刀；另行分类的刀、剪刀和厨房/餐桌用具；动力设备；制剂；服务 |
| representative_product | 全金属不锈钢修甲器械或小套具，功能面经磨削/抛光，按需水基钝化，并采用瓦楞纸箱销售包装 |
| production_route | 购入不锈钢板/带 -> 成形 -> 条件性热处理 -> 磨削/抛光 -> 条件性水基表面操作 -> 装配/检验 -> 包装 |
| market_state | 工厂门口清洁、干燥、合格并带销售包装的成品或已声明套具 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应已声明的手动其他利口器或修甲/修脚单件或套具，并具备规定功能表面和套具内容 |
| How much | 1 kg 合格单件或套具内容物净质量，不含包装 |
| How well | 符合已声明合金、尺寸、套具构成、硬度/性能、表面精整、防腐、清洁度及适用规格 |
| How long or cycle | 一个工厂门生产批次；使用寿命不属于本门到门记录 |
| reference_flow_link | 与 `final_product_output` 相同；包装单独计入清单 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | 其他刀具，成套的修指甲或修脚用的用具 `b5ddb141-e885-4a62-98fa-8249518d609c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品功能；单件或套具及内容；净质量；合金与质量组成；尺寸；硬度/性能；精整及涂层/钝化路线；包装组成/质量；场址/地域；技术；期间；不合格品处理 |

所有必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含包装的合格单件/套具内容物，并将全部清单归一到 1 kg 产品净质量。 |
| `set_mass_conversion` | 单件/套具记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同产品、同期实测平均净质量换算，并保留样本量、校准和变异性。 |
| `electricity_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留原始 kWh，以 1 kWh = 3.6 MJ 换算；不得合并电力与燃料。 |
| `solution_mass_basis` | 碱和酸 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告购入溶液质量和浓度；除非连接数据集要求，否则活性物质量仅作补充。 |
| `waste_wet_dry_basis` | 废水/污泥 | Mass | kg | 声明湿基、干基或收到状态，并保留密度、水分或固含量换算证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入金属半成品进入场址时已识别合金、几何形态、质量、供应商和交付状态 |
| starting_condition_role | 前景成形过程的工厂门产品投入 |
| product_classification_scope | CPC 42915 实物产品/套具，不含服务 |
| recursive_input_rule | CPC 42915 部件、维修投入或退货须作为独立产品投入并连接自身上游数据集，不递归吸收其既往生产 |
| upstream_dataset_requirement | 为金属、化学品、磨料、水、电力、天然气、包装及外协过程连接代表性数据集并披露替代 |
| disclosure | 声明材料、产品/套具构成、单元过程、外协、表面化学、包装、废物去向、分配及期间 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 全部过程 | 纳入从金属半成品接收到带包装合格产品之间的全部交换、直接排放和废物。 | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `boundary_conditional_routes` | 热处理/表面路线 | 仅在实际采用时纳入；未采用时以生产证据声明不适用，不填写零值。 | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `boundary_outsourced_operations` | 外协作业 | 外协成形、处理、精整或包装仍在系统内，使用供应商或代表性过程数据。 | `eu-pef-method-2021` |
| `boundary_no_cutoff_by_cost` | 全部流 | 不得仅因经济价值低而删流；应按质量、能量和环境相关性量化或限定并说明排除。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 材料准备与成形 | `required` | 纳入实际切割、落料、冲压或成形 | 前景转换 | 1 kg 产品净质量 |
| `heat_treatment` | 热处理 | `conditional` | 受控加热/冷却改变性能时纳入 | 热处理 | 1 kg 经处理产品净质量 |
| `grinding_polishing` | 磨削与抛光 | `required` | 纳入实际去毛刺、刃磨、磨削、抛光或打磨 | 去除/精整 | 1 kg 产品净质量 |
| `aqueous_surface` | 水基清洗与表面处理 | `conditional` | 使用水基清洗、钝化、酸洗或化学/电化学处理时纳入 | 表面操作 | 1 kg 经路线产品净质量 |
| `assembly_packaging` | 装配、检验与包装 | `required` | 纳入按需装配、最终检验和销售包装 | 最终完成 | 1 kg 产品净质量 |

### 过程：材料准备与成形（`forming`）

#### 输入

##### 产品流

###### 不锈钢板或带投入（`stainless_steel_sheet_input`）

记录代表性路线购入不锈钢板/带，声明牌号、厚度、交付状态和供应商；其他合金须另用精确前景流。

- 选定流：不锈钢板或带
- 流属性/单位：Mass / kg
- 数量规则：购入发料质量减有凭证未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

###### 成形电力（`electricity_forming`）

计量切割和成形工序消耗的电力，并与燃料分开记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属实测 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分选成形废料（`steel_scrap_forming`）

记录进入任何下游回收抵扣之前离开成形工序的切边和冲落料。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量收到状态下已分选边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

##### 基本流

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理天然气（`natural_gas_heat`）

计量燃气热处理设备消耗的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在已声明参考条件下可归属的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受燃气热处理的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

###### 热处理电力（`electricity_heat`）

计量炉体、控制系统及可归属热处理辅助设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属实测 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受热处理的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接化石二氧化碳（`fossil_co2_heat`）

将现场燃烧二氧化碳与上游电力排放分开记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：监测值，或由实测天然气及有凭证场址/期间燃料碳数据计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受燃气热处理的产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

### 过程：磨削与抛光（`grinding_polishing`）

#### 输入

##### 产品流

###### 磨削与抛光电力（`electricity_grinding`）

计量可归属于磨削、刃磨、去毛刺和抛光操作的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属实测 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### 湿磨或漂洗工艺用水（`process_water_grinding`）

计量湿磨及其可归属漂洗步骤供应的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：湿磨/漂洗可归属实测或批次计算用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受湿式路线的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-mpm-2003`

###### 氧化铝磨料（`alumina_abrasive`）

声明等级、粒度、复配载体和有凭证回用量。

- 选定流：氧化铝 `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入氧化铝发料减有凭证未用退料/回用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-mpm-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 金属和磨料磨削污泥（`grinding_sludge_output`）

计量离开湿磨或抛光处理的脱水金属—磨料污泥。

- 选定流：金属和磨料磨削污泥
- 流属性/单位：Mass / kg
- 数量规则：称量湿污泥，并保留水分/固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`us-epa-mpm-2003`

##### 基本流

###### 排入空气的金属磨削颗粒物（`grinding_particulate_output`）

按控制后实测粒径级分和实际排放舱室记录；不得用 PM 级分代理替代未解决 UUID。

- 选定流：排入空气的金属磨削颗粒物
- 流属性/单位：Mass / kg
- 数量规则：经验证并可归属于磨削/抛光的排气监测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

### 过程：水基清洗与表面处理（`aqueous_surface`）

#### 输入

##### 产品流

###### 表面操作工艺用水（`process_water_surface`）

计量清洗、酸洗、钝化及其可归属漂洗步骤供应的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入槽液、清洗和漂洗的实测/批次计算用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受水基操作的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### 碱洗用氢氧化钠（`sodium_hydroxide_surface`）

按购入状态计量氢氧化钠，并将溶液浓度保留为前景元数据。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入溶液/固体发料量，并记录浓度及未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受碱洗的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-mpm-2003`

###### 钝化或酸洗用硝酸（`nitric_acid_surface`）

不得以盐酸替代，并保留购入浓度。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：购入硝酸溶液发料减有凭证未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 接受硝酸路线的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-mpm-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 受污染金属表面处理废水（`finishing_wastewater_output`）

计量由水基表面操作转送处理的受污染废水。

- 选定流：受污染金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：实测体积乘实测密度，或直接称量送处理废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受水基操作的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003`

###### 金属氢氧化物处理污泥（`metal_hydroxide_sludge_output`）

计量场内废水处理产生的脱水金属氢氧化物污泥。

- 选定流：金属氢氧化物处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量可归属污泥，并记录湿/干基和固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接受水基操作的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_records`
- 来源：`us-epa-mpm-2003`

##### 基本流

### 过程：装配、检验与包装（`assembly_packaging`）

#### 输入

##### 产品流

###### 装配与包装电力（`electricity_assembly`）

计量可归属于装配、检验和销售包装准备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属实测 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

###### 销售用瓦楞纸箱（`corrugated_box_packaging`）

其他包装部件须在前景数据包中另设具体原子流卡。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：物料清单或包装领料记录中的纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`eu-jrc-fabricated-metal-products-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品（`final_product_output`）

仅报告处于已声明出厂状态的合格 CPC 42915 制品或套具。

- 选定流：其他刀具，成套的修指甲或修脚用的用具 `b5ddb141-e885-4a62-98fa-8249518d609c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定输出 1 kg 不含包装的合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用操作 | 优先细分并使用产品代码计量/批次记录，只归属相关交换。 | `eu-pef-method-2021` |
| `allocation_physical_driver` | 仍共用的操作 | 使用实测能量、处理时间或加工质量等有凭证因果物理驱动量；验证并保留敏感性。 | `eu-pef-method-2021` |
| `allocation_other_relationship` | 无合理物理驱动量 | 最后才采用经济价值等其他关系，并披露被否决方法、数据和敏感性。 | `eu-pef-method-2021` |
| `allocation_scrap_boundary` | 废料/残渣 | 工厂门废物输出不计避免生产信用；下游回收模型仅应用一次并披露。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `forming` | 金属、电力、废料 | 发退料账；秤；分表 | 产品/批次；合金；发退料 kg；kWh；废料 kg/去向；时间 | 按批次核对库存、称量和计量 | kg; kWh | 批/月 | 代表性 12 个月或完整生产期 | 全部相关线 | 纳入批次合计/产品净 kg | 校准；库存核对；废料票据 |
| `cp_heat_records` | `heat_treatment` | 天然气、电力、CO2 | 表计；炉次；燃料/排放记录 | 炉次；处理 kg；天然气 m3/条件；kWh；碳因子/监测 CO2；时间 | 专用表或经验证炉次驱动；监测或采集数据计算 CO2 | m3; kWh; kg | 炉次/月 | 代表性 12 个月或完整生产期 | 全部相关路线 | 路线交换合计/经路线产品 kg | 校准；炉次；气体规格；排放 QA |
| `cp_grinding_records` | `grinding_polishing` | 电力、水、氧化铝、污泥、颗粒物 | 表计；领料；联单；空气监测 | 批次；kWh；水；氧化铝发退料；污泥/固含；颗粒物/粒径/舱室；时间 | 计量、核对、称量并监测原子交换 | kWh; kg | 班/批/月 | 代表性 12 个月或完整生产期 | 全部相关设备 | 纳入批次合计/产品净 kg | 校准；库存；联单；采样/控制记录 |
| `cp_surface_records` | `aqueous_surface` | 水、化学品、废水、污泥 | 槽液/领料；表计；分析；联单 | 产品/槽；水；化学品/溶液质量/浓度；废水体积/密度；污泥/固含；路线；时间 | 核对槽液/化学品；计量水/排水；测密度/固含 | kg; m3; fraction | 槽/批/月 | 代表性 12 个月或完整生产期 | 全部场内/外协路线 | 按槽吞吐或经验证驱动量/路线产品 kg | 校准；证书；槽液；分析；联单 |
| `cp_assembly_records` | `assembly_packaging` | 电力、纸箱、产品 | 表计；包装 BOM/领料；成品称量/检验 | 批次；kWh；箱代码/数量/单重；合格/不合格 kg；时间 | 计量、核对包装并称量净产品 | kWh; kg | 批/月 | 代表性 12 个月或完整生产期 | 全部最终线 | 合计/产品净 kg | 校准；BOM；放行/批次核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部行 | 归一量 = 期间交换量 / 期间合格产品净质量 | 交换量；成品质量 | 每 kg 数量 |  |
| `calc_electricity_mj` | 电力 | MJ = kWh x 3.6 | kWh | MJ |  |
| `calc_fossil_co2` | `fossil_co2_heat` | 优先用质控监测；否则实测燃料乘有凭证场址/期间化石碳因子；排除上游排放 | 天然气；因子或监测 | 直接化石 CO2 |  |
| `calc_solution_active_mass` | 酸/碱补充报告 | 活性质量 = 溶液质量 x 认证/实测质量分数；除非连接数据集要求，清单仍用溶液质量 | 溶液质量；分数 | 活性质量 |  |
| `calc_wastewater_mass` | 废水 | 质量 = 实测体积 x 实测密度 | 体积；密度 | kg |  |
| `calc_metal_mass_balance` | 路线 | 净金属投入 = 产品金属 + 废料 + 残渣中金属 + 在制品变化；调查差额 | 投入；组成；废料；残渣分析；在制品 | 平衡/差额 | `eu-jrc-fabricated-metal-products-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 产品 | 每批保留代码、内容、质量、规格版次、合金、性能和精整路线。 | BOM；规格；检验；追溯 |
| `dq_temporal` | 全部数据 | 使用代表性 12 个月；较短生产期须涵盖全部批次并披露季节性/异常。 | 日期化生产、公用工程、维护和废物记录 |
| `dq_measurement` | 实测行 | 使用校准仪器；记录分辨率、共用表分配和不确定性。 | 证书；表计图；工作表 |
| `dq_completeness` | 全部过程 | 核对材料、产品、废料、废水/残渣并说明排除/估算，不合并原子流。 | 平衡；检查表；联单；库存核对 |
| `dq_supplier_data` | 购入/外协 | 采用供应商特定或代表性上游数据，披露地域、技术、年份、替代及限制。 | 供应商声明；数据集元数据；替代记录 |
| `dq_surface_chemistry` | 表面路线 | 保留化学品身份、浓度、槽液补加/排放；不得从总量推断单一化学品。 | SDS；证书；槽液记录；采购账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_mass` | 参考流 | 确认正好 1 kg 不含包装的合格产品净质量，并核验单件/套具换算。 |  |
| `validate_route_consistency` | 过程图 | 纳入全部实际/外协过程，并为未用条件性过程提供证据。 | `eu-jrc-fabricated-metal-products-2020`; `us-epa-mpm-2003` |
| `validate_atomic_rows` | 清单 | 每行仅一个交换及一套属性/单位；拒绝合并公用工程、化学品、包装、废物或排放。 |  |
| `validate_uuid_semantics` | UUID 行 | 核验状态 100、名称、类型、分类、属性和单位组；不得以代理替换未解决行。 |  |
| `validate_metal_balance` | 路线 | 结合不确定性、在制品和未测残渣调查差额。 | `eu-jrc-fabricated-metal-products-2020` |
| `validate_energy_emissions` | 能源/CO2 | 分开电力/天然气，核验换算，确保直接 CO2 不含电力上游排放。 |  |
| `validate_waste_basis` | 废物 | 核验去向、湿/干基、密度/固含换算及废水/污泥/排放不重计。 | `us-epa-mpm-2003` |
| `validate_source_period` | 数据包 | 核验来源、期间、覆盖、校准、缺口，且未使用无支持外部范围。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 供后续审查为 `secondary_dataset` 或 `background_dataset` 的工厂门前景生产数据集 |
| downstream_use | 与材料、精整、技术、地域和包装限定一致的 CPC 42915 产品系统 |
| allowed_use | 从摇篮到工厂门及供应链模型；仅在功能、性能、寿命和套具构成等同时比较 |
| excluded_use | 不同功能/套具直接比较；动力设备；使用阶段主张；其他刀具类别；不处理未解决流 |
| required_metadata | PCR/版本；产品/套具；净质量；合金/组成；尺寸；性能；精整；场址/地域；技术；期间；包装；外协；分配；UUID 状态 |
| required_quality_disclosure | 一手数据占比；校准；时间/场址覆盖；供应商代表性；平衡差额；废物基准/去向；排放方法；缺口/不确定性 |
| update_trigger | 材料/产品/套具、技术、热源、化学、场址、包装、分配、供应商数据或废物处理变化；或距参考期超过三年 |

## 11. 数据源

| 来源编号 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问于 2026-09-05）。 | CPC 42915 身份/英文名 |
| `china-hainan-import-tax-list-2025` | `official_guidance` | 财政部、海关总署、税务总局，附件《进口征税商品清单》，2025 年，第 34 页。https://www.gov.cn/zhengce/zhengceku/202507/P020250723546212625804.pdf（访问于 2026-09-05）。 | 中文术语及与厨房或餐桌用具的区分 |
| `eu-jrc-fabricated-metal-products-2020` | `official_guidance` | 欧盟委员会 JRC，《金属制品行业最佳环境管理实践》，EUR 30025 EN，JRC119281，2020。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf（访问于 2026-09-05）。 | 过程图及材料/能源/水/废物相关性 |
| `us-epa-mpm-2003` | `official_guidance` | 美国 EPA，《金属产品与机械点源类别开发文件》，EPA-821-B-03-001，2003。https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf（访问于 2026-09-05）。 | 磨削、抛光、热处理、清洗、废水/污泥 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，附件 I 产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问于 2026-09-05）。 | 边界、数据质量及分配层级 |
