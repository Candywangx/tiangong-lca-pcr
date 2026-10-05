---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.electric-motorcycle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配置电池电动道路摩托车制造

## 1. 范围与适用性

本PCR覆盖以声明完整部件入口为起点的完整电池电动两轮道路摩托车最终制造集成，包括踏板式摩托车。代表结构为钢管车架皮带减速传动永磁电机锂离子牵引包车载充电器液压制动。排除助力脚踏自行车边车内燃混动摩托三轮车辆单独电池电机充电设施不完整套件。其他结构化学须明确支持路线。

制造单元止于配置工厂验收。客户骑行车辆公里乘员运输使用充电维护报废在范围外。这是集成前景，不是完整摇篮到大门清单。历史BMW示例记录总装及本地电机电池包作业：声明完整模块入口抽象此前作业，绝不证明BMW整厂外包这些作业。更广声明前须链接实际上游部件工序，包括本地前阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.electric-motorcycle |
| classification_refs | CPC 3.0:49913; narrower |
| covered_products | 声明部件入口结构完整配置电池电动两轮道路摩托车 |
| excluded_products | 助力自行车；边车；内燃混动三轮车辆；独立零件；充电设备；骑行修理服务 |
| representative_product | 钢车架皮带减速传动液冷电机踏板式道路摩托车；历史CE04结构示例，不是默认配方 |
| production_route | 成品部件收货；底盘装配；驱动电气车身集成；可选加液清洗；实际调试净质量放行；可选包装 |
| market_state | 新完整验收摩托车，声明已装包余留液 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整配置电池电动摩托车验收制造 |
| How much | 1 kg |
| How well | 声明型号安装电池设备及实际签认装配验收依据；不推定骑行性能等同 |
| How long or cycle | 一个制造期间；不假设使用寿命里程电池循环 |
| reference_flow_link | finished_motorcycle |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 摩托及装有辅助马达的脚踏车，装有 往复式活塞内燃机者除外，挎斗三轮摩托车 `26a257ab-4c71-475b-9059-73b4689fe8c8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号序号；两轮道路配置；部件入口自制外购；车架驱动制动；电机逆变器；完整已装包化学电压容纳结构实测kg；辅助设备充电器；预充余留液；完整净M kg；工厂试验；场址期间；供货附件包装排除 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `physical_component_mass` | component rows | Mass | kg | 采集独立实际供货安装部件kg原始重皮重已含件数追溯。不用额定电池kWh功率目录整车重作kg。匹配身份及实际换算合法时保留公开数量能量，不改写质量。 |
| `electricity_units` | electricity rows | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在声明供电接口实测kWh，按1kWh=3.6MJ换算。分别保留进口外送及充电表计边界。 |
| `fluid_state` | fluid rows | Mass | kg | 湿供货配方质量实际浓度余留净加注；预充模块仅计一次。体积须实测批密度温度，不假设水密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 文件化入口完整供货底盘动力电池电气车身部件；实际独立收货液体公用事业 |
| starting_condition_role | 集成前景；入口前材料生产焊接涂覆电机电芯电池包制造抽象上游，即使在本场址 |
| product_classification_scope | CPC3.0:49913 narrower complete battery-electric two-wheel road motorcycle |
| recursive_input_rule | 同类别外购完整摩托车保留为独立声明作业的一种可见投入，不递归重复其制造或藏为零件 |
| upstream_dataset_requirement | 每实际部件化学电力包装及接收运输服务匹配实际技术地区时间，否则披露具体缺口 |
| disclosure | 模块已含预充；本地抽象阶段；实际试验返工待机；缺少清单链接；包装返还回收去向 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | all_processes | 记录实际收货成品模块范围顺序工序。不同时计成品车架及其钢涂层上游或成品电池及其电芯电解液。供货范围外才计独立收货。完整声明前本地制造模块展开实际原子工序。 | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |
| `boundary_terminal` | finished_motorcycle | 止于验收配置整车工厂大门；外部充电器客户使用维护寿命报废骑行距离排除。制造1kg不经独立功能模型不比较运输服务。 |  |
| `boundary_exchanges` | all_processes | 完整清单声明前将每缺少物理清单件实际公用事业包装观察废物释放增加独立卡。无通用零件材料VOC废物交换或推定必然排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chassis` | 底盘行走制动装配 | required | 收货成品车架前叉摇臂车轮轮胎制动 | foreground | 1 kg验收完整配置摩托车 |
| `powertrain` | 电动力总成机械集成 | required | 收货成品电机逆变器减速箱皮带冷却散热器 | foreground | 1 kg验收完整配置摩托车 |
| `electrical` | 牵引包车载电气集成 | required | 完整供货包匹配线束车载充电器控制 | foreground | 1 kg验收完整配置摩托车 |
| `finishing` | 车身座椅车灯仪表安装 | required | 实际已装成品车身设备；展开完整型号清单 | foreground | 1 kg验收完整配置摩托车 |
| `fluids` | 可选独立液体加注检漏 | conditional | 实际独立供货冷却制动液，排除预充模块已含 | foreground | 1 kg验收完整配置摩托车 |
| `acceptance` | 配置调试试验净质量验收 | required | 实际批准试验充电器输入完整物理称重配置 | final_product | 1 kg验收完整配置摩托车 |
| `cleaning` | 可选最终IPA清洗 | conditional | 仅实际批准执行异丙醇清洗 | foreground | 1 kg验收完整配置摩托车 |
| `packing` | 可选发运包装 | conditional | 仅实际独立供货发运包装 | foreground | 1 kg验收完整配置摩托车 |

### 过程：底盘行走制动装配 (`chassis`)

#### 输入

##### 产品流

###### 成品涂覆钢管摩托车主车架 (`frame`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品涂覆钢管摩托车主车架
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整伸缩式摩托车前叉 (`front_fork`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整伸缩式摩托车前叉
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整单侧摩托车后摇臂 (`swingarm`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整单侧摩托车后摇臂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车后弹簧减振支柱 (`rear_strut`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车后弹簧减振支柱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品摩托车前铸造合金车轮 (`front_wheel`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品摩托车前铸造合金车轮
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品摩托车后铸造合金车轮 (`rear_wheel`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品摩托车后铸造合金车轮
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品充气摩托车前轮胎 (`front_tyre`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品充气摩托车前轮胎
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品充气摩托车后轮胎 (`rear_tyre`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品充气摩托车后轮胎
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车前液压盘式制动总成 (`front_brake`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车前液压盘式制动总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车后液压盘式制动总成 (`rear_brake`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车后液压盘式制动总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 一种声明等级成品钢装配螺栓 (`steel_bolt`)

记录本配置独立供货一种证实钢螺栓设计实测kg安装件数。不同设计等级分开，排除供货总成已含螺栓；一般紧固件公开身份不提供默认质量道路符合批准。

- 选定流： 钢紧固件 `cad280ce-7850-46a1-9060-4f8b68bf5532`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 用户端低压交流工厂电力 (`electricity_chassis`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：电动力总成机械集成 (`powertrain`)

#### 输入

##### 产品流

###### 完整液冷永磁摩托车牵引电机 (`motor`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整液冷永磁摩托车牵引电机
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整带壳摩托车牵引逆变器 (`inverter`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整带壳摩托车牵引逆变器
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整单级摩托车减速齿轮箱 (`gearbox`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整单级摩托车减速齿轮箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品齿形摩托车传动带 (`drive_belt`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品齿形摩托车传动带
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车电机冷却散热器 (`radiator`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车电机冷却散热器
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 用户端低压交流工厂电力 (`electricity_powertrain`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：牵引包车载电气集成 (`electrical`)

#### 输入

##### 产品流

###### 完整带壳锂离子摩托车牵引电池包 (`battery_pack`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整带壳锂离子摩托车牵引电池包
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整供货低压摩托车辅助电池 (`aux_battery`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整供货低压摩托车辅助电池
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整成品摩托车高压线束 (`harness`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整成品摩托车高压线束
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车车载电池充电器 (`charger`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车车载电池充电器
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车高压转低压直流变换器 (`converter`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车高压转低压直流变换器
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车液压ABS控制模块 (`abs_controller`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车液压ABS控制模块
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 用户端低压交流工厂电力 (`electricity_electrical`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 待处置不可修完整锂离子摩托车牵引电池包 (`rejected_pack`)

仅实际不可修工厂拒收外运明确接收方，记化学已含容纳结构余电序号实测净kg。可修返供方使用期废包为不同边界，无默认拒收比例回收信用。

- 选定流： 待处置不可修完整锂离子摩托车牵引电池包
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_waste`
- 来源：

##### 基本流

### 过程：车身座椅车灯仪表安装 (`finishing`)

#### 输入

##### 产品流

###### 完整摩托车LED前照灯 (`headlamp`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车LED前照灯
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整摩托车仪表显示器 (`display`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整摩托车仪表显示器
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 完整软包摩托车座椅 (`seat`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 完整软包摩托车座椅
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 成品摩托车前车身面板 (`body_panel`)

一种所述设计成品物理总成跨越声明模块入口，独立测量供货安装净kg并记图样序号批次实际材料化学件数供货已含。排除其他卡独立供货件。前叉支柱包括供货内部润滑剂，制动总成仅包括实际供货盘钳管安装件并记预充状态。电机排除独立收货逆变器齿轮箱散热器；电池包含电芯电解液壳内部保护仅一次。本地制造组件须实际坯料工序清单，不同时计完整组件收货。

- 选定流： 成品摩托车前车身面板
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_parts`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 用户端低压交流工厂电力 (`electricity_finishing`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：可选独立液体加注检漏 (`fluids`)

#### 输入

##### 产品流

###### 供货含缓蚀剂水基乙二醇电机冷却液 (`coolant`)

仅计实际独立收货证实电机回路冷却液，称量供货混合物kg并记乙二醇水添加剂浓度加注退回溢出余留质量。示例电池风冷，电机冷却液不自动是电池冷却液。模块预充液仅计模块收货一次，不另计加注。其他实际冷却液配方须另具名卡。

- 选定流： 供货含缓蚀剂水基乙二醇电机冷却液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_stock`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 供货乙二醇醚液压制动液配方 (`brake_fluid`)

仅实际独立加注一种批准乙二醇醚配方纳入，保留SDS规范实测净加注kg湿化学排气回收余留kg。实际批准液不同不强制本化学。供货预充液压模块质量核对不重复加注，不从制动液投入假定空气排放。

- 选定流： 供货乙二醇醚液压制动液配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_stock`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

###### 用户端低压交流工厂电力 (`electricity_fluids`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集已用水基乙二醇电机冷却液 (`spent_coolant`)

仅实际污染排放排气冷却液外运至明确接收方，测量湿净kg分析乙二醇水污染物。内部再用保留工序内不是废物外运，不编造损失更换率。

- 选定流： 收集已用水基乙二醇电机冷却液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_waste`
- 来源：

##### 基本流

### 过程：配置调试试验净质量验收 (`acceptance`)

#### 输入

##### 产品流

###### 用户端低压交流工厂电力 (`electricity_acceptance`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收完整电池电动道路摩托车 (`finished_motorcycle`)

声明结构完整验收两轮道路摩托车，包括一个已装牵引电池车载电机逆变器充电器底盘车身实际余留液仅一次。声明辅助电池永久供货附件。排除骑员行李外部充电器散装备电池电缆工装运输包装。宽泛公开49913身份由本限定收窄，不提供实测重使用性能。

- 选定流： 摩托及装有辅助马达的脚踏车，装有 往复式活塞内燃机者除外，挎斗三轮摩托车 `26a257ab-4c71-475b-9059-73b4689fe8c8`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： 固定值（`fixed_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 身份引用（`identity_reference`）
- 采集协议： `cp_mass`
- 来源： bmw-ce04-architecture-2021; bmw-ce04-production-2021

##### 废物流

##### 基本流

### 过程：可选最终IPA清洗 (`cleaning`)

#### 输入

##### 产品流

###### 用户端低压交流工厂电力 (`electricity_cleaning`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

###### 液态异丙醇最终清洗配方 (`ipa_cleaner`)

仅实际批准执行使用一种文件化CAS67-63-0产品清洗时纳入，记录纯度水浓度实际领用回收余留残余kg。并非每电动摩托车必须清洗，溶剂不自动全部蒸发。

- 选定流： 液态异丙醇最终清洗配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_stock`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 收集已用异丙醇清洗溶液 (`spent_ipa`)

实际外运收集含IPA清洗液，净湿kg及水IPA污染物分析接收依据；区分回收液擦拭物大气残余释放。

- 选定流： 收集已用异丙醇清洗溶液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 即时异丙醇向未指定室外空气释放 (`ipa_air`)

仅实际物质特异控制后残余CAS67-63-0向未指定空气释放纳入。采用实测浓度流量时长或解析回收残留余留文件化闭合溶剂平衡。保留检出限不确定性，区分无作业未测低于检出。拒绝正丙醇氯丙醇室内空气土壤长期释放，无通用VOC假定全蒸发。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_emission`
- 来源：

### 过程：可选发运包装 (`packing`)

#### 输入

##### 产品流

###### 用户端低压交流工厂电力 (`electricity_packing`)

用户侧表计测量归属阶段设备调试待机返工电力。保留实际地区电压供货接口；当前德国35–330kV公开电网身份不是低压工厂供电。可再生采购不因电压同而等于电网平均。链接前须核验相符实际供货身份。计交流充电器输入仅一次，额定包容量回收试验能量不是重复制造产品投入。

- 选定流： 用户端低压交流工厂电力
- 流属性/单位： Energy `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_energy`
- 来源：

###### 成品瓦楞纸板摩托车运输箱 (`shipping_box`)

仅实际独立供货瓦楞箱测量空箱净kg，排除整车M。实际木托带膜缓冲各须自身具名卡；入厂可复用架不假定一次性出厂包装。

- 选定流： 成品瓦楞纸板摩托车运输箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： 采集计算（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 根据采集计算（`calculated_from_collection`）
- 采集协议： `cp_stock`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | all_processes | 先细分型号工单表计工序，可追溯时直接归属实际材料试验能量。返工拒收负担随验收产出，不从期间分子丢弃失败车辆。 |  |
| `allocation_shared` | shared operations | 无法细分时按当前前景实测支持的实际因果机时计量循环或文件化占用线时归属对应阶段。声明公式驱动总量余下共享负荷，比较另一可辩护驱动。不仅按假设目录重分配不同电池型号。 |  |
| `allocation_waste` | waste and returns | 跟踪实际库存返还内部回收外运接收状态。废物外运不是摩托车联产品。不设避免生产信用任意回收料替代未观察废料产率；独立回收模型须声明实际接收路线分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | complete motorcycle | 校准物理净称重 | 型号；配置；序号；验收净质量 M；秤皮重；已装电池液体状态 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每验收整车配置 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 每台验收净质量 | 原始秤读数校准皮重签认完整状态 |
| `cp_parts` | all_processes | single finished assembly | 供货图样组件称重 | 一种件设计序号材料化学；收货退回安装拒收净kg；实际供货安装重量；件数；预充已含硬件；验收数 | 校准秤或可追溯原始同批重量独立称量实际供货安装总成；件数仅追溯。独立于整车M核验安装包kg及模块已含。投入分子保留实际收货减返供方，含消耗拒收返工件，独立于安装kg；核对去向归属验收产出。不从容量功率零件质量份额推算kg。 | kg | 每批工单配置 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 应归属实际组件kg / 同一配置的验收设备数 | 签认图样已含证书独立重量件数核对 |
| `cp_stock` | all_processes | single chemical or packaging product | 实际领用退回加注记录 | 一种配方SDS浓度或箱设计；实际净供货领用退回余留kg；加注溢出；预充；验收数 | 校准称重测量实际净库存，减记退回并分余留收集释放去向。保留湿组分，仅原体积需kg转换时用实测批密度温度。避免预充重复。 | kg | 每领用加注批 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 应归属实际库存kg / 同一配置的验收设备数 | 秤皮重SDS加注退回材料平衡 |
| `cp_energy` | all_processes | single stage electricity | 表计电力实际调试日志 | 阶段表计电压供电方地区；原始kWh；充电进口外送；初终荷电；试验循环；待机返工；验收数 | 读取校准用户侧表计并因果归属实际阶段总量，充电试验设备仅计一次。按1kWh=3.6MJ转换，回收外送能量独立。额定包kWh电机额定不建立投入。 | MJ | 每阶段试验报告期间 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 应归属实际阶段MJ / 同一配置的验收设备数 | 表计校准实际充电试验待机核对 |
| `cp_waste` | all_processes | one exported waste stream | 分类接收外运 | 一种废物化学模块序号状态；净湿kg皮重；源接收方；返还回收；验收数 | 排容器称量实际外运独立收集废物，记分析湿化学或完整模块范围。分开不可修电池处置可修返供方使用期报废。 | kg | 每外运期间 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 实际外运净废物kg / 同一配置的验收设备数 | 称重分析荷电状态源接收平衡 |
| `cp_emission` | cleaning | single residual IPA air release | 物质特异测量 | CAS67-63-0；空气子介质；控制后浓度流量时间；溶剂平衡；检出限不确定性；验收数 | 按匹配采样或IPA领用回收残留余留闭合文件化平衡定量实际残余释放。不假设全蒸发通用VOC因子，保留不存在未测低于检出区别。 | kg | 代表实际清洗控制期间 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 实际释放kg / 同一配置的验收设备数 | 采样校准实验室记录溶剂平衡 |
| `cp_configuration` | all_processes | complete configured motorcycle | 竣工工厂验收记录 | 型号序号；完整清单；自制外购入口已含；固件；实际电气制动检漏充电驱动试验；包液体交付状态 | 追溯当前批准竣工图样供货已含。按实际工厂计划处置记执行调试电气安全制动驱动功能对应液体检漏试验；来源示例不规定通用阈值。声明全部可选设备净交付状态。 | kg | 每整车配置改变 | 实际声明代表生产期间 | 声明工厂归属线模块入口 | 限定伴随每验收同配置设备 | 签认完整清单供货配置试验处置记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | 按当前因果记录归属实际期间交换总量至一种验收配置，归属数量除验收台数取得q_item。分子保留拒收返工，核对库存退回实测余留部件质量。无声明物理加权模型不混合不同电池驱动配置。 | cp_parts; cp_stock; cp_energy; cp_mass | q_item |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | 正M须当前实际校准完整净称重，含秤量程分辨校准零点皮重原读数签认序号配置。独立测量已装牵引辅助电池供货电机模块kg，核对全部永久硬件余留液与完整M。不用目录空载总重容许载荷电池能量质量估计虚构每台重。安全称重若拆件保留实际原状态独立实测同台加减修正。 | cp_mass; cp_parts; cp_configuration |
| `net_configuration` | finished_motorcycle | M包括实际完整整车已装规定牵引辅助电池电机逆变器齿轮箱皮带车载充电器变换器底盘车身灯余留加液仅一次。排除骑员行李临时试验设备外部充电器散装充电缆备用包运输包装，声明独立交付产品。电芯电解液模块预充润滑液不重复独立投入。实际永久附件全部缺少清单件须核对。 | cp_mass; cp_parts; cp_stock; cp_configuration |
| `completeness_balance` | all exchanges | 展开受控完整竣工清单真实作业记录：缺少后灯转向灯控制器电缆软管安装件镜支架其余面板润滑剂包装服务各须具体交换。未展开并匹配上游运输接收链接时本起始清单不声明完整整厂覆盖。核对库存安装退回拒收废物平衡湿液体观察物质特异排放，报告不确定性检出限截断分配敏感性。 | cp_parts; cp_stock; cp_energy; cp_waste; cp_emission |
| `source_limits` | external sources | 2021 BMW文件为历史结构工厂示例，不是独立数量工厂观察现行通用配方。其区分风冷牵引电池液冷电机并含本地电机包壳模块作业在声明完整部件入口之前。不将目录质量续航充电时间绿电宣传尺寸电池化学比例布局转默认数量符合声明。采集当前实际工厂供电试验依据及独立测量原件。 | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验完整声明电池电动两轮道路摩托车正物理净M kg独立包模块测量。参考产品名UUID准确等于finished_motorcycle；更宽49913身份不意味着边车覆盖服务等同完整供应清单。 |  |
| `validation_supply` | all_processes | 核验实际入口模块已含预充液状态順序装配试验处置固件电池驱动相容完整清单。更广声明不可因供货入口悄删本地电机电芯包制造。独立于历史示例采用实际批准工厂验收合法产品要求。 | bmw-ce04-architecture-2021; bmw-ce04-production-2021 |
| `validation_identity` | all flow rows | 核验实际公开类型化学状态参考属性组单位路线供货范围官方双语名。轨道牵引电机机器人逆变器风电冷却液集合摩托杂件线束投入引线不是这些独立成品模块。保留公开数量能量不改质量；身份换算无支持时留具体未解决row_id。IPA空气释放不是采购IPA已用溶液。 |  |
| `validation_claims` | claims | PCR机械通过不建立科学批准实际测量数量完整摇篮到大门覆盖当前型式批准公里寿命等同。报告余下身份独立依据清单测量链接缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置电池电动摩托车完整部件集成制造前景；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际净M缩放相同完整配置摩托车制造，匹配上游部件声明作业 |
| excluded_use | 乘员车辆公里服务使用充电电池寿命修理报废服务内燃其他车辆结构批准 |
| required_metadata | 完整型号序号竣工清单部件入口；已装包化学电压荷电净kg电机逆变器范围；实际预充液体状态；净完整M kg原重量独立模块平衡；可选附件；当前工厂期间供电试验固件记录；分配上游接收链接 |
| required_quality_disclosure | 配置清单身份测量链接独立依据缺口；历史来源适用性实际返还拒收回收外运；检出限不确定性分配敏感性 |
| update_trigger | 电池化学安装范围车架驱动模块供货液体预充固件验收净称重状态工厂供电期间包装改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| bmw-ce04-architecture-2021 | handbook | BMW Motorrad USA, The new BMW CE 04,7July2021, Electric Drivetrain Technology; Innovative Electric Drive; Charging; ABS; One-piece Tubular Steel Frame; LED lighting. https://www.press.bmwgroup.com/usa/article/detail/T0337286EN_US/the-new-bmw-ce-04?language=en_US | 仅历史型号结构：钢车架独立电驱电池冷却充电行走设备；不采用数量质量配方续航因子。 |
| bmw-ce04-production-2021 | handbook | BMW Group, Start der Serienfertigung BMW CE 04 im BMW Group Werk Berlin,8November2021, Elektromobilitaet und Segmentvielfalt aus der Hauptstadt; Technologiekompetenz und Digitalisierung. https://www.press.bmwgroup.com/deutschland/article/detail/T0356512DE/start-der-serienfertigung-bmw-ce-04-im-bmw-group-werk-berlin?language=de | 历史工厂观察：本地电机装配电池壳模块作业在总装前。支持完整部件入口须明确上游披露；与结构同出版方，不是独立数量。 |
