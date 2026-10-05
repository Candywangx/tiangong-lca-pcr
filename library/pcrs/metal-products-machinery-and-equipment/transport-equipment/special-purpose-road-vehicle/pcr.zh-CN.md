---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.special-purpose-road-vehicle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整柴油后装压缩式垃圾道路车辆制造

## 1. 范围与适用性

完整新柴油单腔后装压缩式垃圾道路车辆制造：车辆改装制造厂接收可运行驾驶室底盘，制造钢箱体/副车架并集成液压压缩/卸料装备，通过验收。声明一种具体VIN/型号及放行箱体/底盘配置。本产品与制造路线边界窄于CPC49119，不覆盖全部专用车辆。

排除仅箱体/仅底盘、翻新/再制造车辆、多腔及侧/前装架构、电动/CNG驱动、扫路车、消防车、汽车起重机、混凝土搅拌车、救护车/普通货车。垃圾收集/运输/处理服务、所运垃圾质量、驾驶员/作业人员/载荷、运行、维护、分销/寿命终结不在范围。出厂功能/路试/返工属制造。不假定服务寿命、收集产率或垃圾吞吐分母。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.special-purpose-road-vehicle |
| classification_refs | CPC:3.0:49119; narrower |
| covered_products | 完整新柴油单腔后装压缩式垃圾道路车辆制造：车辆改装制造厂接收可运行驾驶室底盘，制造钢箱体/副车架并集成液压压缩/卸料装备，通过验收。声明一种具体VIN/型号及放行箱体/底盘配置。本产品与制造路线边界窄于CPC49119，不覆盖全部专用车辆。 |
| excluded_products | 排除仅箱体/仅底盘、翻新/再制造车辆、多腔及侧/前装架构、电动/CNG驱动、扫路车、消防车、汽车起重机、混凝土搅拌车、救护车/普通货车。垃圾收集/运输/处理服务、所运垃圾质量、驾驶员/作业人员/载荷、运行、维护、分销/寿命终结不在范围。出厂功能/路试/返工属制造。不假定服务寿命、收集产率或垃圾吞吐分母。 |
| representative_product | 一台新验收柴油后装单腔钢箱体压缩垃圾车，声明安装桶提升器/流体状态；箱体尺寸/底盘/执行机构/装载附件为配置变型，不是可互换千克。 |
| production_route | 外购可运行底盘；钢箱体/副车架切割/成形/连接；实际表面；底盘安装/液压控制；出厂测试/称量/放行；实际发运防护。 |
| market_state | 完整质量放行车辆，箱体/料斗空置，无人员/载荷，实际留存液压液/燃料状态；包装排除净整车。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并出厂验收一种声明完整柴油后装压缩垃圾车辆。 |
| How much | 1 kg验收净完整整车，以实测M从一台完整设备归一化；不是一千克所载垃圾或收运服务。 |
| How well | 符合实际放行图纸/物料、底盘箱体接口及型号特定结构/液压/控制联锁/道路放行验收；保留实际具备的批准/测试标识，不继承通用测试压力、压缩比、周期时长/认证。 |
| How long or cycle | 一个制造/验收周期；运行里程、收集能力/寿命排除参考基准。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未另列明的专用机动车辆 `b593d5fc-0d81-43a6-9689-debda67bcb94` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | VIN/型号/物料清单修订；柴油底盘供应方及内含传动/驾驶室/车轮/流体；单腔钢箱体尺寸/牌号/厚度/制造路线；副车架/安装设计；料斗/压缩/推料/尾门设计；具体泵/缸/阀/软管/取力器/控制规范；安装桶提升器/附件；涂层配方/自制外购；液压液/燃料组分及交付液位；实测净M；场址/时期/验收台数；实际验收方案；公用工程/供应方/运输/处理覆盖；独立备件/包装排除 |

类别产品身份经全部必需限定信息约束至完整制造后装车配置；不提供通用车辆平均或数值上游清单；缺失限定信息的数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | body_electricity; coating_electricity; integration_electricity; release_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 表计实测kWh按3.6 MJ/kWh换算MJ，保留实际电压/供应方；机械取力需求来自测试燃料，不另计电投入。 |

以校准整车秤称量同一验收完整安装整车：料斗/箱体空置，无人员/货物/临时测试压载，排除发运防护/独立备件。单独VIN绑定交付状态记录声明留存液压油/燃料/底盘冷却液/润滑液、安装附件/备件状态、毛读数/皮重排除；未交付的可回收测试充注排除。样本整备质量、总重、桥限值/箱体近似质量不能替代M。按件采购部件可在真实单件质量/明确换算支持下保留原台数身份；不得将公开台数/面积/体积属性改成Mass。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 改装制造厂接收可运行柴油驾驶室底盘、钢材及放行外购液压/电子部件；底盘制造/钢材轧制/部件制造在上游，除非明确增加独立场内模块。 |
| starting_condition_role | 声明车辆改装制造前景起点。 |
| product_classification_scope | 完整新柴油单腔后装压缩式垃圾道路车辆制造：车辆改装制造厂接收可运行驾驶室底盘，制造钢箱体/副车架并集成液压压缩/卸料装备，通过验收。声明一种具体VIN/型号及放行箱体/底盘配置。本产品与制造路线边界窄于CPC49119，不覆盖全部专用车辆。 |
| recursive_input_rule | 外购完整垃圾车不是部件代理；外购已涂箱体、底盘/液压子总成替代内含场内物料/作业；内部制造交接为转移；供应商内含与另装部件/流体分开。 |
| upstream_dataset_requirement | 扩展评价须实际相容底盘/钢材/化学/部件供应方清单、外包/入厂/场际运输、公用工程/外部处理；UUID确认身份，不是清单数量/供应方；仅本前景模块不是完整从摇篮到工厂门。 |
| disclosure | 声明场址/时期、箱体底盘自制外购/变型、安装与独立供货、接收/交付流体状态、验收返工、公用工程载体及供应方/运输/处理缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_body | body | Heil案例支持钢箱体及焊接成形槽梁副车架；实际放行图纸决定制造/涂层/耐磨牌号，不规定手册钢厚/通用配方。 | heil-durapack-5000-2025 |
| boundary_interface | integration | Heil液压/底盘表及Dennis Eagle箱体变型说明部件/接口特定性；Scania历史连接选项须当前型号安装依据，不批准本安装或强制螺栓/焊接组合。 | heil-durapack-5000-2025; dennis-eagle-olympus; scania-chassis-subframe |
| boundary_service | release | 纳入实际出厂燃料、检漏/压缩/路试/回收，排除垃圾收集/处理及日常运行负载；测试载荷须识别并在M称量前移除。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| body | 钢箱体与副车架制造 | required | 实际钢材切割/成形/连接、料斗/压缩板/推料/尾门结构；外购完整模块替代内含场内物料/作业。 | foreground_production | 每 1 kg 参考流 |
| coating | 箱体防腐与涂装 | required | 实际放行表面路线或披露供货已涂箱体；清洗/底漆/面漆/电固化为条件场内操作，不是必需通用化学配方。 | foreground_production | 每 1 kg 参考流 |
| integration | 底盘安装与液压控制集成 | required | 接收完整可运行柴油驾驶室底盘；安装具体箱体/副车架、液压执行/控制及实际选配提升器；记录接口批准/供应商内含范围。 | foreground_production | 每 1 kg 参考流 |
| release | 调试、验收与称量 | required | 实际检漏/压力/压缩/推料、联锁/急停、路试/制动及型号特定测试；记录实测燃料/公用工程/回收及完整验收整车M。 | foreground_production | 每 1 kg 参考流 |
| packing | 发运防护 | conditional | 仅实际单独定量发运防护，排除整车M；独立备件另披露。 | foreground_production | 每 1 kg 参考流 |

以下为单交换候选，不是通用完整物料清单。补齐实际放行路线：增列每种未内含在其他采购中的另供铰链/销/轴承/密封/滤芯/接头/支架/螺母/垫圈、压缩板、缸设计、硬管、显示屏/开关/传感器/灯/摄像头、提升总成/涂层成分。必要工序保持必要，化学品/技术候选为条件适用。实际机加工/喷砂/热处理时增列操作及具体磨料/润滑液/公用工程/废物。记录外包及全部工厂排放/废物；捕集焊尘与空气颗粒分开。

### 过程：钢箱体与副车架制造（`body`）

实际钢材切割/成形/连接、料斗/压缩板/推料/尾门结构；外购完整模块替代内含场内物料/作业。

#### 输入

##### 产品流

###### 压缩箱体用热轧高强钢薄板 （`body_sheet`）

实际图纸牌号、薄板厚度/供货状态，净领退/排样损失；外购成品板件替代内含钢板/场内成形。

- 选定流： 压缩箱体用热轧高强钢薄板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 垃圾料斗用AR400耐磨钢板 （`wear_plate`）

条件实际放行AR400供货、厚度/热处理/质量；其他耐磨牌号另列；制造商案例不是通用牌号要求。

- 选定流： 垃圾料斗用AR400耐磨钢板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 压缩箱体副车架用成形钢槽梁 （`subframe_channel`）

实际外购成形槽梁、图纸牌号/截面/质量；场内钢板成形时计钢板/成形一次，不再计外购槽梁。

- 选定流： 压缩箱体副车架用成形钢槽梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 实心低合金钢MIG焊丝 （`welding_wire`）

条件实际MIG实心焊丝放行牌号/直径及净领用；其他连接路线增列具体耗材。

- 选定流： 实心低合金钢MIG焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 氩焊接保护气 （`argon`）

条件实际纯氩路线，气瓶净供给以质量计；氩/CO2混气为不同配气产品，不能以纯气代混气。

- 选定流： 氩焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

###### 交流电 （`body_electricity`）

实际低于1kV电网用户切割/成形/焊接/抽风，含废品返工；耗能来自表计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

实际干燥未处理分流钢边角料出厂；内部可复用边料为转移，无避免钢材抵扣。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

##### 基本流

###### 颗粒物，粒径未特指 （`weld_pm`）

仅粒径未特指时实测控制后焊接/切割颗粒至室外未特指空气；滤尘为另种废物，不是本排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_body`

### 过程：箱体防腐与涂装（`coating`）

实际放行表面路线或披露供货已涂箱体；清洗/底漆/面漆/电固化为条件场内操作，不是必需通用化学配方。

#### 输入

##### 产品流

###### 自来水 （`wash_water`）

条件实际外部市政清洗/漂洗补给；内部循环为转移，不重复采购。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 氢氧化钠溶液，50% （`sodium_hydroxide`）

仅实际以50%溶液供货的清洗成分；数量为供液质量，不是活性NaOH或工作槽浓度。

- 选定流： 氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 配方环氧防腐底漆 （`epoxy_primer`）

条件实际供货底漆配方/固含/净领用；另购固化剂/溶剂分别列卡；外包替代场内涂覆。

- 选定流： 配方环氧防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 配方聚氨酯车辆箱体面漆 （`pu_topcoat`）

条件一种实际供货混合聚氨酯面漆，记录树脂/溶剂/固含；不同另供成分为独立交换。

- 选定流： 配方聚氨酯车辆箱体面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_electricity`）

仅实际低于1kV涂装设备/泵/风机/电固化；非电供热须另列具体实测载体。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 送处理的箱体废碱洗液 （`wash_effluent`）

条件一种实际碱洗排槽废液湿质量/组分送处理；不是基础淡水排放，不假定15%NaOH。

- 选定流： 送处理的箱体废碱洗液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 废涂料残渣 （`paint_waste`）

条件单一配方聚氨酯面漆过喷残渣，以湿/收集状态质量送处理；排除另种滤材/污泥/底漆废物/回收漆。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

条件实测实际控制后二甲苯异构体至室外未特指空气；SDS/物种分析建立化学身份；总VOC/纯间二甲苯不替代。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：底盘安装与液压控制集成（`integration`）

接收完整可运行柴油驾驶室底盘；安装具体箱体/副车架、液压执行/控制及实际选配提升器；记录接口批准/供应商内含范围。

#### 输入

##### 产品流

###### 卡车底盘车辆 （`cab_chassis`）

一种新可运行柴油驾驶室底盘，含传动及实际内含车轮/制动/驾驶室装备/接收流体状态；记录具体型号/VIN、净供货实测质量/边界；排除垃圾箱体。

- 选定流： 卡车底盘车辆 `de07c0fa-13b3-488f-bb1b-266641dc5f7a`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 压缩机构用高压液压齿轮泵 （`hydraulic_pump`）

实际一种放行独立齿轮泵净供货质量/压力/额定；不能以完整液压动力单元替代独立泵。

- 选定流： 压缩机构用高压液压齿轮泵
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 双作用液压压缩缸 （`packing_cylinder`）

实际一种完整压缩缸零件号、缸径/行程/供货质量；不同上/下压缩缸设计须各自列行。

- 选定流： 双作用液压压缩缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 单作用液压尾门提升缸 （`tailgate_cylinder`）

实际完整放行提升缸零件号/净供货质量；不通用化手册缸径/数量/必需作用型式。

- 选定流： 单作用液压尾门提升缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 伸缩双作用液压推料缸 （`ejector_cylinder`）

条件实际放行伸缩推料缸设计/净供货质量；其他卸料架构另记。

- 选定流： 伸缩双作用液压推料缸
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 压缩机构控制用液压滑阀 （`spool_valve`）

实际一种放行滑阀零件号/压力/端口/供货质量；其他阀设计分别识别。

- 选定流： 压缩机构控制用液压滑阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 液压软管 （`hydraulic_hose`）

实际硫化橡胶液压软管放行增强层/压力/长度/质量；声明供货端接头，另供金属管单独增列。

- 选定流： 液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品钢制液压油箱 （`oil_reservoir`）

实际成品油箱零件号/容积/净干质量；场内制造以具体板/焊接/表面清单替代本采购。

- 选定流： 成品钢制液压油箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 压缩泵用卡车取力器齿轮箱 （`pto`）

条件另供实际齿轮箱，含声明联轴器；供货底盘内含时省略。

- 选定流： 压缩泵用卡车取力器齿轮箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 钢螺钉 （`steel_screw`）

实际一种放行安装钢螺钉规范、等级/涂层/尺寸/净质量；每种不同螺母/垫圈/支架另列；不从身份叙述采用行业平均量。

- 选定流： 钢螺钉 `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品垃圾压缩机构电子控制器 （`body_controller`）

实际放行道路车辆箱体控制器硬件/固件/供货质量；不同另供显示屏/开关/传感器/线束分别记录。

- 选定流： 成品垃圾压缩机构电子控制器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品绝缘铜压缩箱体线束 （`body_harness`）

一种放行终检线束零件号、绝缘/接头/长度/质量；底盘内含线束不重复投入。

- 选定流： 成品绝缘铜压缩箱体线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 配方矿物抗磨液压油，ISO VG 46 （`hydraulic_oil`）

条件具体供应商矿物抗磨配方/等级，以质量供货；实际净充注/冲洗/回收及交付留存；其他等级另列。

- 选定流： 配方矿物抗磨液压油，ISO VG 46
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 交流电 （`integration_electricity`）

实际低于1kV吊装/安装/布线/外部电动液压台需求；取力发动机测试燃料在放行，不重复。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

###### 成品后置液压垃圾桶提升器 （`bin_lifter`）

选配实际放行提升器零件号、验收桶接口/供货质量；声明内含缸/控制；人工装载车辆不要求提升器。

- 选定流： 成品后置液压垃圾桶提升器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

#### 输出

##### 废物流

###### 废润滑油 （`used_oil`）

条件工厂冲洗/测试污染形成一种实际已用石油液压润滑液，以实测废质量送声明处理方；可回收洁净油为转移；无混合溶剂/水废物。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_integration。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_integration`

### 过程：调试、验收与称量（`release`）

实际检漏/压力/压缩/推料、联锁/急停、路试/制动及型号特定测试；记录实测燃料/公用工程/回收及完整验收整车M。

#### 输入

##### 产品流

###### 柴油 （`diesel_fuel`）

实际新工厂供油质量用于发动机/取力测试及交付留存，分别核对初末油箱库存/入厂底盘含油；声明化石/生物组分；不从身份取密度/热值/尾气因子。

- 选定流： 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 自来水 （`test_water`）

条件仅实际新洗车/检漏补水；内部回收循环/临时测试压载水不是新供给或交付M。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 交流电 （`release_electricity`）

实际低于1kV终检、制动/电气/控制测试及放行需求，含返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

#### 输出

##### 产品流

###### 未另列明的专用机动车辆 （`finished_machine`）

1kg完整新验收柴油单腔后装压缩垃圾车归一化份额，含钢箱体/底盘及声明交付附件/流体；物理身份限定本配置，不是通用混合或收运服务。

- 选定流： 未另列明的专用机动车辆 `b593d5fc-0d81-43a6-9689-debda67bcb94`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2_air`）

条件实际出厂发动机/取力测试即时化石CO2至室外未特指空气，实测或场内燃料碳平衡且分开留存碳；生物CO2/其他尾气物种各自列行。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

### 过程：发运防护（`packing`）

仅实际单独定量发运防护，排除整车M；独立备件另披露。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

条件实际PE防护膜配方/厚度/净质量，排除整车M；无强制整车包裹。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`corrugated_board`）

条件实际C/E/F楞、纤维≥80%含再生纸板，声明一种实际规范；其他纸板另列；排除M。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_demand | shared_operations | 优先按场址/配置/工单细分；共享切割/焊接/涂装/吊运/测试按cp_allocation实测因果负载/时间或可归属交换分摊，核对总表/排除作业；无默认质量/总重/箱容/垃圾吞吐分配。 |  |
| allocation_variants | variants | 箱体尺寸/底盘/执行/涂层/提升器变型分开，各按实测M归一化；后备物理/经济分配须实际记录/敏感性/审查；废料/废品/返工负担保留至验收生产。 |  |
| allocation_recovery | outputs | 内部钢/漆/水/油回收为转移，无自动避免生产/回收抵扣；外排废料/处理明确记录；可销售共产品主张须实际质量/数量及独立审查处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每VIN或可追溯同配置批次 | 相同声明制造时期 | 相同验收完整交付配置 | 每台验收净质量 | 整车秤校准；空箱记录；交付流体/物料绑定；签署放行 |
| cp_body | body | 各原子过程行 | measurement | 钢牌号/热处理/厚度/图纸；外购槽梁与场内成形；净领退；接头图/焊丝/气体；表计kWh；废品/废料；捕集尘；出口颗粒浓度/气流/时间 | 称净领料/分流边料，追溯切割/成形/焊接/实际公用工程；按接收空气条件/记录粒径测控制后出口颗粒，不用通用焊接因子。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供应商/物料放行；库存/台数闭合；缺失记录 |
| cp_coating | coating | 各原子过程行 | measurement | 供应商SDS/配方/浓度/固含；成分净领用；湿废液/残渣组分；留存膜；kWh；外包路线；二甲苯物种/气流/时间 | 各供货化学品/漆/不同湿废物分测，核对槽/漆库存/回收/留存膜；计实际公用工程并采样控制后二甲苯物种，不将全部VOC当二甲苯。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供应商/物料放行；库存/台数闭合；缺失记录 |
| cp_integration | integration | 各原子过程行 | measurement | 底盘VIN/范围/接收质量/燃料流体状态；具体零件号/干质量；安装设计/扭矩；泵/缸/软管/控制规范；油等级/密度/温度/净充注/回收；kWh | 核对外购底盘/各安装箱体/液压/控制件与放行物料及实测或可追溯供货净质量；记录内含与另供取力器/提升器/部件；计电安装/测试并称油充注/回收/废物。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供应商/物料放行；库存/台数闭合；缺失记录 |
| cp_release | release | 各原子过程行 | measurement | VIN/测试方案/结果；发动机/取力运行时间；新燃料质量；入厂/初末箱库存；化石/生物碳组分；留存燃料/油；实际路试/检漏/联锁；公用工程；空箱M | 采集实际出厂燃料/测试公用工程及验收台数含返工；分开入厂底盘充注/新增供给/回收/消耗/交付库存；化石CO2用实测尾气或实测耗用化石碳平衡，分开留存碳/其他碳产物，无固定燃料因子；有依据的其他物种分别记录，不把NOx当NO2。 | kg; MJ | 每工单/批次/VIN；每月闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供应商/物料放行；库存/台数闭合；缺失记录 |
| cp_packing | packing | 各原子过程行 | measurement | 实际PE配方/厚度/质量；纸板楞型/纤维/再生含量/质量；退回；独立备件表 | 各实际包装件分称并排除M；独立备件供货另记。 | kg | 每工单/批次/VIN；每月闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供应商/物料放行；库存/台数闭合；缺失记录 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给需求；分表负载/时间；服务变型；排除作业 | 测各交换特定因果需求/时间及服务工单，证明驱动并将全部份额核对总表。 | MJ; h | 每共享批次；每月核对 | 相同生产时期 | 全部服务场址/变型 | 分摊实测因果需求；可归属数量 / 验收设备数量 | 总表闭合；敏感性；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | body_sheet; wear_plate; subframe_channel; welding_wire; argon; body_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; epoxy_primer; pu_topcoat; coating_electricity; wash_effluent; paint_waste; xylene_air; cab_chassis; hydraulic_pump; packing_cylinder; tailgate_cylinder; ejector_cylinder; spool_valve; hydraulic_hose; oil_reservoir; pto; steel_screw; body_controller; body_harness; hydraulic_oil; used_oil; integration_electricity; bin_lifter; diesel_fuel; test_water; release_electricity; fossil_co2_air; pe_film; corrugated_board | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为同一时期/配置可归属净交换除完整验收台数，先核对库存/废品/返工；再除实测M，各分子保留kg或MJ。供应商台数/液体体积转质量时保留实际零件称量或同配方实测密度/温度依据及明确换算，不用默认单件质量/密度。底盘内含接收燃料、新供油、测试耗油/交付留存须闭合且不重复内含供给。相容变型仅分别归一化后以披露实测权重/不确定性汇总。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核实具体材质等级/状态、供货配方/部件完整性；区分底盘/箱体/服务、零件/完整缸及商品油/配方液；保留公开参考属性。 | 放行供货规范；身份/属性/单位审计 |
| quality_complete | vehicle | 安装部件/交付留存流体核对完整实际M；无虚构残差质量/假定箱重/隐含底盘排放；记录上游/处理覆盖缺口。 | VIN物料；校准秤；供货范围；库存闭合 |
| quality_acceptance | release | 保留实际安装、检漏/压力、压缩/推料、联锁/急停、道路/制动及适用放行结果；不以手册值默认验收。 | 签署测试/放行；校准仪器；实际批准 |
| quality_period | records | 声明场址/代表时期、供货版本、一手覆盖/分配不确定性及缺失/排除/不适用状态；历史接口案例不是当前数值工厂数据。 | 工单；总表闭合；采样条件；不确定性 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg完整参考输出及cp_mass实测M，绑定具体空箱VIN/物料及交付流体/附件；总重、近似箱体质量、垃圾吨数/服务里程不能作分母。 |  |
| validation_basis | inventory | 各适用非参考行应用normalize_mass及声明采集协议，采用相同验收台数/时期/配置；校验分子单位/原参考属性。 |  |
| validation_supply | components | 外购底盘/已涂箱体/缸/提升器/取力器范围须剔除重复内含钢/耗材/流体/部件；条件交换与必要过程分开；缺席候选须有依据的不适用记录。 |  |
| validation_emissions | elementary | 要求实际控制后粒径/空气介质、二甲苯物种及即时化石CO2与生物/留存碳的依据；捕集尘/送处理废液属废物；各实际NO/NO2/N2O/CO及其他有依据物种分别增列；NOx总量不建立NO2或NO量；无默认尾气/泄漏。 |  |
| validation_coverage | dataset | 区分实测/计算/估算/缺失/排除/不适用；报告未决身份/数量/供应方及遗漏路线；结构通过不批准方法学或建立完整从摇篮到工厂门。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明场址/时期具体配置完整柴油钢箱体单腔后装车制造模块；扩展上游建模须独立评价供货/运输/处理完整性。 |
| excluded_use | 垃圾收运服务比较、通用专用车辆混合、其他动力/装载架构、再制造或无依据完整从摇篮到工厂门声明。 |
| required_metadata | VIN/型号/物料清单修订；柴油底盘供应方及内含传动/驾驶室/车轮/流体；单腔钢箱体尺寸/牌号/厚度/制造路线；副车架/安装设计；料斗/压缩/推料/尾门设计；具体泵/缸/阀/软管/取力器/控制规范；安装桶提升器/附件；涂层配方/自制外购；液压液/燃料组分及交付液位；实测净M；场址/时期/验收台数；实际验收方案；公用工程/供应方/运输/处理覆盖；独立备件/包装排除 |
| required_quality_disclosure | 实测覆盖、当前物料/供货边界、缺失身份/数量/供应方、验收台数/M、测试/返工/回收、平衡/分配/不确定性、遗漏路线/来源限制/审查状态。 |
| update_trigger | 底盘/箱体尺寸/牌号/路线/供应方变化，装载/液压/控制/提升器、涂层/交付流体状态、测试方案/场址/公用工程/时期修订或证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| heil-durapack-5000-2025 | handbook | Heil DuraPack5000后装压缩车原厂手册，标注2025，PDF第2–4页：结构、部件选项、底盘/液压表及规格免责声明。https://www.heil.com/wp-content/uploads/2021/09/DuraPack-5000-brochure-2025.pdf | 仅制造商特定钢/焊接副车架及部件/接口架构；不采用材厚、近似重量、容量、压力、流量、性能、寿命/清单因子；实际图纸/前景决定适用性。 |
| dennis-eagle-olympus | handbook | Dennis Eagle Olympus原厂产品页，THE OLYMPUS及SAFETY章节，无发布日期。https://www.dennis-eagle.co.uk/products/olympus-body/olympus/ | 独立单腔/提升适配/液压执行案例；不是数值生产、通用控制/液压需求/容量/寿命。 |
| scania-chassis-subframe | handbook | Scania车身安装部件：车架与副车架，PDF第1页连接表；无印刷版次，PDF元数据修改于2021年10月。https://truckbodybuilder.scania.com/content/dam/bodybuilder/tbb-files/scania-parts-for-bodybuilding/Chassis_frame_and_subframe.pdf | 仅历史制造商特定接口选项；不是当前安装批准/部件供应或通用紧固尺寸/等级/扭矩；须当前底盘/箱体文件。 |
