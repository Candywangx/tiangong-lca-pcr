---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-non-structural-ceramic-articles-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 可塑成形施釉瓷质柜门旋钮本体

## 1. 范围与适用性

本归因型PCR覆盖一种声明规格的烧成施釉瓷质柜门旋钮本体，交付时不含金属底座、螺钉、轴或胶粘剂。前景起点为外购完整可塑瓷坯料和完整水性透明釉浆的接收。纳入可塑模制、车修/修坯、连接孔成形、干燥、实际素烧及釉烧各周期、冷却、实际修整、检验及工厂门包装。专用生产批次包括启停、待机、废品、返工、清洗、废水与粉尘控制。不声称任何工厂结果或工艺效率。

排除技术研磨介质及实验室/化学/农业/包装容器（37291）、电气绝缘件（37292）、卫生洁具（37210）、餐厨及盥洗用品（37221）、装饰塑像（37222）、耐火与结构陶瓷（373）、玻璃、金属旋钮、完整锁具及炊具把手。装饰色彩不改变声明的家具配件功能；釉上贴花、金属光泽装饰、注浆、干压及厂内配制坯料需要另行适用性评估。本体不能代表完整安装把手。此狭义剩余范围以柜门配件功能及上述排除条件限定。来源：`unsd-cpc3-2025`；`cbp-n014163-2007`；`us2197a-knobs-1841`；`jrc-ceramics-2007`。

CBP N014163描述多款柜门五金样品：其中陶瓷旋钮带锌底座/帽，陶瓷拉手带锌端件；瓷质样品描述为装饰旋钮，未给出完整连接件物料表。本PCR仅覆盖陶瓷本体，排除这些金属件及后续连接，也不声称样品与本方法具有相同透明釉配方或成形路线。Q须实际净重称量验收陶瓷本体，不得采用样品毛重、尺寸、组分价值或由金属质量倒推的残差。`cbp-n014163-2007`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-non-structural-ceramic-articles-n-e-c |
| classification_refs | CPC:3.0:37299; narrower |
| covered_products | 可塑成形施釉瓷质柜门旋钮本体 |
| excluded_products | 第1节排除的其他用途、对象及路线 |
| representative_product | 一种验收合格施釉瓷质柜门旋钮本体规格 |
| production_route | 外购可塑坯料；模制/修坯；干燥；素烧；透明施釉；釉烧；修整/检验/包装 |
| market_state | 未装配烧成陶瓷本体，包装出厂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供供后续连接的陶瓷柜门握持本体 |
| How much | 1 kg |
| How well | 声明图纸、孔形、烧成尺寸、釉面覆盖、裂纹/翘曲及强度验收；阈值依据实际规格 |
| How long or cycle | 一个制造批次；不声称安装使用寿命 |
| reference_flow_link | finished_knob |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 施釉瓷质柜门旋钮本体 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 规格及图纸；瓷坯及釉浆供应商/配方/含水率；成形路线；各次烧成及气氛；实测验收净质量Q；质量规格及试验；生产批次及场址/时期；能源供应商；库存与损失；包装；边界排除和未决身份 |

必须声明全部限定信息。此质量声明单位不确立等效握持服务、单件质量或使用寿命。数据集绑定前必须直读确认UUID身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤称量验收陶瓷本体；Q排除包装及金属配件，仅计算一次首次验收。记录含水率和等级；不假设件数转质量。 |
| native_energy | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | 计量电量与供方产品身份分开。Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`以MJ为参考、kWh因子为3.6：MJ = kWh × 3.6。绑定前确认实际供方流及其原生属性/单位；供方记录若按质量计量，不会把电表电量变为kg。 |
| gas_volume | gas | Volume | m3 | 保留实测气量及温压约定；原生体积属性身份尚未确认。能量换算须采用匹配的供应商热值和基准条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收完整外购可塑瓷坯料及水性透明釉浆 |
| starting_condition_role | foreground_material_receipt |
| product_classification_scope | CPC:3.0:37299; narrower |
| recursive_input_rule | 内部未烧坯料回用是转移，不是新采购或抵扣；购买成品旋钮本体不能代替制造 |
| upstream_dataset_requirement | 匹配完整坯料/釉浆供货状态、含水率、供应商及制备边界；不得重复计入其已含矿物组分 |
| disclosure | 前景为接收至包装本体出厂；仅在连接兼容上游材料、公用工程、运输和处理数据后形成摇篮到大门 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | manufacture | 纳入首次验收及包装前全部实际操作和失败。保留期初/期末原料和在制品库存及其继承负荷；期末已验收成品仍在Q内。批次库存仅调整一次。 | `jrc-ceramics-2007` |
| b_extend | all exchanges | 筛查实际化学组成、安全表及排放监测；数据集使用前将每种实际未列试剂、燃料、包装组件、废物和物种分别增为卡片。缺席需有证据；缺测不等于零。运输链接保留实际供应距离、方式和载荷。 | `jrc-ceramics-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 可塑成形施釉瓷质柜门旋钮本体 | required | 专用单规格生产批次 | 制备至包装，含污染控制 | finished_knob; Q |

以下卡片是候选原子交换，除参考输出外均以实际存在为条件。外购釉浆是一个完整配方，组分分析属于子账。所有数量均为前景采集要求。共窑或联合可售产品在使用前需要独立审阅分配；本单规格方法不把其他产品默认为Q。

### 过程：制造 (`manufacture`)

#### 输入

##### 产品流

###### 可塑瓷坯料 (`body`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：可塑瓷坯料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_material保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-ceramics-2007`

###### 水性透明瓷釉浆 (`glaze`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：水性透明瓷釉浆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_material保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-ceramics-2007`

###### 液态自来水 (`water`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：液态自来水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_material保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jrc-ceramics-2007`

###### 工厂电表处电力 (`electricity`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：工厂电表处电力
- 流属性/单位：Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- 数量规则：使用第8节最终归一化结果；cp_energy保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-ceramics-2007`

###### 工厂气表处天然气 (`gas`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：工厂气表处天然气
- 流属性/单位：Volume / m3
- 数量规则：使用第8节最终归一化结果；cp_energy保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-ceramics-2007`

###### 石膏成形模具 (`mould`)

依据实际采购/库存/使用/报废记录计入应归属服务，不得每千克计入一件全新资产。不规定固定寿命。

- 选定流：石膏成形模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_asset保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramics-2007`

###### 氧化铝窑炉承烧板 (`setter`)

依据实际采购/库存/使用/报废记录计入应归属服务，不得每千克计入一件全新资产。不规定固定寿命。

- 选定流：氧化铝窑炉承烧板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_asset保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：`jrc-ceramics-2007`

###### 瓦楞纸箱 (`carton`)

仅记录真实采购的瓦楞纸箱；新增采购质量与首次非采购接收、可追溯退回分开。采用cp_pack完整库存/来历账，仅归属一次实际消耗/服务负荷。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_pack保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 聚乙烯包装薄膜 (`film`)

仅记录真实采购的聚乙烯薄膜；新增采购质量与首次非采购接收、可追溯退回分开。采用cp_pack完整库存/来历账，仅归属一次实际消耗/服务负荷。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_pack保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 首次非采购外部接收 — 瓦楞纸箱 (`carton_first_receipt`)

实际首次非采购接收，包括随来料包装、独立借入及无偿接收，无论上游是否包含其负荷。记录来历、所有权、状态及继承负荷证据；不得误标为退回。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 可追溯本站先前外发件的真实退回 — 瓦楞纸箱 (`carton_return_received`)

仅记录能通过单件或有记录批次追溯本站先前外发的真实退回。匹配原出货、数量/状态及新增损坏或材料。无关借入或无偿接收属于首次接收。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 首次非采购外部接收 — 聚乙烯包装薄膜 (`film_first_receipt`)

实际首次非采购接收，包括随来料包装、独立借入及无偿接收，无论上游是否包含其负荷。记录来历、所有权、状态及继承负荷证据；不得误标为退回。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 可追溯本站先前外发件的真实退回 — 聚乙烯包装薄膜 (`film_return_received`)

仅记录能通过单件或有记录批次追溯本站先前外发的真实退回。匹配原出货、数量/状态及新增损坏或材料。无关借入或无偿接收属于首次接收。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 施釉瓷质柜门旋钮本体 (`finished_knob`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：施釉瓷质柜门旋钮本体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`jrc-ceramics-2007`

###### 外发总量 — 瓦楞纸箱 (`carton_dispatch`)

记录全部实际外发材料质量，包括重复出货；与陶瓷Q及采购/服务负荷分开。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 退还外部所有者或供应商 — 瓦楞纸箱 (`carton_return_out`)

记录实际退还外部所有者或供应商的全部实物材料；不自动抵扣，也不按早先外发量自动冲回。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 外发总量 — 聚乙烯包装薄膜 (`film_dispatch`)

记录全部实际外发材料质量，包括重复出货；与陶瓷Q及采购/服务负荷分开。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 退还外部所有者或供应商 — 聚乙烯包装薄膜 (`film_return_out`)

记录实际退还外部所有者或供应商的全部实物材料；不自动抵扣，也不按早先外发量自动冲回。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

##### 废物流

###### 未烧成瓷坯废料 (`green_scrap`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：未烧成瓷坯废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 烧成施釉瓷质不合格品 (`fired_scrap`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：烧成施釉瓷质不合格品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 瓷釉处理污泥 (`sludge`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：瓷釉处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 瓷加工废水 (`wastewater`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：瓷加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 废石膏模具 (`spent_mould`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：废石膏模具
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 废氧化铝窑炉承烧板 (`spent_setter`)

仅在实际存在时记录该交换；保留实际等级、状态和去向。

- 选定流：废氧化铝窑炉承烧板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_waste保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`jrc-ceramics-2007`

###### 废包装转移 — 废瓦楞纸箱 (`carton_waste`)

按该材料实际废弃去向单独称量；保留干湿状态及处理证据。

- 选定流：废瓦楞纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

###### 废包装转移 — 废聚乙烯包装薄膜 (`film_waste`)

按该材料实际废弃去向单独称量；保留干湿状态及处理证据。

- 选定流：废聚乙烯包装薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：该实物流向全部实测总量 / Q；仅为实物账，与归属采购/服务负荷分开。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`jrc-ceramics-2007`

##### 基本流

###### 排向空气的化石二氧化碳 (`co2_fuel`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的化石二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的矿物来源二氧化碳 (`co2_body`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的矿物来源二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的水蒸气 (`water_air`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的氟化氢 (`hf`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的氟化氢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的氯化氢 (`hcl`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的氯化氢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的一氧化氮 (`no`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的一氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的二氧化氮 (`no2`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的二氧化氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的一氧化碳 (`co`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的一氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的二氧化硫 (`so2`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的二氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

###### 排向空气的粒径小于2.5微米颗粒物 (`pm`)

需要独立物种/来源及空气环境区间证据。总NOx、总尘或质量残差不能识别本流。未检出须附检出限，不能据此直接断言不存在。

- 选定流：排向空气的粒径小于2.5微米颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用第8节最终归一化结果；cp_emission保留原始总量。
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emission`
- 来源：`jrc-ceramics-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_campaign | manufacture | 使用专用单规格批次，纳入全部应归属干燥/烧成、废品、待机及污染控制。分表并隔离其他生产后归属负荷。共窑因果关系未决时阻止形成单位数据集；质量或价格均不是默认分配键。 | `jrc-ceramics-2007` |
| a_recycle | scrap | 内部回用保留实际收集及再处理负荷；内部转移仅抵消一次。除非独立记录产品功能及分配决策，外售不合格品仍为废物。不计避免原生坯料抵扣。 | `jrc-ceramics-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | 验收输出 | foreground_record | 验收编号；规格；验收净质量Q；含水率；不合格品；期初期末库存 | 经校准净重称量及首次验收签认；排除包装/配件 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_material | manufacture | 材料 | foreground_record | 接收；领用；退回；湿质量；含水率；分析；原料/在制库存；继承负荷 | 称量各完整外购配方；核对领退料、库存及内部回用 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_energy | manufacture | 能源 | foreground_record | 表计始末值；周期；待机；温度；压力；供应商；热值 | 全部实际周期及辅助设备专表读数；保留原始单位 | kWh; m3 | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_asset | manufacture | 资产服务 | foreground_record | 资产编号；期初期末库存；新增；使用；报废；服务证据 | 追踪模具/承烧板实际批次服务，不设默认寿命；实物库存与归属服务分开 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_pack | manufacture | 包装 | foreground_record | 材料；单件/批次；所有权；真实采购；首次非采购接收及来历；可追溯退回件及原外发编号；期初期末空包/在制/成品/周转库存；外发；退还所有者/供应商；废弃；继承负荷覆盖；修理及水分变化 | 称量每种材料/流向。期初库存 + 采购 + 全部首次非采购外部接收 + 可追溯退回 + 实测实际新增 = 期末库存 + 外发总量 + 退还所有者/供应商 + 废弃 + 单独实测实际移出。首次接收包括随来料、独立借入及无偿接收，无论上游是否计入负荷。内部回用抵消一次。存在修理新增/移出及水分变化时分别记录，避免湿质量重复。实物总量各流向仅为实物账。按来历归属一次实际采购/服务及继承负荷；上游未覆盖的接收不自动无负荷，上游已含供应不重复采购。来历或归属证据缺失时阻止其数据集使用。 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_waste | manufacture | 废物 | foreground_record | 废物流；湿质量；含水率；组成；去向；转移凭单 | 分别称量废物及废水运输或计量排放；处理负荷连接一次 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |
| cp_emission | manufacture | 物种 | foreground_record | 物种；来源；环境区间；浓度；气流量；时间；状态；检出限；不确定度 | 积分有代表性的独立烟气分析及匹配气流/时间记录；识别粉尘粒径与来源；分析坯釉挥发释放 | kg | 每批次/周期 | 完整声明批次，含失败及待机 | 单场址单规格 | 每 1 kg 参考流 | 校准；原始记录；库存核对；不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_campaign | all inventory rows | 每个非参考交换i使用q_i = A_i / Q。A_i为该批次应归属广延量，原料/在制继承负荷库存仅作一次有记录的调整；消耗记录已调整者不重复。Q为实测唯一验收净千克。Q = 0时保留负荷调查记录，不输出商。参考输出为1千克。 包装仅实物账流向的A_i另指该流向全部实测总质量，不作继承负荷库存调整、经济分配、重复采购或自动抵扣；A_i/Q与归属采购/服务负荷分开报告。 | A_i; Q; cp_release | q_i | `jrc-ceramics-2007` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | 独立确认每个UUID、供货状态及单位；空UUID不能用泛陶瓷、纯氧化物或聚合气体流替代。 | 直读身份记录；供应规格 |
| dq_balance | campaign | 分别核对干固体与水，覆盖原料/在制/成品库存、废料、废水及实际空气排放。烧成收缩不能确定气体物种或反应损失。 | 独立分析及测量不确定度 |
| dq_quality | 验收输出 | 保留图纸尺寸/孔、釉面覆盖、裂纹/翘曲及机械验收结果；不编造通用阈值。披露缺口和失败批次。 | 规格；质量验收签认 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | 要求柜门配件用途、瓷本体及指定成形/烧成路线，不含金属装配；技术或耐火产品不适用。 | `unsd-cpc3-2025`; `us2197a-knobs-1841` |
| v_basis | all rows | 核查一致的每千克基准、正Q、未预除原始总量、一次库存调整、实际质量验收及实际能耗周期。缺失物种或身份保持明确；工程检查成功不证明工厂数据或科学批准。 | `jrc-ceramics-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 后续家具配件装配的特定等级陶瓷本体投入 |
| allowed_use | 仅在身份确认、实际批次采集及独立适用性审阅之后 |
| excluded_use | 已安装锁具、等效服务、完整CPC叶级、技术陶瓷或安全/合规结论 |
| required_metadata | 规格及图纸；瓷坯及釉浆供应商/配方/含水率；成形路线；各次烧成及气氛；实测验收净质量Q；质量规格及试验；生产批次及场址/时期；能源供应商；库存与损失；包装；边界排除和未决身份 |
| required_quality_disclosure | 全部缺失身份、数据缺口、代理/上游边界、不确定度、批次覆盖及审阅状态 |
| update_trigger | 坯/釉、用途、成形/烧成、能源供应商、质量或边界变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC 3.0 explanatory notes, 30 June 2025, pp. 182–183; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 剩余类别及相邻正面类别；不声称存在逐项 CPC3–HS 对照。 |
| us2197a-knobs-1841 | literature | US2197A, 29 July 1841, description and drawing; https://patents.google.com/patent/US2197A/en | 陶土/瓷质家具旋钮及模制、修坯、烧成、施釉的历史原始证据；不是现代配方或实测清单。金属连接属于本陶瓷本体边界之后的操作。 |
| jrc-ceramics-2007 | official_guidance | European Commission, Ceramic Manufacturing Industry BREF, August 2007, sections 2.2 and 2.3.6.3–2.3.6.5; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | 定性支持可塑成形、干燥、施釉、烧成、修整及环境交换筛查。日用陶瓷实例仅作为工艺类比；不采用其温度、成品率、模具寿命、强度或排放范围。 |
| cbp-n014163-2007 | official_guidance | US CBP, NY N014163, 20 July 2007; https://rulings.cbp.gov/ruling/N014163 ; original text https://rulings.cbp.gov/api/ruling/N014163 | 独立产品/类别反查：瓷质柜门旋钮被归入其他陶瓷制品。历史美国税则裁定不等同于当前 CPC 接受或对本未装配本体的裁定。不采用税率或样品尺寸。 |
