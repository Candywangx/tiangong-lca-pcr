---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-knitted-or-crocheted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的婴儿服装及衣着附件

## 1. 范围与适用性

本 PCR 适用于针织、钩编或以针织/钩编织物制成的可销售婴儿服装及衣着附件的工厂前景数据包。涵盖本场址实施的材料准备、排料、裁剪、缝制和辅料安装，以及适用的装饰或成衣湿处理、检验、熨烫、折叠、单件包装和运输包装。

前景边界从成品针织/钩编织物、缝线、辅料、标签、工艺化学品和包装进入制造场址开始。外购材料的纤维生产、纺纱、织物成形及场外湿处理由上游数据集表示。分销、零售、消费者使用、再使用和生命末期不在本前景生产数据集内。

不涵盖非针织婴儿服装、鞋、玩具、尿布等吸收性卫生用品、一次性用品、电活性服装，或主要身份属于皮革、毛皮、塑料、毡、非织造布、涂层或浸渍织物的服装。本 PCR 不认证安全、纤维含量、护理、耐用性或市场合规声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-knitted-or-crocheted |
| classification_refs | CPC 3.0: 28227 — 针织或钩编的婴儿服装及衣着附件 |
| covered_products | 婴儿连体衣、睡衣、爬服、衬衫、裤装、连衣裙、开衫、帽、手套及以针织或钩编结构为主要特征的类似婴儿服装附件 |
| excluded_products | 非针织纺织品婴儿服装；单独分类的袜类；鞋；玩具；一次性吸收用品；超出本类别的皮革、毛皮、塑料、毡、非织造、电活性、涂层或浸渍服装 |
| representative_product | 使用外购成品针织织物，经裁剪、缝制、辅料安装、检验和包装制成的可销售婴儿针织服装，并声明可选装饰和湿处理路线 |
| production_route | 针织或钩编织物裁剪—缝制—整饰，按条件包含本场址刺绣、印花、成衣洗涤、染色或柔软处理 |
| market_state | 制造场址门口的成品、已检验、干燥并包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付符合声明产品规格且主要结构为针织或钩编的婴儿服装或衣着附件 |
| How much | 1 kg 合格包装可销售产品净质量，不含运输包装质量 |
| How well | 符合声明的款式、婴儿年龄/尺码、纤维组成、织物结构、面密度、颜色、整理、辅料、护理和市场质量规格 |
| How long or cycle | 一个制造批次或报告期；使用寿命供下游使用阶段建模披露，但不由本门到门参考流规定 |
| reference_flow_link | 参考产品输出行 `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 针织或钩编的婴儿外衣和服装服饰物品 `7a9f33f2-9426-425d-abcf-bc483460969b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装或附件类型；婴儿年龄或尺码；纤维百分比；针织/钩编结构；织物面密度；颜色与整理；辅料与紧固件；装饰路线；湿处理路线；生产地域与期间；产品净质量；包装配置；称量调湿状态 |

构建前景数据包时，所有必需限定信息必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失时参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终调湿后、加入运输包装前计量合格产品净质量，并报告调湿方法及是否计入单件消费包装。 |
| `material_mass` | 织物、缝线、辅料、化学品和废物 | Mass | kg | 按独立材料身份记录采购、领用、退库、回收和废弃质量，不得合并不同纤维、化学品、包装或废物路线。 |
| `electricity_measurement` | 电力 | Energy | kWh | 优先使用分表；否则按机器运行时间或其他物理驱动量分配经核对的场址总表。 |
| `thermal_energy_measurement` | 蒸汽、天然气、柴油和热水 | Energy 或带换算依据的质量/体积 | MJ, kg, m3 或 L | 各载能体分开，保留下/高位热值、蒸汽状态、热水温度、密度及换算因子。 |
| `water_measurement` | 工艺水和废水 | Volume 或 Mass | m3 或 kg | 在同一期间核对进水、回用、蒸发、产品携带及排放废水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品针织/钩编织物以及另购缝线、辅料、标签、化学品和包装进入场址，并带有组成、供应商和上游数据集引用。 |
| starting_condition_role | 门到门服装制造前景边界 |
| product_classification_scope | CPC 3.0 28227 范围内的婴儿服装及衣着附件成品 |
| recursive_input_rule | 若外购或转入投入本身属于同一类别成品，只作为独立产品投入记录一次，声明数量、供应商、生产阶段和上游数据集，不在本前景包内递归展开。 |
| upstream_dataset_requirement | 每种外购织物、辅料、化学品、能源和包装均需适当地域/技术的上游数据集，或明确的数据缺口。 |
| disclosure | 声明织物生产、染色、印花、整理、装饰、洗涤、供热、废水处理和包装是在场内、场外还是不存在。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_received_materials` | 前景起始边界 | 从成品针织/钩编织物及另购制造投入接收开始；上游生产通过链接数据集表示，不得静默遗漏。 | `ilo-garment-osh-2021`; `eu-pef-method-2021` |
| `boundary_on_site_operations` | 制造作业 | 纳入场址从材料准备至合格包装输出的全部作业，包括适用的装饰、洗涤、染色、烘干、焙烘和场内公用工程。 | `ilo-garment-osh-2021`; `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `boundary_known_exchanges` | 前景清单 | 以原子行记录所有已知材料、能源、水、包装、废物和直接排放，不使用未说明的质量、成本或影响截断。 | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | 下游阶段 | 本前景生产数据集排除分销、零售、使用、再使用和生命末期，下游模型按需补充。 | `ec-apparel-footwear-pefcr-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 材料准备、排料与裁剪 | required | 针织/钩编织物裁剪缝制路线始终纳入 | 将织物转成受控裁片并记录排料效率和裁剪废料 | 每 1 kg 参考产品输出 |
| `assembly_trim` | 缝制、组装与辅料安装 | required | 裁剪缝制路线始终纳入 | 组装裁片并安装声明的缝线、标签和紧固件 | 每 1 kg 参考产品输出 |
| `decoration` | 刺绣或涂料印花 | conditional | 报告场址实施时纳入 | 加入声明图案或装饰 | 每 1 kg 参考产品输出 |
| `wet_finishing` | 成衣洗涤、染色、柔软、烘干或焙烘 | conditional | 报告场址实施的每项作业均纳入 | 施加湿/热整理并记录水、化学品、能源、废水和直接排放 | 每 1 kg 参考产品输出 |
| `final_packaging` | 熨烫、检验、折叠与包装 | required | 可销售包装产品始终纳入 | 交付合格输出并记录包装 | 每 1 kg 参考产品输出 |

### 过程：材料准备、排料与裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 针织或钩编织物（`knitted_fabric_input`）

- 选定流：Knitted or crocheted textile fabric
- 流属性/单位：Mass / kg
- 数量规则：目标订单领用织物称量值扣除有记录的退库量；每种组成、结构、颜色和整理单列
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`ilo-garment-osh-2021`; `eu-ecolabel-textiles-2014`

###### 排料纸（`marker_paper_input`）

- 选定流：Marker paper
- 流属性/单位：Mass / kg
- 数量规则：归属于目标订单的采购或领用排料纸质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

###### 裁剪电力（`cutting_electricity_input`）

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：分表值，或按机器运行时间核对分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

##### 废物流

通常无废物投入。

##### 基本流

通常无直接基本流投入。

#### 输出

##### 产品流

###### 成衣裁片（`cut_components_output`）

- 选定流：Cut knitted or crocheted garment components
- 流属性/单位：Mass / kg
- 数量规则：裁片包称量，或领用织物减单独称量裁剪废料和退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

##### 废物流

###### 纺织裁剪废料（`cutting_scrap_output`）

- 选定流：Knitted or crocheted textile cutting scrap
- 流属性/单位：Mass / kg
- 数量规则：目标订单废料称量值，按纤维组成和去向分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`enes-kipoz-cut-sew-waste-2020`

###### 废排料纸（`waste_marker_paper_output`）

- 选定流：Waste marker paper
- 流属性/单位：Mass / kg
- 数量规则：废弃排料纸称量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

##### 基本流

通常无直接基本流输出。

### 过程：缝制、组装与辅料安装（`assembly_trim`）

#### 输入

##### 产品流

###### 成衣裁片（`cut_components_assembly_input`）

- 选定流：Cut knitted or crocheted garment components
- 流属性/单位：Mass / kg
- 数量规则：`cut_components_output` 转入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 缝纫线（`sewing_thread_input`）

- 选定流：缝纫线
- 流属性/单位：Mass / kg
- 数量规则：领用线质量减有记录退库量；不同纤维或聚合物分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 弹性织带（`elastic_tape_input`）

- 选定流：Elastic textile tape
- 流属性/单位：Mass / kg
- 数量规则：称量值或件数乘经核实单件质量，含记录损耗；仅含弹性织带款式适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 揿扣（`snap_fastener_input`）

- 选定流：Snap fastener
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含记录废品；仅安装时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 服装纽扣（`button_input`）

- 选定流：Garment button
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含记录废品；仅安装时适用并声明材质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 服装拉链（`zipper_input`）

- 选定流：Garment zipper
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含废品；仅安装时适用并声明带、齿和拉头材质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 纺织护理标签（`care_label_input`）

- 选定流：Textile care label
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含记录废品；基材不同的其他标签另列
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

###### 组装电力（`assembly_electricity_input`）

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：分表值，或按设备运行时间核对分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

##### 废物流

通常无废物投入。

##### 基本流

通常无直接基本流投入。

#### 输出

##### 产品流

###### 组装后未整理成衣（`assembled_garment_output`）

- 选定流：Assembled unfinished babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：转序称量或组装质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

##### 废物流

###### 废缝纫线（`waste_sewing_thread_output`）

- 选定流：Waste sewing thread
- 流属性/单位：Mass / kg
- 数量规则：收集废线称量，或领用减退回减进入产品质量；按组成分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`

##### 基本流

通常无直接基本流输出。

### 过程：刺绣或涂料印花（`decoration`）

#### 输入

##### 产品流

###### 待装饰未整理成衣（`unfinished_garment_decoration_input`）

- 选定流：Assembled unfinished babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：进入装饰的称量或计数转序质量，仅适用于场内装饰路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

###### 刺绣线（`embroidery_thread_input`）

- 选定流：Embroidery thread
- 流属性/单位：Mass / kg
- 数量规则：领用质量减退库；各组成分开，仅刺绣款适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

###### 纺织涂料印花浆（`textile_printing_paste_input`）

- 选定流：Textile pigment printing paste
- 流属性/单位：Mass / kg
- 数量规则：称量领用浆料减退回未用浆料；每种供应商配方在实际数据集中单列
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`
- 来源：`eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### 装饰电力（`decoration_electricity_input`）

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：分表值，或按刺绣、印花、闪蒸烘干和焙烘设备时间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

##### 废物流

通常无废物投入。

##### 基本流

通常无直接基本流投入。

#### 输出

##### 产品流

###### 装饰后未整理成衣（`decorated_garment_output`）

- 选定流：Decorated unfinished babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：合格装饰成衣转序称量或计数质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

##### 废物流

###### 废刺绣线（`waste_embroidery_thread_output`）

- 选定流：Waste embroidery thread
- 流属性/单位：Mass / kg
- 数量规则：收集废线称量或材料平衡；按组成分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

###### 废纺织涂料印花浆（`waste_printing_paste_output`）

- 选定流：Waste textile pigment printing paste
- 流属性/单位：Mass / kg
- 数量规则：废物容器差值称量或浆料平衡；与废水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_decoration_records`

##### 基本流

声明配方的直接空气排放须按每种化学物质或分析指标单列，不得使用“印花排放”集合行。

### 过程：成衣洗涤、染色、柔软、烘干或焙烘（`wet_finishing`）

#### 输入

##### 产品流

###### 待湿处理未整理成衣（`unfinished_garment_wet_input`）

- 选定流：Assembled unfinished babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：进入湿处理的称量或计数转序质量，仅适用于场内湿/热处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 工艺水（`process_water_input`）

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：分配至声明批次的计量进水；冷/常温补充水与热水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`
- 来源：`eu-textiles-bref-2023`

###### 热工艺水（`hot_process_water_input`）

- 选定流：Hot process water
- 流属性/单位：Volume / m3
- 数量规则：计量投入并记录供回水温度，与冷水、燃料和蒸汽分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 氯化钠（`sodium_chloride_input`）

- 选定流：氯化钠
- 流属性/单位：Mass / kg
- 数量规则：配方领用质量与批次单和库存变化核对；仅配方使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 碳酸钠（`sodium_carbonate_input`）

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：配方领用质量与批次单和库存变化核对；仅配方使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 乙酸（`acetic_acid_input`）

- 选定流：乙酸
- 流属性/单位：Mass / kg
- 数量规则：称量配方质量乘核实浓度得到活性乙酸质量；仅使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 聚二甲基硅氧烷纺织柔软剂（`silicone_softener_input`）

- 选定流：Polydimethylsiloxane textile softener formulation
- 流属性/单位：Mass / kg
- 数量规则：配方称量领用与批次单和库存变化核对，并报告活性含量；仅使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

###### 湿处理电力（`wet_finishing_electricity_input`）

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：分表值，或按洗涤、加药、脱水、烘干、焙烘、泵和处理设备时间核对分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_utility_records`
- 来源：`eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### 外购蒸汽（`purchased_steam_input`）

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：计量蒸汽并记录压力、温度和凝结水回收状态；与燃料和热水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_utility_records`

###### 天然气（`natural_gas_input`）

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：计量消耗并声明热值依据；仅场内锅炉、烘干或焙烘设备使用时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_utility_records`

###### 柴油（`diesel_fuel_input`）

- 选定流：柴油燃料
- 流属性/单位：Volume / L
- 数量规则：计量或储罐差值，保留密度和热值；仅直接相关供热或备用发电适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_utility_records`

###### R-410A 制冷剂补充（`refrigerant_r410a_input`）

- 选定流：Refrigerant R-410A
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的报告期补充质量；仅直接相关 R-410A 设备适用，其他制冷剂另列
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_utility_records`

##### 废物流

通常无废物投入。

##### 基本流

通常无直接基本流投入。

#### 输出

##### 产品流

###### 湿整理成衣（`wet_finished_garment_output`）

- 选定流：Wet-finished babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：干燥调湿后的合格转序质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_material_records`

##### 废物流

###### 纺织湿处理废水（`textile_wastewater_output`）

- 选定流：Textile wet-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：计量排水与水平衡核对；按适用要求附 COD、pH、温度等实测记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_emission_records`
- 来源：`eu-ecolabel-textiles-2014`; `eu-textiles-bref-2023`

###### 纺织废水处理污泥（`wastewater_sludge_output`）

- 选定流：Textile wastewater treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：湿污泥称量并记录干固体比例、危险分类和去向；仅场内处理产生时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_emission_records`

##### 基本流

###### 化石二氧化碳入空气（`fossil_co2_air_output`）

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或由天然气/柴油实测记录及有引用的适用因子计算；仅场内燃烧适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_emission_records`
- 来源：`eu-pef-method-2021`

###### 二氧化氮入空气（`nitrogen_oxides_air_output`）

- 选定流：Nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：二氧化氮烟气测量或燃料特定计算，以 NO2 质量报告；一氧化氮等其他氮物种另列原子行
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_emission_records`

###### R-410A 制冷剂入空气（`refrigerant_r410a_air_output`）

- 选定流：Refrigerant R-410A, to air
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减期末充注量和记录回收量；仅 R-410A 设备适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_emission_records`

### 过程：熨烫、检验、折叠与包装（`final_packaging`）

#### 输入

##### 产品流

###### 包装前成衣（`finished_garment_pack_input`）

- 选定流：Finished unpacked babies' knitted or crocheted garment
- 流属性/单位：Mass / kg
- 数量规则：成衣转序称量或计数质量，与合格输出和不合格品核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 最终整饰电力（`final_finishing_electricity_input`）

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：检验照明、熨烫、折叠和包装设备分表值或按运行时间核对分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 熨烫蒸汽（`pressing_steam_input`）

- 选定流：外购蒸汽
- 流属性/单位：Mass / kg
- 数量规则：计量并记录压力、温度和凝结水回收状态；与电力和场内燃料分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 纸吊牌（`paper_hangtag_input`）

- 选定流：Paper hangtag
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含记录废品；与纸箱和薄膜分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 低密度聚乙烯成衣袋（`ldpe_bag_input`）

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass / kg
- 数量规则：件数乘经核实单件质量，含记录废品，并声明再生含量和膜厚
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 瓦楞纸板运输箱（`corrugated_carton_input`）

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：箱数乘经核实单箱质量并按装箱件数分配；与单件包装分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 聚丙烯封箱胶带（`polypropylene_tape_input`）

- 选定流：Polypropylene packing tape
- 流属性/单位：Mass / kg
- 数量规则：卷材库存差或使用长度乘经核实单位长度质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

##### 废物流

通常无废物投入。

##### 基本流

通常无直接基本流投入。

#### 输出

##### 产品流

###### 参考产品输出（`reference_product_output`）

- 选定流：针织或钩编的婴儿外衣和服装服饰物品 `7a9f33f2-9426-425d-abcf-bc483460969b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：调湿后正好 1 kg 合格产品净质量，不含运输包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_reference_output_records`

##### 废物流

###### 废瓦楞纸板（`waste_paperboard_output`）

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：按去向称量损坏纸箱和包装边角料，与排料纸分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

###### 废低密度聚乙烯薄膜（`waste_ldpe_film_output`）

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：按去向称量废袋和膜边角料，与纸板废物分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`

##### 基本流

通常无直接基本流输出。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享和多功能作业 | 通过分表、独立批次记录或过程细分避免分配，使目标服装的输入输出可直接归属。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法避免的共享公用工程和服务 | 无法细分时使用机器时间、计量热需求、废水量、生产质量或处理件数等因果物理驱动量，并记录总量核对。 | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | 无可靠物理关系的共享作业 | 经济分配仅作最后手段，披露价格和期间，并与合理物理驱动量做敏感性检查。 | `eu-pef-method-2021` |
| `allocation_scrap` | 纺织和包装废料 | 所有采购材料的上游负荷保留在前景产品系统；废料在离开过程时记录，门到门数据集内不计避免负荷抵扣。 | `enes-kipoz-cut-sew-waste-2020`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | 织物、排料纸、电力、裁片和裁剪废物 | 称量单、领退料、排料文件、电表 | order_id; style; fabric_id; fibre_content; fabric_mass_issued; fabric_mass_returned; marker_area; cut_component_mass; scrap_mass; paper_mass; electricity_kWh | 按订单称量材料并核对排料和电表 | kg; m2; kWh | 每订单并逐月核对 | 连续代表性 12 个月或完整较短生产期 | 所有声明产品裁剪线 | 汇总目标订单，按机器时间分配共享电力，再按合格输出质量归一化 | 校准秤、排料文件、库存账、电表核对、异常日志 |
| `cp_assembly_records` | `assembly_trim` | 裁片、缝线、各辅料、电力、组装输出和废线 | 转序单、领退料、件数、单件质量、电表 | order_id; component_mass; material_id; count; unit_mass; issued_mass; returned_mass; waste_mass; machine_hours; electricity_kWh; assembled_mass | 各材料身份分开并核对领用、退回、输出和废物 | kg; count; kWh | 每订单并逐月核对 | 与参考输出相同 | 所有声明产品缝制线 | 汇总目标订单并按合格输出质量归一化 | 批准 BoM、校准秤、库存账、生产单、电表核对 |
| `cp_decoration_records` | `decoration` | 成衣转序、刺绣线、印花浆、电力和废物 | 批次单、领退料、电表、废物单 | order_id; artwork_id; formulation_id; input_mass; returned_mass; output_mass; waste_mass; equipment_hours; electricity_kWh | 各图案路线和配方分开记录 | kg; kWh | 每装饰批次 | 与参考输出相同 | 所有场内装饰设备 | 汇总路线批次并按合格输出质量归一化 | 批次批准、SDS、库存账、校准秤、电表核对 |
| `cp_wet_finishing_material_records` | `wet_finishing` | 成衣转序、水、每种化学品和整理输出 | 配方、加药日志、水表、库存、称量单 | batch_id; recipe_id; chemical_identity; concentration; issued_mass; water_m3; input_mass; output_mass; moisture_condition | 计量水并称量每种配方，核对配方和库存 | kg; m3 | 每湿处理批次 | 与参考输出相同 | 所有相关场内湿处理线 | 汇总批次并按合格干燥输出质量归一化 | 配方批准、SDS、校准加药和水表、质量平衡 |
| `cp_wet_finishing_utility_records` | `wet_finishing` | 电力、蒸汽、天然气、柴油、热水和 R-410A 补充 | 分表、发票、储罐和维修记录 | timestamp; equipment_id; kWh; steam_kg; pressure; temperature; hot_water_m3; gas_m3; diesel_L; heating_value; refrigerant_kg | 优先分表；核对总量并仅以物理驱动量分配 | kWh; kg; m3; L | 可按批次计量并逐月核对 | 与参考输出相同 | 服务于纳入作业的公用系统 | 扣除排除用途，按物理驱动量分配并归一化 | 仪表校准、发票、燃料和制冷剂维修记录、核对表 |
| `cp_wet_finishing_emission_records` | `wet_finishing` | 废水、污泥、燃烧排放和制冷剂损失 | 排水表、实验室报告、废物联单、烟气测试、燃料和维修记录 | wastewater_m3; COD; pH; temperature; sludge_mass; dry_solids; destination; fuel_use; emission_factor; measured_emission; refrigerant_balance | 测量直接释放或以实测活动数据和有引用因子计算 | kg; m3; concentration units | 每次排放/测试，逐月汇总 | 与参考输出相同 | 纳入作业全部直接释放 | 汇总测量或有据计算并归一化 | 适用时认可实验室报告、仪表校准、联单、计算文件 |
| `cp_final_packaging_records` | `final_packaging` | 成衣转序、电力、蒸汽、各包装和包装废物 | 包装单、件数、单件质量、电表、废物单 | order_id; conforming_units; reject_units; unpacked_mass; packaging_id; count; unit_mass; electricity_kWh; steam_kg; waste_mass | 核对检验件数、包装领用和最终输出 | kg; count; kWh | 每订单并逐月核对 | 与参考输出相同 | 所有相关整饰包装线 | 汇总订单并按合格产品净质量归一化 | 包装规格、校准秤、包装单、电表核对 |
| `cp_reference_output_records` | `final_packaging` | 参考产品输出 | 最终检验和称量记录 | order_id; style; size; conforming_units; net_product_mass; conditioning_method; packaging_exclusion | 用校准秤称量代表样本或全部输出并与合格件数核对 | kg | 每订单 | 与全部投入记录相同 | 所有声明场址 | 汇总合格净质量并将参考量归一化为 1 kg | 校准证书、检验放行、抽样计划、签署核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | normalized_amount = attributable_exchange_amount / net_conforming_product_mass | 可归属行数量；`cp_reference_output_records` 参考输出质量 | 每 1 kg 参考产品的行数量 | `eu-pef-method-2021` |
| `calc_material_balance` | 织物及其他含质量生产材料 | 期初库存 + 收货 - 期末库存 = 合格产品含量 + 分列废物 + 退回/转出；调查差额 | 库存、领用、退回、输出和废物质量 | 核对质量平衡及未解释差异 | `eu-pef-method-2021`; `eu-ecolabel-textiles-2014` |
| `calc_shared_resource` | 共享电、热、水和处理 | attributable_total = reconciled_shared_total × target_physical_driver / total_physical_driver | 仪表总量、排除用途、目标及总驱动量 | 可归属资源量 | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | R-410A 设备 | loss = opening_charge + additions - closing_charge - documented_recovery | 充注盘点和维修记录 | 排入空气的 R-410A | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和 BoM | 保留每个产品族的款式、尺码、纤维百分比、结构、整理、辅料、供应商和包装规格。 | 批准规格、BoM、供应商声明、检验放行 |
| `dq_temporal` | 全部前景数据 | 使用一致代表期间，通常连续 12 个月或季节性完整生产期；披露异常停机和替代。 | 有日期的仪表、库存、生产和维护记录 |
| `dq_coverage` | 纳入过程 | 覆盖全部声明生产线、班次和场内作业，或说明代表性抽样。 | 工艺路线、场址图、抽样计划和核对 |
| `dq_measurement` | 质量、能源、水和排放 | 重要计量使用校准仪器，保留单位换算、检出限、缺失数据处理和计算因子。 | 校准证书、实验室报告、计算工作簿 |
| `dq_completeness` | 清单 | 核对 BoM 与输出质量，能源和材料身份分开，记录所有已知废物路线和直接排放。 | 质量平衡、公用工程核对、废物联单、异常日志 |
| `dq_supplier_upstream` | 外购投入 | 各材料和公用工程链接适当上游数据集，或披露缺失数据集、地域和技术不匹配。 | 供应商记录、数据集引用、缺口登记 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品范围 | 参考产品不是以针织或钩编为主要结构的婴儿服装/附件，或缺少必需限定信息时失败。 | `un-cpc-3-2023` |
| `validate_reference` | 参考流 | 必须使用产品 UUID `7a9f33f2-9426-425d-abcf-bc483460969b`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg 且归一化输出恰为 1 kg。 |  |
| `validate_atomic_inventory` | 清单行 | 合并多个流、载能体、化学品、包装、废物或排放的行失败；每种实际配方或排放物质单列。 |  |
| `validate_route_completeness` | 过程图 | 裁剪、组装和最终包装必需；声明场内装饰或湿处理时必须有相应清单，声明不存在时不得填数量。 | `ilo-garment-osh-2021`; `eu-textiles-bref-2023` |
| `validate_mass_balance` | 材料流 | 必须有织物和产品质量平衡，并调查未解释差异。 | `eu-pef-method-2021` |
| `validate_wet_processing` | 场内湿处理 | 按适用情况分别记录水、热水、每种化学品、电力、蒸汽、每种燃料、废水、污泥和实测直接排放，并有配方、排放和处理去向证据。 | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `validate_allocation` | 共享资源 | 经济分配前必须使用细分或有据因果物理驱动量，全部分配须与场址实测总量核对。 | `eu-pef-method-2021` |
| `validate_sources_and_quality` | 证据和质量 | 外部约束规则必须有来源 id，每个 `foreground_record` 必须有采集证据，并披露数据缺口和代理上游数据集。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口包装婴儿针织/钩编服装及衣着附件的产品特定前景制造数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品/产品组合 LCA、供应链足迹、生态设计、采购及下游生命周期建模，前提是产品、地域、技术、期间和边界具有代表性 |
| excluded_use | 消费者安全、法律合规、耐用性、使用性能声明；CPC 28227 外产品；非针织服装或显著不同湿处理路线的无条件替代 |
| required_metadata | PCR id/版本；产品 UUID；款式和尺码；纤维和辅料组成；织物结构和面密度；颜色与整理；装饰/湿处理路线；地域；技术；期间；分配；包装；上游数据集 |
| required_quality_disclosure | 一手数据比例；仪表和质量平衡覆盖；抽样；分配驱动量；缺失数据；上游代理；实验室方法；废水路线；不确定性和审查状态 |
| update_trigger | 款式/纤维、织物结构、供应商/上游数据集、装饰/湿处理配方、场址/设备、公用工程、包装、分配驱动量、废水处理、法规或重大质量发现变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2023` | official_guidance | United Nations Statistics Division, Proposed CPC Version 3.0 Structure, 20 November 2023, https://unstats.un.org/unsd/classifications/CPC/Documents/3-Proposed-CPC-Ver3-Structure-20Nov2023.pdf | CPC 28227 身份及与相邻服装类别区分 |
| `ilo-garment-osh-2021` | official_guidance | International Labour Organization, Occupational safety and health improvement in the garment industry: Drivers and constraints, 2021, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf | 服装供应链边界及织物、裁剪、缝制、辅料、熨烫、刺绣、整饰和包装过程 |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | 前处理、染色、印花、整理及水、能源、化学品、废水、排放清单 |
| `eu-ecolabel-textiles-2014` | standard | Commission Decision 2014/350/EU establishing ecological criteria for the award of the EU Ecolabel for textile products, consolidated criteria current through 2028, https://eur-lex.europa.eu/eli/dec/2014/350/oj/eng | 纤维/部件组成、配方、场址证据、能源计量、水气排放、产品质量和 1 kg 质量基准 |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BoM/制造数据、完整输入输出、分配层级、数据质量、核证和归一化 |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | European Commission Directorate-General for Environment, New EU rules for measuring environmental impact of clothes and shoes, 25 June 2025, https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | 下游生命周期范围和一致服装足迹建模 |
| `enes-kipoz-cut-sew-waste-2020` | literature | Enes, E.; Kipöz, Ş. The role of fabric usage for minimization of cut-and-sew waste within the apparel production line. Journal of Cleaner Production 248 (2020) 119221. https://doi.org/10.1016/j.jclepro.2019.119221 | 排料及消费前裁剪废物独立计量 |
| `munasinghe-clothing-lci-2021` | literature | Munasinghe, P.D.; Druckman, A.; Dissanayake, D.G.K. A systematic review of the life cycle inventory of clothing. Journal of Cleaner Production 320 (2021) 128852. https://doi.org/10.1016/j.jclepro.2021.128852 | 完整、一致的服装 LCI 证据及数据缺口披露 |
