---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.vermouth-and-other-wine-of-fresh-grapes-flavoured-with-plats-or-aromatic-substances
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 味美思酒及其他用植物或芳香物质调味的鲜葡萄酒

## 1. 范围与适用性

本 PCR 适用于以葡萄酒类产品为基酒，并用植物、香辛料、香草、天然香味物质或香味制剂调味的味美思酒及其他加香葡萄酒的工厂门前景生产。范围包括基酒接收、芳香制剂的制备或接收、配制与调配、可选的加烈和加甜、熟化或暂存、适用时的澄清或过滤，以及灌装与包装。

本 PCR 不包括未加香葡萄酒、未达到适用葡萄酒含量或酒精度阈值的加香葡萄酒饮料、葡萄酒产品鸡尾酒、产品身份不以葡萄酒为基础的烈酒，以及完全以非葡萄果酒制成的产品。葡萄种植、葡萄加工及基酒酿造应使用上游数据集表示，除非研究有意采用更宽边界。

若产品按受监管销售名称投放市场，前景数据包应声明适用法域并证明相关组成和命名要求。若在欧盟声称为 vermouth，产品应为使用适当的 *Artemisia* 属物质获得特征风味的加香葡萄酒；具体数据集仍以现行产品配方及目标市场规范为准。来源：`eu-reg-251-2014-consolidated-2021`、`oiv-aromatised-wines-oeno-395-2011`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.vermouth-and-other-wine-of-fresh-grapes-flavoured-with-plats-or-aromatic-substances |
| classification_refs | CPC 3.0: 24220 |
| covered_products | 味美思酒；以鲜葡萄酒为基酒并用植物、香草、香辛料、芳香食品、天然香味物质或香味制剂调味的加香葡萄酒 |
| excluded_products | 未加香葡萄酒；不符合加香葡萄酒定义的加香葡萄酒饮料和葡萄酒产品鸡尾酒；非葡萄果味美思型饮料；烈酒 |
| representative_product | 工厂门交付的成品味美思酒或其他加香葡萄酒，以饮料净质量表示 |
| production_route | 基酒接收；芳香制剂接收或厂内浸提；调配与配制；可选加烈、加甜、着色、熟化、澄清或过滤；灌装与包装 |
| market_state | 成品液体饮料，以包装或已声明的散装交付形式提供，并声明产品亚型、酒精度、甜度、颜色、配方和包装形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以鲜葡萄酒为基酒的成品味美思酒或其他加香葡萄酒 |
| How much | 1,000 kg 饮料净质量，不含初级、次级及三级包装质量 |
| How well | 符合已声明产品亚型和目标市场关于葡萄酒比例、酒精度、调味、甜度、颜色及包装状态的规范 |
| How long or cycle | 完成一个生产和包装批次并交付至工厂门；不规定使用寿命 |
| reference_flow_link | 参考流为该批次放行的合格成品饮料净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 成品饮料净质量 |
| 参考产品流 | 味美思酒及其他用鲜葡萄酿制的、加了植物香料或芳香质的葡萄酒 `ec365540-43a3-42e4-975d-d2386455767a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品亚型和销售名称；目标市场及适用规范；基酒身份；葡萄酒类产品体积分数；20 °C 实际酒精体积分数；甜度类别或糖含量；颜色；完整调味和添加剂配方；加烈状态及酒精来源；熟化或暂存时间；澄清或过滤路线；饮料净质量；包装形式及各组件质量；生产场址和地域；批次及参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格饮料净输出 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景交换归一化至 1,000 kg 饮料净质量。包装质量单独清单化，不计入参考数量。 |
| `ingredient_mass` | 基酒、调味配料、甜味剂、加工助剂和添加酒精 | 质量 | kg | 按经校准的批次领用、罐体或发票记录分别记录每种采购或内部转移配料；不得将配料合并为单一交换。 |
| `liquid_composition` | 产品符合性 | 体积分数和酒精度 | 20 °C 下 % vol | 按目标市场适用方法记录葡萄酒类产品比例及实际酒精度。按所引欧盟加香葡萄酒定义，葡萄酒类产品至少占总体积 75%，实际酒精度不低于 14.5% vol 且低于 22% vol。 |
| `electricity_use` | 各前景过程 | 能量 | kWh | 按过程记录分表电量，或以有文件支持的运行时间和额定负荷分配共享电表。 |
| `water_use` | 浸提、配制、清洗和包装容器冲洗 | 体积或质量 | m3 或 kg | 按用水角色分别记录；不得将进入产品的配制水与清洗水或冲洗水合并。 |
| `packaging_mass` | 各包装组件 | 质量 | kg | 分别记录每项初级、次级和三级包装组件的领用质量，并扣除有记录的未使用退回量。 |
| `wastewater_load` | 各废水排放指标 | 质量 | kg | 各污染物负荷分别按排放体积乘以有代表性的实测浓度计算，并声明处理和排放边界。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 包括从基酒和芳香投入接收到成品散装或包装加香葡萄酒放行的全部直接控制作业。 | `abreu-et-al-2021-fortified-wines`; `monteiro-2022-wine-lca` |
| `boundary_upstream_inputs` | 采购产品和服务 | 将基酒、葡萄汁、酒精、甜味剂、植物原料、香味制剂、加工助剂、水、电力及每个包装组件分别链接到上游数据集。 | `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011` |
| `boundary_waste_emissions` | 废物和直接排放 | 包括前景作业产生的每项固体废物、废水流、废水污染物负荷和直接空气排放，并注明处理方式及接收环境介质。 | `monteiro-2022-wine-lca` |
| `boundary_atomic_inventory` | 全部清单行 | 将电力、实际使用的每种热载体或燃料、每种泄漏制冷剂、按角色划分的水、每种配料和化学品、每个包装组件、每项废物、每个废水指标和每项空气排放分别作为独立交换。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 基酒及采购的芳香或包装投入已在报告设施门口接收；声明是否采用厂内芳香浸提路线 |
| starting_condition_role | 基酒属于上游产品投入；本类别的前景转化从加香和配制开始 |
| product_classification_scope | 成品味美思酒及其他以植物或芳香物质调味的鲜葡萄酒 |
| recursive_input_rule | 已属本类别的退回或返工产品应保持为单独计量的同类别产品投入；不得静默吸收或截断其既有生产负荷 |
| upstream_dataset_requirement | 基酒及主要配制和包装投入应使用产品特定上游数据集；必要时披露地域、技术、再生料含量及分配 |
| disclosure | 声明基酒生产、厂内浸提、熟化、过滤、废水处理、包装制造及配送是位于前景边界内还是通过外部数据集链接 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `aromatic_preparation` | 芳香制剂制备 | conditional | 在厂内浸提或浸泡香草、香辛料或其他植物材料时纳入；直接投加采购香味制剂时省略 | 生产已声明的芳香提取物或浸液 | 转入配制过程的芳香制剂 kg |
| `formulation_and_stabilisation` | 配制与稳定处理 | required | 始终纳入；条件性投入和作业由已声明配方及生产路线启用 | 调配基酒和芳香制剂、调整组成、熟化或暂存、澄清或过滤并放行合格散装饮料 | 合格散装饮料 kg |
| `filling_and_packaging` | 灌装与包装 | conditional | 工厂门产品为包装产品时纳入；仅在参考产品明确为散装交付时省略 | 灌装、封口、贴标、装箱和码垛 | 1,000 kg 成品饮料净质量 |

### 过程：芳香制剂制备（`aromatic_preparation`）

#### 输入

##### 产品流

###### 苦艾草原料（`artemisia_absinthium`）

厂内制备味美思酒特征风味时，干燥 *Artemisia absinthium* 或具体声明的 *Artemisia* 属植物应单独记录。

- 选定流：干燥苦艾草
- 流属性/单位：质量 / kg
- 数量规则：记录投入浸提或浸泡批次的称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

###### 芫荽籽（`coriander_seed`）

已声明植物配方含芫荽籽时，将其作为独立配料记录。

- 选定流：干燥芫荽籽
- 流属性/单位：质量 / kg
- 数量规则：记录投入浸提或浸泡批次的称量质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_ingredients`
- 来源：`abreu-et-al-2021-fortified-wines`

###### 丁香花蕾（`clove_bud`）

已声明植物配方含丁香花蕾时，将其作为独立配料记录。

- 选定流：干燥丁香花蕾
- 流属性/单位：质量 / kg
- 数量规则：记录投入浸提或浸泡批次的称量质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_ingredients`
- 来源：`abreu-et-al-2021-fortified-wines`

###### 洋甘菊花（`chamomile_flower`）

已声明植物配方含洋甘菊花时，将其作为独立配料记录。

- 选定流：干燥洋甘菊花
- 流属性/单位：质量 / kg
- 数量规则：记录投入浸提或浸泡批次的称量质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_ingredients`
- 来源：`abreu-et-al-2021-fortified-wines`

###### 浸提用乙醇（`extraction_ethanol`）

作为浸提溶剂使用的农业来源乙醇应与之后用于产品加烈的酒精分开记录。

- 选定流：农业来源乙醇
- 流属性/单位：质量 / kg
- 数量规则：按罐体或领用记录记录转入浸提批次的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_liquids`
- 来源：`eu-reg-251-2014-consolidated-2021`

###### 浸提用水（`extraction_water`）

进入芳香浸提或浸泡过程的水应与配制水、清洗水和洗瓶水分开记录。

- 选定流：饮用级工艺用水
- 流属性/单位：体积 / m3
- 数量规则：记录计量或按批次投加的浸提用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_liquids`
- 来源：`eu-reg-251-2014-consolidated-2021`

###### 浸提用电（`extraction_electricity`）

记录厂内芳香制剂过程中粉碎、搅拌、泵送、温控和转移所用电力。

- 选定流：工厂端中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录分表用电，或根据有文件支持的运行时间和额定负荷计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`monteiro-2022-wine-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入配制过程的芳香制剂（`natural_flavouring_preparation`）

产出的提取物或浸液作为单一中间产品转入配制过程，但其各项配料仍在上文分别列示。

- 选定流：天然香味制剂
- 流属性/单位：质量 / kg
- 数量规则：记录浸提并分离植物固体后转移的净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个浸提批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aromatic_output`
- 来源：`eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

##### 废物流

###### 废植物浸提固体（`spent_botanical_solids`）

浸提后分离并离开过程的植物材料作为一项具体的湿废植物固体记录，并声明去向。

- 选定流：废植物浸提固体
- 流属性/单位：质量 / kg
- 数量规则：称量每个外运容器，或采用有文件支持的容器数与平均质量法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入配制过程的芳香制剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_wastes`
- 来源：

##### 基本流

### 过程：配制与稳定处理（`formulation_and_stabilisation`）

#### 输入

##### 产品流

###### 葡萄基酒（`base_wine`）

基酒是主要上游产品投入，应与葡萄汁、酒精、水、甜味剂和调味投入分别列示。

- 选定流：葡萄基酒
- 流属性/单位：质量 / kg
- 数量规则：记录转入每个配制批次的校准罐体质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011`; `abreu-et-al-2021-fortified-wines`

###### 采购天然香味制剂（`natural_flavouring_preparation_input`）

仅当调味剂并非由厂内芳香制剂过程生产时，将采购天然香味制剂作为一项产品投入记录。

- 选定流：天然香味制剂
- 流属性/单位：质量 / kg
- 数量规则：按供应商及批次记录其净投加质量；厂内浸提路线标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`; `abreu-et-al-2021-fortified-wines`

###### 加烈用农业来源乙醇（`agricultural_ethanol`）

为调整或加烈饮料而添加的酒精应与仅用作浸提或添加剂载体的酒精分开记录。

- 选定流：农业来源乙醇
- 流属性/单位：质量 / kg
- 数量规则：记录加入配制批次的质量；未添加酒精时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011`; `abreu-et-al-2021-fortified-wines`

###### 蔗糖（`sucrose`）

使用蔗糖加甜时应单独记录；具体配方采用的任何其他甜味剂均应新增各自的原子行。

- 选定流：精制蔗糖
- 流属性/单位：质量 / kg
- 数量规则：记录加入配制批次的称量质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`

###### 葡萄汁（`grape_must`）

葡萄汁用于加甜或调整组成时，应与基酒和蔗糖分开记录。

- 选定流：葡萄汁
- 流属性/单位：质量 / kg
- 数量规则：记录加入批次的校准罐体或称量质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`

###### 配制用水（`formulation_water`）

用于制备香味香精、溶解甜味剂或调整最终组成的水应与清洗水和冲洗水分开记录。

- 选定流：饮用级工艺用水
- 流属性/单位：体积 / m3
- 数量规则：记录计量或按批次加入产品的用水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：`eu-reg-251-2014-consolidated-2021`

###### 配制用电（`formulation_electricity`）

记录泵送、混合、冷却、熟化控制、澄清、过滤和转移所用电力。

- 选定流：工厂端中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录分表电量，或按有文件支持的运行时间和额定负荷分配共享电表。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`monteiro-2022-wine-lca`

###### 硅藻土助滤剂（`filter_aid`）

仅在已声明过滤路线使用硅藻土时，将其作为独立加工助剂投入记录。

- 选定流：硅藻土助滤剂
- 流属性/单位：质量 / kg
- 数量规则：按过滤批次记录领用质量；不存在时标记不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredients`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格散装加香葡萄酒（`bulk_aromatised_wine`）

配方和质量检查后，合格散装饮料转入灌装，或按已声明散装交付形式放行。

- 选定流：散装加香葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：记录符合已声明产品规范的校准放行罐质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个配制批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bulk_product_release`
- 来源：`abreu-et-al-2021-fortified-wines`

##### 废物流

###### 过滤残渣（`filtration_residue`）

湿滤饼或截留的澄清固体应与废水和不合格饮料分开记录。

- 选定流：葡萄酒过滤残渣
- 流属性/单位：质量 / kg
- 数量规则：称量外运容器，或根据有文件支持的容器数和代表性湿质量计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_wastes`
- 来源：

###### 不合格加香葡萄酒（`off_spec_wine`）

送往处理、回收或处置的不合格饮料应单独记录；厂内返工饮料仍是同类别产品投入而非废物。

- 选定流：不合格加香葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：按偏差和外运记录分别记录各去向的不合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_wastes`
- 来源：

###### 酒厂废水（`winery_wastewater`）

配制、转移、储罐清洗和过滤产生的废水应作为独立废水流记录，并声明是在厂内处理前还是处理后计量。

- 选定流：酒厂工艺废水
- 流属性/单位：体积 / m3
- 数量规则：按过程流量计或有文件支持的水量平衡记录排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`monteiro-2022-wine-lca`

##### 基本流

###### 排放至空气的乙醇（`ethanol_to_air`）

当实测或场址物料衡算识别出不可忽略的挥发损失时，应报告敞口转移、混合、熟化或过滤造成的直接乙醇空气排放。

- 选定流：乙醇，排放至空气
- 流属性/单位：质量 / kg
- 数量规则：优先采用直接监测；否则仅计算有文件支持的乙醇剩余物料衡算并披露不确定性。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emissions`
- 来源：

###### 排放至水体的化学需氧量（`wastewater_cod`）

COD 应作为已声明废水排放点的一项独立基本流负荷报告。

- 选定流：化学需氧量，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：排放废水体积乘以流量加权 COD 浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`monteiro-2022-wine-lca`

###### 排放至水体的五日生化需氧量（`wastewater_bod5`）

BOD5 应与 COD 分开作为已声明废水排放点的独立负荷报告。

- 选定流：五日生化需氧量，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：排放废水体积乘以流量加权 BOD5 浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`monteiro-2022-wine-lca`

###### 排放至水体的总氮（`wastewater_total_nitrogen`）

总氮应作为已声明废水排放点的一项独立基本流负荷报告。

- 选定流：总氮，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：排放废水体积乘以流量加权总氮浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：

###### 排放至水体的总磷（`wastewater_total_phosphorus`）

总磷应作为已声明废水排放点的一项独立基本流负荷报告。

- 选定流：总磷，排放至水体
- 流属性/单位：质量 / kg
- 数量规则：排放废水体积乘以流量加权总磷浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格散装饮料
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：

### 过程：灌装与包装（`filling_and_packaging`）

#### 输入

##### 产品流

###### 灌装用散装加香葡萄酒（`bulk_aromatised_wine_input`）

进入灌装线的合格散装饮料应在加入包装组件前记录。

- 选定流：散装加香葡萄酒
- 流属性/单位：质量 / kg
- 数量规则：记录经校准的灌装机进料质量，并与包装产品及产线损失核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_line_balance`
- 来源：`monteiro-2022-wine-lca`

###### 包装用电（`packaging_electricity`）

冲洗、灌装、封口、贴标、输送、装箱及托盘缠膜所用电力应单独记录。

- 选定流：工厂端中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录产线分表数据，或根据有文件支持的运行时间和额定负荷计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`monteiro-2022-wine-lca`

###### 洗瓶用水（`bottle_rinsing_water`）

冲洗空容器或清洗灌装线的水应与加入饮料的水分开记录。

- 选定流：饮用级工艺用水
- 流属性/单位：体积 / m3
- 数量规则：记录灌装线水表，或采用有文件支持的冲洗周期计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_water`
- 来源：`monteiro-2022-wine-lca`

###### 玻璃瓶（`glass_bottle`）

已声明包装形式使用玻璃容器时，应单独记录。

- 选定流：玻璃饮料瓶
- 流属性/单位：质量 / kg
- 数量规则：领用瓶数乘以经核实单瓶质量，并扣除未使用退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`monteiro-2022-wine-lca`

###### 聚对苯二甲酸乙二醇酯瓶（`pet_bottle`）

仅在已声明包装形式使用 PET 容器时单独记录。

- 选定流：聚对苯二甲酸乙二醇酯饮料瓶
- 流属性/单位：质量 / kg
- 数量规则：领用瓶数乘以经核实单瓶质量，并扣除未使用退回量；其他包装形式标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`monteiro-2022-wine-lca`

###### 盒中袋内袋（`bag_in_box_liner`）

产品接触用柔性内袋应与瓦楞纸外盒分开记录。

- 选定流：聚乙烯盒中袋内袋
- 流属性/单位：质量 / kg
- 数量规则：领用内袋数乘以经核实单件质量，并扣除未使用退回量；其他包装形式标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`monteiro-2022-wine-lca`

###### 瓦楞纸箱（`corrugated_box`）

瓦楞运输箱或盒中袋外盒应作为独立包装组件记录。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：领用数量乘以经核实单件质量，并扣除未使用退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：`monteiro-2022-wine-lca`

###### 铝制封口（`aluminium_closure`）

使用铝制螺旋盖时应单独记录。

- 选定流：铝制饮料封口
- 流属性/单位：质量 / kg
- 数量规则：领用封口数乘以经核实单件质量，并扣除未使用退回量；其他封口路线标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 软木塞（`cork_closure`）

使用天然软木塞时应单独记录。

- 选定流：天然软木塞
- 流属性/单位：质量 / kg
- 数量规则：领用软木塞数乘以经核实单件质量，并扣除未使用退回量；其他封口路线标记不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 纸标签（`paper_label`）

纸标签应与容器、封口及瓦楞纸箱分开记录。

- 选定流：涂布纸饮料标签
- 流属性/单位：质量 / kg
- 数量规则：领用标签数乘以经核实单件质量，并扣除未使用退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 聚乙烯托盘缠绕膜（`polyethylene_wrap`）

用于稳定托盘的拉伸膜或收缩膜应作为独立三级包装组件记录。

- 选定流：聚乙烯拉伸膜
- 流属性/单位：质量 / kg
- 数量规则：卷膜领用质量减去剩余卷膜质量，并按包装批次归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

###### 木托盘（`wooden_pallet`）

木托盘应单独记录，并声明重复使用次数或一次性状态。

- 选定流：木制欧标托盘
- 流属性/单位：质量 / kg
- 数量规则：记录分配给批次的托盘数，并将可复用托盘质量除以有文件支持的预计周转次数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_components`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装参考产品（`packaged_product`）

输出为合格饮料净质量；包装组件仍作为独立清单投入。

- 选定流：味美思酒及其他用鲜葡萄酿制的、加了植物香料或芳香质的葡萄酒 `ec365540-43a3-42e4-975d-d2386455767a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在核对灌装机输出、产线损失及不合格品后设为 1,000 kg 放行饮料净质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 废玻璃（`waste_glass`）

破损或拒收玻璃瓶应与其他包装废物分开记录。

- 选定流：废包装玻璃
- 流属性/单位：质量 / kg
- 数量规则：称量外运玻璃废物，或以领用、灌装、退回和拒收瓶数结合单瓶质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 废 PET（`waste_pet`）

拒收 PET 瓶应与聚乙烯内袋或薄膜废物分开记录。

- 选定流：废聚对苯二甲酸乙二醇酯包装
- 流属性/单位：质量 / kg
- 数量规则：称量外运 PET 废物，或以拒收容器数结合单件质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 废铝制封口（`waste_aluminium`）

拒收铝制封口应单独记录。

- 选定流：废铝制封口
- 流属性/单位：质量 / kg
- 数量规则：以拒收封口数结合经核实单件质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废软木（`waste_cork`）

拒收软木塞应单独记录。

- 选定流：废天然软木
- 流属性/单位：质量 / kg
- 数量规则：以拒收软木塞数结合经核实单件质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：

###### 废纸标签（`waste_paper_label`）

拒收纸标签应与瓦楞纸板、玻璃、金属和塑料分开记录。

- 选定流：废涂布纸标签
- 流属性/单位：质量 / kg
- 数量规则：称量外运标签废物，或根据标签领用和使用质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 废瓦楞纸板（`waste_corrugated_board`）

拒收瓦楞运输箱和盒中袋外盒应与纸标签及其他包装废物分开记录。

- 选定流：废瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：称量外运瓦楞纸板废物，或根据纸箱领用和使用质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 废聚乙烯内袋（`waste_polyethylene_liner`）

拒收聚乙烯盒中袋内袋应与托盘膜和 PET 废物分开记录。

- 选定流：废聚乙烯盒中袋内袋
- 流属性/单位：质量 / kg
- 数量规则：称量外运内袋废物，或以拒收内袋数结合经核实单件质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 废聚乙烯托盘膜（`waste_polyethylene_film`）

废弃托盘拉伸膜应与盒中袋内袋和 PET 废物分开记录。

- 选定流：废聚乙烯拉伸膜
- 流属性/单位：质量 / kg
- 数量规则：称量外运薄膜废物，或核对包装批次领用和使用的薄膜质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_wastes`
- 来源：`monteiro-2022-wine-lca`

###### 包装线废水（`packaging_wastewater`）

容器冲洗及灌装线清洗废水应与配制过程废水分开记录。

- 选定流：饮料包装线废水
- 流属性/单位：体积 / m3
- 数量规则：按产线流量计或有文件支持的水量平衡记录排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装饮料净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_water`
- 来源：`monteiro-2022-wine-lca`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 产品特定批次和产线 | 首先细分电表、罐体、批次、浸提活动及包装线，使产品特定投入和输出可直接归属。 |  |
| `allocation_mass` | 不可分离共享作业 | 无法细分且产品功能可比时，按合格饮料净质量分配共享公用工程和废物，并记录分子、分母及参考期。 |  |
| `allocation_causal` | 具有可测驱动因素的共享作业 | 若产线运行时间、罐体占用、清洗周期或包装数量等更能解释资源使用，应采用该更具体因果驱动因素。 |  |
| `allocation_rework` | 同类别返工 | 退回或返工加香葡萄酒应保持为定量产品投入，并避免重复计算其既有生产负荷。 |  |
| `allocation_recovery` | 送回收的废物 | 分别报告废物数量及去向，并在前景清单之外披露任何替代或回收收益；不得通过减少废物量隐藏收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_aromatic_ingredients` | `aromatic_preparation` | 每种单独植物配料 | 秤量及批次领用记录 | 配料身份；供应商批号；毛重和皮重；退回质量；批次号 | 经校准秤具并关联配方领用记录 | kg | 每批 | 代表性连续 12 个月或报告期全部生产活动 | 全部厂内浸提线 | 按配料分别汇总净领用质量并除以芳香制剂转移量 | 秤具校准；批次谱系；供应商规范 |
| `cp_aromatic_liquids` | `aromatic_preparation` | 浸提乙醇或浸提水 | 罐体、流量计或批次投加记录 | 液体身份；期初和期末罐位；表读数；必要时密度或温度；批次号 | 校准罐体或流量计核对 | kg 或 m3 | 每批 | 代表性连续 12 个月 | 全部浸提罐 | 分别汇总各液体并归一化至芳香制剂输出 | 仪表校准；罐容表；配方记录 |
| `cp_aromatic_output` | `aromatic_preparation` | 芳香制剂输出 | 转移记录 | 来源批次；目标罐；毛重和皮重；转移损失 | 校准转移罐或秤具 | kg | 每次转移 | 代表性连续 12 个月 | 全部浸提线 | 汇总净转移质量 | 转移核对；批次放行记录 |
| `cp_formulation_ingredients` | `formulation_and_stabilisation` | 各基酒、调味剂、酒精、甜味剂、水、葡萄汁或加工助剂行 | 罐体、秤量、发票和配方记录 | 材料身份；供应商批号；期初和期末数量；毛重和皮重；密度；批次号 | 校准罐体、仪表或秤具并与配方核对 | kg 或 m3 | 每批 | 代表性连续 12 个月 | 全部配制罐 | 每个材料行分别计算净量并归一化至合格散装输出 | 校准；供应商规范；批次核对 |
| `cp_process_electricity` | 各适用过程 | 电力 | 电表和运行记录 | 期初和期末电表读数；过程 id；运行小时；分配时的额定负荷 | 优先直接分表；否则采用有文件支持的工程分配 | kWh | 每批或每月 | 代表性连续 12 个月 | 全部前景设备 | 按过程汇总；共享用电遵循已声明因果分配规则 | 电表校准；设备日志；分配工作表 |
| `cp_process_wastes` | 适用过程 | 各固体或液体废物流 | 废物外运及内部容器记录 | 废物身份；毛重和皮重；容器数；去向；处理路线；批次或期间 | 地磅、校准秤具或经验证容器法 | kg | 每次外运 | 代表性连续 12 个月 | 全部前景作业 | 按废物身份和去向分别汇总 | 联单；发票；容器质量研究 |
| `cp_bulk_product_release` | `formulation_and_stabilisation` | 合格散装饮料和不合格饮料 | 罐体放行及质量记录 | 罐体质量；产品代码；批次号；放行状态；ABV；葡萄酒比例；糖；颜色 | 校准罐体测量加实验室放行检测 | kg；% vol；适用时 g/L | 每批 | 报告期全部批次 | 全部配制罐 | 分母仅汇总合格放行质量；不合格质量单列 | 罐体校准；实验室证书；放行批准 |
| `cp_wastewater_monitoring` | `formulation_and_stabilisation` | 废水体积、COD、BOD5、总氮和总磷 | 排放仪表及实验室记录 | 体积；采样时间；COD；BOD5；总氮；总磷；处理阶段；排放介质 | 连续或批次体积测量并采用代表性流量加权采样 | m3 和 mg/L | 每次排放活动或按许可频次 | 包含生产峰值的代表性连续 12 个月 | 全部前景排放点 | 在已声明排放点分别计算每个指标 | 仪表校准；认可实验室报告；采样计划 |
| `cp_direct_air_emissions` | `formulation_and_stabilisation` | 排放至空气的乙醇 | 监测或物料衡算记录 | 乙醇投入；产品中乙醇；液体废物中乙醇；回收乙醇；适用时排气浓度和流量 | 优先直接监测；否则采用封闭且有文件支持的批次物料衡算 | kg | 每次监测活动或批次衡算 | 12 个月内代表性运行条件 | 全部适用设备 | 单独报告实测或剩余损失并披露不确定性 | 仪器校准；衡算闭合；工程审查 |
| `cp_packaging_line_balance` | `filling_and_packaging` | 散装饮料投入、包装饮料和液体产线损失 | 灌装机和罐体记录 | 进料质量；灌装单元；净灌装质量；拒收；回收产品；产品代码 | 校准罐体和检重秤核对 | kg | 每个包装批次 | 代表性连续 12 个月 | 全部灌装线 | 将投入与净放行饮料、回收和损失核对 | 罐体校准；检重秤验证；产线核对 |
| `cp_packaging_water` | `filling_and_packaging` | 洗瓶用水或包装线废水 | 供水及排水仪表记录 | 供水表；排水表；清洗周期；产线 id；批次号 | 产线分表或有文件支持的周期水量计算 | m3 | 每批或每月 | 代表性连续 12 个月 | 全部灌装线 | 供水和废水分开；归一化至包装饮料净质量 | 仪表校准；清洗日志；水量平衡 |
| `cp_packaging_components` | `filling_and_packaging` | 每个单独包装组件 | 物料清单、领用及单件质量记录 | 组件身份；领用数；退回数；单件质量；再生料含量；供应商批号 | 核实数量乘以实测单件质量，或直接记录领用质量 | kg | 每个包装批次 | 代表性连续 12 个月 | 全部包装形式 | 每个组件分别计算；可复用托盘质量除以有文件支持的周转次数 | 供应商规范；单件质量抽样；库存核对 |
| `cp_packaging_wastes` | `filling_and_packaging` | 每个单独包装废物 | 拒收及废物外运记录 | 组件材料；拒收数量或质量；去向；处理路线 | 直接称量或拒收数量乘以经核实单件质量 | kg | 每批及每次外运 | 代表性连续 12 个月 | 全部包装线 | 分别汇总玻璃瓶、PET 瓶、铝制封口、软木塞、纸标签、瓦楞纸板、聚乙烯内袋和聚乙烯薄膜 | 拒收日志；废物联单；单件质量验证 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange` | 各清单行 | 归一化数量 = 过程净数量 / 合格过程输出 × 1,000 kg | 净记录量；合格输出质量 | 每 1,000 kg 参考产品的数量 |  |
| `net_ingredient_issue` | 各配料 | 配料净质量 = 领用毛重 − 皮重 − 有记录的未使用退回量 | 领用、皮重和退回记录 | 配料净质量 |  |
| `packaging_component_mass` | 各包装组件 | 组件质量 =（领用数 − 未使用退回数）× 经核实单件质量；可复用托盘质量除以有文件支持的周转次数 | 组件数量；单件质量；复用次数 | 每 1,000 kg 饮料的组件 kg |  |
| `wastewater_pollutant_load` | 各废水指标 | 负荷 = 排放体积 × 流量加权浓度，并进行单位换算；COD、BOD5、总氮和总磷分别计算 | 废水 m3；指标 mg/L | 每 1,000 kg 饮料的指标 kg | `monteiro-2022-wine-lca` |
| `batch_mass_balance` | 配制与包装 | 物料衡算闭合率 = 已核算产品、废物、排放和库存变化 / 实测材料投入；调查并披露无法解释的剩余量 | 全部实测投入；产品；废物；排放；期初期末库存 | 闭合率和剩余质量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 全部产品流和废物流 | 每行记录一个物理或化学流，并保留选择上游数据集所需的产品、供应商、等级、组成和路线身份。 | 采购规范；安全或技术说明书；配方；已确认时的 Tiangong UUID |
| `dq_temporal` | 全部前景数据 | 连续生产采用至少连续 12 个代表性月份；季节性生产纳入报告期全部生产活动并披露季节性。 | 仪表导出；批次登记；生产日历 |
| `dq_completeness` | 配料、公用工程、包装、废物、废水指标和排放 | 核对配方、采购、仪表、包装、废物、实验室及产品放行记录；不得以聚合占位符替代单项交换。 | 完整性矩阵及物料衡算审查 |
| `dq_measurement` | 实测数量 | 使用经校准的仪表、罐体、秤具及实验室方法；无法直接测量时记录估算或分配。 | 校准证书；实验室资质；分配工作表 |
| `dq_composition` | 参考产品 | 按产品族核实产品亚型、葡萄酒类产品比例、酒精度、调味、甜度、颜色和目标市场符合性。 | 配方批准；实验室放行结果；法规或规范审查 |
| `dq_geography` | 上游链接 | 电力、水、基酒、酒精、配料及包装数据集应匹配生产和供应商地域，否则披露代理。 | 供应商地点；公用工程合同；代理说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 输出 UUID、质量流属性、kg 单位、饮料净质量基准、产品亚型及必需限定信息完整且内部一致。 |  |
| `validate_category_scope` | 产品类别 | 产品以鲜葡萄酒类产品为基础并用植物或芳香物质调味；拒绝范围外葡萄酒饮料、鸡尾酒、非葡萄饮料和烈酒。 | `eu-reg-251-2014-consolidated-2021`; `oiv-aromatised-wines-oeno-395-2011` |
| `validate_vermouth_claim` | 声称为 vermouth 的产品 | 按所引欧盟定义声称 vermouth 时，应有适当 *Artemisia* 属物质及适用组成和酒精度条件的证据。 | `eu-reg-251-2014-consolidated-2021` |
| `validate_atomic_flows` | 清单 | 场址实际使用的每项电力、热载体、燃料、制冷剂、水角色、配料、化学品、包装组件、废物、废水指标和空气排放均为独立行；拒绝集合标签和选择器占位。 |  |
| `validate_process_coverage` | 过程图 | 厂内制备芳香制剂时纳入相应过程；配制与稳定处理必须纳入；除非参考产品明确为散装交付，否则纳入灌装与包装。 | `abreu-et-al-2021-fortified-wines`; `monteiro-2022-wine-lca` |
| `validate_mass_balance` | 各过程及全部前景 | 产品、废物、排放及库存变化应与实测投入核对；调查并披露无法解释的剩余量。 |  |
| `validate_wastewater` | 废水 | 在已声明处理或排放点分别报告废水体积及每项实测 COD、BOD5、总氮和总磷负荷，不得聚合。 | `monteiro-2022-wine-lca` |
| `validate_packaging` | 包装产品 | 已声明包装形式应与单项组件行及组件质量一致；玻璃、PET、盒中袋内袋、瓦楞纸板、封口、标签、薄膜和托盘不得聚合。 | `monteiro-2022-wine-lca` |
| `validate_no_case_ranges` | 全部数量范围 | 不得将单个工厂、批次、情景或文献观测表示为范围，也不得以相同案例值同时作为上下限。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品味美思酒或其他加香鲜葡萄酒的前景生产数据集 |
| downstream_use | `secondary_dataset`；经审查和发布后可作为 `background_dataset` |
| allowed_use | 在产品亚型、地域、配方和包装形式相容时，用于产品碳足迹、生命周期清单、环境足迹、供应链比较和内部改进 |
| excluded_use | 未加香葡萄酒、范围外葡萄酒饮料或鸡尾酒、非葡萄果饮料、烈酒，或配方和包装形式未披露的产品 |
| required_metadata | PCR id 和版本；产品亚型；目标市场；生产场址及期间；基酒来源；配方和配料身份；ABV；葡萄酒类产品比例；甜度和颜色；熟化和过滤路线；包装形式；净质量；分配；上游数据集链接 |
| required_quality_disclosure | 初级数据覆盖；仪表和秤具校准；配方完整性；物料衡算闭合；废水采样；直接排放方法；包装单件质量证据；代理；排除项；不确定性；未解决 UUID |
| update_trigger | 配方、基酒来源、销售名称、生产技术、能源或用水系统、废水处理、包装形式、分配方法、场址或适用法规规范发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `eu-reg-251-2014-consolidated-2021` | 标准（`standard`） | Regulation (EU) No 251/2014，2021-12-07 合并文本，EUR-Lex，https://eur-lex.europa.eu/eli/reg/2014/251/2021-12-07/eng/pdf（检索日期 2026-08-20） | 加香葡萄酒和 vermouth 的官方范围；葡萄酒类产品比例；酒精度区间；允许的调味物、甜味剂、酒精、水和添加剂 |
| `oiv-aromatised-wines-oeno-395-2011` | 标准（`standard`） | OIV《国际酿酒实践法典》I.6.8 加香葡萄酒（OENO 395-2011），https://www.oiv.int/standards/international-code-of-oenological-practices/part-i-definitions/products-derived-from-grapes%2C-grape-must-or-wine/aromatised-wines（检索日期 2026-08-20） | 独立官方类别定义、基酒比例、可选酒精添加、加甜、着色及酒精度 |
| `abreu-et-al-2021-fortified-wines` | 文献（`literature`） | Abreu, T. 等（2021），The Flavor Chemistry of Fortified Wines—A Comprehensive Approach，Foods 10(6), 1239，https://doi.org/10.3390/foods10061239 | 原文支持味美思酒基酒、调味剂、调配、加烈、熟化及常见植物原料 |
| `monteiro-2022-wine-lca` | 文献（`literature`） | Monteiro, A.（2022），Life Cycle Assessment (LCA): Environmental impacts of wine，Instituto Politécnico de Bragança，https://bibliotecadigital.ipb.pt/server/api/core/bitstreams/3307fbf9-03a8-4516-ae41-420196e046cd/content（检索日期 2026-08-20） | 原文支持酒厂用电、清洗用水、废水、灌装、包装投入、包装形式及固废输出 |
