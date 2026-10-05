---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.light-powered-aeroplane
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 轻型金属活塞螺旋桨飞机制造

## 1. 范围与适用性

制造新完整有人固定翼单台火花点火往复式活塞螺旋桨飞机，板铝机翼及金属机身含声明钢管部分，实际切形成钻铆及有资质连接、供货动力装配、固定前三点起落架、操纵内装电气安装及有界制造验收。铆接钢管连接遵从实际放行图纸，不对所有产品规定同一合金或连接技术。分类适用性须独立建立空重不超过2000kg；此较窄路线不覆盖CPC49622全部飞机。

排除无人机直升旋翼机无动力及动力滑翔机、涡轮涡轴涡扇推进、电混推进、主体复合机体、套件独售发动机部件桨、大修修理及航空运输服务。排除训练商业飞行旅客公里日常维护机场报废；实际工厂验收飞行仅属于声明制造起终点，须实测归属支持投入排放介质，不由此声称寿命或完整摇篮到门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.light-powered-aeroplane |
| classification_refs | CPC:3.0:49622; narrower |
| covered_products | 制造新完整有人固定翼单台火花点火往复式活塞螺旋桨飞机，板铝机翼及金属机身含声明钢管部分，实际切形成钻铆及有资质连接、供货动力装配、固定前三点起落架、操纵内装电气安装及有界制造验收。铆接钢管连接遵从实际放行图纸，不对所有产品规定同一合金或连接技术。分类适用性须独立建立空重不超过2000kg；此较窄路线不覆盖CPC49622全部飞机。 |
| excluded_products | 排除无人机直升旋翼机无动力及动力滑翔机、涡轮涡轴涡扇推进、电混推进、主体复合机体、套件独售发动机部件桨、大修修理及航空运输服务。排除训练商业飞行旅客公里日常维护机场报废；实际工厂验收飞行仅属于声明制造起终点，须实测归属支持投入排放介质，不由此声称寿命或完整摇篮到门。 |
| representative_product | 一台完整验收金属固定翼活塞螺旋桨飞机，实际安装表；存档P92 Eaglet仅物理路线案例，非必选型号或当前批准。 |
| production_route | 金属机体制造连接; 表面处理涂覆; 动力起落架飞行系统安装; 有界工厂试验称重验收 |
| market_state | 完整验收安装飞机，声明技术润滑冷却液压流体电解液内含一次；全部燃油人员行李独立备件包装试具排除M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收完整声明有人金属活塞飞机。 |
| How much | 1kg验收净制造输出，由同一完整设备实测M kg换算。 |
| How well | 实际放行设计配置及当前机型适用符合性验收记录，不设通用宣传性能阈值。 |
| How long or cycle | 一个有记录制造验收周期，非全寿命航空运行，不编造寿命。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 空重不超过2000公斤的飞机和其他动力飞机，无人驾驶飞机除外 `48b19d5d-42e6-401e-acda-6a641309a090` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号修订机号放行装备表；有人固定翼活塞路线；结构牌号状态板厚连接工单；供货发动机桨架操纵航电安装表预充内含；机型实际适用燃流体试验方案；制造场期验收数返工；当前校准完整飞机称量原件皮重配置及实测排除燃油库存修正；独立安装部件质量核不确定性；净M kg区别基本空重最大起飞质量及独立记录CPC空重状态<=2000kg；公用运输处理覆盖缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | frame_power; coat_power; system_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量实际电能，kWh乘3.6MJ/kWh，不以额定功率乘假定时间替代。 |
| scrap_volume | al_scrap | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 为此废物参考属性实测含空隙松散堆积体积；独立废料kg核金属平衡，不用100kg/m3默认换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际制造装配场已识别接收金属库存及供货成品航空发动机桨架系统模块。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49622; narrower |
| recursive_input_rule | 外购完整机体作上游模块，只将实际追加安装验收作前景，不对已成模块重复库存制造。 |
| upstream_dataset_requirement | 扩展前景外前须实际相容库存发动机桨系统、公用运输处理模块，声明供货配置属性预充范围。 |
| disclosure | 自制外购起点场期、实际外包作业测试、模块内含、公用支持移动、净状态修正、排除上游缺口；单独前景非完整摇篮到门。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_package | systems | 供货发动机仅含有记录附件减速器预充；独供桨架冷却排气件流体另行，内含不重计；实际场内部件制造须扩展物理库存作业，不假装购入kg。 | tecnam-eaglet |
| boundary_trials | acceptance | 分开工厂地面试车验收飞行与客户训练运行，记录起终点时长燃油及实际地面车牵引气电支持；地面设备非机上推进；试验载荷退回燃油库存不进入净M。 |  |
| boundary_fuel | finished_machine | 所有燃油含不可用残余燃油排除制造净M；航空基本空重记录可能含残油且油口径不同；采用签署实测状态特定修正并保留航空原值和制造M，不修改适航记录。 | faa-weight-2016 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `airframe` | 金属机体制造连接 | required | 按实际放行工单切形钻铆连接检查；供货完整结构替代内含制造。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用时 |
| `coat` | 表面处理涂覆 | conditional | 仅实际规定前处理底漆饰面固化，具体化学品分采。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用时 |
| `systems` | 动力起落架飞行系统安装 | required | 实际外购航空活塞发动机桨固定架及完整声明操纵内装电气安装表；记录模块内含。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用时 |
| `acceptance` | 有界工厂试验称重验收 | required | 实际配置特定检查功能泄漏地面试车，执行时验收飞行、返工及实测净质量验收。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用时 |

### 过程：金属机体制造连接（`airframe`）

按实际放行工单切形钻铆连接检查；供货完整结构替代内含制造。

#### 输入

##### 产品流

###### 铝板材（`sheet`）

实际放行结构牌号状态包铝及厚度>0.2mm证书；领料减退料质量，切割成形钻孔返工与留存库存分别记录。

- 选定流： 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

###### 航空铬钼钢结构管（`steel_tube`）

实际机身或发动机架管牌号炉号尺寸连接工艺；外购焊架替代内含库存作业。

- 选定流： 航空铬钼钢结构管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

###### 实芯铝合金航空铆钉（`solid_rivet`）

实际牌号头型直径长度及可追溯领退kg，独立保留件数；铆接由放行图纸决定，非通用供货规定。

- 选定流： 实芯铝合金航空铆钉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

###### 交流电（`frame_power`）

实际低于1kV终端切形钻连接工装需求；自产压缩空气制备电量一次计；执行焊管时另列实际焊耗材保护气。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 新铝废料 松散态（`al_scrap`）

实际松散未压实新边角出厂，采含空隙堆积体积m3，校准容器尺寸填充原始观测按验收设备归属；独立称废料kg核金属平衡，不采用公开默认堆积密度100kg/m3。

- 选定流： 新铝废料 松散态 `0f5a6a98-22cc-4549-af43-6ed44014e5de`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`particle_air`）

仅实际治理后即时空气未特指子介质粒径颗粒排放，采样排气流量时间有据；捕集屑尘为废物非排放，实测粒径分级须独立身份。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_airframe。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_airframe`
- 来源：

### 过程：表面处理涂覆（`coat`）

仅实际规定前处理底漆饰面固化，具体化学品分采。

#### 输入

##### 产品流

###### 配方环氧航空防腐底漆（`epoxy_primer`）

实际使用时记录配方SDS湿kg固含留存固化膜，不假定含铬酸盐；其他实际前处理饰面须独立化学行。

- 选定流： 配方环氧航空防腐底漆
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

实际使用市政产品清洗补水时记录，循环转移分开；产生废水时另采化学组成去向。

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

实际低于1kV清洗涂覆通风电固化耗电；实际其他固化燃料另列。

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

###### 废涂料残渣（`paint_residue`）

实际湿底漆喷溢残渣送声明处理，非捕集尘清洗污泥或直接空气排放。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
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

###### 二甲苯（所有异构体）（`xylene_air`）

仅实际CAS1330-20-7二甲苯治理后即时未特指空气排放；总VOC及溶剂领料非此交换。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

### 过程：动力起落架飞行系统安装（`systems`）

实际外购航空活塞发动机桨固定架及完整声明操纵内装电气安装表；记录模块内含。

#### 输入

##### 产品流

###### 飞机用火花往复式或旋转式活塞内燃机（`piston_engine`）

一种实际供货往复式航空推进火花发动机，安装供货发动机kg，型号序号内含减速器附件预充声明；件数仅追溯；独立发动机质量核整机M，不用排除航空的通用柴油身份。

- 选定流： 飞机用火花往复式或旋转式活塞内燃机 `c2f3c29e-d5cd-4267-a518-74b0131a7914`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品定距木复合航空螺旋桨总成（`propeller`）

一种放行供货型号kg含声明桨毂；另供整流罩紧固件不自动内含，不替海用青铜桨。

- 选定流： 成品定距木复合航空螺旋桨总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品固定前三点航空起落架总成（`landing_gear`）

实际弹簧钢主架前架模块kg，供货安装表识别内含轮胎制动，不重复独供件。

- 选定流： 成品固定前三点航空起落架总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品航空液压盘式制动单元（`brake_unit`）

起落架模块外实际另供一个制动单元时记录kg；实际液压液化学充注非内含时另列。

- 选定流： 成品航空液压盘式制动单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品PMMA航空风挡（`windshield`）

实际定形PMMA一个风挡kg及图纸厚度供货证书，聚碳酸酯或玻璃另卡。

- 选定流： 成品PMMA航空风挡
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 带安装约束装置的成品软包航空座椅（`seat`）

一种实际供货座椅约束型号kg，配置座数独立，不假定通用二四座。

- 选定流： 带安装约束装置的成品软包航空座椅
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品航空VHF通信电台（`radio`）

实际安装一个VHF电台型号kg；另供导航接收机EFIS天线独立物理卡。

- 选定流： 成品航空VHF通信电台
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 点火接线装置和其他用于车辆、航空器或船只的点火接线装置（`harness`）

一种实际供货成品航空辅助线束kg及接头端接内含绝缘规格；发动机已含点火线不重计。

- 选定流： 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 成品铅酸航空启动电池（`battery`）

实际型号安装供货kg含电解液一次，记录电压容量干湿状态。

- 选定流： 成品铅酸航空启动电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 配方航空活塞发动机润滑油（`engine_oil`）

一种实际适用配方超出供货预充的追加油，领退移留kg分别，不规定通用油级量。

- 选定流： 配方航空活塞发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 配方乙二醇航空发动机冷却液（`coolant`）

实际液冷发动机使用此具体配方浓度且超出预充时记录kg；风冷配置不默认充注。

- 选定流： 配方乙二醇航空发动机冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

###### 交流电（`system_power`）

实际低于1kV安装对中操纵调校泄漏电功能试验耗电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_systems。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_systems`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：有界工厂试验称重验收（`acceptance`）

实际配置特定检查功能泄漏地面试车，执行时验收飞行、返工及实测净质量验收。

#### 输入

##### 产品流

###### 航空汽油（`test_gasoline`）

实际批准航空汽油用于有界工厂发动机地面试车及验收飞行时，证书SDS含铅及领退留实测；车用汽油非此行，不强制100LL；交付运行燃油库存排除M，不算已耗。

- 选定流： 航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 交流电（`test_power`）

实际低于1kV机库试具称量充电需求，购入航空燃油区别电网电。

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

实际非发泡非自黏保护膜kg排除M；实际箱托盘另列物料。

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

###### 空重不超过2000公斤的飞机和其他动力飞机，无人驾驶飞机除外（`finished_machine`）

完整验收有人固定翼活塞螺旋桨金属飞机配置的1kg份额，修正实测净M，永久技术流体一次，所有燃油排除，分类空重记录独立。

- 选定流： 空重不超过2000公斤的飞机和其他动力飞机，无人驾驶飞机除外 `48b19d5d-42e6-401e-acda-6a641309a090`
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

###### 废润滑油（`used_oil`）

实际分流工厂试验废矿物润滑油送处理，无冷却液溶剂混合；合成油另匹配身份。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 基本流

###### 二氧化碳（化石）（`fossil_co2_air`）

只表示实测试验燃油含碳平衡含回收未燃碳不确定性或实测物种的实际化石CO2，即时未特指空气排放，不假定通用燃烧因子。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 一氧化氮（`no_air`）

仅实际有界试验逐物种实测NO CAS10102-43-9即时未特指空气；NO2/N2O总NOx无物种依据不换；验收飞行高度介质超未特指空气范围须另配身份。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 优先实际配置工单和领退测试计量归属；报告验收数匹配完整输出，含实际拒收返工负担，不以销售或混配置稀释。 |  |
| allocation_shared | shared operations | 先分过程，不能分时按适用实测因果机器占用连接长度工时处理表面试验支持能量分配，核总表，记录驱动单位比较合理替代；固定航电测试不按未测每机平均或质量份额。 |  |
| allocation_scrap | waste | 不自动抵扣避免原铝可回收料退回燃油；内部转移外排废物处理真实共产品分开；物理因果不可用时才对有据真实共产品经济分配，保留实际价格时期敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 验收完整输出 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每台验收飞机 | 匹配制造验收时期 | 实际验收称量机库 | 每台验收净质量 | 当前机型方法；校准全部支点称读数皮重；实测燃油状态修正安装表 |
| cp_airframe | airframe | 独立原子交换 | foreground_record | 牌号状态炉号；板管铆领退；切形连接工单；实测kWh；松散废料实测堆积m3及独立kg；实际排气采样 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；al_scrap测含空隙松散堆积m3，独立称kg核平衡；记录飞机配置工单验收数库存返工去向。 | kg; MJ; m3 | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_coat | coat | 独立原子交换 | foreground_record | 配方SDS固含；湿底漆领退留膜；产品补水；能耗；独立残渣实际物种采样 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；al_scrap测含空隙松散堆积m3，独立称kg核平衡；记录飞机配置工单验收数库存返工去向。 | kg; MJ; m3 | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_systems | systems | 独立原子交换 | foreground_record | 发动机桨架操纵座航电线束型号序号；安装供货kg；内含减速器附件流体；另加油冷却液；安装电量 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；al_scrap测含空隙松散堆积m3，独立称kg核平衡；记录飞机配置工单验收数库存返工去向。 | kg; MJ; m3 | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_acceptance | acceptance | 独立原子交换 | foreground_record | 机号配置；当前放行地空试验起终点时间；燃油证书含铅领退留实测；实测物种介质；校准称量皮重净修正独立部件质量平衡 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；al_scrap测含空隙松散堆积m3，独立称kg核平衡；记录飞机配置工单验收数库存返工去向。 | kg; MJ; m3 | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | sheet; steel_tube; solid_rivet; frame_power; al_scrap; particle_air; epoxy_primer; coat_water; coat_power; paint_residue; xylene_air; piston_engine; propeller; landing_gear; brake_unit; windshield; seat; radio; harness; battery; engine_oil; coolant; system_power; test_gasoline; test_power; used_oil; fossil_co2_air; no_air; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为实测退料库存回收返工后归属交换除匹配验收台数，保留kg、MJ或m3分子：松散废料m3/kg、电量MJ/kg；发动机q_item为安装供货发动机kg，非Item(s)。任何件体积换算须实测同件质量几何状态及不确定性，不用目录飞机发动机质量、标准燃油密度或最大起飞质量。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | 采用当前适用制造商称量方法、完整装备表及全部实际支点校准称具，室内避风，保留原始读数皮重水平配置日期校准不确定性及复测闭合；独立实测安装机体发动机桨架系统留存流体质量核净M；缺物理原件阻断数据使用；FAA2016仅方法示例，不代表当前授权或规定校准间隔。 | faa-weight-2016; current original weighing records |
| quality_net | finished_machine | 保留实测称量状态及签署物理修正表，扣全部实际燃油含不可用残油、人员行李临时试具独立备件包装；安装永久配重和声明技术润滑冷却液压流体电解液一次计；残油修正追溯当前机型排放测量记录，不假定零或用FAA名义密度；航空基本空重重心原记录独立保留并桥接状态，不由物料或目录估计编造净M。 | faa-weight-2016; signed fuel/stock corrections and supplier containment |
| quality_classification | finished_machine | 独立记录实际有人飞机CPC/HS空重状态及<=2000kg适用性，保留原分类依据及与制造M状态桥接；最大起飞质量设计载荷或历史宣传册不是实际空重证据；范围外飞机拒用，不自动把制造M当分类空重。 | actual classification/configuration records; public class49622 flow |
| quality_identity | all flows | 逐交换一种具体牌号型号化学状态；机上推进为class43131航空火花往复式发动机，非排除航空的43110或道路柴油涡轮地面车发动机；供货发动机kg与整机M独立核，预充不再列外部油；遵从实际参考属性，含松散废料Volume/m3且不用公开默认密度。 | actual supplier certificates/fit-list and direct public identity/property |
| quality_release | elementary | 仅采物理有据实际排放，含化学CAS即时介质子介质治理后物种浓度流量时间或实际燃油含碳平衡；粒径未特指颗粒非捕尘，二甲苯非总VOC，化石CO2非生物，NO非NO2/N2O/NOx；其他实际燃烧物种及使用含铅燃油时实际铅化合物分别表征，不假定必然铅物种系数；飞行排放须实际高度介质适用，非通用地面空气替代。 | original species sampling, actual fuel/SDS/carbon and control records |
| quality_acceptance | acceptance | 保留当前适用放行结构接头符合性、操纵行程调校起落制动燃油油冷却泄漏电气航电及实际地空验收结果返工；仅声称核验过的实际飞机批准，历史宣传装备功率速度容量质保不设方法阈值。 | current aircraft-specific released plans/results |
| quality_completeness | dataset | 核完整放行安装表与库存供货公用总量；非内含时补实际独供梁挤型防火墙罩整流件焊丝保护气紧固密封剂操纵连杆柜泵管冷却排气轮胎约束开关天线仪表涂层处理废水包装；每个物理化学交换独卡协议，不合并投入；披露实测计算估计缺失排除不适用状态不确定性及供货上游支持运输处理缺口。 | complete fit-list and independently closed stock/meter/package records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 恰好1kg完整验收声明飞机，实测cp_mass净M及独立部件平衡，同配置燃油修正原件；公式一致非物理称量或方法批准。 |  |
| validation_basis | inventory | 全部行连接合法小写标识协议及normalize_mass，匹配验收数时期分子单位；拒混配置非法数量枚举属性替代目录换算。 |  |
| validation_scope | dataset | 要求实际独立分类空重状态<=2000kg、航空发动机路线、有界制造支持试验及披露身份上游缺口；单独前景不声称运输功能或完整摇篮到门。 |  |
| validation_release | elementary | 核化学CAS介质时间及实际条件数量；购水为产品，外送废水处理为废物，资源取用与直接排放分开。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 制造新完整有人固定翼单台火花点火往复式活塞螺旋桨飞机，板铝机翼及金属机身含声明钢管部分，实际切形成钻铆及有资质连接、供货动力装配、固定前三点起落架、操纵内装电气安装及有界制造验收。铆接钢管连接遵从实际放行图纸，不对所有产品规定同一合金或连接技术。分类适用性须独立建立空重不超过2000kg；此较窄路线不覆盖CPC49622全部飞机。 |
| excluded_use | 排除无人机直升旋翼机无动力及动力滑翔机、涡轮涡轴涡扇推进、电混推进、主体复合机体、套件独售发动机部件桨、大修修理及航空运输服务。排除训练商业飞行旅客公里日常维护机场报废；实际工厂验收飞行仅属于声明制造起终点，须实测归属支持投入排放介质，不由此声称寿命或完整摇篮到门。 |
| required_metadata | 型号修订机号放行装备表；有人固定翼活塞路线；结构牌号状态板厚连接工单；供货发动机桨架操纵航电安装表预充内含；机型实际适用燃流体试验方案；制造场期验收数返工；当前校准完整飞机称量原件皮重配置及实测排除燃油库存修正；独立安装部件质量核不确定性；净M kg区别基本空重最大起飞质量及独立记录CPC空重状态<=2000kg；公用运输处理覆盖缺口 |
| required_quality_disclosure | 具体飞机安装表发动机路线供货预充独立分类状态；实测净M原始修正部件质量不确定性；实际期场数返工测试起终点；因果分配敏感性；缺身份物理记录上游处理支持覆盖；科学审查待完成。 |
| update_trigger | 结构连接饰面或推进架航电配置、供货自制外购场期、流体燃油化学、试验范围称交付状态分类依据及新身份证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| tecnam-eaglet | handbook | Tecnam，P92 Eaglet，无日期存档制造商册，PDF3页印148 Construction/Engine and Propeller/Landing Gear/Interior；PDF4页装备。https://www.tecnamair.com/wp-content/uploads/2015/05/P92-Eaglet.pdf | 仅历史金属混合管板活塞飞机路线；不采用当前批准必选型号输出重量性能制造数量质保寿命或全部接头技术；当前路线遵实际放行图纸前景记录。 |
| faa-weight-2016 | official_guidance | FAA，Aircraft Weight and Balance Handbook FAA-H-8083-1B2016，第3章印3-3至3-6（PDF35至38页），准备装备燃流体及称量皮重。https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-1.pdf | 仅历史称量方法及空重状态示例，须当前实际制造商方法校准实测修正；不采用手册名义密度示例重量校准间隔或当前法律规定，航空空重不自动等于CPC空重或净M。 |
