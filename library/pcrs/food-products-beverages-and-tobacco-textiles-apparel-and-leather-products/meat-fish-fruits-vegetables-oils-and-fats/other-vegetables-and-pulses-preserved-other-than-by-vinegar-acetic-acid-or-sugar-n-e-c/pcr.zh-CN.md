---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-preserved-other-than-by-vinegar-acetic-acid-or-sugar-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他非用醋、醋酸或糖保藏的蔬菜和豆类（未另分类）

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 类目 21399。它适用于以密封包装热加工、浓缩、干燥、非醋发酵或盐渍，或进一步加工后冷冻方式制备或保藏的蔬菜和豆类，但醋、醋酸或糖不得作为主要保藏剂。具体数据集必须声明一种蔬菜或豆类、一条保藏路线和一种可销售产品状态。

范围内示例包括保藏番茄及番茄泥、番茄酱或番茄粉；热加工甜玉米、胡萝卜、卷心菜、鹰嘴豆、竹笋、大蒜、扁豆、洋葱、辣椒或菠菜；通过盐渍、发酵、碱处理或灭菌保藏的餐桌橄榄；通过盐腌和乳酸发酵保藏的泡菜；以及经制备或保藏且同时冷冻的菜豆或豌豆。不包括仅冷冻的蔬菜、暂时保藏蔬菜、主要用醋或醋酸保藏的产品、糖保藏产品、均质食品制品、马铃薯、蘑菇或块菌，以及划入单独 CPC 类目的非冷冻保藏菜豆和豌豆。当示例与排除项似有重叠时，以官方 CPC 解释性说明为准。[`unsd-cpc-v3-21399-2025`]

本规则采用从摇篮到工厂大门的前景数据包边界。农业生产、配料生产、包装材料生产、能源供应、运输和场外处理作为上下游链接数据集；只有在报告组织场内运行时才纳入前景。配送、零售、消费者制备、使用和生命末期不在声明边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-preserved-other-than-by-vinegar-acetic-acid-or-sugar-n-e-c |
| classification_refs | CPC 3.0 21399，精确范围参考 |
| covered_products | 一种明确识别的蔬菜或豆类，采用范围内路线保藏，且主要保藏剂不是醋、醋酸或糖 |
| excluded_products | CPC 2131 仅冷冻蔬菜；21330 暂时保藏蔬菜；21340 醋或醋酸保藏蔬菜；21392 蘑菇和块菌；21393 干蔬菜（21399 内番茄粉除外）；21394 马铃薯；21395 非冷冻保藏菜豆；21396 非冷冻保藏豌豆；23991 均质食品制品；糖保藏产品 |
| representative_product | 密封零售包装的常温稳定热加工甜玉米；该代表产品不得替代其他合格产品的声明身份 |
| production_route | 接收和预处理、产品特定保藏、包装灌装和封口、稳定化或低温保藏、检验与工厂放行 |
| market_state | 工厂大门可销售产品；声明保藏路线、装填介质、沥干或未沥干基准、适用时的固形物或浓度、包装形式及储存状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明产品规范和 CPC 3.0 21399 的可销售保藏蔬菜或豆类 |
| How much | 工厂大门 1 kg 产品净含量；包装质量不计入该 1 kg，但作为清单输入纳入 |
| How well | 放行产品满足适用法规、客户和 Codex 规范，包括包装完整性及适用时的计划热处理或经验证低温保藏条件 |
| How long or cycle | 以具有时间代表性的报告期表示一次生产活动；货架期是必需限定信息，不是乘数 |
| reference_flow_link | 参考输出行 `finished_preserved_product`；尚未核验覆盖完整范围的天工产品流 UUID |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净含量 |
| 参考产品流 | 其他非用醋、醋酸或糖保藏的蔬菜和豆类（未另分类） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 蔬菜或豆类身份；保藏路线；装填介质；沥干或未沥干参考基准；适用时的可溶性或总固形物；包装形式和净含量；常温、冷藏或冷冻储存状态；货架期；生产地域；报告期；二级和三级包装的纳入或排除 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mass-net-product | 参考产品 | 质量 | kg | 采用经校准的灌装或复核称量记录确定产品净含量。声明是否计入装填介质，并对所有归一化交换采用同一基准。 |
| mass-material | 蔬菜、配料、包装、废物、污泥和质量排放 | 质量 | kg | 使用接收、投料、包装线、废物转运或实验室记录；不得通过聚合混合物差额推算某一原子物料。 |
| water-volume | 工艺水、清洗水、冷却水和废水 | 体积 | m3 | 使用分表体积或有文件依据的工程平衡；区分进水、循环水和排放废水。 |
| electricity-energy | 外购及自发电力 | 能量 | kWh | 使用结算或校准分表读数；扣除有记录的外送电，共用仪表仅按第 7 节分配。 |
| thermal-energy | 外购热力和蒸汽 | 能量 | MJ | 计量交付的有用能；仅有蒸汽质量时，依据实测压力、温度、冷凝水回流和焓值计算。 |
| fuel-energy | 天然气及其他燃料 | 能量 | MJ LHV | 逐种记录燃料，并用供应商报告期低位热值将实测采购单位换算。 |
| concentration | 番茄浓缩物或装填介质 | 质量分数 | kg/kg | 采用实验室固形物或配方记录并声明分析基准；不得用假定通用固形物值换算番茄泥、番茄酱和番茄粉。 |
| refrigeration-loss | 每种制冷剂 | 质量 | kg | 采用制冷剂特定的补充、回收和库存核对；每种化学物质作为独立直接基本流报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的蔬菜或豆类、配料、包装组件和公用工程交付至工厂大门 |
| starting_condition_role | 保藏前景系统的上游产品输入 |
| product_classification_scope | 仅限满足 CPC 3.0 21399 和声明产品规范的产品 |
| recursive_input_rule | 每项外购物料、配料、包装组件、燃料、电力、热力、蒸汽、供水服务和场外处理均链接上游数据集；不得在流卡内重建上游过程 |
| upstream_dataset_requirement | 供应商和地域具有代表性，且技术、产品状态和参考单位匹配的数据集；披露代理和再生含量假设 |
| disclosure | 报告截断、排除的资本品、共用公用工程、外包步骤、储存状态、产品损失、包装层级及废水处理位于场内或场外 |

纳入接收、分选、清洗、修整或去皮、切割或破碎、产品特定预处理、适用时的漂烫、配方或盐渍、灌装、排气、封口、计划热处理和热稳定产品冷却；番茄产品的浓缩及可选干燥；泡菜的盐腌、清洗、调味和受控发酵；餐桌橄榄的碱处理、清洗、盐渍、发酵、氧化或灭菌；合格进一步加工冷冻产品的冻结和冷冻储存；以及包装检验、清洗、场内公用工程、制冷剂损失、废物处理和场内废水处理。[`codex-cxc-23-1979`, `codex-cxs-297-2009`, `codex-cxs-13-1981`, `codex-cxs-57-1981`, `codex-cxs-66-1981`, `codex-cxs-223-2001`, `codex-cxs-320-2015`, `eu-jrc-fdm-bref-2019`]

不得用通用时间—温度程序替代实际程序。记录产品、装填、容器和杀菌设备特定的计划过程及验证证据。适用该标准时，速冻路线应达到并维持 Codex 产品热中心 -18 °C 条件，但该合规值不是清单数量范围。[`codex-cxc-23-1979`, `codex-cxs-320-2015`]

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| preparation | 接收与蔬菜预处理 | 必需 | 始终 | 将已识别的原料蔬菜或豆类转化为预处理路线进料 | 1 kg 预处理路线进料 |
| preservation | 产品特定保藏 | 必需 | 仅纳入声明产品实际采用的路线操作 | 生产常温稳定或受控低温保藏产品 | 1 kg 散装保藏产品 |
| packaging_release | 灌装、包装与工厂放行 | 必需 | 始终；仅记录实际使用的包装组件 | 生产参考产品 | 1 kg 净含量成品 |
| onsite_utilities | 场内能源与制冷供应 | 条件纳入 | 场内运行燃料燃烧、热电联产或制冷时纳入 | 供应计量的公用工程并记录直接排放 | 1 MJ 有用公用工程或 1 kWh 电力 |
| cleaning | 清洗与消毒 | 必需 | 始终 | 提供生产线和设备卫生服务 | 一个报告期清洗服务并归一化至产品输出 |
| wastewater_treatment | 场内废水处理 | 条件纳入 | 排放前进行场内处理时纳入；否则逐股记录送场外处理的废水 | 处理工厂废水并记录残余排放 | 处理 1 m3 进水 |

### 过程：接收与蔬菜预处理 (`preparation`)

#### 输入

##### 产品流

###### 鲜甜玉米（`raw_sweet_corn`）

记录“鲜甜玉米”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜甜玉米
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理甜玉米输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`unsd-cpc-v3-21399-2025`

###### 鲜番茄（`raw_tomato`）

记录“鲜番茄”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜番茄
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理番茄输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`codex-cxs-13-1981`, `codex-cxs-57-1981`

###### 鲜大白菜（`raw_chinese_cabbage`）

记录“鲜大白菜”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜大白菜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理大白菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`codex-cxs-223-2001`

###### 鲜油橄榄（`raw_olive`）

记录“鲜油橄榄”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜油橄榄
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理油橄榄输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`codex-cxs-66-1981`

###### 鲜四季豆（`raw_green_bean`）

记录“鲜四季豆”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜四季豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理四季豆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`unsd-cpc-v3-21399-2025`, `codex-cxs-320-2015`

###### 鲜青豌豆（`raw_green_pea`）

记录“鲜青豌豆”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜青豌豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理青豌豆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`unsd-cpc-v3-21399-2025`, `codex-cxs-320-2015`

###### 预处理用水（`preparation_water`）

记录“预处理用水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端饮用水
- 流属性/单位：体积 / m3
- 数量规则：采用分表计量或经核对的水量平衡，并扣除循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理路线进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-water`
- 来源：`codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### 预处理电力（`preparation_electricity`）

记录“预处理电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理路线进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 预处理蔬菜路线进料（`prepared_route_feed`）

记录“预处理蔬菜路线进料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：预处理蔬菜或豆类路线进料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：预处理过程的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 不合格蔬菜物料（`preparation_vegetable_reject`）

记录“不合格蔬菜物料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：不合格蔬菜物料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理路线进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 蔬菜修整残余物（`preparation_trimming_residue`）

记录“蔬菜修整残余物”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：蔬菜修整残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理路线进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 预处理废水（`preparation_wastewater`）

记录“预处理废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：蔬菜预处理废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理路线进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

无。

### 过程：产品特定保藏 (`preservation`)

#### 输入

##### 产品流

###### 保藏路线进料（`preservation_route_feed`）

记录“保藏路线进料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：预处理蔬菜或豆类路线进料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量并扣除皮重，按具体物料、路线和批次归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-materials`
- 来源：`eu-jrc-fdm-bref-2019`

###### 装填或盐渍用水（`preservation_water`）

记录“装填或盐渍用水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端饮用水
- 流属性/单位：体积 / m3
- 数量规则：采用分表计量或经核对的水量平衡，并扣除循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-water`
- 来源：`codex-cxs-297-2009`, `codex-cxs-66-1981`

###### 氯化钠（`sodium_chloride`）

记录“氯化钠”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品级氯化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-297-2009`, `codex-cxs-66-1981`, `codex-cxs-223-2001`

###### 氯化钙（`calcium_chloride`）

记录“氯化钙”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品级氯化钙
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-297-2009`

###### 柠檬酸（`citric_acid`）

记录“柠檬酸”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品级柠檬酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-297-2009`

###### 油橄榄处理用氢氧化钠（`olive_sodium_hydroxide`）

记录“油橄榄处理用氢氧化钠”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氢氧化钠
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后油橄榄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-66-1981`

###### 红辣椒粉（`kimchi_red_pepper`）

记录“红辣椒粉”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：红辣椒粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装泡菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-223-2001`

###### 大蒜（`kimchi_garlic`）

记录“大蒜”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜大蒜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装泡菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-223-2001`

###### 姜（`kimchi_ginger`）

记录“姜”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜姜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装泡菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-223-2001`

###### 萝卜（`kimchi_radish`）

记录“萝卜”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：鲜萝卜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准投料或配方记录，并扣除退回量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装泡菜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-ingredients`
- 来源：`codex-cxs-223-2001`

###### 保藏工序电力（`preservation_electricity`）

记录“保藏工序电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`, `frankowska-vegetables-2019`

###### 外购蒸汽（`preservation_steam`）

记录“外购蒸汽”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### 外购热力（`preservation_heat`）

记录“外购热力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端外购热力
- 流属性/单位：能量 / MJ
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制冷电力（`refrigeration_electricity`）

记录“制冷电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷藏或冷冻散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`codex-cxs-223-2001`, `codex-cxs-320-2015`, `eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 散装保藏产品（`preserved_bulk_product`）

记录“散装保藏产品”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：散装保藏蔬菜或豆类
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量和质量放行记录，仅计合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：保藏过程的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-product`
- 来源：`codex-cxs-297-2009`

##### 废物流

###### 保藏产品损失（`preservation_product_loss`）

记录“保藏产品损失”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：不合格保藏蔬菜产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 番茄皮残余物（`tomato_skin_residue`）

记录“番茄皮残余物”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：番茄皮残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 番茄浓缩物或番茄粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`codex-cxs-57-1981`

###### 番茄籽残余物（`tomato_seed_residue`）

记录“番茄籽残余物”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：番茄籽残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 番茄浓缩物或番茄粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`codex-cxs-57-1981`

###### 废油橄榄盐水（`spent_olive_brine`）

记录“废油橄榄盐水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：废油橄榄盐水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装餐桌橄榄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`codex-cxs-66-1981`, `eu-jrc-fdm-bref-2019`

###### 保藏废水（`preservation_wastewater`）

记录“保藏废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：蔬菜保藏废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 散装保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 番茄干燥颗粒物排入空气（`tomato_drying_particulate`）

记录“番茄干燥颗粒物排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：颗粒物，排入空气，粒径未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 番茄粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：灌装、包装与工厂放行 (`packaging_release`)

#### 输入

##### 产品流

###### 散装保藏产品输入（`packaging_bulk_product`）

记录“散装保藏产品输入”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：散装保藏蔬菜或豆类
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量和质量放行记录，仅计合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-product`
- 来源：`codex-cxs-297-2009`

###### 镀锡钢罐罐身（`tinplate_can_body`）

记录“镀锡钢罐罐身”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：镀锡钢罐罐身
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### 镀锡钢罐罐盖（`tinplate_can_end`）

记录“镀锡钢罐罐盖”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：镀锡钢罐罐盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### 玻璃食品罐（`glass_jar`）

记录“玻璃食品罐”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：玻璃食品罐
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxs-297-2009`, `frankowska-vegetables-2019`

###### 钢制罐盖（`steel_jar_closure`）

记录“钢制罐盖”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：钢制食品罐盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxs-297-2009`

###### 多层蒸煮袋（`retort_pouch`）

记录“多层蒸煮袋”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：多层蒸煮袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxc-23-1979`

###### 聚乙烯冷冻食品袋（`polyethylene_bag`）

记录“聚乙烯冷冻食品袋”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：聚乙烯冷冻食品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`codex-cxs-320-2015`

###### 纸标签（`paper_label`）

记录“纸标签”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：印刷纸标签
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`frankowska-vegetables-2019`

###### 瓦楞纸箱（`corrugated_case`）

记录“瓦楞纸箱”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`frankowska-vegetables-2019`

###### 聚乙烯缠绕膜（`stretch_film`）

记录“聚乙烯缠绕膜”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`frankowska-vegetables-2019`

###### 木托盘（`wooden_pallet`）

记录“木托盘”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：木托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放件数乘经核验单件质量，并与退料和废料记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-packaging`
- 来源：`eu-pef-2021-2279`

###### 包装工序电力（`packaging_electricity`）

记录“包装工序电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 其他非用醋、醋酸或糖保藏的蔬菜和豆类（未另分类）（`finished_preserved_product`）

记录“保藏蔬菜成品”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：其他非用醋、醋酸或糖保藏的蔬菜和豆类（未另分类）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量和质量放行记录，仅计合格产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：前景数据包的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-product`
- 来源：`unsd-cpc-v3-21399-2025`

##### 废物流

###### 不合格包装产品（`packaged_product_reject`）

记录“不合格包装产品”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：不合格包装保藏蔬菜产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`codex-cxc-23-1979`

###### 钢包装废料（`steel_packaging_scrap`）

记录“钢包装废料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：钢包装废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 玻璃包装废料（`glass_packaging_scrap`）

记录“玻璃包装废料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：玻璃包装废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 塑料包装废料（`plastic_packaging_scrap`）

记录“塑料包装废料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：塑料包装废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 纸包装废料（`paper_packaging_scrap`）

记录“纸包装废料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：纸包装废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

无。

### 过程：场内能源与制冷供应 (`onsite_utilities`)

#### 输入

##### 产品流

###### 天然气（`natural_gas`）

记录“天然气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：天然气，场内燃烧
- 流属性/单位：能量 / MJ LHV
- 数量规则：依据计量、采购及库存核对记录，并用当期低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-fuels`
- 来源：`eu-jrc-fdm-bref-2019`

###### 柴油（`diesel_fuel`）

记录“柴油”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：柴油，场内燃烧
- 流属性/单位：能量 / MJ LHV
- 数量规则：依据计量、采购及库存核对记录，并用当期低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-fuels`
- 来源：`eu-jrc-fdm-bref-2019`

###### 液化石油气（`lpg_fuel`）

记录“液化石油气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：液化石油气，场内燃烧
- 流属性/单位：能量 / MJ LHV
- 数量规则：依据计量、采购及库存核对记录，并用当期低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-fuels`
- 来源：`eu-jrc-fdm-bref-2019`

###### 重质燃料油（`heavy_fuel_oil`）

记录“重质燃料油”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：重质燃料油，场内燃烧
- 流属性/单位：能量 / MJ LHV
- 数量规则：依据计量、采购及库存核对记录，并用当期低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-fuels`
- 来源：`eu-jrc-fdm-bref-2019`

###### 木片燃料（`wood_chip_fuel`）

记录“木片燃料”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：木片，场内燃烧
- 流属性/单位：能量 / MJ LHV
- 数量规则：依据计量、采购及库存核对记录，并用当期低位热值换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-fuels`
- 来源：`eu-jrc-fdm-bref-2019`

###### 锅炉给水（`boiler_feedwater`）

记录“锅炉给水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：锅炉给水
- 流属性/单位：体积 / m3
- 数量规则：采用分表计量或经核对的水量平衡，并扣除循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用蒸汽输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-water`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 场内蒸汽（`onsite_steam`）

记录“场内蒸汽”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：场内生产蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：蒸汽公用工程过程的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 锅炉排污水（`boiler_blowdown`）

记录“锅炉排污水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：锅炉排污废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用蒸汽输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

###### 锅炉灰（`boiler_ash`）

记录“锅炉灰”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：锅炉灰
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 化石二氧化碳排入空气（`fossil_carbon_dioxide`）

记录“化石二氧化碳排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：二氧化碳（化石源），排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-pef-2021-2279`

###### 生物源二氧化碳排入空气（`biogenic_carbon_dioxide`）

记录“生物源二氧化碳排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：二氧化碳（生物源），排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-pef-2021-2279`

###### 氮氧化物排入空气（`nitrogen_oxides`）

记录“氮氧化物排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氮氧化物，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化硫排入空气（`sulfur_dioxide`）

记录“二氧化硫排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燃烧甲烷排入空气（`combustion_methane`）

记录“燃烧甲烷排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：甲烷（化石源），排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燃烧氧化亚氮排入空气（`combustion_nitrous_oxide`）

记录“燃烧氧化亚氮排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 一氧化碳排入空气（`carbon_monoxide`）

记录“一氧化碳排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 燃烧颗粒物排入空气（`combustion_particulate`）

记录“燃烧颗粒物排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：颗粒物，排入空气，粒径未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量的有用公用工程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-jrc-fdm-bref-2019`

###### 制冷剂 R134a 排入空气（`refrigerant_r134a`）

记录“制冷剂 R134a 排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按期初库存、补充量、回收量和期末库存逐种制冷剂核算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 需制冷保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-refrigerants`
- 来源：`eu-pef-2021-2279`

###### 制冷剂 R404A 排入空气（`refrigerant_r404a`）

记录“制冷剂 R404A 排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：制冷剂 R404A，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按期初库存、补充量、回收量和期末库存逐种制冷剂核算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 需制冷保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-refrigerants`
- 来源：`eu-pef-2021-2279`

###### 氨制冷剂排入空气（`refrigerant_ammonia`）

记录“氨制冷剂排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氨，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按期初库存、补充量、回收量和期末库存逐种制冷剂核算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 需制冷保藏产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-refrigerants`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：清洗与消毒 (`cleaning`)

#### 输入

##### 产品流

###### 清洗用水（`cleaning_water`）

记录“清洗用水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端饮用水
- 流属性/单位：体积 / m3
- 数量规则：采用分表计量或经核对的水量平衡，并扣除循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-water`
- 来源：`codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide`）

记录“氢氧化钠清洗剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氢氧化钠清洗剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种清洗剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-cleaning`
- 来源：`codex-cxc-23-1979`, `eu-jrc-fdm-bref-2019`

###### 硝酸清洗剂（`cleaning_nitric_acid`）

记录“硝酸清洗剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：硝酸清洗剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种清洗剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-cleaning`
- 来源：`eu-jrc-fdm-bref-2019`

###### 磷酸清洗剂（`cleaning_phosphoric_acid`）

记录“磷酸清洗剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：磷酸清洗剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种清洗剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-cleaning`
- 来源：`eu-jrc-fdm-bref-2019`

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite`）

记录“次氯酸钠消毒剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：次氯酸钠消毒剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种清洗剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-cleaning`
- 来源：`codex-cxc-23-1979`

###### 过氧乙酸消毒剂（`cleaning_peracetic_acid`）

记录“过氧乙酸消毒剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：过氧乙酸消毒剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种清洗剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-cleaning`
- 来源：`codex-cxc-23-1979`

###### 清洗工序电力（`cleaning_electricity`）

记录“清洗工序电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

无。

##### 废物流

###### 碱性清洗废水（`alkaline_cleaning_wastewater`）

记录“碱性清洗废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：碱性清洗废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

###### 酸性清洗废水（`acid_cleaning_wastewater`）

记录“酸性清洗废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：酸性清洗废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

###### 消毒废水（`sanitizer_wastewater`）

记录“消毒废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：消毒废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净含量成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`codex-cxc-23-1979`

##### 基本流

无。

### 过程：场内废水处理 (`wastewater_treatment`)

#### 输入

##### 产品流

###### 废水处理进水（`wastewater_influent`）

记录“废水处理进水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品加工废水，送场内处理
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水处理电力（`wwt_electricity`）

记录“废水处理电力”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：工厂端电网混合电力
- 流属性/单位：能量 / kWh
- 数量规则：采用分表计量；共享仪表仅按有文件依据的实际驱动量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-energy`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氯化铁混凝剂（`wwt_ferric_chloride`）

记录“氯化铁混凝剂”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氯化铁混凝剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种处理药剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-treatment-chemicals`
- 来源：`eu-jrc-fdm-bref-2019`

###### 絮凝聚合物（`wwt_flocculant`）

记录“絮凝聚合物”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：废水絮凝聚合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用剂量系统或化学品领用记录，逐种处理药剂归集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-treatment-chemicals`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

无。

##### 废物流

###### 处理后废水（`treated_wastewater`）

记录“处理后废水”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：处理后食品加工废水
- 流属性/单位：体积 / m3
- 数量规则：采用流量计或经核对的排放/水量平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-wastewater`
- 来源：`eu-jrc-fdm-bref-2019`

###### 初沉污泥（`primary_sludge`）

记录“初沉污泥”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品加工废水初沉污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 生物污泥（`biological_sludge`）

记录“生物污泥”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品加工废水生物污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水筛渣（`wastewater_screenings`）

记录“废水筛渣”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：食品加工废水筛渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用校准称量或承运单据，扣除容器皮重并保留去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-waste`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 化学需氧量排入水体（`cod_to_water`）

记录“化学需氧量排入水体”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：化学需氧量，排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用流量加权浓度乘排放体积并明确单位换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-effluent`
- 来源：`eu-jrc-fdm-bref-2019`

###### 总氮排入水体（`nitrogen_to_water`）

记录“总氮排入水体”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：总氮，排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用流量加权浓度乘排放体积并明确单位换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-effluent`
- 来源：`eu-jrc-fdm-bref-2019`

###### 总磷排入水体（`phosphorus_to_water`）

记录“总磷排入水体”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：总磷，排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用流量加权浓度乘排放体积并明确单位换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-effluent`
- 来源：`eu-jrc-fdm-bref-2019`

###### 悬浮物排入水体（`suspended_solids_to_water`）

记录“悬浮物排入水体”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：悬浮物，排入水体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用流量加权浓度乘排放体积并明确单位换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-effluent`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废水处理甲烷排入空气（`wastewater_methane`）

记录“废水处理甲烷排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：甲烷（生物源），排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-pef-2021-2279`

###### 废水处理氧化亚氮排入空气（`wastewater_nitrous_oxide`）

记录“废水处理氧化亚氮排入空气”这一原子交换跨越本过程边界的现场数量；具体适用路线由产品声明和本卡归一化基准确定。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：优先采用监测值；否则依据现场活动数据进行设备特定计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每处理 1 m3 废水进水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`protocol-emissions`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

应尽可能拆分单元过程并对路线特定操作单独计量。通过直接称量产品、配料、包装、废物和路线公用工程避免分配。共用操作首先按生产线、批次、保藏路线或时段细分。无法细分时，只有在替代功能和市场有文件依据的情况下才采用系统扩展；否则采用能反映消耗或损失驱动因素的实测物理关系，例如设备时间、有用蒸汽、制冷负荷、废水体积或产品净质量。经济分配仅作为最后手段，并使用具有代表性的价格期和敏感性分析。[`eu-pef-2021-2279`, `iso-14044-2006`]

番茄皮、番茄籽、蔬菜残余物、回收盐水成分、回收包装材料、外送能源或污泥，只有在满足产品规范并有文件证明的有益用途时才是共产品；否则仍为废物流并链接接收处理。除非声明的 LCA 方法明确要求，不得在前景清单内为废物回收或能源回收计入避免负担；应披露回收和生命末期约定。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| protocol-materials | preparation; preservation | 蔬菜或豆类输入；中间产品 | 地磅、秤或批次记录 | 物料身份、供应商、批号、毛重、皮重、接收质量、路线、批次 | 校准称量并与库存移动核对 | kg | 每次接收或每批 | 至少一个包含季节性生产活动的代表性年度期间 | 每个纳入场址和路线 | 按准确物料和路线汇总接收质量；不得跨植物身份聚合 | 校准、批次追溯和年度质量平衡 |
| protocol-ingredients | preservation | 配料 | 配方和投料记录 | 配料身份、批次、领用质量、退回质量、浓度 | 校准投料或经核验配方记录 | kg | 每批 | 与产品输出相同期间 | 每条纳入生产线 | 按原子配料汇总净投料 | 配方批准和库存核对 |
| protocol-packaging | packaging_release | 包装组件 | 组件领用和生产线退料 | 组件身份、组成、单件质量、领用数、退回数、废品 | 件数乘经核验单件质量 | kg | 每个生产订单 | 与产品输出相同期间 | 每种包装形式 | 每个组件单独汇总；共用三级包装按发运质量分配 | 供应商规范、数量核对和单件质量检查 |
| protocol-product | preservation; packaging_release | 合格输出 | 灌装、复核称量和放行记录 | 产品身份、路线、毛重、皮重、净重、装填介质、固形物、包装、状态 | 校准称量和质量放行 | kg | 每批 | 与所有输入相同期间 | 每条纳入产品路线 | 仅汇总合格放行净含量 | 校准和放行证明 |
| protocol-water | all applicable processes | 进水 | 水表和储罐记录 | 仪表、期初、期末、循环量、用途区域 | 分表或经核对水量平衡 | m3 | 每日或每批 | 代表性年度期间 | 每个纳入场址 | 按用途汇总补充水；循环水不计作新输入 | 仪表校准和场址水量平衡 |
| protocol-energy | all applicable processes | 电力、热力或蒸汽 | 仪表和公用工程记录 | 仪表、期初、期末、外送量、蒸汽状态、冷凝水回流、过程时间 | 校准分表；共用仪表仅作有文件依据的分配 | kWh 或 MJ | 每日或每批 | 代表性年度期间 | 每个纳入场址和生产线 | 按能源载体和路线汇总；扣除有记录的外送量 | 仪表校准、账单和分配核查 |
| protocol-fuels | onsite_utilities | 单种燃料 | 仪表、采购和储罐记录 | 燃料身份、数量、密度、LHV、水分、期初和期末库存 | 计量或库存核对消耗量 | MJ LHV | 每次交付并按月核对 | 代表性年度期间 | 每台场内公用工程设备 | 每种燃料单独换算；不得使用合并燃料流 | 发票、储罐核对和供应商 LHV |
| protocol-refrigerants | onsite_utilities | 单种制冷剂损失 | 维修和库存记录 | 化学物质身份、期初库存、补充量、回收量、期末库存、设备 | 制冷剂质量平衡 | kg | 每次维修并年度核对 | 代表性年度期间 | 每套制冷系统 | 每种化学物质单独计算 | 维修单和库存核对 |
| protocol-cleaning | cleaning | 单种清洗剂 | 投加和领用记录 | 化学物质身份、浓度、领用质量、退回质量、程序 | 校准投加或库存核对 | kg | 每个清洗程序 | 代表性年度期间 | 每条纳入生产线 | 按化学物质汇总供应产品活性量 | 投加校准和安全数据表身份 |
| protocol-treatment-chemicals | wastewater_treatment | 单种处理药剂 | 投加和领用记录 | 化学物质身份、浓度、领用质量、退回质量、处理阶段 | 校准投加或库存核对 | kg | 每个投加期间 | 代表性年度期间 | 每套场内处理系统 | 按化学物质汇总净投加；不得聚合混凝剂和絮凝剂 | 投加校准、化学品身份和库存核对 |
| protocol-waste | all applicable processes | 固废或污泥 | 废物秤和转运联单 | 废物身份、毛重、皮重、干物质、去向、回收状态 | 校准秤或承包商票据 | kg | 每次收集 | 与产品输出相同期间 | 每个纳入场址 | 汇总每个物理独立废物流及去向 | 票据核对和污泥干物质分析 |
| protocol-wastewater | all applicable processes | 废水体积 | 流量计和批次排放 | 流股身份、体积、去向、循环量 | 分表或经核验水量平衡 | m3 | 连续累计或每次排放 | 代表性年度期间 | 每个来源及处理系统 | 在进入处理聚合前保留源流股 | 仪表校准和水量平衡闭合 |
| protocol-effluent | wastewater_treatment | 排入水体的污染物 | 流量和实验室记录 | 采样时间、流量、浓度、方法、检出限 | 流量加权采样和认可分析 | kg | 许可频率或代表性混合采样 | 与处理运行相同期间 | 最终排放点 | 各污染物的流量加权浓度乘排放体积 | 实验室报告、方法和检出限处理 |
| protocol-emissions | preservation; onsite_utilities; wastewater_treatment | 直接排入空气 | 烟道、尾气或工程记录 | 物种、浓度或因子、气体流量、燃料或活动、控制状态 | 优先测量；否则依据采集活动进行设备特定计算 | kg | 许可频率和代表性运行 | 代表性年度期间 | 每个直接排放源 | 每种物质单独计算 | 监测报告或计算输入和因子出处 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize-reference | 所有交换 | 归一化交换 = 报告期交换 / 报告期合格产品净含量 | 原子交换量；kg 产品净含量 | 每 1 kg 产品净含量的交换 | eu-pef-2021-2279 |
| material-balance | 每条路线 | 接收原料 + 配料 + 保留装填水 = 合格产品 + 实测产品损失 + 残余物 + 去除水分；统一水分基准 | 质量记录；固形物或水分分析 | 路线质量平衡闭合 | eu-jrc-fdm-bref-2019 |
| steam-energy | 外购或场内蒸汽 | 有用蒸汽能 = 蒸汽质量 ×（供汽焓 - 回流冷凝水焓） | 蒸汽质量、压力、温度、冷凝水状态 | MJ 有用蒸汽 | eu-jrc-fdm-bref-2019 |
| pollutant-load | 废水排放 | 污染物质量 = 流量加权浓度 × 排放体积，并明确单位换算 | 浓度；排放体积 | kg 污染物 | eu-jrc-fdm-bref-2019 |
| refrigerant-loss | 每种制冷剂 | 损失 = 期初库存 + 补充量 - 回收量 - 期末库存；调查负值或不合理平衡 | 制冷剂库存和维修记录 | kg 排放化学物质 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq-identity | 产品及所有输入 | 保留准确的产品、蔬菜或豆类、配料、包装、燃料、制冷剂、废物和排放身份；禁止选择器文字和未经核验的 UUID 替代。 | 产品规范、供应商文件；使用 UUID 时提供天工直读证据 |
| dq-time | 所有前景数据 | 使用覆盖季节性开机、停机和正常活动的一致代表性报告期；披露排除项和异常生产。 | 生产日历、仪表覆盖和核对 |
| dq-technology | 保藏路线 | 记录实际设备、计划热处理或低温条件、固形物、装填介质和过程控制；不得替代为通用路线。 | 工艺权威记录、批次日志、设备清单和产品放行记录 |
| dq-geography | 上游链接 | 电力、热力、供水、农业输入、包装和处理应匹配供应地域；披露代理。 | 供应商地点、合同和数据集元数据 |
| dq-completeness | 清单 | 计入第 6 节中适用于路线的全部原子输入、输出、废物和直接排放；对真实零值或不适用提供文件。 | 签署的路线清单和年度质量、水量、能量平衡 |
| dq-measurement | 前景数量 | 优先采用校准仪表和秤；记录校准、估算方法、不确定性和任何共用仪表分配。 | 校准证书和原始记录 |
| dq-source | 外部证据 | 方法与路线规则采用官方或同行评审原始来源；不得把搜索摘要或其他 PCR 作为证据。 | 第 11 节来源登记 |

## 9. 校验规则

出现以下任一情况时，拒绝前景数据包或退回更正：

1. 产品不满足 CPC 3.0 21399，或未声明蔬菜或豆类、路线、产品状态、装填介质、包装和参考基准。
2. 参考输出不等于 1 kg 产品净含量、包装质量计入该 1 kg，或装填介质纳入方式在记录间不一致。
3. 单卡包含多种电力、蒸汽、热力、燃料、制冷剂、配料、包装组件、废物、污泥或直接排放物；或用“其他”“多种”“按适用情况”等选择器文字替代适用卡。
4. 仅冷冻蔬菜未满足 CPC 21399 所需制备或保藏条件，或醋、醋酸或糖是主要保藏剂。
5. 通用热处理程序替代产品、容器和杀菌设备特定计划过程，或冷冻路线缺少产品热中心和冷链证据。
6. 外购电力、蒸汽和热力与场内燃料及公用工程输出重复计量，或循环水计作新水输入。
7. 制冷剂损失跨化学物质聚合；使用场内燃料却缺少直接燃烧排放；或处理后废水污染物只嵌入废水体积流。
8. 包装组件、清洗剂、废水源流股、初沉污泥、生物污泥、筛渣、食品残余物和包装废料的聚合掩盖物理独立记录或去向。
9. 在细分前使用分配、分配缺少实测因果基准，或经济分配缺少敏感性分析。
10. 任一非空数量范围缺少至少两份独立、兼容原始来源及可追溯来源 id。本 PCR 不编写范围；缺少范围绝不授权默认数量。
11. 任一含 UUID 的身份未通过直读核验，或用较窄天工候选替代完整类别参考流。
12. 缺少年度质量、水量和能量核对，来源记录未覆盖产品报告期，或未披露截断和代理。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种合格保藏蔬菜或豆类的场址和路线特定前景数据包 |
| downstream_use | 构建天工 LCA flow、process 和 lifecyclemodel 数据集，以及功能匹配的比较或产品足迹研究 |
| allowed_use | 当产品身份、参考基准、边界和数据质量兼容时，用于工厂大门清单、热点分析、供应商协作和下游建模 |
| excluded_use | 直接比较可食含量、沥干含量、固形物、储存或包装功能不同的产品；代表被排除 CPC 类目；把本候选稿作为已发布审查 PCR 使用 |
| required_metadata | CPC 代码；植物/产品身份；保藏路线；配方和装填介质；沥干基准；适用时的固形物；计划过程或低温条件；包装组成和层级；地域；技术；报告期；分配；截断；上游数据集；处理去向 |
| required_quality_disclosure | 仪表覆盖、校准、质量/水量/能量平衡闭合、估算和分配份额、季节代表性、代理数据集、未解决 UUID、缺失适用记录和不确定性 |
| update_trigger | 产品改配方、保藏路线或包装变化、新计划过程、制冷或燃料变化、场址或供应商变化、重要仪表变化、报告期更新、分类修订、核验流身份或兼容范围证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-v3-21399-2025 | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Explanatory Notes*，CPC 21399，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 准确产品类别范围、示例和排除项 |
| codex-cxs-297-2009 | standard | Codex Alimentarius CXS 297-2009，*Standard for Certain Canned Vegetables*，修订至 2023，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B297-2009%252FCXS_297e.pdf | 热加工罐藏路线、预处理、装填介质、密封包装和产品放行 |
| codex-cxc-23-1979 | standard | Codex Alimentarius CXC 23-1979，*Code of Hygienic Practice for Low and Acidified Low-Acid Canned Foods*，1993 修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B23-1979%252FCXC_023e.pdf | 产品特定计划过程、灌装、封口、冷却、清洗和生产记录 |
| codex-cxs-13-1981 | standard | Codex Alimentarius CXS 13-1981，*Standard for Preserved Tomatoes*，修订至 2022，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B13-1981%252FCXS_013e.pdf | 整粒和切块保藏番茄身份及装填介质 |
| codex-cxs-57-1981 | standard | Codex Alimentarius CXS 57-1981，*Standard for Processed Tomato Concentrates*，修订至 2013，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B57-1981%252FCXS_057e.pdf | 番茄筛滤、浓缩、固形物声明和分离残余物 |
| codex-cxs-66-1981 | standard | Codex Alimentarius CXS 66-1981，*Standard for Table Olives*，2013 修订、2024 修正，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B66-1981%252FCXS_066e.pdf | 餐桌橄榄碱处理、盐渍、发酵、氧化和灭菌路线 |
| codex-cxs-223-2001 | standard | Codex Alimentarius CXS 223-2001，*Standard for Kimchi*，2017 修正，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B223-2001%252FCXS_223e.pdf | 大白菜预处理、盐腌、调味和低温乳酸发酵路线 |
| codex-cxs-320-2015 | standard | Codex Alimentarius CXS 320-2015，*Standard for Quick Frozen Vegetables*，修订至 2022，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B320-2015%252FCXS_320e.pdf | 进一步加工冷冻路线、漂烫、速冻和冷链条件 |
| eu-jrc-fdm-bref-2019 | official_guidance | 欧盟委员会联合研究中心，*Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*，JRC118627，2019，DOI 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 | 过程分解、能源和水、废水、废物、排放及监测 |
| eu-pef-2021-2279 | official_guidance | 欧盟委员会建议 (EU) 2021/2279（环境足迹方法），http://data.europa.eu/eli/reco/2021/2279/2021-12-30 | 边界、公司特定数据、分配层级、质量和排放核算 |
| iso-14044-2006 | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，2022 复审确认，https://www.iso.org/standard/38498.html | LCI 边界、分配和数据质量原则 |
| frankowska-vegetables-2019 | literature | Frankowska, A.; Jeswani, H. K.; Azapagic, A.，*Environmental impacts of vegetables consumption in the UK*，Science of the Total Environment 682 (2019) 80–105，DOI 10.1016/j.scitotenv.2019.04.424，https://doi.org/10.1016/j.scitotenv.2019.04.424 | 独立支持分别采集蔬菜加工能源及玻璃、金属和其他包装输入；未据此推导数量范围 |
