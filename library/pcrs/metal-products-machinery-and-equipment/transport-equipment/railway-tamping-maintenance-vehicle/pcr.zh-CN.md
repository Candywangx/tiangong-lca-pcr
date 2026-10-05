---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.railway-tamping-maintenance-vehicle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柴油液压普通线路铁路捣固车辆制造

## 1. 范围与适用性

制造具有一体起拨道、实测配置走行部作业单元液压动力控制的新制完整自走式柴油液压普通线路铁路道砟捣固车辆。边界从声明坯料或接收总成至制造验收交付，包括可归属部件车辆试验。这是 CPC 49531 内较窄产品路线；参考产品不提供轨道养护服务。

排除道岔专用、公铁两用附件或道路压实路线、非自走服务车、纯检测清筛钢轨打磨或焊接车辆、额外联合作业服务、电池接触网混合或全电驱动、翻新转售二手机器及交付后运输轨道施工培训维护报废。液压作业单元本身不识别纯柴油动力：Plasser E3 混合动力为明确排除反例。

Plasser 生产网页支持分开切割焊接、机械零件作业单元制造、装配调试。MATISA B45D 为普通线路捣固起拨道配置背景。1996 年 CSM 二手机器页面仅历史设计证据，不为当前新设备制造。来源不提供本工厂清单或实际车辆净质量。接收到交付前景本身不是完整摇篮到大门；须链接兼容供应商上游并披露缺失。科学审查待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.railway-tamping-maintenance-vehicle |
| classification_refs | CPC 3.0 49531；较窄自走柴油液压普通线路捣固路线，仅背景 |
| covered_products | 制造具有一体起拨道、实测配置走行部作业单元液压动力控制的新制完整自走式柴油液压普通线路铁路道砟捣固车辆。边界从声明坯料或接收总成至制造验收交付，包括可归属部件车辆试验。这是 CPC 49531 内较窄产品路线；参考产品不提供轨道养护服务。 |
| excluded_products | 排除道岔专用、公铁两用附件或道路压实路线、非自走服务车、纯检测清筛钢轨打磨或焊接车辆、额外联合作业服务、电池接触网混合或全电驱动、翻新转售二手机器及交付后运输轨道施工培训维护报废。液压作业单元本身不识别纯柴油动力：Plasser E3 混合动力为明确排除反例。 |
| representative_product | 一个序列号配置关联验收完整铁路捣固车，具有实际实测净 M |
| production_route | 条件机架部件制造涂装；走行传动装配；捣固起拨道液压集成；控制舾装；调试验收及条件保护 |
| market_state | 声明制造门点新制完整验收配置轨道维修车辆 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造完整配置柴油液压普通线路捣固起拨道车辆 |
| How much | 1 kg 验收完整排除燃料车辆净质量；按台记录以正实测 M 归一化 |
| How well | 实际记录结构液压制动控制几何及捣固起拨道放行准则；等质量不建立轨道作业产出等效 |
| How long or cycle | 一次制造与制造验收周期；不假定工作寿命或处理轨道长度 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁路或有轨电车用维修或服务车辆，不论是否是自动的 `e3e65962-deae-4dbd-ae36-6ff10a584514` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列号图纸版本；普通线路轨距轨枕兼容性；捣固头镐材尖端数量与振动夹持配置；起拨道夹钳几何控制；机架转向架轮对传动制动范围；柴油机传动液压泵执行器工作液配方；司机室电子启动电池实际安全空调选项；供应总成包含预加；实际安装工作液固定压铁状态；可追溯实际同车称重得到的完整验收排除燃料净 M（kg）；排除人员松散道砟备件包装试验载荷、门点独立实测燃料与拆卸整体交付附件；制造调试门点场址时期；上游链接与资源分配 |

声明全部限定信息。公开较宽成品维修车辆身份限定至实际柴油液压普通线路配置。M 包含安装机架司机室、走行柴油机传动、捣固起拨道工具液压控制总成、声明工作液及固定压铁。排除柴油燃料人员松散道砟备件包装临时试验运输夹具。门点保留燃料独立实测并记录为单独产品输出；物理实测整体拆卸交付件纳入一次。不得用目录重量、轴重额定值乘轴数、燃油箱容积或运营工作重量替代净 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 取得当前经校准实际完整车辆称重，或按声明水平方法覆盖同一车全部车轮的记录轮轴载荷称重。保留仪表校准零点去皮重复性序列号日期操作者不确定性。对实际适用轮轴实测求和，核对安装单元工作液固定压铁及物理实测整体拆卸件。以逐项签署平衡从称重状态扣独立实测燃料人员保护临时载荷。无可追溯修正的工作整备重量不足。 |
| `property_conversion` | 部件与公用工程 | original property | 逐行实际单位 | 保留发动机物品数量/Item(s)，不改为 kg。记录接收件数及用于净 M 平衡的独立称重安装发动机质量；不提供固定发动机质量因子。区分能量体积与质量。电力计量 kWh，在核验能量单位组按 1 kWh = 3.6 MJ 换算。液体体积仅以实际同配方密度温度及来源记录换算；不推定油燃料密度。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定钢坯料实际坯件及成品机架转向架作业动力控制总成，含供应商包含 |
| starting_condition_role | 从接收到完整配置验收交付的前景制造 |
| product_classification_scope | 自走柴油液压普通线路捣固起拨道车辆，不为轨道作业服务 |
| recursive_input_rule | 不生成完整车辆作为自身投入。外购机架转向架作业单元替代所含制造组成；厂内制造采用实测部件过程 |
| upstream_dataset_requirement | 匹配实际牌号化学、动力作业单元设计供应商完整性参考属性场址时期；披露未链接供应生产 |
| disclosure | 制造者型号序列号图纸版本；普通线路轨距轨枕兼容性；捣固头镐材尖端数量与振动夹持配置；起拨道夹钳几何控制；机架转向架轮对传动制动范围；柴油机传动液压泵执行器工作液配方；司机室电子启动电池实际安全空调选项；供应总成包含预加；实际安装工作液固定压铁状态；可追溯实际同车称重得到的完整验收排除燃料净 M（kg）；排除人员松散道砟备件包装试验载荷、门点独立实测燃料与拆卸整体交付附件；制造调试门点场址时期；上游链接与资源分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 全部阶段 | 纳入实际制造部件加工、实测返工装配及可归属门点前调试轨道试验。记录试验介质消耗保留燃料支持资源。排除研发耐久开发或培训，除非明确独立论证，以及交付后轨道施工。外包制造试验服务须独立交换，含服务边界单位分配。 | `plasser-production` |
| `boundary_modules` | 总成与实际物料表 | 每项外购总成连所含件预加计一次；禁止重复动力包内发动机、转向架内轮对、作业液压单元内泵镐工作液。接收完整机架替代制造坯料。完成数据集放行前补齐实际部件化学气体制冷剂过滤件与实测排放；候选卡不是普遍穷尽物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame_fabrication` | 机架坯料准备、加工与连接 | conditional | 实际厂内车辆或作业单元机架制造。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `component_fabrication` | 作业单元与液压部件加工装配 | conditional | 实际厂内部件制造。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `surface_finish` | 表面准备与保护涂装 | conditional | 实际前景清洗抛丸或涂装。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `mechanical_assembly` | 走行部与柴油传动装配 | required | 每台覆盖完整车辆。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `work_hydraulics` | 捣固、起拨道与液压集成 | required | 覆盖普通线路柴油液压捣固配置。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `outfitting` | 司机室、测量控制与辅助舾装 | required | 完整声明验收配置。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `acceptance` | 液压校准、功能试验与完整车辆验收 | required | 声明制造交付门点之前。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |
| `packing` | 交付保护与拆卸整体工具 | conditional | 实际可拆保护或交付拆卸整体附件。 | foreground | 一台验收配置捣固车辆，使用 M 归一化 |

机架与部件制造供入条件表面处理及走行部作业单元舾装集成，继而完整配置验收及条件保护。阶段可重叠；资源一次归属。即使必需阶段，各交换行也以实际组成配置为条件。每行为一个物理或化学交换；不强制排放或焊接涂装配方。

### 过程：机架坯料准备、加工与连接 (`frame_fabrication`)

切割成形钢板型材、加工接口，按记录规程焊接实际主机架捣固承载架转向架框架并检验接头。外购完整机架模块替代所含坯料加工。实际发生切割气、加工冷却耗材、锻造热处理交换须增列；不强制普遍牌号或焊接配方。

#### 输入

##### 产品流

###### 热轧低合金钢捣固车辆机架板 (`frame_plate`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：热轧低合金钢捣固车辆机架板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 热轧钢捣固车辆结构型材 (`frame_profile`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：热轧钢捣固车辆结构型材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 实心低合金钢气体保护焊丝 (`solid_wire`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 二氧化碳 (`co2_shield`)

仅匹配公开中国工厂路线实际供入纯 CO2 保护气；不作预混或推定化石基础尾气。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 氩二氧化碳预混焊接保护气 (`argon_mix`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`frame_fabrication_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

称量内部复用后分类未处理钢边角料转移，保留接收者，不含下游处理或自动回收抵扣。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

###### 捕集的富氧化铁焊接滤尘 (`weld_dust`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：捕集的富氧化铁焊接滤尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_frame_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_frame_fabrication`
- 来源：`plasser-production`

### 过程：作业单元与液压部件加工装配 (`component_fabrication`)

加工实际镐坯缸筒液压转向架接口、配装密封轴承及装配作业单元；记录去毛刺清洗、实测切屑及实际台架资源。锻造淬硬硬质合金尖端仅实际记录路线适用，须独立实测过程交换。外购成品作业单元替代所含制造。追溯实际单元性能密性试验，不施加制造商温度压力耐久循环。

#### 输入

##### 产品流

###### 锻造低合金钢道砟捣固镐坯 (`tine_blank`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：锻造低合金钢道砟捣固镐坯
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

###### 冷拔无缝低合金钢液压缸筒管 (`cylinder_tube`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：冷拔无缝低合金钢液压缸筒管
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

###### 水混合半合成金属加工液浓缩配方 (`metalworking_fluid`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：水混合半合成金属加工液浓缩配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

###### 工艺用水 (`machining_water`)

实际处理供入稀释清洗水，不作内部循环资源取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`component_fabrication_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

#### 输出

##### 废物流

###### 钢切屑 (`steel_chips`)

仅实际有记录 CNC 铣削钻削产生的分类未处理低合金钢切屑，与公开路线匹配；采集油污染接收者。其他切屑生成路线须独立身份审查。不推定买飞比或回收抵扣。

- 选定流：钢切屑 `7b085ff2-e543-40e3-b293-1322740eabcb`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_component_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_component_fabrication`
- 来源：`plasser-production`

### 过程：表面准备与保护涂装 (`surface_finish`)

记录实际准备涂料组成层次。环氧基料固化剂为条件配方；供应商已涂装机架替代重复处理。捕集抛丸滤尘与清洗转移为废物，不作环境排放。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

实际清洗供入处理工艺水；不作环境取水内部循环。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

###### 球形铸钢抛丸磨料 (`abrasive`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：球形铸钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

###### 配方环氧轨道车辆涂料基料组分 (`epoxy_base`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：配方环氧轨道车辆涂料基料组分
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

###### 聚胺环氧轨道车辆涂料固化剂配方 (`epoxy_hardener`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：聚胺环氧轨道车辆涂料固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`surface_finish_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

#### 输出

##### 废物流

###### 含涂层残渣的废钢抛丸磨料 (`spent_abrasive`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：含涂层残渣的废钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

###### 转交处理的钢机架清洗水性废液 (`clean_effluent`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：转交处理的钢机架清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`plasser-production`

### 过程：走行部与柴油传动装配 (`mechanical_assembly`)

实际机架安装于转向架轮对，安装柴油机及记录传动轴驱、悬挂制动。外购完整转向架动力包连所含件计一次。厂内制造时记录部件清单替代。机械装配及后续液压电气集成可重叠；资源计一次。

#### 输入

##### 产品流

###### 完整焊接钢制捣固车辆底架 (`frame_received`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整焊接钢制捣固车辆底架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 转向架总成 (`bogie_received`)

实际接收完整轨道转向架，记录轮对悬挂驱动制动包含；排除重复组成投入。公开通用转向架身份不提供轴式或制造因子。

- 选定流：转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 成品锻钢轨道轮对（车轴与车轮） (`wheelset`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：成品锻钢轨道轮对（车轴与车轮）
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 柴油发动机 (`engine_received`)

实际独立供应完整压燃柴油机。保留公开物品数量参考及采集件数；记录序列号型号及用于安装 M 核对的独立实测质量，不编造每发动机 kg 因子。外购动力包已含发动机时替代此独立投入。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 完整液力轨道车辆传动总成 (`transmission`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整液力轨道车辆传动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 润滑油 (`gear_oil`)

实际独立领用石油基配方齿轮润滑油，记录牌号并排除已计传动总成供应商预加。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`mechanical_assembly_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_mechanical_assembly。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mechanical_assembly`
- 来源：`plasser-production`

### 过程：捣固、起拨道与液压集成 (`work_hydraulics`)

安装精确捣固单元镐头起拨道滚轮夹钳、液压泵缸阀软管及控制。记录夹持振动机构、镐材尖端及数量、捣固头轨枕兼容性；不施加制造商例示数量频率。外购完整单元包含替代组成行。矿物与合成酯工作液为不同实际变型；历史 CSM Panolin 名称不建立化学组成。

#### 输入

##### 产品流

###### 完整液压道砟捣固作业单元总成 (`tamping_unit`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整液压道砟捣固作业单元总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 成品锻钢道砟捣固镐 (`tamping_tine`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：成品锻钢道砟捣固镐
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 完整钢轨起拨道滚轮夹钳总成 (`lifting_clamp`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整钢轨起拨道滚轮夹钳总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 完整捣固机械轴向柱塞液压泵 (`hydraulic_pump`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整捣固机械轴向柱塞液压泵
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 线性作用（气缸）水力发动机和风力发动机及马达 (`hydraulic_cylinder`)

实际独立供入完整液压线性夹持执行油缸，缸径行程压力连接材料范围来自供应记录。公开较宽液压气动缸身份限定为本液压配置部件；不推定气动执行器或普遍试验压力。排除外购作业单元已含油缸。

- 选定流：线性作用（气缸）水力发动机和风力发动机及马达 `aea61250-788d-4a2b-9c63-ff24b8113469`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 增强合成橡胶高压液压软管总成 (`hydraulic_hose`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：增强合成橡胶高压液压软管总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 石油矿物基液压油配方 (`mineral_hydraulic`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：石油矿物基液压油配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 合成酯可生物降解液压工作液配方 (`ester_hydraulic`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：合成酯可生物降解液压工作液配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

###### 工厂进线交流电力 (`work_hydraulics_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

#### 输出

##### 废物流

###### 转交处理的废石油矿物基液压油 (`spent_hydraulic`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：转交处理的废石油矿物基液压油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_work_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_work_hydraulics`
- 来源：`matisa-compact`

### 过程：司机室、测量控制与辅助舾装 (`outfitting`)

安装实际司机室轨道几何测量控制柜布线、气动制动压缩机及安全系统。辅助启动电池化学独立记录。空调制冷剂为条件：实际加注各物种、泄漏总成须明确增列。数据集完成前补齐实际遗漏附件舱箱隔热紧固件。

#### 输入

##### 产品流

###### 完整钢轨轨道几何测量传感模块 (`track_sensor`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整钢轨轨道几何测量传感模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 完整钢制捣固机电子控制柜 (`control_cabinet`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整钢制捣固机电子控制柜
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 完整轨道车辆制动空气压缩机组 (`air_compressor`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整轨道车辆制动空气压缩机组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 完整气动轨道车辆制动控制阀块 (`brake_valve`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：完整气动轨道车辆制动控制阀块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 夹层安全玻璃轨道车辆前风窗 (`cab_glass`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：夹层安全玻璃轨道车辆前风窗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 铅酸蓄电池 (`aux_battery`)

仅实际独立供入完整加液铅稀硫酸启动电池，具记录充放电处理及匹配公开路线验收交付状态。记录型号容量完整性，不编造每电池 kg；排除已含外购动力包电池。不同化学状态须独立行。

- 选定流：铅酸蓄电池 `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 绝缘铜轨道机械电缆线束 (`copper_cable`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：绝缘铜轨道机械电缆线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 缓蚀乙二醇水柴油机冷却液配方 (`coolant`)

仅实际存在时记录本精确实体配方交换，保留供应商规格完整性及实测净领用转移。证实缺席为 not_applicable；未知数量为缺口。不同变型须独立卡片。

- 选定流：缓蚀乙二醇水柴油机冷却液配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 润滑油 (`engine_oil`)

实际独立领用石油基配方发动机油初加，记录牌号并排除已计发动机预加。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`outfitting_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`plasser-production`

### 过程：液压校准、功能试验与完整车辆验收 (`acceptance`)

按实际放行计划调试电气机械液压系统、加注记录工作液、校准几何控制并试验制动走行捣固起拨道功能。纳入可归属工厂调试轨道试验返工；区分条件研发耐久试验培训与单台验收。试验柴油实测尾气仅证实时适用。交付后轨道施工作业排除，即使使用同一捣固机构。

#### 输入

##### 产品流

###### 柴油 (`trial_diesel`)

实际可归属调试领用化石石油柴油；退回消耗及门点保留燃料分别核对。不推断混合或寿命耗用。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`acceptance_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

#### 输出

##### 产品流

###### 柴油 (`delivery_diesel`)

仅实际独立实测交付油箱剩余柴油从净 M 排除；记录为独立产品输出、不抵扣避免生产，并核对试验燃料平衡。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

###### 铁路或有轨电车用维修或服务车辆，不论是否是自动的 (`finished_machine`)

验收完整自走式柴油液压普通线路捣固起拨道车辆，具有配置特定正实测净 M。公开较宽养路车辆身份以必需限定信息约束。

- 选定流：铁路或有轨电车用维修或服务车辆，不论是否是自动的 `e3e65962-deae-4dbd-ae36-6ff10a584514`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`plasser-production`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`trial_co2`)

仅已证实可归属调试化石 CO2向空气未指定即时排放。记录实际实测物种出口方法；不替代总 NOx 或推定强制排放量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

###### 一氧化氮 (`trial_no`)

仅已证实可归属调试NO向空气未指定即时排放。记录实际实测物种出口方法；不替代总 NOx 或推定强制排放量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

###### 二氧化氮 (`trial_no2`)

仅已证实可归属调试NO2向空气未指定即时排放。记录实际实测物种出口方法；不替代总 NOx 或推定强制排放量。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-production`

### 过程：交付保护与拆卸整体工具 (`packing`)

保护独立计量从 M 排除。运输拆卸整体交付工具附件须物理实测核对同一验收配置。排除另售备用镐头工具运输夹具与门点后物流。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`pe_protection`)

仅实际未复合非黏性 LDPE 保护薄膜；独立称重从 M 排除。其他包装须独立精确交换。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`plasser-production`

###### 工厂进线交流电力 (`packing_electricity`)

计量可归属 kWh，按核验能量单位组 1 kWh = 3.6 MJ 换算；保留实际供应进线背景及独立实测厂内发电。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`plasser-production`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用制造 | 优先直接归属序列号配置关联净领用仪表、作业单元试验时间返工。不可分共用公用工程按有证据实测因果机器时间负荷或涂装面积层需求分配：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留时期分母因果。等台数、发动机额定值轴重上限或捣固轨道米数不是默认驱动量。 |  |
| `allocation_fuel` | 调试与保留柴油 | 实际柴油领用扣实测退回库存变化与实际消耗、门点独立实测保留燃料核对。试验柴油投入覆盖可归属消耗及保留交付燃料；独立燃料输出不抵扣避免生产且从 M 排除。另售产品先直接分离，再按有依据实际记录分配。排放采用实际消耗试验燃料物种实测，不用领用总量或寿命燃料。 |  |
| `allocation_recovery` | 复用废物拒收 | 内部钢水工作液复用为转移，不作新投入或自动抵扣。输出废物保留实测数量接收者，不推定避免生产。拒收返工在制核对至验收产出；记录资源归属且验收产出不重复计数。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整捣固车辆净质量 | traceable_weighing_record | 型号；配置；序列号；验收净质量 M；称重原件日期方法；校准仪表；适用时轮轴实测；实测加液固定压铁；实测增加扣除；排除人员松散道砟燃料试验夹具包装；拆卸整体件；签署核对；不确定性 | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 逐台验收 | 实际制造验收时期 | 声明制造验收门点 | 每台验收净质量 | 原始校准实测与签署配置质量平衡 |
| `cp_frame_fabrication` | frame_fabrication | 机架坯料准备、加工与连接 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_component_fabrication` | component_fabrication | 作业单元与液压部件加工装配 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_surface_finish` | surface_finish | 表面准备与保护涂装 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_mechanical_assembly` | mechanical_assembly | 走行部与柴油传动装配 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_work_hydraulics` | work_hydraulics | 捣固、起拨道与液压集成 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_outfitting` | outfitting | 司机室、测量控制与辅助舾装 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_acceptance` | acceptance | 液压校准、功能试验与完整车辆验收 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_packing` | packing | 交付保护与拆卸整体工具 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线；发动机件数；柴油领退消耗与门点保留；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集同序列号配置图纸、供应商完整性、实测领退部件质量、校准仪表工单试验原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐兼容配置以净领用扣记录退回库存变化及有依据共用分配得到可归属总量，除验收台数得 q_item，再除同一实测净 M 得 q_ref。质量交换保留 kg/kg，发动机件数 Item(s)/kg，电力 MJ/kg。兼容序列号捣固车辆质量变化时可归属总量除实测验收净质量总和并保留全部序列记录。分开不同柴油传动与液压冷却配方、捣固起拨道配置、轨距轴式机架涂层供应完整性。未知数量为缺口，不作零；不推断发动机功率、捣固生产率、额定轴重或目录质量换算。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 依据实际当前可追溯物理称重及逐项净配置核对实施 mass_record_provenance。每项轮轴属同一车辆状态；核对实测拆卸件加液并保证质量不遗漏重复。缺原始方法校准状态修正或正 M 阻止完整量值数据集，须审查或重测。 | 原始称重与配置修正台账 |
| `quality_bom` | 完整配置 | 全部实际机架转向架轮对柴油传动作业起拨道液压制动辅助司机室控制工作液质量核对至验收净 M。记录外购总成包含；不重复外购总成内轮对发动机作业单元或预加液压发动机油；安装镐具与备件、保留柴油分开核对。完成前增列实际遗漏件交换。 | 完整图纸物料表收货称重安全数据表 |
| `quality_balance` | 数量与物种 | 保留校准能量仪表领退复用、实测液体组成密度、废物联单及实际排放方法物种介质。经验 QA 限值来自适用实测记录核验可比来源。不提供普遍制造强度、车辆质量或燃烧器排放因子。 | 实际仪表库存质量平衡与不确定性 |
| `quality_coverage` | 数据集 | 披露时期场址配置条件缺席外包身份量值不确定性范围缺口及供应商上游缺失。历史产品生产案例不建立目前认证或本捣固车辆 M。本 PCR 规定后续记录要求；未认证真实捣固车辆称重或工厂清单。 | 覆盖与证据限制登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求覆盖完整自走柴油液压普通线路捣固起拨道配置、正实测净 M、cp_mass 及独立 mass_record_provenance。拒绝目录重量、额定轴重乘积、松散道砟列车重量或满燃料油箱作为净 M。缺实际实测状态核对须完整量值数据集前科学数据审查。 |  |
| `validate_atomic` | 全部交换 | 核验精确物理化学身份公开参考属性单位组配方状态供应完整性。铁路捣固单元不是道路压实机；捣固镐不是钢筋；矿物液压油与酯配方不同；发动机公开件数不是质量；已加液总成不产生重复预加。供入工艺水不是环境资源废液。无依据 UUID 留空。 |  |
| `validate_measurement` | 全部数量 | 核验原属性单位实际采集、q_item/M 换算、同序列号配置场址时期验收台数校准燃料平衡因果分配分母。能量体积件数不得重命名质量。未知数量不是零。 |  |
| `validate_species` | 条件试验排放 | 要求实测可归属物种出口及精确介质。选定化石 CO2、NO、NO2 描述空气未指定即时排放；核验化石燃料来源。不得替代总 NOx、N2O、氮亚硝酸盐、生物源 CO2、水土壤长期排放。捕集氧化滤尘为废物，不为空气元素铁。不强制排放数量。 |  |
| `validate_acceptance` | 作业单元与完整车辆 | 追溯同配置实际部件性能密性试验、完整结构电气液压制动检查、测量系统校准及可归属工厂轨道试验结果返工放行。声明时记录适用合同辖区；公开历史案例不认证本车。不施加普遍压力振动频率循环数或生产率阈值。 | `plasser-production` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整柴油液压普通线路捣固车辆前景制造 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及兼容上游链接后 |
| allowed_use | 匹配柴油液压路线轨距作业单元配置、完整实测净范围、供应边界门点场址时期的制造供应链模型 |
| excluded_use | 轨道养护客货服务、寿命足迹、等质量捣固性能、其他动力养护路线或无依据完整摇篮到大门 |
| required_metadata | 制造者型号序列号图纸版本；普通线路轨距轨枕兼容性；捣固头镐材尖端数量与振动夹持配置；起拨道夹钳几何控制；机架转向架轮对传动制动范围；柴油机传动液压泵执行器工作液配方；司机室电子启动电池实际安全空调选项；供应总成包含预加；实际安装工作液固定压铁状态；可追溯实际同车称重得到的完整验收排除燃料净 M（kg）；排除人员松散道砟备件包装试验载荷、门点独立实测燃料与拆卸整体交付附件；制造调试门点场址时期；上游链接与资源分配 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整实际物料表因果分配燃料平衡验收未链接供应商上游 |
| update_trigger | 柴油传动液压冷却化学捣固起拨道轨距制动配置、机架涂层供应完整性、实测 M 修正试验边界制造场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `plasser-production` | literature | [Plasser & Theurer: Production](https://www.plassertheurer.com/en/company/production) | 制造商 Cutting Shop、Welding Shops、Part Production、Complex Cylinders、Work Unit Production Shop、Bogie and Gearbox Production Shop、Electrical Pre-Assembly、(Final) Assembly、Commissioning 各标题段落。支持阶段区分及厂家特定安装前试验调试背景，不作普遍坯料数量化学压力温度试验循环。实际场址记录决定纳入工序。 |
| `matisa-compact` | literature | [MATISA: Compact tamping machines](https://www.matisa.ch/brochures_pdf/en/bourreuses_compactes_en.pdf) | 未标出版日期型号手册，PDF 第 3 页（印刷第 4–5 页）B 45 D：普通线路车辆转向架司机室独立捣固单元。仅配置案例；不采用型号特定镐数频率生产率重量数值性能。其他道岔型号排除。 |
| `plasser-csm-case` | literature | [Plasser & Theurer: used 09-32 CSM](https://www.plassertheurer.com/en/fleet/used-machines/09-32-csm) | Technical Specifications 与 Description 识别 1996 年机器，含柴油驱动、液压捣固起拨道、气动制动。仅历史配置事实；二手转售产品本身排除。不采用公开重量发动机额定值振动频率油箱容量几何或命名油品化学作为目前要求量值。 |
| `plasser-hybrid` | literature | [Plasser & Theurer: Unimat 09-32/4S Dynamic E3](https://www.plassertheurer.com/en/machine/universal-tamping-machines/unimat-09-32-4s-dynamic-e3) | Hybrid drive 段落：柴油或接触网电动机可驱动液压作业单元。排除反例防止以液压执行证明纯柴油供能。不采用运营噪声排放节省电池收益或生产因子。 |
