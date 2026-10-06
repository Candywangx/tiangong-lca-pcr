---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.wheelchair
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 折叠手动钢车架轮椅制造

## 1. 范围与适用性

制造新完整成人手动轮椅，具有折叠交叉撑焊接钢管车架、实际采用的粉末饰面、实心聚氨酯胎手推圈后轮、前脚轮，以及另供座背吊带、扶手、摆开脚托和机械驻车轮锁。前景包括实际放行管材切弯、夹具连接、条件清洗喷粉电固化、部件安装调节和配置特定工厂验收。路线由实际库存牌号、接头、供货模块内含及完整安装附件限定，不规定通用轮椅设计或配方。

排除电动或助力轮椅及其电池电机、无手推圈仅照护者推行的小轮运输椅、刚性运动碳钛铝车架、充气胎路线、倾躺站立或复杂定制座椅、维修翻新及仅装配完整外购车架的制造。仅钎焊车架不属于此焊接边界。排除临床评估处方适配、个人出行服务、乘坐距离、使用者照护者能量、在用维护和报废。有界工厂调节检查型式或抽样测试可归属时纳入制造；单独前景不代表完整摇篮到门、临床效果或寿命服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.wheelchair |
| classification_refs | CPC:3.0:49922; narrower |
| covered_products | 制造新完整成人手动轮椅，具有折叠交叉撑焊接钢管车架、实际采用的粉末饰面、实心聚氨酯胎手推圈后轮、前脚轮，以及另供座背吊带、扶手、摆开脚托和机械驻车轮锁。前景包括实际放行管材切弯、夹具连接、条件清洗喷粉电固化、部件安装调节和配置特定工厂验收。路线由实际库存牌号、接头、供货模块内含及完整安装附件限定，不规定通用轮椅设计或配方。 |
| excluded_products | 排除电动或助力轮椅及其电池电机、无手推圈仅照护者推行的小轮运输椅、刚性运动碳钛铝车架、充气胎路线、倾躺站立或复杂定制座椅、维修翻新及仅装配完整外购车架的制造。仅钎焊车架不属于此焊接边界。排除临床评估处方适配、个人出行服务、乘坐距离、使用者照护者能量、在用维护和报废。有界工厂调节检查型式或抽样测试可归属时纳入制造；单独前景不代表完整摇篮到门、临床效果或寿命服务。 |
| representative_product | 一台完整验收成人折叠手推圈手动轮椅，焊接钢架、配置特定实心聚氨酯复合轮组及指定座背支撑驻车轮锁安装表。Drive SilverSport2为配置示例，非必选型号、临床处方或其工厂接头配方证明。 |
| production_route | 钢车架及折叠构件制造; 车架表面前处理与粉末饰面; 轮组座背支撑及折叠接口装配; 配置机械验收称重出厂 |
| market_state | 完整验收可用装配轮椅，含声明安装轮座背扶手脚托轮锁附件；运输折叠或拆卸支撑不改变完整配置，完整复装后称量；使用者试验砝码包装独立附件排除净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收完整声明折叠手动轮椅，含配置特定机械功能及供货状态。 |
| How much | 1kg验收净制造输出，由一台完整验收同配置轮椅实测M kg换算。 |
| How well | 实际放行图纸供货安装表、当前适用合同符合性及接头折叠保持轮驻车锁座背支撑验收记录；不推临床适配或通用使用者等级。 |
| How long or cycle | 一个记录制造验收周期，非规定寿命或乘坐出行服务。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整折叠手动钢车架轮椅 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号放行图纸修订序号；成人手推圈折叠交叉撑架构；座宽深、靠背及实际扶手脚托变体；管板牌号几何接头饰面；轮实心胎手推圈脚轮叉轴锁轴承规格供货内含；软垫实际织物涂层缝线连接；安装支撑附件坐垫防倾带的纳入；场期验收数返工及检查型式抽样测试基准；当前适用合同及配置特定符合性验收；完整校准称量皮重净状态原件独立安装部件质量；净M kg排除使用者试验砝码包装独立件，区别目录重量载荷等级；上游库存部件公用运输处理缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | frame_power; coat_power; assembly_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量实际kWh乘3.6MJ/kWh，不按额定设备功率乘假定负荷周期。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造商接收已识别圆焊钢管及条件板丝气、供货轮座支撑模块和实际公用投入；本地车架制造条件饰面装配验收到出厂，不假定本地采矿或成分合成。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC3.0:49922; narrower manual folding steel-frame route |
| recursive_input_rule | 接收完整轮椅非原材料；购入完整涂架仅装配路线在此本地制架边界外。外购完整轮支撑模块内含记录库存工艺，不再计其内含树脂胎轴承漆。 |
| upstream_dataset_requirement | 扩展前景外前须实际相容库存化学成品轮座支撑公用运输处理模块，并披露牌号属性模块化学供货状态。 |
| disclosure | 披露场期、自制外购内含、实际图纸装配试验范围、返工型式抽样归属、排除及缺上游支持处理覆盖；不默认完整摇篮到门。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_modules | assembly | 完整轮脚轮轮锁支撑模块须独立实测安装供货kg及声明胎轴承手推圈轴垫脚板内含；每卡一种具体件配置，左右物理不同另记；本地原轮塑座制造须实际原子库存工序扩展，不继承通用模块。 | intco-components |
| boundary_tests | acceptance | 纳入归属制造设置接头折锁转动间隙检验及实际型式抽样生产试验支持能量、实际破坏拒收；区分抽样负担分配与逐台检查，不导入疲劳循环因子或患者质量投入。 |  |
| boundary_delivery | finished_machine | 核脚托扶手座轮及有据附件后为一台完整验收配置轮椅，记录运输折拆并于净称前复装；独交坐垫备件、使用者试验砝码及运输包装排除M；轴承留存脂内含一次。 |  |
| boundary_finish | coat | 仅本地实际涂覆时计具体供粉SDS领退回收固化耗用；粉末涂覆自身不意味溶剂VOC排放，实际清洗剂废水及燃气热交换存在时分别补充。 | drive-silversport |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame` | 钢车架及折叠构件制造 | required | 按放行图纸实际侧架交叉撑管材切弯夹具焊接及条件支架制造，检验接头对齐；不再计购入完整车架。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `coat` | 车架表面前处理与粉末饰面 | conditional | 仅实际追加前处理喷粉电固化返工，采用具体供货配方计量；供货饰面部件内含其上游涂层。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `assembly` | 轮组座背支撑及折叠接口装配 | required | 安装实际供货轮脚轮手推圈轮锁座背扶手脚托模块；为完整批准配置记录折叠枢轴、轴保持、对齐间隙、规定螺钉扭矩及调节。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `acceptance` | 配置机械验收称重出厂 | required | 实际折展保持、轮脚轮自由转动循迹、脚托扶手轮锁功能、座背连接饰面检验，含归属型式抽样试验返工及完整净称量。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |

### 过程：钢车架及折叠构件制造（`frame`）

按放行图纸实际侧架交叉撑管材切弯夹具焊接及条件支架制造，检验接头对齐；不再计购入完整车架。

#### 输入

##### 产品流

###### 钢管和空心型材（`steel_tube`）

实际圆形焊接非不锈钢管，记录牌号、炉号、直径壁厚及实测领退；放行图纸确定侧车架和本地交叉撑的切弯接头。

- 选定流： 钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 冷轧低碳钢轮椅轴支架薄板（`bracket_sheet`）

实际切成支架薄板时记录牌号厚度；供货成品支架替代内含薄板和作业，不双计。

- 选定流： 冷轧低碳钢轮椅轴支架薄板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 实芯碳钢焊接填充丝（`weld_wire`）

仅实际有资质连接方法使用此具体丝化学和直径时计；自熔连接不计。钎焊填料另配身份，不替代此丝。

- 选定流： 实芯碳钢焊接填充丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 纯氩焊接保护气（`shield_argon`）

仅实际工艺使用纯氩CAS7440-37-1时计量kg，或用有物理依据的状态特定体积质量换算；混合气另列。

- 选定流： 纯氩焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 交流电（`frame_power`）

实际低于1kV终端切形连接夹具抽排用电，含归属自产压缩空气一次，不按额定功率假定。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业生产后钢废料（`steel_scrap`）

仅实际分流干燥未处理非不锈钢管板边角料送声明处理，不重复内部循环。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`particle_air`）

仅实际切接磨治理后即时未特指空气颗粒排放，须采样废气时间原件；捕尘为废物，实测粒径分级另列。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

### 过程：车架表面前处理与粉末饰面（`coat`）

仅实际追加前处理喷粉电固化返工，采用具体供货配方计量；供货饰面部件内含其上游涂层。

#### 输入

##### 产品流

###### 涂料（粉末）（`coating_powder`）

实际一种供货干聚合树脂添加剂粉末配方，记录SDS、化学颜色领退回收kg留膜；公开材料身份不建立具体树脂或固化配方。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 自来水（`coat_water`）

实际使用时记录购入市政产品清洗补水kg；循环转移、清洗剂、资源取用及外排废水分别识别。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 交流电（`coat_power`）

实际低于1kV前处理喷粉电固化抽排返工耗电；电加热配置改变时另配实际热燃料或热。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不可用干聚合物粉末涂装残渣（`powder_residue`）

仅实测回收退料后实际分流不可用干粉送处理；捕尘不同时计空气排放和废物。

- 选定流： 不可用干聚合物粉末涂装残渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`powder_particle_air`）

仅实测喷粉抽排治理后即时未特指空气、粒径未特指颗粒；不假定溶剂VOC或必然粉末损失。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

### 过程：轮组座背支撑及折叠接口装配（`assembly`）

安装实际供货轮脚轮手推圈轮锁座背扶手脚托模块；为完整批准配置记录折叠枢轴、轴保持、对齐间隙、规定螺钉扭矩及调节。

#### 输入

##### 产品流

###### 含实心聚氨酯胎与手推圈的成品复合轮椅后轮（`rear_wheel`）

一种实际型号侧别轮组kg，声明胎、手推圈、轮毂、轴承轴内含；不同侧别尺寸另列，内含胎轴承不重计。

- 选定流： 含实心聚氨酯胎与手推圈的成品复合轮椅后轮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品轮椅前脚轮与叉总成（`front_caster`）

一种实际脚轮叉柄轴承实心胎模块kg，声明拖距间隙保持；不同脚轮类型另列，内含轴承不重计。

- 选定流： 成品轮椅前脚轮与叉总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 制动器总成（`wheel_lock`）

一种实际供货机械推式轮椅驻车轮锁模块kg，含侧别型号配置；公开外购轮椅制动身份限定此模块，非动态行车制动、脚轮或整椅。

- 选定流： 制动器总成 `5e18162c-b48d-4476-b7f9-23884748e7f7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品乙烯基涂覆纺织轮椅座面吊带（`seat_sling`）

一种实际供货座面kg及织物涂层包边缝线连接规格；乙烯基不自动等于单一纯PVC，须供货实际组成。

- 选定流： 成品乙烯基涂覆纺织轮椅座面吊带
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品乙烯基涂覆纺织轮椅靠背吊带（`back_sling`）

实际另供靠背型号kg，声明连接口袋内含；不与座面合并，不推临床减压功能。

- 选定流： 成品乙烯基涂覆纺织轮椅靠背吊带
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 带塑料脚板的成品摆开式轮椅脚托（`footrest`）

实际一种供货脚托跟带挂架模块kg，声明侧别锁止调节接口；升降及其他类型另物理卡。

- 选定流： 带塑料脚板的成品摆开式轮椅脚托
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品软垫轮椅扶手总成（`armrest`）

一种实际扶手型号kg，声明软垫支撑侧板连接范围，实际固定或可拆变体不互代；左右不同类型另列。

- 选定流： 成品软垫轮椅扶手总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品模制弹性体轮椅推手握把（`grip`）

一种实际供货握把型号弹性体组成kg保持方法；其他聚合组成或把手管另列。

- 选定流： 成品模制弹性体轮椅推手握把
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 钢螺钉（`steel_screw`）

一种实际螺钉材质螺纹长度涂层规格，独供kg保留件数追溯；其他螺栓螺母垫圈销设计另卡，非紧固集合。

- 选定流： 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品钢制轮椅交叉撑枢轴销（`pivot_pin`）

一种实际供货销牌号直径保持kg，非整交叉撑；本地制撑库存归车架，不再购入成品模块。

- 选定流： 成品钢制轮椅交叉撑枢轴销
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 交流电（`assembly_power`）

实际低于1kV部件安装扭矩调节检查设备耗电；人力推进不设购入推进电量行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置机械验收称重出厂（`acceptance`）

实际折展保持、轮脚轮自由转动循迹、脚托扶手轮锁功能、座背连接饰面检验，含归属型式抽样试验返工及完整净称量。

#### 输入

##### 产品流

###### 交流电（`test_power`）

实际低于1kV生产检查称量及归属型式抽样试验设备能量，分配给正确生产拒收。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD）（`film`）

实际使用时记录非发泡非自黏保护膜kg，排除M；实际纸板独交坐垫运输工装另配。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整折叠手动钢车架轮椅（`finished_machine`）

1kg完整声明验收配置手动轮椅，安装后轮脚轮座背扶手脚托轮锁及声明附件一次；实测净M，非目录重量或使用者载荷。

- 选定流： 完整折叠手动钢车架轮椅
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 优先实际图纸配置工单及库存表计归属；完整验收椅数匹配制造时期，含实际拒收返工破坏试验负担；不以销量混配置或假定通用批次收率作分母。 |  |
| allocation_shared | shared operations | 先分作业；无法分时以实际因果机器占用接头作业、涂覆表面固化占用及检验试验设备耗用确定有据驱动，核共享总表并比较合理替代；固定检查负担不自动按椅质量分配。 |  |
| allocation_scrap | waste | 分开内部循环外送钢粉废物处理真实共产品，不自动抵扣避免原钢涂料；仅在因果物理不可用且真实共产品有据时经济分配，保留实际价格时期敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 验收完整输出 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每台验收轮椅 | 匹配制造验收时期 | 实际完整称量验收站 | 每台验收净质量 | 校准全部车轮平台读数皮重；完整安装附件且无操作者试验砝码包装；独立部件质量 |
| cp_frame | frame | 独立原子交换 | foreground_record | 管板牌号炉号尺寸领退kg；图纸接头工艺夹具工单；实际丝气；电量干废料治理后物种采样 | 逐实际交换按已识别供货领退及独立称量安装kg、校准公用表或实际治理后物种采样废气时间分别记录；保留型号图纸配置工单库存返工、同一配置的验收设备数量及废物去向。 | kg; MJ | 每批台试验及完整时期 | 同配置制造验收周期 | 实际制造试验场及声明外包场 | 可归属工序交换 / 同一配置的验收设备数量 | 供货配方安装表、校准采样不确定性、领退库存数量闭合 |
| cp_coat | coat | 独立原子交换 | foreground_record | 实际配方SDS处理表面；粉末领退回收留膜；清洗水化学品；固化抽排表计分流残渣 | 逐实际交换按已识别供货领退及独立称量安装kg、校准公用表或实际治理后物种采样废气时间分别记录；保留型号图纸配置工单库存返工、同一配置的验收设备数量及废物去向。 | kg; MJ | 每批台试验及完整时期 | 同配置制造验收周期 | 实际制造试验场及声明外包场 | 可归属工序交换 / 同一配置的验收设备数量 | 供货配方安装表、校准采样不确定性、领退库存数量闭合 |
| cp_assembly | assembly | 独立原子交换 | foreground_record | 实际轮脚轮胎手推圈轴锁及座背支撑安装表；供货模块内含；独立安装kg；枢轴紧固保持对齐间隙扭矩检查 | 逐实际交换按已识别供货领退及独立称量安装kg、校准公用表或实际治理后物种采样废气时间分别记录；保留型号图纸配置工单库存返工、同一配置的验收设备数量及废物去向。 | kg; MJ | 每批台试验及完整时期 | 同配置制造验收周期 | 实际制造试验场及声明外包场 | 可归属工序交换 / 同一配置的验收设备数量 | 供货配方安装表、校准采样不确定性、领退库存数量闭合 |
| cp_acceptance | acceptance | 独立原子交换 | foreground_record | 序号配置；放行验收型式抽样方案结果时期验收拒收数；试验设备表计；完整校准称量皮重附件临时试验砝码独立安装物料 | 逐实际交换按已识别供货领退及独立称量安装kg、校准公用表或实际治理后物种采样废气时间分别记录；保留型号图纸配置工单库存返工、同一配置的验收设备数量及废物去向。 | kg; MJ | 每批台试验及完整时期 | 同配置制造验收周期 | 实际制造试验场及声明外包场 | 可归属工序交换 / 同一配置的验收设备数量 | 供货配方安装表、校准采样不确定性、领退库存数量闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; bracket_sheet; weld_wire; shield_argon; frame_power; steel_scrap; particle_air; coating_powder; coat_water; coat_power; powder_residue; powder_particle_air; rear_wheel; front_caster; wheel_lock; seat_sling; back_sling; footrest; armrest; grip; steel_screw; pivot_pin; assembly_power; test_power; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为实测领退库存回收返工后归属交换除匹配同一配置的验收设备数量；M为同一完整安装状态独立实测质量。保留kg或MJ分子（电量MJ/kg）。螺钉模块q_item为实际供货安装kg，件数仅辅助追溯。其他件面积体积换算须原始同件质量几何状态不确定性，不用目录椅重、额定使用者载荷、设计密度或假设25%部件份额。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | 在支承全部车轮的校准平台称量完整验收同配置轮椅，控制皮重，不计操作者、扶持把手工装或试验载荷。保留序号配置原读数仪器校准日期复测不确定性；独立安装架撑轮脚轮座背支撑锁紧固附件质量核M；缺物理原件阻断数据使用。 | original complete weighing and independent component records |
| quality_complete | finished_machine | 声明具体安装扶手脚托座背轮附件配置，作为参考部分供货的已安装坐垫带防倾装置纳入；拆交支撑复装后称量，独交备件坐垫包装排除M；轴承留存脂内含一次；目录折展尺寸、宣传41lb或运输重不代替当前完整M。 | actual released installed fit-list and signed weighing state |
| quality_identity | all flows | 逐交换一种具体库存牌号配方部件介质；即使Mass/kg一致，车架或制动身份也不代表完整轮椅。采用外购轮椅制动身份限定实际机械驻车轮锁，非动态制动。供粉为一种已识别干配方，非涂覆服务；废粉铝含量属性非废物总Mass；保留公开属性，换算须原证据。 | direct public identity/property and actual supplier drawings/SDS |
| quality_architecture | frame; assembly | 追溯实际焊接钢管接头工艺及折叠交叉撑枢轴至放行图纸；核折叠保持、轴脚轮手推圈相容间隙、座背连接、脚托扶手锁止及驻车轮锁对齐。材料名交叉撑数或单独标准引文不证明强度或临床适配；RESNA2004钎焊原型反证所有钢椅同一焊接配方。 | intco-components; resna-india-2004; actual released drawings |
| quality_acceptance | acceptance | 保留当前适用型号配置符合性及工厂接头车架对齐、折叠枢轴保持、轮脚轮转动循迹、驻车轮锁保持功能、座背扶手脚托连接饰面检验方案结果。型式抽样破坏测试须实际测试配置方法版本实验室结果、抽样数量时期、支持耗用拒收归属；不复制来源ISO阈值循环数使用者载荷或通用寿命，实际合同要求独立有据。 | intco-components; actual released inspection/test plans |
| quality_release | elementary | 仅实际有据治理后即时空气未特指粒径颗粒，须浓度废气时间或直接实测质量；捕粉尘归废物非空气。发现实际粒径分级颗粒化学物种时用独立相容身份扩展；喷粉不支持假定溶剂VOC，上游电量排放非直接工厂排放。 | original post-control sampling and measured waste balances |
| quality_coverage | dataset | 核逐安装图纸部件与供货库存公用总量；非内含时补实际不同后轮脚轮、轴承轴手推圈握把扶手垫跟带交叉撑衬套销螺栓螺母垫圈标识、可选防倾带坐垫及实际涂层清洗剂废水纸箱。每个物理化学交换一卡协议数量基准，不用通用轮椅部件集合；识别实测计算估计缺失排除不适用状态不确定性，披露上游库存模块支持运输处理缺口。 | complete actual fit-list, independently closed stocks/meters |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 恰好1kg完整验收声明手动轮椅；参考名等于finished_machine名。空产品UUID仅在候选精确身份缺口下允许；须cp_mass实测M及独立完整配置安装质量核验，公式通过非物理数据或方法批准。 |  |
| validation_basis | inventory | 每行连接支持的小写标识协议normalize_mass，核同一配置实测验收数时期分子单位；拒混配置非法枚举及质量能量含量件数替代目录换算。 |  |
| validation_scope | dataset | 须实际手动手推圈实心胎折叠焊钢架构、声明自制外购本地制造机械验收及身份上游缺口；不能由此前景推临床适配出行效果或完整摇篮到门。 |  |
| validation_release | elementary | 核实际即时空气颗粒状态介质和条件数量；购入自来水产品、外送废水尘处理、资源取用直接排放分别保留。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 制造新完整成人手动轮椅，具有折叠交叉撑焊接钢管车架、实际采用的粉末饰面、实心聚氨酯胎手推圈后轮、前脚轮，以及另供座背吊带、扶手、摆开脚托和机械驻车轮锁。前景包括实际放行管材切弯、夹具连接、条件清洗喷粉电固化、部件安装调节和配置特定工厂验收。路线由实际库存牌号、接头、供货模块内含及完整安装附件限定，不规定通用轮椅设计或配方。 |
| excluded_use | 排除电动或助力轮椅及其电池电机、无手推圈仅照护者推行的小轮运输椅、刚性运动碳钛铝车架、充气胎路线、倾躺站立或复杂定制座椅、维修翻新及仅装配完整外购车架的制造。仅钎焊车架不属于此焊接边界。排除临床评估处方适配、个人出行服务、乘坐距离、使用者照护者能量、在用维护和报废。有界工厂调节检查型式或抽样测试可归属时纳入制造；单独前景不代表完整摇篮到门、临床效果或寿命服务。 |
| required_metadata | 型号放行图纸修订序号；成人手推圈折叠交叉撑架构；座宽深、靠背及实际扶手脚托变体；管板牌号几何接头饰面；轮实心胎手推圈脚轮叉轴锁轴承规格供货内含；软垫实际织物涂层缝线连接；安装支撑附件坐垫防倾带的纳入；场期验收数返工及检查型式抽样测试基准；当前适用合同及配置特定符合性验收；完整校准称量皮重净状态原件独立安装部件质量；净M kg排除使用者试验砝码包装独立件，区别目录重量载荷等级；上游库存部件公用运输处理缺口 |
| required_quality_disclosure | 具体轮椅图纸安装配置供货模块状态；实际完整M校准皮重独立部件质量不确定性；实际库存表计试验时期验收拒收数；型式抽样检查归属和因果共享分配敏感性；缺物理记录身份及上游支持处理范围；科学审查待完成。 |
| update_trigger | 车架牌号接头折叠机构饰面、轮脚轮锁或座背支撑配置、供货自制外购场期、试验范围称交状态及新身份证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| drive-silversport | handbook | Drive Medical，SilverSport2 SSP218FA-SF官方产品页，无日期，About This Item钢架乙烯基、实心聚氨酯复合轮、支撑轮锁及配置选项；无页码。https://shop.drivemedical.com/us/en/products/mobility/wheelchairs/standard-wheelchairs/silver-sport-2-wheelchair/p/SSP218FA-SF | 仅具体成品配置示例；不采用当前临床符合性、必选型号配方、41lb净M、额定载荷、质保寿命或工厂数量；遵实际供货组成完整安装称量放行图纸。 |
| intco-components | handbook | INTCO，Manual Wheelchair Anatomy and Components，页面日期2026年9月3日；Frame and cross-brace、Wheels, casters、Seating, backrest、Brakes, locks章节；无页码。https://www.intcowheelchair.com/news/manual-wheelchair-structure-and-components | 部件接口具体配置安装表、接折保持轮锁及供货检验控制背景；不证明具体符合性或临床适用；列举ISO号不采用为数量规则当前法律要求，须实际适用合同测试原件。 |
| resna-india-2004 | literature | RESNA2004原研究论文集，Design and development of a manual wheelchair for India，DESIGN及DEVELOPMENT，无页码HTML。https://www.resna.org/sites/default/files/legacy/conference/proceedings/2004/Papers/StudentScientific/Winners/Wheelchair.html | 仅历史折叠钢管板材制造部件质量示例；区分焊接描述与钎焊原型，不推1020牌号2mm厚度原型质量疲劳循环寿命通用连接工艺或当前标准符合性。 |
