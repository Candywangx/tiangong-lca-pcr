---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.knives-except-for-machines-and-scissors-and-blades-therefor
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 刀具（机械除外）、剪刀及其刀片

## 1. 范围与适用性

本 PCR 适用于非机器用刀具、剪刀及其成品刀片或替换刀片在工厂大门处生产的前景数据包。范围包括完整产品和单独销售的刀片，并涵盖冲压或切割、特定路线的锻造、热处理、磨削、刃磨、抛光、清洗、特定路线的手柄或枢轴装配、检验，以及跨越工厂大门的包装。

机器用刀具和切削刀片、锯片、剃须刀及其刀片、匙叉等另行分类的扁平餐具、修指甲或修脚器具、上游钢铁生产、配送、使用、维护和报废处理均不属于默认边界。数据包应说明其代表刀具、剪刀还是仅刀片产品；除非不同产品的质量和前景负荷可分别追溯，否则不得将存在实质差异的产品合并。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.knives-except-for-machines-and-scissors-and-blades-therefor |
| classification_refs | CPC 3.0: 42913 |
| covered_products | 非机器用刀具；剪刀；成品刀片；成品剪刀刀片；这些产品所用的替换刀片 |
| excluded_products | 机器用刀具和机器切削刀片；锯片；剃须刀及其刀片；另行分类的扁平餐具；修指甲或修脚器具；使用客户自有投入品的制造服务 |
| representative_product | 符合所声明尺寸、材料、硬度、锋利度、表面状态和装配规范的可销售成品刀具、剪刀或仅刀片产品 |
| production_route | 接收刀片级钢材；下料、切割或条件性锻造；热处理；磨削、刃磨、抛光和清洗；条件性手柄或枢轴装配；检验；条件性包装；工厂大门交付 |
| market_state | 工厂大门处完成检验的成品或替换刀片，并声明所含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明切割功能的非机器用成品刀具、剪刀或相应刀片 |
| How much | 工厂大门处 1 kg 可销售产品 |
| How well | 符合所声明产品类型、合金、硬度或热处理状态、尺寸、刃口几何形状、锋利度试验、表面状态、装配配置和缺陷接收准则 |
| How long or cycle | 一次工厂大门产品交付；当数据集用于功能比较时，将使用寿命作为限定信息报告 |
| reference_flow_link | reference_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 刀具（机械除外）、剪刀及其刀片 `b0a74999-fb7f-40ee-9dbe-41016e49a00e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：刀具、剪刀或仅刀片；产品质量和件数；刀片合金及牌号；热处理状态及声明的硬度方法/结果；尺寸和刃口几何形状；锋利度或切割性能试验；表面状态或涂层；存在时的手柄和枢轴材料；所含包装；制造地理区域；技术和报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及基于质量的清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用工厂大门处可销售产品的净质量。包装应单独计量，且不得将包装质量计入 1 kg 参考产品。 |
| `item_mass_conversion` | 仅提供件数的生产记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用有记录的代表性样品所得产品特定平均质量换算件数；保留件数、样本量、实测质量和抽样期。 |
| `electricity_energy_conversion` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表 kWh 原始记录，并按 1 kWh = 3.6 MJ 换算为 MJ；不得将外购电力与燃料能量合并。 |
| `gas_volume_conditions` | 天然气和工业氧气行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量体积及其参考温度和压力；仅可依据有记录的供应商或仪表约定换算供应商标准化体积。 |
| `solution_active_mass` | 氢氧化钠溶液 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告交付溶液质量和浓度；选定流数量是根据这些前景记录计算的干基氢氧化钠质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景制造 | 纳入直接控制的材料接收、坯料成形、条件性锻造或热切割、热处理、磨削、刃磨、抛光、清洗、条件性装配、检验和所含包装，直至工厂大门交付。 | `eu-jrc-sf-bref`; `us-epa-metal-finishing-1992` |
| `boundary_upstream_inputs` | 外购产品和能源 | 将每项外购产品或能源载体保留为显式投入，并链接在材料牌号或组成、产品状态、地理区域、技术和交付边界方面相匹配的上游数据集。 |  |
| `boundary_waste_and_emissions` | 前景释放 | 产生时，将钢废料、收集的磨削粉尘、废磨料、漂洗废水和直接燃烧排放记录为相互独立的交换；不得将其隐含在成材率或处理服务中。 | `us-epa-metal-finishing-1992` |
| `boundary_default_exclusions` | 默认系统以外 | 默认排除资本品、员工出行、工厂大门后的配送、使用、维护和报废处理，除非研究目标明确扩展系统并将新增部分单独报告。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告设施已接收刀片级钢板、钢带或有记录的半成品坯料及所有外购组件；声明供应商状态、合金、尺寸和所含上游数据集。 |
| starting_condition_role | 刀片成形与精加工的工厂大门前景进入点 |
| product_classification_scope | 以 CPC 3.0 子类 42913 作为映射语境；规范范围受上述覆盖产品和排除产品说明约束 |
| recursive_input_rule | 本规范类别内采购的未成品或成品仍作为显式产品投入；不得在同一前景数据包内递归应用本 PCR 来制造该投入。 |
| upstream_dataset_requirement | 每项外购材料、组件、能源载体和包装流均需匹配的上游数据集或披露的数据缺口；代理替代须有理由并进行敏感性审查。 |
| disclosure | 声明产品形态、刀片材料、接收坯料状态、坯料成形路线、热源、精加工路线、湿式或干式清洗、装配配置、包装纳入情况、地理区域、技术、报告期和所有前景排除项。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_preparation_and_blanking` | 备料与坯料成形 | required | 始终纳入；只选择实际使用的刀片材料和切割交换 | 前景刀片坯料接收、切割、冲压或坯料制备 | 离开本过程的合格坯料 kg |
| `heat_treatment` | 热处理 | required | 始终纳入；记录实际燃气、电力或组合路线 | 前景淬硬、回火和特定路线热处理 | 热处理后坯料 kg |
| `grinding_polishing_and_cleaning` | 磨削、刃磨、抛光和清洗 | required | 始终纳入；水和碱液行仅适用于湿式或水基路线 | 前景刃口成形、表面精加工和清洗 | 精加工刀片组件 kg |
| `handle_and_pivot_assembly` | 手柄与枢轴装配 | conditional | 带模塑聚丙烯手柄或其他装配组件的完整产品纳入；仅刀片产品排除 | 前景组件制造与装配 | 装配后产品 kg |
| `packaging` | 包装 | conditional | 仅纳入随产品跨越工厂大门的包装 | 前景包装 | 包装后产品 kg，产品与包装质量分开 |
| `final_inspection_and_release` | 最终检验与工厂大门交付 | required | 始终纳入 | 前景接收判定和定量参考 | 合格可销售产品 kg |

### 过程：备料与坯料成形（`stock_preparation_and_blanking`）

#### 输入

##### 产品流

###### 不锈钢刀片坯料板材（`blade_stainless_steel_sheet`）

仅当刀片坯料采用不锈钢板或带时，记录一个已声明的不锈钢牌号。由于没有通过身份审计的完全匹配 state-100 不锈钢板材候选项，UUID 保持未解决。

- 选定流：不锈钢板材
- 流属性/单位：质量 / kg
- 数量规则：合格及不合格坯料所消耗的实测接收不锈钢刀片坯料质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_and_blanking_records`
- 来源：

###### 碳钢刀片坯料板材（`blade_carbon_steel_sheet`）

仅当刀片坯料采用碳钢板或带时，记录一个已声明的碳钢牌号。不得将本行与不锈钢坯料合并。

- 选定流：碳钢板材
- 流属性/单位：质量 / kg
- 数量规则：合格及不合格坯料所消耗的实测接收碳钢刀片坯料质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_and_blanking_records`
- 来源：

###### 下料用电（`blanking_electricity`）

记录为备料、冲压、切割、修边及特定路线锻造设备计量或可合理分配的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：本过程计量的电力，由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开本过程的合格坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_and_blanking_records`
- 来源：

###### 激光切割用氧气（`blanking_oxygen`）

仅当外购工业氧气作为激光或热切割投入跨越边界时记录；排除压缩空气以及声明路线未消耗的氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 / m3
- 数量规则：合格及不合格坯料所用的计量或供应商记录工业氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开本过程的合格坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_and_blanking_records`
- 来源：

#### 输出

##### 废物流

###### 工业后钢制切割废料（`post_industrial_steel_scrap`）

记录以废料形式离开前景控制的分类钢制骨架、边角料、切余料和不合格坯料；声明合金牌号和去向。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：离开本过程的实测钢废料质量，扣除有记录的内部重熔或直接再用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 离开本过程的合格坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock_and_blanking_records`
- 来源：

### 过程：热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用天然气（`heat_treatment_natural_gas`）

仅对前景热处理过程中燃气炉或直接燃烧的辅助设备记录天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：在有记录参考条件下计量的燃气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`eu-jrc-sf-bref`

###### 热处理用电（`heat_treatment_electricity`）

记录电炉、控制装置、循环装置及热处理直接相关辅助设备的电力。当燃气和电力均有消耗时，本行可与燃气行同时存在。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：计量电力由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`eu-jrc-sf-bref`

#### 输出

##### 基本流

###### 热处理直接化石源二氧化碳（`heat_treatment_fossil_co2`）

仅记录前景天然气燃烧产生的直接化石源 CO2。不得将上游电力排放复制到本行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：直接实测排放，或依据采集的燃料数量、供应商组成或场址碳含量及有记录的氧化情况计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热处理坯料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`
- 来源：

### 过程：磨削、刃磨、抛光和清洗（`grinding_polishing_and_cleaning`）

#### 输入

##### 产品流

###### 白色熔融氧化铝磨料（`white_fused_alumina`）

记录作为磨削或抛光磨料消耗的外购白色熔融氧化铝；声明粒度、结合剂或载体，以及回收介质是否重新进入过程。

- 选定流：白色熔融氧化铝 `429f2b7f-592a-434c-92e2-43a6b4859300`
- 流属性/单位：质量 / kg
- 数量规则：发放至本过程的外购磨料减去实测未使用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

###### 精加工用电（`finishing_electricity`）

记录磨削、刃磨、抛光、除尘、湿式过程循环和直接相关清洗设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：计量的过程电力由 kWh 换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

###### 湿式精加工工艺用水（`finishing_process_water`）

仅在进行湿式磨削、水基清洗和漂洗时记录相应供水；本行不包括直流式冷却水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：进入湿式精加工、清洗和漂洗阶段的计量用水，内部回用水仅在进入边界时计一次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

###### 水基清洗用氢氧化钠（`finishing_sodium_hydroxide`）

仅当使用含氢氧化钠的碱性清洗槽时记录干基氢氧化钠质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 / kg
- 数量规则：交付溶液质量乘以所记录的氢氧化钠质量分数，再扣除有记录的未使用退回量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

#### 输出

##### 废物流

###### 收集的含钢磨削粉尘（`steel_grinding_dust`）

记录磨削和刃磨去除的含钢干粉尘。应与无组织颗粒物排放和废磨料分开。

- 选定流：含钢磨削粉尘
- 流属性/单位：质量 / kg
- 数量规则：离开前景控制的实测收集粉尘质量，仅可依据有记录的含水率进行校正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

###### 废氧化铝磨料（`spent_aluminium_oxide_abrasive`）

记录离开前景控制的废氧化铝磨削或抛光介质；不得与收集的含钢粉尘合并。

- 选定流：废氧化铝磨料
- 流属性/单位：质量 / kg
- 数量规则：离开本过程的实测废氧化铝磨料质量，扣除实测内部再用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

###### 金属表面处理漂洗废水（`metal_finishing_rinse_wastewater`）

将湿式磨削、清洗或漂洗排出的废水作为一个水相废物流记录，并在前景记录中保留流量和组成信息。

- 选定流：金属表面处理漂洗废水
- 流属性/单位：质量 / kg
- 数量规则：计量排放质量，或用实测密度换算计量体积；仅扣除在边界前有记录的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精加工刀片组件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`us-epa-metal-finishing-1992`

### 过程：手柄与枢轴装配（`handle_and_pivot_assembly`）

#### 输入

##### 产品流

###### 聚丙烯手柄树脂（`polypropylene_handle_resin`）

仅当前景内将聚丙烯粒料模塑成手柄时记录。外购成品手柄应在生成的数据包中使用其自身具体产品行，不得用本树脂行表示。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：发放至手柄模塑的实测粒料减去返回内部的实测清洁回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配后产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

### 过程：包装（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_box`）

仅当瓦楞纸箱随产品跨越工厂大门时记录；尺寸、纸板等级和再生含量仍为必需前景限定信息。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：声明参考产品发运所消耗的实测纸箱质量，扣除未使用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

### 过程：最终检验与工厂大门交付（`final_inspection_and_release`）

#### 输出

##### 产品流

###### 合格参考产品（`reference_product_output`）

仅记录工厂大门处合格可销售产品。不合格产品保留在过程记录中，并分别报告其材料去向。

- 选定流：刀具（机械除外）、剪刀及其刀片 `b0a74999-fb7f-40ee-9dbe-41016e49a00e`
- 流属性/单位：质量 / kg
- 数量规则：不含包装的合格可销售产品净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线、炉窑、精加工设备和装配 | 应先按产品、批次和过程细分并使用直接计量或按时间分辨的记录，再进行分配。 |  |
| `allocation_physical_fallback` | 剩余共用前景负荷 | 无法合理细分时，采用反映因果关系且有记录的物理关系，例如机器时间、占炉时间或合格产品质量；说明选择理由，并在替代方法可能改变结论时报告敏感性情景。 |  |
| `allocation_scrap_no_hidden_credit` | 工业后钢废料和其他废物 | 显式报告废物质量和去向。不得在前景清单内扣除回收信用或避免负荷；工厂大门外的任何回收分配均属于所声明下游系统模型。 |  |
| `allocation_rework` | 返工和不合格产品 | 将返工能耗和材料损失归属于导致该返工的产品批次；不得将内部返工材料同时计作废物输出和新的外部投入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_and_blanking_records` | `stock_preparation_and_blanking` | 刀片坯料、电力、氧气和钢废料 | 磅单、坯料领退记录、仪表、供应商发票和废料发运记录 | 合金牌号；坯料形态；期初库存；接收；领用；退料；合格坯料质量；不合格坯料质量；用电 kWh；氧气 m3 和参考条件；废料质量和去向 | 将库存台账及经校准仪表与批次和合格坯料输出核对 | kg；kWh；m3 | 每批采集并每月核对 | 至少一个具有代表性的报告年度或所声明生产期 | 所有前景坯料成形设备及可归属辅助设备 | 汇总外部投入和输出，剔除内部退料，将电力换算为 MJ，并按合格坯料质量归一化 | 校准记录；库存核对；供应商文件；废料收据；批次追溯 |
| `cp_heat_treatment_records` | `heat_treatment` | 炉窑能源和直接化石源 CO2 | 燃气和电力仪表、炉窑日志、批次记录和燃料组成记录 | 批次质量；合金；处理制度；炉号；燃气体积和参考条件；用电 kWh；燃料碳含量或供应商组成；氧化依据 | 读取专用仪表，或按有记录的占炉时间和装载量分配共用仪表 | kg；m3；kWh；kg CO2 | 每炉批次采集并每月核对仪表 | 至少一个具有代表性的报告年度或所声明生产期 | 所有前景热处理炉及直接相关辅助设备 | 将电力换算为 MJ；按热处理质量归一化燃料和能源；仅使用有记录的采集因子计算 CO2 | 仪表校准；炉窑日志；供应商燃料规范；分配工作表 |
| `cp_finishing_records` | `grinding_polishing_and_cleaning` | 磨料、电力、水、氢氧化钠、粉尘、废磨料和废水 | 材料领用记录、电力和水表、槽液补加日志、废物称量和排放仪表 | 磨料领用及退回；用电 kWh；用水；氢氧化钠溶液质量和浓度；粉尘质量和含水率；废磨料质量；废水体积、密度和组成 | 将材料领用、仪表、槽液日志和发运废物与精加工刀片质量核对 | kg；kWh；m3 | 材料和废物逐批；仪表连续或逐班读数；每月核对 | 至少一个具有代表性的报告年度或所声明生产期 | 所有前景磨削、抛光、清洗、漂洗和收集设备 | 边界投入仅计一次，扣除有记录的内部回用，换算单位，并按精加工刀片质量归一化 | 仪表校准；槽液分析；废物联单；实验室结果；质量平衡检查 |
| `cp_assembly_records` | `handle_and_pivot_assembly` | 聚丙烯手柄树脂 | 材料领退记录和生产批次记录 | 树脂牌号；添加剂；再生含量；领用质量；清洁回料退回；不合格品质量；装配后产品质量 | 按产品批次称量树脂领用量和内部清洁退回量 | kg | 每批采集并每月核对库存 | 至少一个具有代表性的报告年度或所声明生产期 | 前景手柄模塑和装配 | 外部净树脂投入按合格装配产品质量归一化 | 衡器校准；树脂批次追溯；库存核对 |
| `cp_packaging_records` | `packaging` | 瓦楞纸箱 | 包装采购、库存领用、退回和发运记录 | 纸箱规格；纸板等级；再生含量；期初库存；接收；领用；未使用退回；发运产品质量 | 将包装库存与所声明产品发运量核对 | kg | 每次发运采集并每月核对 | 至少一个具有代表性的报告年度或所声明生产期 | 跨越工厂大门供应的包装 | 净纸箱质量按未包装合格产品质量归一化 | 供应商规范；库存核对；发运记录 |
| `cp_release_records` | `final_inspection_and_release` | 合格参考产品 | 经校准衡器、件数、检验日志和放行记录 | 产品形态；产品代码；件数；产品净质量；采用时的样品平均单件质量；合金；硬度结果；刃口试验；尺寸；表面状态；包装质量；合格和不合格数量 | 对不含包装的合格产品称量，并将结果关联至检验接收 | kg；件 | 每个放行批次 | 至少一个具有代表性的报告年度或所声明生产期 | 报告设施放行的所有声明产品 | 汇总合格产品净质量，并将每项清单交换归一化到 1 kg | 衡器校准；检验方法；批次放行批准；件数转质量抽样记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 净交换数量除以合格参考产品净质量，再乘以 1 kg。 | 净交换数量；合格参考产品净质量 | 每 1 kg 参考产品的交换数量 |  |
| `calc_item_to_mass` | 以件数记录的产品 | 产品质量 = 合格件数乘以有记录的产品特定平均单件质量。 | 合格件数；样品单件质量 | 合格参考产品 kg |  |
| `calc_electricity_mj` | 电力行 | 电力 MJ = 计量电力 kWh 乘以 3.6 MJ/kWh。 | 计量 kWh | 电力 MJ |  |
| `calc_sodium_hydroxide_dry_mass` | 氢氧化钠行 | 干基氢氧化钠质量 = 交付溶液质量乘以实测或供应商声明的氢氧化钠质量分数。 | 溶液质量；氢氧化钠质量分数 | 氢氧化钠 kg | `us-epa-metal-finishing-1992` |
| `calc_direct_fossil_co2` | 直接化石源二氧化碳 | 仅在无直接测量时计算：化石源 CO2 = 采集的燃料数量乘以有记录的场址或供应商碳含量及氧化项，并保留所有单位换算。 | 天然气数量；参考条件；供应商组成或场址碳含量；氧化记录 | 直接化石源 CO2 kg |  |
| `calc_steel_mass_balance` | 刀片坯料转化 | 在一致的干基金属基准下，将外部钢投入与合格产品金属、钢废料、收集的含钢粉尘、不合格在制品和库存变化核对；对无法解释的差异进行调查，不得强行闭合。 | 钢投入；产品金属质量；钢废料；收集粉尘；不合格在制品；库存变化 | 钢质量平衡残差 | `us-epa-metal-finishing-1992` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个汇总批次保留产品形态、产品代码、刀片合金、热处理状态、尺寸、刃口几何形状、表面状态、手柄和枢轴配置以及包装纳入情况。 | 产品规范、物料清单、批次流转卡和放行记录 |
| `dq_meter_and_scale_control` | 质量、电力、燃气、氧气、水和废水测量 | 使用经校准或验证的设备；记录校准状态、读数间隔、共用仪表分配方法和缺失数据处理。 | 校准证书、仪表日志和分配工作表 |
| `dq_temporal_representativeness` | 所有前景数据 | 覆盖至少一个具有代表性的报告年度，或能够反映计划产品和运行差异的声明生产期；披露停产、异常批次和替代。 | 生产日历、批次清单和代表性评估 |
| `dq_completeness` | 材料、能源、废物和直接排放清单 | 核对外购投入、内部退回、合格输出、不合格品和发运废物；记录每项排除交换及其理由，不得采用未报告截断。 | 库存核对、钢质量平衡、废物记录和排除登记 |
| `dq_supplier_and_background_match` | 上游数据集 | 匹配材料牌号或组成、产品状态、地理区域、技术和交付边界；披露代理使用及其影响。 | 供应商规范、数据集元数据和代理敏感性说明 |
| `dq_wet_finishing_composition` | 清洗槽液和废水 | 保留槽液浓度、水回用、排放数量、密度基准以及选择处理和排放数据集所需的实测废水组成。 | 槽液日志、实验室报告、排放仪表和废物联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认产品属于所覆盖的非机器用刀具、剪刀或刀片边界，并且所有必需限定信息齐全。 | `un-cpc-3-0-structure-2025`; `un-cpc-1-1-chinese-2002` |
| `validate_reference_mass` | 定量参考 | 确认不含包装的合格产品净质量等于所声明参考数量；如采用件数转质量，应确认转换针对具体产品。 |  |
| `validate_route_applicability` | 条件性行和过程 | 确认每项条件性交换仅在所声明技术、材料、湿式过程、装配或包装路线适用时纳入；缺失的行须在生成的数据包中明确说明不适用。 |  |
| `validate_atomic_inventory` | 过程清单 | 确认每项交换都是一个物理、化学、废物或能量流，且电力、燃料、材料、废物、废水和排放未合并为笼统行。 |  |
| `validate_uuid_semantics` | 含 UUID 的流 | 发布前确认 state-100 身份、流类型、分类、属性、单位组、产品状态、地理区域、技术和一般性说明；UUID 未解决行仍作为显式审查项。 |  |
| `validate_steel_balance` | 钢材转化 | 对照测量不确定性审查钢质量平衡残差并调查无法解释的差异；不得通过改变实测废物或输出来强行闭合。 | `us-epa-metal-finishing-1992` |
| `validate_no_upstream_double_count` | 电力和直接排放 | 确认直接化石源 CO2 仅包括前景燃烧，上游电力或燃料排放仍保留在供应数据集中。 |  |
| `validate_allocation_and_disclosure` | 共用作业和废物 | 确认已优先尝试细分，剩余分配遵循有理由的物理关系，废物去向明确，并且前景数量中没有隐藏回收信用。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明刀具、剪刀或相应刀片产品的工厂大门前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 需要工厂大门产品生产数据，且产品形态、合金、性能、装配、地理区域、技术、时期和包装范围与声明相匹配的产品碳足迹或 LCA 模型 |
| excluded_use | 机器用刀具、锯片、剃须刀、扁平餐具、身份不明的混合产品、缺少等效性能和寿命证据的使用寿命比较，或遗漏材料牌号和路线的数据集 |
| required_metadata | 规范 PCR id；产品形态和代码；件数和净质量；合金及牌号；接收坯料状态；成形路线；热源和处理状态；尺寸；硬度和试验方法；刃口和锋利度试验；表面状态或涂层；手柄和枢轴材料；包装范围；地理区域；技术；报告期；分配；排除项；上游数据集身份 |
| required_quality_disclosure | 时间和技术代表性；仪表和衡器控制；共用仪表分配；产品汇总；钢质量平衡残差；湿式精加工组成；未解决 UUID；缺失数据处理；供应商/背景匹配；废物去向；代理敏感性 |
| update_trigger | 产品边界、合金系列、成形或热处理技术、精加工或清洗路线、手柄系统、包装范围、地理区域、分配、上游数据集选择发生变化，或前景变化对报告结果具有实质影响 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 当前产品分类身份和层级 |
| `un-cpc-1-1-chinese-2002` | official_guidance | 联合国统计司，《产品总分类》1.1 版中文版，ST/ESA/STAT/SER.M/77/VER.1.1，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索日期：2026-09-04） | 对代码 42913 未变身份的专业中文名称术语进行核验 |
| `eu-jrc-sf-bref` | official_guidance | 欧盟委员会联合研究中心，《锻造和铸造行业最佳可行技术参考文件》，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索日期：2026-09-04） | 条件性锻造、机加工、精加工和热处理过程分解 |
| `us-epa-metal-finishing-1992` | official_guidance | 美国环境保护署，《污染预防指南：金属表面处理行业》，EPA/625/R-92/011，1992 年 10 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004KLA.TXT（检索日期：2026-09-04） | 磨削、抛光、化学清洗、漂洗水、废槽液、磨料残余物和废物流分离规则 |
