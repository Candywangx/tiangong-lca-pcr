---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-wood-cork-bone-hard-rubber-hard-plastics-or-similar-hard-mate-e85d9e11
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 木料软木及硬材料加工机器、木质板压机和木料软木处理机器

## 1. 范围与适用性

本候选规则覆盖以下完整语义类别：实际适用硬材料手工喂料及自动或数控锯刨车铣钻砂光接合打钉订合机器，包含连续及批次多层架构的木或木质板压机，以及实际其他木料软木处理设备，包括浸渍系统。按实际供应主要功能分类，不由单一数控型号或电机型式定义。木料软木骨硬橡胶和硬质塑料均明确保留，木试料不证明其他物料配方。独立林业削片机、塑料成型机和通用干燥机按其自身类别边界评估。集成热处理及混合线须逐项主要功能和交付范围审查。完整CPC3.0标题包括木质板压机及其他木料软木处理机器。来源：`un-cpc-44222`。

HOMAG建立焊接钢龙门数控替代和塑料锯；SCM说明电主轴、夹持、集成真空及集尘接口。这些是示例，不是通用铸造主轴软件抽吸默认值。Dieffenbacher CPS说明连续板压机加热压板油缸辊杆钢带和可选脱模剂设备。Siempelkamp通过驱动现代化说明木质板多层压机架构，而非新压机工厂配方。Scholz供应钢或不锈钢釜、真空压力泵和替代门驱动。Störi说明由机电驱动替代液压的固定打钉机，液压油因此有条件，不对全部打钉机强制。用户树脂防腐剂及板木钉消耗属下游，仅纳入有文件支持工厂试验，不推定随附化学填充。来源：`homag-cnc`；`homag-plastics`；`scm-morbidelli`；`dieffenbacher-cps`；`siempelkamp-daylight`；`scholz-impregnation`；`stori-nailer`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machine-tools-for-working-wood-cork-bone-hard-rubber-hard-plastics-or-similar-hard-mate-e85d9e11 |
| classification_refs | CPC3.0:44222 |
| covered_products | 完整固定式木料软木骨硬橡胶硬质塑料或类似硬质材料加工机器；木或其他木质材料刨花板或建筑纤维板压机；其他木料软木处理机器 |
| excluded_products | 独立供货动力手持工具、零件、金属或矿物冷玻璃机床、塑料橡胶成型硫化设备、林业采伐机、独立输送抽吸及无关通用加热干燥设备；含混集成系统按主要功能分类 |
| representative_product | 同一实际配置的完整验收设备，无代表重量 |
| production_route | 实际机械制造、加工压制处理架构供应、表面处理、传动控制及工厂试验；自制或外购 |
| market_state | 完整验收交付配置，包括实际随附部件及初始保留润滑剂；净质量排除包装及试料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应完整硬材料加工或木质板压制或木软木处理机器，而非用户加工服务 |
| How much | 1 kg 同一配置验收净整机质量 |
| How well | 满足声明物料、机构、安全及实际验收计划 |
| How long or cycle | 一个制造交付期间，无默认寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要功能；工件材料；型号修订；固定手工喂料或数控；锯刨车铣钻砂光接合打钉订合或压制处理架构；压力和加热设计；自制外购；实际安装工具保留填充供应附件；工厂试验媒体；校准净质量和N；场址期间；公用工程接口；废物排放及不确定性 |

限定须在数据包声明；宽类别参考流不建立工厂配方、数量或性能默认值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `physical_basis` | material/water/species | 质量 | kg | 各项采用自身含量、水分、干湿基准、温度密度、库存、反应及返回，总量不是元素量。 |
| `utility_basis` | energy and gases | 交付能量或体积 | MJ; m3 | 电力1 kWh=3.6 MJ；气体保留m3及实际温压或声明标准条件，质量转换采用相应实测密度；热供回各质量乘自身共同零点焓，总已净区别，返回仅扣一次。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | 纳入从收料、场内制造、机械或控制装配、集成、工厂试验或返工、公共服务、废物及包装至验收放行的实际操作。 |  |
| `make_buy` | supplier_interface | 各部件选择实际自制或外购状态：完整外购机架、主轴、压机、压力容器、电机或控制器的嵌入投入计一次；自制改用实际原料及操作。仅计后续场内工作。内部转移成对，不把场内中间品列为外购。 |  |
| `factory_use` | production | 纳入实际工厂负载加工压制处理试验、实际试料、清洗水、电力及消耗润滑剂，回收试料采用实测返回及库存。用户木塑板或防腐木输出及下游工厂运行不是设备制造输出。 |  |
| `bom_extension` | route | 卡片为具体条件性锚点，不是通用配方。审查实际物料清单、配方、试料、包装、燃料、废物和物种。增补每个缺失实际原子交换；仅有不存在证据时记录 not_applicable，未知不同于零。切削表面或处理配方未知须实际供应状态证据。 |  |
| `upstream` | links | 按实际牌号、状态、交付地理或电压及期间链接供应商生产和运输；计量废物转移后的外部处理与场内排放不同。供应商链接未完成时此工厂包不是完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际投入供应牌号、完成状态和交付接口 |
| starting_condition_role | 工厂收料边界 |
| product_classification_scope | 完整固定式木料软木骨硬橡胶硬质塑料或类似硬质材料加工机器；木或其他木质材料刨花板或建筑纤维板压机；其他木料软木处理机器 |
| recursive_input_rule | 同类别外购前体上游计一次，仅展开后续场内操作，内部转移成对抵消 |
| upstream_dataset_requirement | 实际牌号、配方、状态、地理期间和供应商；缺口明确 |
| disclosure | 实际供应清单、自制外购、保留填充及工厂试料、条件不适用、分母及不确定性 |

### 配置与供应状态矩阵

| 配置 | 实际条件接口 | 证据限制 |
| --- | --- | --- |
| 固定硬材料机床 | 实际锯刨车铣钻砂光、切削表面夹持及喂料 | 木塑示例不是骨软木硬橡胶配方，增补实际试料牌号物种 |
| 数控架构 | 实际供应焊接或铸造机架主轴换刀轴驱动夹持真空及防护 | 完整外购模块制造计一次，连接生产单元独立分类各机 |
| 固定打钉订合 | 实际机电或液压驱动料斗头导向及控制 | Stori双执行器示例否定通用液压，消耗试钉另计 |
| 木质板压机 | 实际连续钢带或批次多层机架压板加热油缸辊杆驱动 | 实际全压机模块边界，资料板材配方功率速度不是工厂默认 |
| 木料软木处理 | 实际压力壳闭合真空压力回路储存控制供应范围，其他处理声明 | 无强制随附木防腐剂填充或通用热配方，实际工厂试化学各原子行 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 机架压力部件及机械制造 | conditional | 仅实际场内铸造成形焊接机加工；外购完整部件不重复嵌入制造 | foreground | 每 1 kg 参考流 |
| `finish` | 清洗及防护表面处理 | conditional | 实际清洗涂装固化，核实供应完成状态 | foreground | 每 1 kg 参考流 |
| `integration` | 整机集成 | required | 实际随附机床压机处理打钉架构控制保留填充及附件 | foreground | 每 1 kg 参考流 |
| `test` | 工厂试验及返工 | required | 实际验收计划，空载负载压力安全试验仅实施时，保留归属失败负荷 | foreground | 每 1 kg 参考流 |
| `dispatch` | 包装及验收放行 | required | 完整验收供应配置，包装试料不入净输出 | foreground | 每 1 kg 参考流 |
| `services` | 剩余公用工程及实际场内供能量 | conditional | 仅同期间未分配剩余及实际场内供能量 | foreground | 每 1 kg 参考流 |

### 过程：机架压力部件及机械制造（`fabrication`）

仅实际场内铸造成形焊接机加工；外购完整部件不重复嵌入制造。

#### 输入

##### 产品流

###### 低碳冷轧钢板 （`steel_sheet`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：低碳冷轧钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 进一步加工不锈钢平板材 （`stainless`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际深加工不锈钢平板料及已记录合金；普通冷板或完整总成不同。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 直条热轧钢轴棒 （`steel_bar`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：直条热轧钢轴棒
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 焊接碳钢压力管 （`steel_pipe`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际焊接碳钢管牌号及压力设计规格匹配供料；不是无缝管或完整安装容器。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 铝结构挤压型材 （`aluminium`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际挤压铝型材牌号，不是锭或完整机架。

- 选定流：铝挤压型材 `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 铸铁炉料 （`cast_iron`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：铸铁炉料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硅质铸造砂 （`sand`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：硅质铸造砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 酚醛铸造黏结树脂 （`binder`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际苯酚甲醛树脂供应前体配方匹配实测黏结剂，场内混配时催化剂溶剂另计。

- 选定流：酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 液态金属加工液 （`cutting_fluid`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际液态金属加工配方浓度，不是气雾气体或假定矿物油配方；自身分析水分和库存。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 未涂层钢焊丝 （`weld_wire`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：未涂层钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 气态焊接氩供应 （`argon`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：氩气 `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`fabrication_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送未处理钢生产废料 （`scrap`）

实际钢生产废料按未经处理外送废物转移计量，逐批采用自身金属分析干湿基准期初末库存及成对内部返回。记录实际接收者和处理路线，内部回用金属不是新外购部件，不假定替代产品抵扣。 仅未经处理外送钢生产废料，须匹配实际分析水分库存接收者，不是空气基本交换。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废酚醛铸造砂 （`sand_waste`）

仅实际废酚醛铸造砂作为一项废物流离厂，称量砂及自身黏结剂金属污染和水分，核对库存及成对内部再生砂。记录实际外部接收者回收或处置，不合并其他废铸型介质或声称回收抵扣。

- 选定流：废酚醛铸造砂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：清洗及防护表面处理（`finish`）

实际清洗涂装固化，核实供应完成状态。

#### 输入

##### 产品流

###### 干聚合物粉末涂料配方 （`powder`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际干聚合物粉配方、自身树脂添加剂牌号回收固化，无默认聚合物类型。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 异丙醇 （`ipa`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工艺用水 （`water`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`finish_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业清洗废水 （`wastewater`）

仅实际工业清洗废水作为技术圈废物转移送外部处理接收者，测自身实物质量或匹配体积密度、水分及溶解悬浮负荷、槽液库存和成对返回。向环境介质直接实测排放是独立基本交换，捕集污染物及不明差额均不转为空气排放。

- 选定流：工业清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 粉末涂装污泥 （`sludge`）

仅实际粉末涂装实物污泥转移至有文件接收者，逐流按自身水分干湿基准称量涂料固体污染物库存及成对内部返回。回收粉和废滤材是独立实际物流，记录处理及危险属性，无默认处置或替代产品抵扣。

- 选定流：粉末涂装污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：整机集成（`integration`）

实际随附机床压机处理打钉架构控制保留填充及附件。

#### 输入

##### 产品流

###### 铸铁机床机架成品 （`frame`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：铸铁机床机架成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：homag-cnc

###### 完整加工电主轴 （`spindle`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整加工电主轴
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：scm-morbidelli; homag-cnc

###### 安装硬质合金齿圆锯片 （`saw`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：安装硬质合金齿圆锯片
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 安装高速钢刨刀 （`cutter`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：安装高速钢刨刀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 硫化橡胶传动带 （`belt`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际完成硫化橡胶动力传动带，不是未硫化带皮带或运输服务。

- 选定流：硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 滚珠轴承成品 （`bearing`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际独立供应滚珠滚柱轴承及匹配子型，不是风轮变桨轴承。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完整工业感应电机 （`motor`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整工业感应电机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完整伺服驱动器 （`servo`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整伺服驱动器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 完整滚珠丝杠总成 （`screw`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整滚珠丝杠总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stori-nailer

###### 完整设备真空泵 （`pump`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际随附完整真空泵及匹配机构供应范围，独立空压机不是代理。

- 选定流：空气泵或真空泵，空气或其他气体压缩机 `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：scholz-impregnation; scm-morbidelli

###### 完整液压机油缸 （`cylinder`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整液压机油缸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dieffenbacher-cps

###### 钢制加热压板成品 （`platen`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：钢制加热压板成品
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dieffenbacher-cps

###### 完整连续压机钢带 （`press_belt`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整连续压机钢带
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：dieffenbacher-cps

###### 完整木材处理压力容器 （`vessel`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整木材处理压力容器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：scholz-impregnation

###### 完整固定式打钉头总成 （`nailer`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：完整固定式打钉头总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stori-nailer

###### 可编程工业控制器 （`plc`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际供工业PLC硬件及匹配电压接口完成状态，不是软件服务或裸板。

- 选定流：可编程逻辑控制器 `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 绝缘铜电力线缆 （`cable`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：绝缘铜电力线缆
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 压力传感器 （`sensor`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：压力传感器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 三元乙丙密封垫 （`seal`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：三元乙丙密封垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 矿物润滑油 （`oil`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 保留初始填充液压油 （`hydraulic`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际匹配保留液压基础油添加剂配方，原生m3采用实测温度；质量采集用该流自身实测密度。预填充模块不重复领用，机电打钉机不推定填充。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：

###### 润滑脂 （`grease`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。

- 选定流：润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`integration_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：工厂试验及返工（`test`）

实际验收计划，空载负载压力安全试验仅实施时，保留归属失败负荷。

#### 输入

##### 产品流

###### 工厂试验锯材针叶木 （`timber`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。 仅实际锯木厂大门绿色针叶锯材厚度>6mm及实际树种水分牌号；干材用其他身份。

- 选定流：绿色锯材 `f15bb061-fd78-47b3-9fc2-216d58b7f9fb`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验PMMA硬质板 （`plastic`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。

- 选定流：工厂试验PMMA硬质板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：homag-plastics

###### 工厂试验聚结软木 （`cork`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。

- 选定流：工厂试验聚结软木
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验刨花板 （`board_test`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。 仅实际匹配供板木质刨花板牌号配方，数量仅工厂试验；其他板或用户压机料坯分原子行。

- 选定流：刨花板 `4f19ca17-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验钢钉 （`nails`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。 仅实际成品钢钉及记录子型牌号，不由螺钉螺栓订替代；试消耗不入Dnet。

- 选定流：钢紧固件 `691b2092-38f6-4125-bfb4-cab3d86af41f`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：stori-nailer

###### 水压试验自来水 （`tap_water`）

仅实际执行工厂合格试验，计量自身牌号水分配方、投用返回库存。试验木材塑料软木板钉水消耗不入设备输出净质量。骨硬橡胶及其他实际试料分别增补原子行，不由木材替代。用户加工配方和使用负荷属下游。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验压缩空气 （`compressed_air`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：

###### 交付交流电 （`test_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

###### 工厂压机试验木颗粒 （`wood_particles`）

仅实际执行工厂负载压机试验及规定料坯供应配方或热接口。颗粒纤维实测树脂固体水及其他实际成分分列，成品试板不替代松散料坯。脲醛仅实际使用，不作通用板树脂。用户制板及树脂供应属下游。外购热仅匹配实际供应者地理接口，供应者锅炉燃料不是虚构场内燃烧。 仅实际供松散木片颗粒且记录树种粒级水分及堆积体积基准，质量换算用自身堆积密度温度水分，不是成品板或树脂涂覆料坯。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_volume。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_volume`
- 来源：

###### 工厂压机试验木纤维 （`wood_fibre`）

仅实际执行工厂负载压机试验及规定料坯供应配方或热接口。颗粒纤维实测树脂固体水及其他实际成分分列，成品试板不替代松散料坯。脲醛仅实际使用，不作通用板树脂。用户制板及树脂供应属下游。外购热仅匹配实际供应者地理接口，供应者锅炉燃料不是虚构场内燃烧。

- 选定流：工厂压机试验木纤维
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂压机试验脲醛树脂 （`uf_resin`）

仅实际执行工厂负载压机试验及规定料坯供应配方或热接口。颗粒纤维实测树脂固体水及其他实际成分分列，成品试板不替代松散料坯。脲醛仅实际使用，不作通用板树脂。用户制板及树脂供应属下游。外购热仅匹配实际供应者地理接口，供应者锅炉燃料不是虚构场内燃烧。

- 选定流：工厂压机试验脲醛树脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 工厂试验外购天然气工业供热 （`heat`）

仅实际执行工厂负载压机试验及规定料坯供应配方或热接口。颗粒纤维实测树脂固体水及其他实际成分分列，成品试板不替代松散料坯。脲醛仅实际使用，不作通用板树脂。用户制板及树脂供应属下游。外购热仅匹配实际供应者地理接口，供应者锅炉燃料不是虚构场内燃烧。 仅实际匹配中国天然气工业供热交付能量接口，供应者须匹配实际工厂试验交付。须自身计量总净返回及供应状态，供应者燃料在上游。

- 选定流：区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂试验木边角料 （`wood_waste`）

仅实际执行工厂设备试验的松散木边角料作为废物离界，称量自身树种牌号水分污染物及库存变化。返回试木或内部回用边料成对抵消，不是额外外送废物。聚结燃料块是不同供应状态，记录实际接收路线，不推定抵扣。

- 选定流：工厂试验木边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 工厂试验PMMA边角料 （`plastic_waste`）

仅实际执行工厂设备试验产生的PMMA边角料作为一项化学身份明确废物转移离界，称量自身聚合物添加剂水分污染库存及成对返回。回收内部试件不是外送废物，PP或PVC或混合污染塑料须独立身份和实际接收路线，无假定替代抵扣。

- 选定流：工厂试验PMMA边角料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油 （`oil_waste`）

仅实际使用污染矿物润滑油作为一项废物转移离厂，测自身总质量油水比例污染分析期初末库存及成对内部回收返回。随附保留填充和未用返回为不同状态，链接实际接收者处理，不预设再生燃烧处置或替代产品抵扣。 仅实际使用污染矿物润滑油废物转移质量，测自身含水污染及接收处理，无处置回收默认。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：包装及验收放行（`dispatch`）

完整验收供应配置，包装试料不入净输出。

#### 输入

##### 产品流

###### 发运瓦楞纸板 （`cardboard`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 实际C/E/F瓦楞纸板纤维≥80%含再生料且记录实际比例，不用于全部成品纸箱。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### LDPE包装薄膜 （`film`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际非泡沫非自粘未增强未复合无衬底PE-LD薄膜；其他聚合物或衬底膜单独确认。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 木制EURO托盘 （`pallet`）

条件性实际规定供应牌号或部件，记录组成、完成状态及自制外购。完整外购投入嵌入制造计一次，自制改用实际原子材料和操作。安装工具填充或附件仅随附时纳入，散装备件及消耗分离。 仅实际欧标木托盘，记录领用返回回用，无默认周转次数。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material`
- 来源：

###### 交付交流电 （`dispatch_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 木软木硬材料加工及板材压制机器 （`reference_product`）

选定完整验收配置包括实际保留填充及附件，排除包装和废品。

- 选定流：木料、软木、骨、硬橡胶、硬质塑料或类似硬质材料加工用机械，制造木质或其他木制碎料板或建筑用纤维板的压力机，以及处理木料或软木的机械 `740d919d-5380-4e2e-b5aa-c374314b9743`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_mass`
- 来源：un-cpc-44222

##### 废物流

##### 基本流

### 过程：剩余公用工程及实际场内供能量（`services`）

仅同期间未分配剩余及实际场内供能量。

#### 输入

##### 产品流

###### 交付交流电 （`services_electricity`）

实际分配子过程负荷，剩余服务仅子过程扣除后同期间进口、实际场内供能量、出口和储能衡算未分配部分。中国中压身份仅实际对应用户接口。 仅实际匹配组成供应状态地理交付接口和供应者，保持核实原生数量及实际换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：交付能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 未指定空气化石源二氧化碳 （`co2`）

仅独立测量实际物种及空气介质治理后排放，采用匹配浓度、气流、报告状态及采样期间，另有独立建立逸散。归属实际源一次，捕集尘是废物而非空气排放，未测差额不是释放。 仅实际匹配组成状态地理接口；普通未指定空气物种须实测来源介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气化石源一氧化碳 （`co`）

仅独立测量实际物种及空气介质治理后排放，采用匹配浓度、气流、报告状态及采样期间，另有独立建立逸散。归属实际源一次，捕集尘是废物而非空气排放，未测差额不是释放。 仅实际匹配组成状态地理接口；普通未指定空气物种须实测来源介质。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气水蒸气 （`vapour`）

仅独立测量实际物种及空气介质治理后排放，采用匹配浓度、气流、报告状态及采样期间，另有独立建立逸散。归属实际源一次，捕集尘是废物而非空气排放，未测差额不是释放。 仅实际匹配组成状态地理接口；普通未指定空气物种须实测来源介质。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气异丙醇 （`ipa_air`）

仅独立测量实际物种及空气介质治理后排放，采用匹配浓度、气流、报告状态及采样期间，另有独立建立逸散。归属实际源一次，捕集尘是废物而非空气排放，未测差额不是释放。 仅实际匹配组成状态地理接口；普通未指定空气物种须实测来源介质。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

###### 未指定空气PM10颗粒物 （`dust`）

仅独立测量实际物种及空气介质治理后排放，采用匹配浓度、气流、报告状态及采样期间，另有独立建立逸散。归属实际源一次，捕集尘是废物而非空气排放，未测差额不是释放。 仅实际匹配组成状态地理接口；普通未指定空气物种须实测来源介质。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `causal` | site | 优先分离配置及子过程；按实测因果负荷、运行时间或适当物理驱动分配公共剩余，保留分子分母记录及不确定性。不得平均无关型号，也不得对全部公用工程自动按整机质量分配。 |  |
| `rejects` | accepted | 在合格输出归属 Q 中纳入实际废品、返工及合格试验负荷；分母仅含验收净质量或数量。分离回收转移及处理，不假定替代产品抵扣或再生上游零负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收批次 | 同一制造期间 | 同一配置工厂 | 每台验收净质量 | 校准、皮重、配套附件及验收记录 |
| cp_material | all | actual inputs | meter_issue | 具体物种牌号；供应状态；投料；各项水分密度或含量；自制外购；库存；Q；N | 同一期间按独立交换核对计量及仓储、配方和成对返回；Q 含废品或返工负荷，保留各项自身分析。 | kg | 每批或连续表 | 同一制造期间 | 同一配置工厂及供应商 | 分配数量 / 验收设备数量 | 牌号或成分检验、计量及库存 |
| cp_energy | all | electricity and heat | meter | 各过程表；总进口；实际场内供能量（含发电量）；出口；储能；供回蒸汽各质量温压焓；已净发票；Q；N | 核对同一期间和单位的各过程表，共享服务仅尚未分配剩余；调查负剩余。供应或返回蒸汽各用自身 kg 和 MJ/kg，共同零点，返回仅扣一次。 | MJ | 连续表及各试验 | 同一制造期间 | 同一配置及场址 | 分配能量 / 验收设备数量 | 校准表、供电接口、热力及分配不确定性 |
| cp_waste | all | specific waste | transfer | 各物流质量和自身含水或含量；期初末库存；内部返回；外送处理；Q；N | 称重、取样及处理转移，区分返回再用、回收及处置，不能推定替代抵扣。 | kg | 每批转移 | 同一制造期间 | 同一配置场址及处理接口 | 分配废物 / 验收设备数量 | 废物联单、取样及库存 |
| cp_emission | all | specific species/compartment | species_measurement | 实际物种介质；浓度；排气或液流；水分温压基准；捕集或销毁；各项分析；Q；N | 采用匹配物种及介质实测或核实实际技术因子；调查闭合，捕集不是销毁，差额不是空气排放。 | kg | 实际试验及排放期间 | 同一制造期间 | 同一配置场址边界 | 分配排放 / 验收设备数量 | 采样流量和综合不确定性 |
| cp_volume | all | specific supplied gas/fluid/bulk woodchips | meter | 气液或堆积木片身份；交付体积；实际温压或标准条件；密度；Q；N | 按实际状态计量原生体积：气体温压液体温度或记录木片堆积水分基准，质量换算用该实际流自身实测密度，不用通用因子。 | m3 | 每批或连续表 | 同一制造期间 | 同一配置及供应接口 | 分配体积 / 验收设备数量 | 温压流量密度及校准 |

原始期间协议：N 为同一配置验收设备数，D 为该批校准验收净质量之和，M=D/N。每项 Q 为同期间归属数量，含废品、返工和工厂试验负荷；先 q_item=Q/N，再 q_ref=Q/D。包装及废品质量不入 D，保留实际各项原单位和各项成分、库存及反应记录。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | 覆盖实际全部交换，自制外购及附件、填充、试料分离；缺口明确 | 实际 BOM、路线及供应商 |
| mass_period | cohort | 同一配置期间和验收记录、校准质量及库存；不跨家族均值 | 校准及期间台账 |
| balance_uncertainty | physical balances | 按各项自身水分、密度、含量、反应及成对返回核对，与综合不确定性比较 | 实测、采样、反应及分配证据 |
| cohort_raw | cohort | Naccepted、Dnet与Qattr对应同一配置期间。Dnet为校准合格净质量之和；M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Qattr包含废品返工和工厂试验，Dnet排除包装废品及消耗试料。保留每项原单位。 | 校准及实际期间台账 |
| species_sampling | emissions | 治理后物种浓度乘匹配同期间气液流量及持续时间，校正温压干湿与单位；逸散独立实测。未知差额不成为空气释放，捕集不是销毁；每项金属化学或水流采用自身含量水分密度库存反应及成对返回。 | 实际浓度、流量、时段及状态记录 |
| contained_assay | physical balances | 各输入产品废料污泥液体或释放均用自身实测总质量乘自身含量分析及干湿基准；总合金或污泥不是所含金属。水各流用自身水分比例及实际温度密度，包含产品保留、反应、蒸发、排水及期初末库存，内部返回成对抵消。 | 各项实测化验含水及库存 |
| solvent_fates | solvent records | 回收返回、产品保留、捕集液体或滤材、已证实销毁及废水或介质分别记录；回收保留捕集及废水为非空气去向，捕集不是销毁。未知差额须调查，不能转成空气释放。 | 实际物料采样及治理记录 |
| utility_residual | energy | 同期间核对进口加实际场内供能量（含发电量）减出口及储能变化与机械制造表面处理集成试验发运负荷；公用行仅未分配余量。负余量调查期间单位及综合不确定性，不截零。 | 校准分表及总表 |
| heat_return | thermal interface | 总供热为实测供应kg乘自身MJ/kg减独立实测返回kg乘返回自身MJ/kg，采用共同零点及实测温压；总供应返回仅扣一次，已净计费不再次扣。物理蒸汽或冷凝水质量与热能分开，供应者锅炉燃料不是场内燃烧。 | 供应返回各计量热力状态及发票 |
| cohort | all inventory rows | 共同期间同一配置Qattr含归属废品返工试验；Naccepted仅验收整机数量，Dnet为校准验收净质量总和，包括实际随附安装工具保留填充附件，不含包装废品耗用试料。M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet；保留每种分子原生单位与明确换算，不平均不同配置。 | 校准净质量、供应清单、验收及批次原始期间记录 |
| provider_gaps | links | 每个实际上游和处理匹配状态地理期间；未核实不可作为完整足迹 | 直接记录及替代披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | 确认主要功能、固定硬材料加工或板材压制或木处理功能、型号或修订、交付配置及激活架构。每个实际交换须匹配身份、属性、单位及供应商；不存在、零及未知保持不同。 |  |
| `denominator` | all inventory rows | 全部清单采用同一验收批次及共同期间。核实校准验收净质量和 N，废品及包装质量排除。核对 q_item=Q/N 后按同一平均 M 归一化；混合配置无效。 |  |
| `double_count` | make_buy | 核对完整外购模块与自制材料及操作、保留填充或附件与工厂消耗、成对内部转移与外部投入。每项实际负荷计一次。 |  |
| `water_close` | physical water records | 每项采用自身实测水比例、密度及干湿基准：新水及输入水分、反应水和期初库存减期末库存、产品保留、排水和蒸发；内部返回成对抵消。按采样、仪表及分配综合不确定性调查实测闭合，无通用容差。 |  |
| `species_close` | material and chemical records | 每种含金属或化学物分别闭合，采用各输入、产品、废料、污泥、液体及释放自身匹配分析和干湿基准、反应计量及库存。总质量不是含元素量。不得将全部清单质量规则用于能量或运输。 |  |
| `solvent_close` | solvent records | 区分保留溶剂、回收返回、捕集液体或介质、已证实销毁、废水或非空气剩余及实际空气物种释放。捕集不是销毁；不明差额应调查，不分配至空气。 |  |
| `utility_close` | energy records | 按同一期间及单位核对外购进口、实际场内供能量（含发电量）、出口及储能变化和已分配机械制造、表面处理、集成、试验或包装负荷。共享行仅未分配剩余；按期间、单位及综合计量不确定性调查负剩余，不截零。 |  |
| `steam_close` | steam and condensate | 相对于共同零点，按计量压力或温度采用供应质量乘供应自身 MJ/kg 和返回质量乘返回自身 MJ/kg。总供应只扣返回一次；已净发票不得再扣。物理蒸汽或冷凝水质量衡算独立于能量。 |  |
| `species_emissions` | air releases | 独立校验每种排放物及环境介质。燃料碳衡算不能单独确立 CO 或 NOx。NO2 质量不是以 NO2 当量报告的 NOx；报告约定与实际物种身份保持不同。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 实际配置工厂生产前景数据及明确已完成上游链接的模型 |
| excluded_use | 跨家族功能等价、默认用户加工服务、默认重量或制造因子、缺失供应商的完整足迹 |
| required_metadata | 第3节限定及原始期间分母、实际架构、自制外购和边界 |
| required_quality_disclosure | 采集覆盖、供应商或身份或配方缺口、分配和综合不确定性、全部条件及排除 |
| update_trigger | 型号或架构、配方、供应状态或地区、计量、工厂试验或处理路线改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| homag-cnc | handbook | CNC machining centers; publication date unconfirmed; original snapshot 2026-10-02; https://www.homag.com/en/machines/cnc-machining-centers | 产品架构或类别边界；非工厂配方或数量默认值 |
| homag-plastics | handbook | HOMAG saws for plastics Complete solutions; 08/2019 E; part4-099-70-0122; https://www.homag.com/fileadmin/product/paneldividing/brochures/plastics/panel-dividing-saw-plastics-en.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| dieffenbacher-cps | handbook | CPS+ continuous press; publication date unconfirmed; original snapshot 2026-10-02; https://dieffenbacher.com/wood-based-panels/products/press-systems/cps-continuous-press | 产品架构或类别边界；非工厂配方或数量默认值 |
| scholz-impregnation | handbook | Wood impregnating autoclaves; publication date unconfirmed; original snapshot 2026-10-02; https://www.scholz-autoclaves.com/en/systems/wood-impregnating-autoclaves | 产品架构或类别边界；非工厂配方或数量默认值 |
| stori-nailer | handbook | Nailing machine SMPA500.2ED; publication date unconfirmed; original snapshot 2026-10-02; https://www.stoerimantel.com/files/nailing-machine-smpa-500-2-ed-brochure.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| siempelkamp-daylight | handbook | Multi-daylight presses; publication date unconfirmed; original snapshot 2026-10-02; https://www.sls-siempelkamp.com/en/modernization/product-overview/multi-daylight-presses/ | 产品架构或类别边界；非工厂配方或数量默认值 |
| scm-morbidelli | handbook | Morbidelli m100/m200; REV.N.01 04.2018; https://www.scmgroup.com/products/docs/morbidelli_m100-m200_apr18_ING.pdf | 产品架构或类别边界；非工厂配方或数量默认值 |
| un-cpc-44222 | official_guidance | Central Product Classification Version3.0; 30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 产品架构或类别边界；非工厂配方或数量默认值 |
