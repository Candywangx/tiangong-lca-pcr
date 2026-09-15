---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.pile-fabrics-and-terry-fabrics-knitted-or-crocheted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的绒头织物及毛圈织物

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 28110 所涵盖的针织或钩编绒头织物及毛圈织物制造。产品按质量在制造厂门交付，适用于已声明绒头或毛圈结构、纤维组成、织物状态和纳入工艺路线的坯布或成品织物。

本 PCR 不包括机织绒头与雪尼尔织物、机织毛巾织物、狭幅织物、簇绒织物、非织造布、地毯、服装、制成纺织品以及无绒头或毛圈结构的普通针织或钩编织物。纤维和纱线生产作为上游数据集链接，除非明确纳入前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.pile-fabrics-and-terry-fabrics-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28110 |
| covered_products | 通过针织或钩编形成的绒头织物及毛圈织物；可为坯布、漂白、染色、印花或其他已声明整理状态。 |
| excluded_products | 机织绒头、雪尼尔和毛巾织物；狭幅织物；簇绒和非织造织物；地毯；服装；制成品；以及无绒头或毛圈结构的针织或钩编织物。 |
| representative_product | 在工厂生产、符合已声明结构和质量规格的可销售针织或钩编绒头或毛圈织物生产混合。 |
| production_route | 纱线接收与核验；纱线准备；绒头或毛圈针织/钩编；条件性湿处理；干燥整理；检验与裁边。 |
| market_state | 制造厂门可销售织物，并明确声明坯布或成品状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明产品规格的针织或钩编绒头织物或毛圈织物。 |
| How much | 制造厂门按已声明干燥或调湿质量基准计的 1 kg 可销售织物。 |
| How well | 符合已声明绒头或毛圈结构、纤维组成、可用幅宽、单位面积质量、颜色/整理和批次验收准则。 |
| How long or cycle | 一个完整制造批次或报告期生产混合；不指定使用阶段寿命。 |
| reference_flow_link | 参考流是提供功能单位所需的合格可销售织物净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 针织或钩编的绒头织物及毛圈织物 `19330422-9245-41a2-9f99-a7c599c7c427` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绒头或毛圈结构；针织或钩编路线；纤维类型和质量分数；干燥或调湿质量基准；参考含湿率或调湿方法；单位面积质量；可用幅宽；坯布/漂白/染色/印花/整理状态；适用时的绒高或毛圈高度/密度；工厂地理；报告期；纳入和外包工序 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品描述或等效字段中声明。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品与纺织投入/产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有纺织质量须测量或换算到同一已声明干燥或调湿基准，并保留调湿方法或用于换算的实测含湿率。 |
| `composition_balance` | 地纱、绒纱或毛圈纱及参考织物 | Mass fraction | kg/kg | 从物料清单、批次规格或检测记录确定纤维分数；已声明分数须在给定舍入容差内合计为 1。 |
| `area_mass_conversion` | 按面积或长度记录的织物 | Mass, area, usable width | kg, m2, m | 使用同一批次的实测值换算，并保留卷长、可用幅宽、单位面积质量和计算质量。 |
| `utility_separation` | 电力、蒸汽、水及每种燃料或化学品 | Row-specific property | Row-specific unit | 每项外供公用工程、燃料和化学品须作为独立交换；不得合并载能体或配方物质。 |
| `normalization` | 所有清单行 | Row-specific property | Row-specific unit per kg | 在核对库存变化、返工、废品和中间转移后，把报告期数量归一化到 1 kg 合格可销售织物。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造 | 纳入现场把接收纱线转化为已声明织物的所有工序，包括纱线准备、绒头/毛圈织物成形、检验、可归属公用工程、废物和直接排放。 | `eu-pef-2021` |
| `boundary_rule_2` | 条件性湿处理与整理 | 纳入为已声明产品实施的所有现场前处理、漂白、染色、印花、水洗、干燥、热定形和整理工序；识别外包工序并链接其上游数据集。 | `eu-textiles-bat-2022` |
| `boundary_rule_3` | 上游材料 | 纤维、纱线、外购化学品、电力、热、水供应和场外处理位于前景转化边界之外，但须链接具有代表性的上游数据集。 | `eu-pef-2021` |
| `boundary_rule_4` | 数据缺口与截断 | 记录所有已识别材料和能源交换；无法获得的次要交换应作为数据缺口披露，不得静默省略。 | `eu-pef-2021` |
| `boundary_rule_5` | 下游阶段 | 除非研究明确扩展边界并单独报告扩展结果，否则排除分销、服装或制成品加工、使用和生命周期末端。 | `eu-pef-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 地纱和绒纱/毛圈纱在织物制造场址接收，并声明供应商、纤维组成、纱线规格、调湿基准和上游数据集引用。 |
| starting_condition_role | 绒头或毛圈织物制造的门到门前景起点。 |
| product_classification_scope | 与 CPC 3.0 代码 28110 完全对应的针织或钩编绒头织物及毛圈织物。 |
| recursive_input_rule | 若同类织物作为返工或整理投入，应按来源、状态、质量和上游数据集单独记录，不得在同一前景过程中递归重建此前制造。 |
| upstream_dataset_requirement | 为每种纱线、化学品、公用工程和场外处理链接与组成、技术、地理和供应商相匹配的数据集。 |
| disclosure | 声明织物结构与状态、纳入/外包工序、共享公用工程分配、内部循环、废水路线、直接排放、分配选择以及每个数据缺口或截断。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pile_terry_formation` | 纱线准备与绒头/毛圈织物成形 | `required` | 始终纳入。 | 把地纱和绒纱/毛圈纱转化为绒头或毛圈坯布。 | kg 坯布 |
| `wet_processing` | 湿法前处理、着色或水洗 | `conditional` | 报告场址实施任何湿处理时纳入。 | 产生已声明水洗、漂白、染色、印花或化学整理状态。 | kg 湿处理织物 |
| `finishing_inspection` | 干燥、物理整理、检验和裁边 | `required` | 始终纳入检验；仅在使用时纳入干燥和整理设备。 | 产生并核验合格可销售参考织物。 | kg 可销售织物 |

### 过程：纱线准备与绒头/毛圈织物成形（`pile_terry_formation`）

#### 输入

##### 产品流

###### 地纱投入（`ground_yarn_input`）

记录形成地组织的纱线实测质量，并与已声明纤维组成和纱线规格匹配。

- 选定流：Ground yarn for knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：批次实测领用量，经期初库存、期末库存和退回纱线调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

###### 绒纱或毛圈纱投入（`pile_loop_yarn_input`）

单独记录形成绒头、长毛或毛圈的实测纱线；不得与地纱合并。

- 选定流：Pile or loop yarn for knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：批次实测领用量，经期初库存、期末库存和退回纱线调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

###### 织物成形用电（`formation_electricity`）

记录纱线准备、针织/钩编、压缩空气、控制和可归属车间调湿的供电量。

- 选定流：Electricity supplied to knitting or crocheting equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或按物理关系分配的总表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 绒头或毛圈坯布（`greige_pile_terry_fabric`）

记录从织物成形转入湿处理或最终整理的实测质量。

- 选定流：Greige knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：合格和可返工坯布的实测产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

##### 废物流

###### 织物成形纱线废物（`formation_yarn_waste`）

按实测质量和已声明处理路线记录废地纱、绒纱或毛圈纱。具体数据集须把不同纤维组成分开。

- 选定流：Waste yarn from pile or terry fabric formation
- 流属性/单位：Mass / kg
- 数量规则：按处理去向分别核对的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

###### 成形工序坯布废物（`formation_greige_fabric_waste`）

把开机布、边角料和不合格坯布与纱线废物分开，按实测质量和已声明处理路线记录。

- 选定流：Waste greige knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：按处理去向分别核对的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 绒头或毛圈坯布产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formation_records`
- 来源：

##### 基本流

### 过程：湿法前处理、着色或水洗（`wet_processing`）

#### 输入

##### 产品流

###### 进入湿处理的坯布（`wet_process_fabric_input`）

记录进入已纳入湿处理路线的 CPC 28110 织物实测质量和来料状态。

- 选定流：Greige knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：按共同已声明质量基准计的实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：

###### 工艺水（`wet_process_water`）

记录跨越过程边界的外供水；内部回用水在运行记录中另列，避免重复计量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：分配至已声明批次的计量供水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

###### 湿处理用电（`wet_process_electricity`）

记录湿处理机械、泵、配料、控制和可归属脱水设备的供电量。

- 选定流：Electricity supplied to wet-processing equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或按物理关系分配的总表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

###### 外购工艺蒸汽（`wet_process_steam`）

仅在蒸汽跨越过程边界时记录，并保留供汽压力和温度限定信息。

- 选定流：Purchased process steam
- 流属性/单位：Mass / kg
- 数量规则：蒸汽流量计质量或凝结水修正的实测平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

###### 湿处理用氢氧化钠（`sodium_hydroxide_input`）

已声明前处理或整理配方使用氢氧化钠时单独记录，并声明浓度和供应形态。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：称量或发票溶液质量乘以记录的有效浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

###### 漂白用过氧化氢（`hydrogen_peroxide_input`）

仅在已声明漂白路线使用过氧化氢时单独记录，并声明浓度和供应形态。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：称量或发票溶液质量乘以记录的有效浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿处理绒头或毛圈织物（`wet_processed_fabric`）

记录转入干燥、整理或检验的实测织物质量，并保留其湿处理状态。

- 选定流：Wet-processed knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：按共同已声明质量基准计的实测批次产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 纺织湿处理废水（`textile_wastewater`）

按实测体积记录离开湿处理边界的废水，并披露处理去向和内部回用。

- 选定流：Textile wet-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：计量排放量或有记录的槽罐/批次体积平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿处理织物产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_process_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

### 过程：干燥、物理整理、检验和裁边（`finishing_inspection`）

#### 输入

##### 产品流

###### 进入最终整理的织物（`finishing_fabric_input`）

记录进入最终路线的坯布或湿处理 CPC 28110 织物，包括含湿率和此前状态。

- 选定流：Knitted or crocheted pile or terry fabric before final finishing
- 流属性/单位：Mass / kg
- 数量规则：按共同已声明基准计的实测批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 整理与检验用电（`finishing_electricity`）

记录干燥机、机械整理、检验、卷装、控制和可归属抽排设备的供电量。

- 选定流：Electricity supplied to drying, finishing, and inspection equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表用电或按物理关系分配的总表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

###### 干燥或整理用外购蒸汽（`finishing_steam`）

仅在实际干燥或整理路线使用时记录外购蒸汽，并保留压力和温度限定信息。

- 选定流：Purchased process steam for drying or finishing
- 流属性/单位：Mass / kg
- 数量规则：蒸汽流量计质量或凝结水修正的实测平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售绒头或毛圈织物（`finished_pile_terry_fabric`）

记录检验后的 CPC 28110 合格织物净质量；该流为已声明参考产品产出。

- 选定流：针织或钩编的绒头织物及毛圈织物 `19330422-9245-41a2-9f99-a7c599c7c427`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格织物实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`un-cpc-3-0`

##### 废物流

###### 整理裁边废物（`finishing_trim_waste`）

按实测质量和处理去向记录布边和试样织物。

- 选定流：Knitted or crocheted pile or terry fabric trim waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向分别核对的实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

###### 不合格成品织物（`finishing_rejected_fabric`）

把经检验不可销售的成品织物与裁边和试样分开记录。

- 选定流：Rejected finished knitted or crocheted pile or terry fabric
- 流属性/单位：Mass / kg
- 数量规则：按处理去向分别核对的不合格织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 产品特定计量和记录 | 优先把纱线、化学品、公用工程、废物和排放直接归属到已声明产品批次或生产线。 | `eu-pef-2021` |
| `allocation_rule_2` | 共享设备与公用工程 | 无法直接归属时，采用反映实际使用的有记录物理驱动因子，例如机器时间、计量能源、浴液体积或加工干质量；披露驱动因子和结果。 | `eu-pef-2021` |
| `allocation_rule_3` | 返工与内部循环 | 内部返工保留在前景平衡内，避免同一中间产出重复计量。外运残余物作为产出记录并声明去向。 | `eu-pef-2021` |
| `allocation_rule_4` | 多种可销售织物产品 | 有产品特定物理记录时避免经济分配；若仍无法避免，应报告分配前总量、所选基准、分配份额和敏感性。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formation_records` | `pile_terry_formation` | 纱线、电力、坯布产出、纺织废物 | 批次领料、库存记录、仪表、秤重、生产与废物日志 | lot_id; yarn_role; fibre_spec; opening_stock; issued_mass; returned_mass; closing_stock; meter_start; meter_end; greige_mass; waste_mass; waste_route | 使用经校准秤具和仪表，并与批次及报告期记录核对。 | kg; kWh | 每批采集、每月核对 | 至少一个代表性报告年或完整的较短生产活动期 | 报告场址所有纳入的成形线 | 按行汇总有效记录，调整库存变化，再除以合格坯布产出。 | 校准资料、发票、批次票据、仪表导出、库存核对和废物转移记录。 |
| `cp_wet_process_records` | `wet_processing` | 织物、水、电力、蒸汽、氢氧化钠、过氧化氢、废水 | 批次单、配方/加料日志、仪表、发票、实验室与排放记录 | batch_id; input_mass; output_mass; water_meter; electricity_meter; steam_mass; chemical_name; solution_mass; active_fraction; wastewater_volume; reuse_volume; treatment_route | 把批次配方和计量公用工程与物理批次产出核对；每种化学品保留独立记录。 | kg; m3; kWh | 每批采集、每月核对 | 与参考产品生产相同期间 | 所有纳入的现场湿处理线 | 汇总每项原子交换，必要时把溶液换算为有效成分质量，并按湿处理产出归一化。 | 仪表校准、配方审批、加料日志、发票、实验室记录和排放许可/记录。 |
| `cp_finishing_records` | `finishing_inspection` | 来料织物、电力、蒸汽、成品产出、不合格品 | 转移票据、仪表、检验日志、卷材测量、秤重、废物记录 | batch_id; incoming_mass; moisture_basis; electricity_meter; steam_mass; roll_length; usable_width; mass_per_area; conforming_mass; reject_mass; waste_route | 每批核对来料质量、合格产出、返工、不合格品和库存变化。 | kg; m; m2; kWh | 每批采集、每月核对 | 与参考产品生产相同期间 | 所有纳入的整理和检验线 | 汇总原子交换并除以参考织物合格净质量。 | 仪表和秤具校准、卷材检验报告、检测报告、库存核对和废物转移记录。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_yarn_consumption` | 每条纱线行 | 领用质量 + 可归属期初库存 - 退回质量 - 可归属期末库存 | 纱线领用与库存记录 | 按纱线角色计的净消耗量 | |
| `calc_active_chemical` | 外供化学品溶液 | 外供溶液质量 × 实测或证书有效分数 | 溶液质量；有效分数 | 有效化学品质量 | `eu-textiles-bat-2022` |
| `calc_mass_normalization` | 每项清单交换 | 核对后的报告期交换量 ÷ 参考织物合格净质量 | 交换总量；合格产出；库存/返工调整 | 每 kg 参考织物交换量 | `eu-pef-2021` |
| `calc_area_to_mass` | 卷材记录 | 实测面积 × 实测单位面积质量，并与秤重质量核对 | 可用幅宽；卷长；单位面积质量；秤重质量 | 织物质量与偏差 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与纺织中间体 | 保留 CPC 28110 范围、绒头/毛圈结构、针织/钩编路线、纤维组成、产品状态和批次身份。 | 产品规格、物料清单、批次卡和检验/检测记录。 |
| `dq_completeness` | 前景清单 | 核对纺织质量投入、可销售产出、库存变化、返工和废物；核对所有已识别化学品和公用工程，不得使用集合行。 | 已签署质量平衡、配方台账、仪表、发票和废物记录。 |
| `dq_temporal` | 前景记录 | 使用一致且具有代表性的期间，并披露停机、生产活动期、异常生产和缺失时间段。 | 生产日历和覆盖报告。 |
| `dq_measurement` | 质量、面积、水、能源和化学品记录 | 使用经校准或核验的仪器，并保留换算因子、有效浓度及不确定性或偏差检查。 | 校准证书、方法记录、分析证书和核对报告。 |
| `dq_geography_technology` | 上游和前景数据 | 匹配供应商地理、电力系统、蒸汽条件、水路线、设备、织物结构和湿处理技术。 | 供应商声明、设备清单、合同和数据集元数据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考身份 | 产品流 UUID、Product flow 类型、Mass 属性、kg 单位和精确 CPC 28110 分类须同时存在且相互一致。 | `un-cpc-3-0` |
| `validation_rule_2` | 产品范围 | 拒绝机织、簇绒、非织造、狭幅、地毯、服装、制成品以及无绒头/毛圈结构的产品数据集。 | `un-cpc-3-0` |
| `validation_rule_3` | 双语结构 | 中英文须保持相同顺序的 process_id、row_id、rule_id、source_id、机器 token 和 UUID。 | |
| `validation_rule_4` | 原子交换 | 每张清单卡须命名一个具体交换；合并的公用工程、化学品、废物、包装或选择器无效。 | `eu-textiles-bat-2022` |
| `validation_rule_5` | 质量与记录完整性 | 织物质量平衡和报告期覆盖须在已声明测量容差内核对；缺口须披露且不得静默用 AI 数值替代。 | `eu-pef-2021` |
| `validation_rule_6` | 条件性路线 | 湿处理以及每种配方化学品、蒸汽供应、废水路线和整理工序仅在实际使用时纳入，并由路线特定记录支持。 | `eu-textiles-bat-2022` |
| `validation_rule_7` | UUID 使用 | 非参考 UUID 仅在语义匹配的 state-100 Tiangong 行同时通过 hybrid 发现和确定性直读确认后才可发布。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集。 |
| downstream_use | 使用针织或钩编绒头或毛圈织物的产品过程和 lifecyclemodel 投影。 |
| allowed_use | 织物结构、纤维组成、产品状态、地理、技术和边界与已声明数据集相匹配的研究。 |
| excluded_use | 未经有记录适配，不用于机织、簇绒、非织造、狭幅、地毯、服装、制成品、无绒头/毛圈或显著不同纤维/整理路线。 |
| required_metadata | CPC 28110；产品流 UUID；结构；针织/钩编路线；纤维组成；质量基准；织物状态；幅宽和单位面积质量；绒头/毛圈规格；场址地理；技术；报告期；纳入/外包工序；分配；废水和废物路线。 |
| required_quality_disclosure | 数据覆盖、仪表和秤具质量、质量平衡结果、配方完整性、分配驱动因子、上游代表性、不确定性/数据缺口和未解决 UUID 身份。 |
| update_trigger | 结构、纤维组成、设备、湿处理路线、整理、供应商系统、能源/水系统、分配、边界或参考身份发生实质变化，或时间代表性失效。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC 28110. https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml（检索于 2026-08-13）。 | 精确产品范围与排除项；分类校验。 |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13）。 | 纺织过程分解；化学品、水、能源、废水、排放、监测与管理要求。 |
| `eu-pef-2021` | `method_factor` | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-13）。 | 边界、清单完整性、分配层级、数据质量和报告规则。 |
