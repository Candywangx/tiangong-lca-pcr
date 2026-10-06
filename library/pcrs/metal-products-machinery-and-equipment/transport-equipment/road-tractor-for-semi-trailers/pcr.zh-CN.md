---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-tractor-for-semi-trailers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柴油半挂车牵引车制造

## 1. 范围与适用性

本 PCR 覆盖新制完整柴油道路半挂牵引车制造，配置第五轮连接以牵引半挂车。始于报告制造场址有文件支持材料部件接收，止于声明出厂门配置特定工厂验收。这是前景接收到出厂制造模块；完整摇篮到大门声明前须匹配上游生产链接并明确覆盖。[来源：`scania-production`、`volvo-spec`、`jost-fifth`]

排除半挂车货物刚性载货车农业场内牵引车客车纯电混合动力燃气牵引车、作为不完整车辆销售带发动机裸底盘、维修翻新经销商安装货运使用维护报废。选择较窄柴油边界：不同动力结构需要不同部件试验规则。现有机动车车身方法针对部件，不是本完整牵引车。外购装修驾驶室一次计入；厂内制造时明确纳入车身装修操作并省略该采购。不覆盖运输服务或吨公里参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-tractor-for-semi-trailers |
| classification_refs | CPC 3.0 49111 半挂车牵引车；较窄柴油制造范围，仅分类背景 |
| covered_products | 新制完整配置第五轮柴油道路牵引车，声明车桥驾驶室动力传动配置 |
| excluded_products | 挂车刚性载货车不完整底盘替代动力牵引车运输服务 |
| representative_product | 一台 VIN 关联验收完整配置牵引车，实测 M，不假定目录质量 |
| production_route | 实际条件车架表面处理，行驶底盘连接装配、柴油驾驶室电气集成、首次加注验收 |
| market_state | 声明工厂出厂门处验收完整牵引车 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整柴油牵引车 |
| How much | 1 kg 验收完整牵引车净质量；采用实测 M 换算实际按台记录 |
| How well | 生产者配置特定尺寸安装功能放行验收；等质量不表示牵引能力等效 |
| How long or cycle | 一次制造工厂验收周期；不规定车辆寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收配置完整柴油半挂牵引车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；VIN 配置图纸版本；柴油机族燃料兼容性；变速箱型供应商预加液体；轴式轴距悬架；驾驶室型装修完整性；第五轮材质安装锁止接口；制动转向结构；轮胎轮辋规格；安装电池控制器线束；冷却尾气后处理完整性；安装选装；实际保留燃油尿素工作液；实测净 M 秤校准皮重；另称拆卸整体件；实际制造采购路线场址时期门点上游覆盖 |

每项限定信息在数据集元数据或参考备注声明。M 为物理实测完整验收配置，包含安装模块第五轮及实测保留首次加注；另称拆卸整体交付件并核对。排除驾驶员挂车货物可拆保护单独销售备件。明确记录出厂燃油尿素状态，空满配置不能混合。目录整备运输总组合质量额定载荷油箱换油容量不能替代本实测 M。制造参考 UUID 保持未解决；货运服务候选不能替代本产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `engine_mass` | diesel_engine | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_engine_mass 采集净安装供货发动机总成质量 kg；本质量是每台验收成品机器的发动机 q_item 分子。发动机台数序列号仅作追溯。独立将发动机本体、供货已含组件及余留预充液质量核对完整整车 M；排除重复组件首次加注投入。不假定每台发动机固定 kg。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 实测 kWh 按已核验单位组因子 3.6 MJ/kWh 换算；记录进线供电电压。发动机额定 kW 不是试验能量。 |
| `liquid_mass` | liquid exchanges | Mass | kg | 称量实际供入配方，或按声明成分浓度温度实测密度换算体积；目录容量不是加注量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收坯料成品部件模块，声明供应商完整性 |
| starting_condition_role | 前景接收到出厂制造 |
| product_classification_scope | 完整柴油道路牵引车含第五轮；无半挂车运输服务 |
| recursive_input_rule | 不得由相同参考产出递归生成供入完整牵引车；外购完整模块跳过已实施内部阶段 |
| upstream_dataset_requirement | 匹配实际坯料模块范围动力表面配方地域属性；披露未匹配供应商生产 |
| disclosure | VIN 配置实际制造外包首次加注 M、工厂试验门点时期场址上游遗漏 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | all processes | 纳入实际制造装配加注返工可归属放行试验。排除货运使用及不可归属生产批次研发耐久项目；共用制造开发负担另行记录。 | `scania-production` |
| `boundary_modules` | supplier parts | 完整供入驾驶室发动机变速箱桥及充液电池连所含组成预加液体计一次；供入完整行驶底盘时替代部件行。数据集完成前增列实际缺失物料表部件。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame_prepare` | 车架准备 | conditional | 车架在报告前景内制造。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `surface_finish` | 条件表面准备与处理 | conditional | 车架驾驶室件在声明前景内实施表面处理。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `chassis` | 行驶底盘与第五轮装配 | required | 每台完整道路牵引车。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `powertrain` | 柴油动力传动与驾驶室集成 | required | 每台声明柴油牵引车配置。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `electrical` | 车辆电气安装 | required | 每台完整配置柴油牵引车。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `acceptance` | 首次加注与工厂验收 | required | 每台验收成品牵引车。 | foreground | 一台验收配置牵引车，使用 M 归一化 |
| `packing` | 出厂保护 | conditional | 实际保护材料越过出厂门。 | foreground | 一台验收配置牵引车，使用 M 归一化 |

实际车架表面处理供入底盘连接装配柴油驾驶室电气集成，再加注验收及条件保护。即使必需阶段，每行仍以精确材质供应商范围为适用条件。不设普遍配方不可避免排放或声称穷尽物料表。追溯完整实际配置，分别增列每项遗漏材料部件燃料化学品公用工程已证实废物排放。

### 过程：车架准备 (`frame_prepare`)

切割成形实际牌号纵梁横梁，钻接口并按文件支持螺栓铆接焊接路线连接。不假定所有重卡车架均焊接铸造。每项实际铆钉焊丝保护气另列。外购成品车架跳过组成操作。

#### 输入

##### 产品流

###### 钢板 (`frame_plate`)

仅限实际车架件文件支持热轧低合金高强度厚板；不是泛指高强薄板或镀锌驾驶室板。保留牌号厚度称量库存。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_prepare。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_prepare`
- 来源：

###### 工厂进线处电网交流电力 (`electricity_frame_prepare`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_prepare。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_prepare`
- 来源：

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

仅限内部复用后输出分类未处理钢切割边角料，记录实测质量去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_prepare。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_prepare`
- 来源：

### 过程：条件表面准备与处理 (`surface_finish`)

记录实际清洗预处理底漆色漆清漆固化；每项配方实际固化燃料独立交换。水性色漆为条件行，不设普遍配方。捕集残渣为废物，不自动成为环境排放。外购喷涂驾驶室或成品车架跳过已完成操作。厂内驾驶室板成形连接须关联车身制造模块及实测交换，不再外购完整驾驶室。

#### 输入

##### 产品流

###### 工艺用水 (`cleaning_water`)

仅限实际使用处理供入工业工艺水；内部循环不是新水资源取用。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`scania-production`

###### 水性汽车驾驶室色漆配方 (`waterborne_basecoat`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：水性汽车驾驶室色漆配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`scania-production`

###### 工厂进线处电网交流电力 (`electricity_surface_finish`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`scania-production`

#### 输出

##### 废物流

###### 转交处理的金属部件清洗水性废液 (`cleaning_effluent`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：转交处理的金属部件清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`scania-production`

### 过程：行驶底盘与第五轮装配 (`chassis`)

安装实际车架转向桥驱动桥悬架车轮轮胎转向制动回路第五轮安装结构。声明轴式轴距悬架型连接安装锁止接口。铸钢和冲压板第五轮为不同供应商配置；挂车主销支腿在边界外。外购行驶底盘一次替代所含车架桥制动。实际其他车桥弹簧总成制动执行器储气筒管路分别增列精确部件。

#### 输入

##### 产品流

###### 成品钢制梯形车架总成 (`frame`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品钢制梯形车架总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 成品重卡转向桥总成 (`front_axle`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品重卡转向桥总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 成品重卡驱动桥总成 (`rear_axle`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品重卡驱动桥总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 成品钢制道路牵引车轮辋 (`rim`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品钢制道路牵引车轮辋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 新制子午线充气橡胶重卡轮胎 (`tyre`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：新制子午线充气橡胶重卡轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 重卡气动空气弹簧悬架模块 (`suspension`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：重卡气动空气弹簧悬架模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 重卡气压盘式制动卡钳总成 (`disc_brake`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：重卡气压盘式制动卡钳总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 成品铸钢牵引车第五轮连接总成 (`fifth_wheel`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品铸钢牵引车第五轮连接总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

###### 工厂进线处电网交流电力 (`electricity_chassis`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`jost-fifth`

### 过程：柴油动力传动与驾驶室集成 (`powertrain`)

按实际供入安装外购柴油机变速箱传动轴冷却燃油箱尾气处理完整驾驶室。记录手动自动变速箱发动机族排放装备包含范围。成品动力传动供应商操作保留上游；厂内发动机变速箱制造须自有实测部件模块。驾驶室壳不等于完整装修驾驶室；供应商未含时增列内饰玻璃座椅悬置控制空调。厂内加注时实际制冷剂按化学独立交换记录。

#### 输入

##### 产品流

###### 柴油发动机 (`diesel_engine`)

用于声明公路牵引车推进的一台独立供货装配压燃活塞发动机，将公开机动车发动机类别限定使用；排除铁路电车、非推进及非机动车发动机。采用 cp_engine_mass 采集净安装供货发动机总成质量 kg：q_item 是每台验收成品机器的本实测质量，按同一 M 归一。台数序列号识别实际供货设计，不是交换单位。记录发动机本体、已含附件及实际余留预充液；独立将各质量核对安装总成及整车 M。供货已含组件预充液在本发动机投入内计入，不能增加第二次组件首次加注投入；实际独立补加液为独立交换。不采用目录或假设每台发动机质量。

- 选定流：车辆用压燃式活塞内燃机，铁道或电车轨道车辆除外 `2bc283a7-36f3-40f7-9e15-54851b888d33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_engine_mass。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_engine_mass`
- 来源：`volvo-spec`

###### 成品重卡自动机械变速箱总成 (`gearbox`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品重卡自动机械变速箱总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 成品钢制重卡传动轴总成 (`shaft`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品钢制重卡传动轴总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 成品喷涂装修重卡驾驶室总成 (`cab`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品喷涂装修重卡驾驶室总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 成品铝制道路牵引车柴油箱 (`fuel_tank`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品铝制道路牵引车柴油箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 成品重卡发动机冷却散热器总成 (`radiator`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品重卡发动机冷却散热器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 成品柴油重卡 SCR 尾气后处理总成 (`exhaust`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品柴油重卡 SCR 尾气后处理总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

###### 工厂进线处电网交流电力 (`electricity_powertrain`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_powertrain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_powertrain`
- 来源：`volvo-spec`

### 过程：车辆电气安装 (`electrical`)

安装声明线束起动电池车辆控制器灯具传感。不得在成品线束内部重复铜绝缘，或在已充液电池中重复电解液。铅酸起动电池行为条件技术，不是牵引储能。独立供入安装选装须独立具体行。

#### 输入

##### 产品流

###### 成品绝缘铜车辆线束 (`harness`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品绝缘铜车辆线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_electrical`
- 来源：`scania-spii`

###### 已充液铅酸重卡起动电池 (`starter_battery`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：已充液铅酸重卡起动电池
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_electrical`
- 来源：`scania-spii`

###### 成品道路牵引车电子发动机控制器 (`vehicle_ecu`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：成品道路牵引车电子发动机控制器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_electrical`
- 来源：`scania-spii`

###### 工厂进线处电网交流电力 (`electricity_electrical`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_electrical。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_electrical`
- 来源：`scania-spii`

### 过程：首次加注与工厂验收 (`acceptance`)

按生产者配置特定放行准则记录实际首次加注泄漏核查制动转向连接锁止试验发动机运行返工。不编造普遍测试距离认证阈值寿命。燃油领退试验消耗及实测保留出厂燃油须平衡；保留燃油尿素及安装工作液计入声明净 M，明确各质量。化石 CO2 行仅适用可归属实测化石试验燃烧排至空气未指定子介质，不对每种燃料来源假定；其他实测物质另列行。

#### 输入

##### 产品流

###### 润滑油 (`mineral_oil`)

仅限匹配配方独立供入范围实际石油来源润滑油首次加注；不是 PAO 合成油。称保留量净领用；描述热值不是量值因子。不同发动机齿轮油须不同配方行。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

###### 配方含缓蚀剂乙二醇水发动机冷却预混液 (`glycol_coolant`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：配方含缓蚀剂乙二醇水发动机冷却预混液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

###### 锂皂矿物油第五轮润滑脂 (`lithium_grease`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：锂皂矿物油第五轮润滑脂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

###### 供工厂试验的化石低硫柴油 (`test_diesel`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：供工厂试验的化石低硫柴油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

###### 汽车用尿素水溶液，质量分数 32.5% (`urea_solution`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：汽车用尿素水溶液，质量分数 32.5%
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

###### 工厂进线处电网交流电力 (`electricity_acceptance`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

#### 输出

##### 产品流

###### 验收配置完整柴油半挂牵引车 (`finished_machine`)

参考产出：完整声明牵引车，含第五轮驾驶室动力传动安装装备及有记录保留首次加注；按实测 M 归一化后净 1 kg。

- 选定流：验收配置完整柴油半挂牵引车
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`scania-production`

#### 输出

##### 废物流

###### 送处理的废乙二醇水发动机冷却液 (`spent_coolant`)

仅限具体声明实际交换；采集实测领退平衡精确状态成分供应商出口完整性。

- 选定流：送处理的废乙二醇水发动机冷却液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅限实际工厂燃料燃烧可归属实测化石 CO2 排入空气未指定子介质。区分化石生物来源；不推定普遍排放，不用编造因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`scania-production`

### 过程：出厂保护 (`packing`)

分别称每项实际可拆保护膜其他材质并从 M 排除。运输拆卸整体件保留配置整机完整性并另称实测质量；单独销售备件挂车运输工装排除。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅限随牵引车出厂实际可拆 LDPE 保护薄膜；另称并从 M 排除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 工厂进线处电网交流电力 (`electricity_packing`)

仅限实际可归属实测阶段电力，含返工；记录进线电压地域提供者及 kWh 到 MJ 换算。

- 选定流：工厂进线处电网交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared manufacture | 按 VIN 配置分工单，优先直接归属实测领退工位仪表返工。不可分离共用资源采用实测因果驱动量如工位时间负荷：份额 = 工单驱动量 / 所有覆盖工单驱动量总和。保留分母时期已证实因果；不同驾驶室桥动力配置间等台数分配须论证。 |  |
| `allocation_scrap` | recoveries and rejects | 内部可复用库存试验液为转移，不重复新投入或自动抵扣。输出废物保留实测量出口，不假定避免产品效益。经记录审查剩余分配前分离可售共产品。覆盖时期拒收返工单元负担归属验收产出并核对在制。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收整机净质量 | weighing_record | 型号；配置；VIN；验收净质量 M；秤编号；校准；第五轮；拆卸整体件；保留燃油尿素工作液；人员皮重；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐台或同配置代表性批次 | 同工单制造时期 | 声明工厂 | 每台验收净质量 | 校准皮重配置放行记录 |
| `cp_frame_prepare` | frame_prepare | 车架准备 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 采集纵梁牌号厚度图纸版本、称量领退边角料、机时尺寸验收工位仪表。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_surface_finish` | surface_finish | 条件表面准备与处理 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 保留涂料安全数据表层配方称量领退、水废液移交、涂装件完整性固化仪表及实际存在时排放实测。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_chassis` | chassis | 行驶底盘与第五轮装配 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 追溯序列号物料表供应商所含件独立模块质量螺栓扭矩对中制动回路连接安装验收。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_engine_mass` | powertrain | diesel_engine | weighing_record | VIN 工单；配置；发动机型号序列号；安装供货发动机质量 kg；发动机本体质量 kg；已含附件质量 kg；预充液配方及实际余留 kg；实际排出退回 kg；独立补加液 kg；追溯台数；验收机器数；秤校准皮重；供货边界 | 按声明安装状态在校准秤上称量各净供货发动机总成，排除运输工装。以独立可追溯发动机本体组件及实际余留预充液称重记录核对总成范围；将安装总成质量核对同一 VIN 物料表及验收完整整车 M。记录实际排出退回独立补加液，不采用目录默认每台发动机 kg。排除重复附件预充液投入。 | kg | 每批供货及安装配置 | 同一声明制造时期 | 声明动力传动集成工厂 | 应归属安装供货发动机质量 / 验收机器数量 | 校准发动机称重；供货清单范围；组件预充液平衡；VIN 安装及 cp_mass 记录 |
| `cp_powertrain` | powertrain | 柴油动力传动与驾驶室集成 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 以 cp_engine_mass 独立称量安装供货发动机 kg，台数序列号仅作追溯并核对预充液已含内容；采集变速箱驾驶室范围接口尾气结构油箱材质工位仪表。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_electrical` | electrical | 车辆电气安装 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 保留接线版本电池化学容量供应商状态独立安装质量软件配置接线试验。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_acceptance` | acceptance | 首次加注与工厂验收 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 记录序列号关联加注退回保留平衡实际燃料来源试验日志校准排放实测放行记录及排除包装人员皮重验收净 M。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |
| `cp_packing` | packing | 出厂保护 | foreground_record | VIN 工单；配置；验收台数；交换名称状态属性单位；领用退回库存变化；供应商所含组成；保留加注；电力 kWh；安装供货发动机质量 kg；追溯发动机台数；废物出口；实际排放；共用驱动量分母；校准 | 称材质专用保护，记录皮重退回精确出厂完整性。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂及明示分包 | 可归属交换数量 / 验收机器数量 | 物料表称量仪表移交验收凭据 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

同质配置工单，逐项 q_item 来自实际领用减退回库存变化及实际公用工程废物排放，直接归属及合理共用分配后除以验收台数。除以同一实测 M。发动机交换保持 kg/kg：其 q_item 为每台验收成品机器独立实测净安装供货发动机总成 kg，除以同一 M；发动机台数仅作追溯。将发动机本体、供货已含附件预充液及实际独立补加核对安装总成及完整整车 M，不重复组件液体投入。电力保持 MJ/kg，其他质量交换保持 kg/kg。兼容逐 VIN 配置净质量变化时保留逐台记录，可归属总量除以验收质量总和。分开不兼容燃料加注桥驾驶室配置。未知为缺口，不当零。供应商 1% 挂钩估算目录油箱容量额定发动机功率不作生产因子。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | complete tractor | 将 VIN 物料表第五轮车架桥轮制动发动机变速箱装修驾驶室电气冷却尾气保留首次加注核对实测净 M。解决供应商模块重叠，增列遗漏实际部件。 | 称量配置供应商完整性 |
| `quality_balance` | flows and testing | 保留校准领退库存平衡安装消耗工作液试验燃料、实测排放物质来源、废物出口凭据实际配方密度换算。QA 限值来自场址记录；不编造普遍成材率试验耗用。 | 库存仪表试验移交记录 |
| `quality_coverage` | dataset | 披露地域时期配置条件缺席外包身份量值不确定性供应商上游缺失。来源支持结构工艺案例，不代表全行业配方或旧宣布投资目前完成。 | 覆盖与证据登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求正实测 M 及完整 VIN 配置，含第五轮动力传动装修驾驶室安装装备保留加注。拒绝半挂车货物列车总质量运输服务替代。 |  |
| `validate_identity` | all rows | 核验原子交换公开身份实际参考属性单位组供入路线材料状态介质。公路推进须匹配机动车发动机类别及原质量 kg 参考；class43110排除机动车和飞机。发动机台数不是质量分子；供货预充液组件不能重复计入。挂钩不是已核验第五轮；切削乳化液不是发动机冷却液；以 N 计肥料不是汽车尿素液。不兼容身份保持空。 |  |
| `validate_measurement` | all rows | 核验采集换算对应同配置时期实测 M。核对供应商预加液体保留试验燃油部件质量，无重复，不将未知默认为零。 |  |
| `validate_emissions` | elementary rows | 仅采用已证实可归属工厂物质实际介质。化石 CO2 为空气未指定且须化石来源；生物源排放 NO、NO2、N2O 捕集废物不得替代合并。数据集完成前分别增列实际物质。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整柴油道路牵引车前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配柴油结构桥驾驶室连接配置首次加注状态门点场址时期的供应链制造模型 |
| excluded_use | 货运服务寿命比较等质量牵引等效替代动力挂车及无依据完整摇篮到大门声明 |
| required_metadata | 制造商型号；VIN 配置图纸版本；柴油机族燃料兼容性；变速箱型供应商预加液体；轴式轴距悬架；驾驶室型装修完整性；第五轮材质安装锁止接口；制动转向结构；轮胎轮辋规格；安装电池控制器线束；冷却尾气后处理完整性；安装选装；实际保留燃油尿素工作液；实测净 M 秤校准皮重；另称拆卸整体件；实际制造采购路线场址时期门点上游覆盖 |
| required_quality_disclosure | 身份量值缺口不确定性条件缺席完整物料表补齐来源限制分配未链接上游 |
| update_trigger | 动力燃料桥驾驶室连接规格供应商模块范围加注 M 制造路线场址时期证据解决变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `scania-production` | literature | [Scania Asia P&L](https://www.scania.com/asia/en/home/our-business/p_l.html) | Press Shop/BiW/Paint/Cab/Chassis 段：分离驾驶室准备部件集成终端功能检验。2026-10-05 检索。仅案例，不要求自动化配方。Powertrain 将来 2025 Q4 表述不作已完成目前生产证据；不采用量值。 |
| `volvo-spec` | literature | [Volvo FH specifications, UK](https://www.volvotrucks.co.uk/en-gb/trucks/models/volvo-fh/specifications.html) | Diesel 发动机动力表及 Chassis/Rear suspension/Fuel tanks/AdBlue/Brakes 段。2026-10-05 检索。配置替代，不设普遍容量材质路线。换油容量额定载荷维护间隔不作首次加注净 M 寿命要求。 |
| `jost-fifth` | literature | [JOST truck and trailer fifth-wheel couplings](https://www.jost-world.com/en/products/jost.html) | Truck and Trailer 段区分冲压板铸钢连接替代。2026-10-05 检索。不推定普遍铸造净质量载荷等级性能等效寿命。 |
| `scania-spii` | official_guidance | [SPII - Scania Product Individual Information](https://bodybuilder.scania.com/trucks/en/tools-and-services/individual-chassis-information.html) | SPII 段说明完整规格及按底盘号检索。2026-10-05 检索。支持序列号特定追溯；未检索或验证任何具体车辆记录证书。 |
