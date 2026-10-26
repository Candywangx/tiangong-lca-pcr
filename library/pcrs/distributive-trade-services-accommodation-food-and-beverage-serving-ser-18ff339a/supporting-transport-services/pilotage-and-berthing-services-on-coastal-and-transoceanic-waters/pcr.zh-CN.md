---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-on-coastal-and-transoceanic-waters
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 沿海及远洋水域引航与靠离泊服务

## 1. 范围与适用性

适用于沿海远洋水域引航，包括实际引航艇支持的进出港或避航险，以及该水域各种船舶靠离泊相关的拖轮辅助。将仅引航、仅靠离泊拖轮或实际合同整包声明为不同任务子型，三者不能自动作为等价一单位。引航艇按实际使用纳入，并非聘用引航员即强制假设使用。[来源：`un-cpc-67521`；`imo-pilotage`]

排除内河对应服务67522、沿海或外海运输性推拖65219、救捞起浮、货物装卸仓储及独立销售港口航道运营。受助船舶货物及其自身主辅机燃料属于客户航运组件，不是引航拖轮公司清单。组合航运研究可明确增加该组件一次。位于港内不代表所有拖带均为靠离泊辅助。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-on-coastal-and-transoceanic-waters |
| classification_refs | CPC3.0 67521 |
| covered_products | 沿海远洋引航及相关引航艇；靠离泊拖轮辅助；独立限定的真实整包任务 |
| excluded_products | 内河引航靠离泊；运输拖带；救捞；船货运输；装卸；独立港口运营 |
| representative_product | 一次完成的已声明沿海引航或靠离泊辅助任务 |
| production_route | 接单计划 → 实际接送引航员引航及或靠离泊拖轮作业 → 释放交接 → 归属返回待命 |
| market_state | 具有实际地理服务接口的已交付明确海事辅助任务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成声明引航靠离泊拖轮或实际组合辅助范围 |
| How much | 为一艘已识别受助船及声明服务团队范围完成一次验收任务 |
| How well | 实际航行泊位任务计划船舶限制引航员船长拖轮通信及完成交接判据；不假设通用拖轮能力天气限值 |
| How long or cycle | 完整合同服务周期，包括实际接送调位助泊等待重试返回 |
| reference_flow_link | `marine_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成且限定信息齐全的沿海引航或靠离泊辅助任务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 任务编号；引航拖轮整包子型；沿海远洋地理界限交接；受助船身份型式总吨尺寸吃水载荷；初始终止水域泊位；引航接送安排；实际路线距离时间；拖轮数量型式功率系柱拉力；主辅机怠速工况；风流潮能见度；缺陷船舶推进状态；等待重试返回；完成；自有供应商覆盖 |

item为正式Item(s)的单数别名，实际导出使用Item(s)。按确切验收子型计一次，不按每次接送每艘拖轮每次推送另计。仅引航、一艘拖轮贡献及引航多拖轮整包具有不同声明范围。须独立数据集或有独立依据活动分布；不得按总吨货重收费来港艘次通用换算。GT是船舶总吨，不是测得质量，不能由其推定货物净总重或排水量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `task_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task绑定实际子型团队地理起讫；失败尝试增加负荷，不增加验收产出。 |
| `craft_activity` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 记录各服务艇主辅机实际功率载荷时长行驶及风潮受助船状态；装机功率不等于交付能量燃料。 |
| `fuel_species` | pilot_mgo; tug_mgo; tug_lng; methane_air; so2_air | 质量 | kg | 保留实际燃料组成碳硫及液化天然气损失证据；不按收费船舶吨位默认换算燃料排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别海事任务及当前船泊位状态和可用服务艇；披露设施资产制造份额 |
| starting_condition_role | foreground_start |
| product_classification_scope | 沿海远洋引航靠离泊拖轮辅助；与内河及运输拖带功能分开 |
| recursive_input_rule | 购买接送引航拖轮贡献按确切任务接口进入一次；不重复供应商已含燃料资产或上级整包任务 |
| upstream_dataset_requirement | 实际服务燃料电力材料生产；艇缆护舷制造维护；处理；归属岸基设施 |
| disclosure | 子型接口；服务艇工况清单；接近返回待命；受助船排除；供应商资产边界；上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_pilot` | 纳入实际航行准备引航员行驶接送登轮引航任务通信；实际使用引航艇时保留其能源接送。 | imo-pilotage |
| `boundary_tug` | 纳入指定拖轮调位带缆助船操纵解缆等待重试返回；明确船艇及实际任务条件，不预设固定拖轮小时。 | mca-port-towage |
| `boundary_ship` | 受助船推进生活负荷货物整航次负荷不进入服务艇模块；更大航运系统将客户船及辅助模块各纳入一次。 |  |
| `boundary_actual` | 筛查实际艇资产大修缆护舷电池更换舱底生活污水冷却海水热涂层防污损失溢漏；每种实际交换独立增加，缺卡不表示零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| task | 计划协调支持并完成声明海事任务 | required | 全部声明子型；记录实际共享支持及整任务交换核算 | foreground_production | 每参考流 |
| pilotage | 实施实际引航及引航员接送 | conditional | 仅实际合同引航接送组件 | foreground_production | 每参考流 |
| berthing | 提供靠离泊拖轮辅助 | conditional | 仅实际靠离泊拖轮组件；非运输拖带 | foreground_production | 每参考流 |

### 过程：实施实际引航及引航员接送 (`pilotage`)

#### 输入

##### 产品流

###### 石油基船用轻柴油 (`pilot_mgo`)

引航艇主辅机实际运行时适用：调位接送引航员等待返回燃料；不含客户船舶推进。

- 选定流：石油基船用轻柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 引航员接送艇 (`pilot_launch`)

实际接送艇使用时适用；按有依据寿命及实际利用分配制造大修退役，不仅按来港艘次。

- 选定流：引航员接送艇
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：提供靠离泊拖轮辅助 (`berthing`)

#### 输入

##### 产品流

###### 石油基船用轻柴油 (`tug_mgo`)

仅指定靠离泊拖轮主辅机；保留推拉调位待命重试返回活动。

- 选定流：石油基船用轻柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 船用液化天然气 (`tug_lng`)

仅实际液化天然气拖轮；保留组成及实测发动机燃料系统甲烷损失。不预设液化天然气推进。

- 选定流：船用液化天然气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 钢丝拖缆 (`steel_rope`)

实际此拖缆类型时适用；归属有记录更换寿命使用并保留废缆记录。

- 选定流：钢丝拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 高模量聚乙烯拖缆 (`hmpe_rope`)

实际高模量聚乙烯拖缆时适用；不能与钢缆或其他纤维缆互换。

- 选定流：高模量聚乙烯拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 橡胶港作拖轮护舷 (`fender`)

仅实际更换且未在拖轮寿命清单内的护舷；明确组成及有依据服务使用。

- 选定流：橡胶港作拖轮护舷
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 港内助泊拖轮 (`tug_asset`)

实际指定拖轮动力系柱拉力及配置；船体发动机电池覆盖各计一次并声明更换边界。

- 选定流：港内助泊拖轮
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：计划协调支持并完成声明海事任务 (`task`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

逐艇任务计量实际岸基支持及服务艇充电岸电并保留损耗；排除客户船舶用电。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 矿物船用发动机润滑油 (`engine_oil`)

仅实际服务艇发动机润滑油；核对补充库存维护覆盖。

- 选定流：矿物船用发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 矿物液压油 (`hydraulic_oil`)

仅实际服务绞车或操舵液压用途；其他油品化学类型另列。

- 选定流：矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 自来水 (`water`)

仅实际服务艇岸基清洁及船员新鲜水；天然冷却海水须另列基本取水流。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 产品流

###### 已完成声明海事辅助任务 (`marine_service`)

在指定沿海交接点验收的一次任务。下列整任务废物排放核算保留实际来源艇发动机，不表示释放仅发生在完成时刻。

- 选定流：已完成且限定信息齐全的沿海引航或靠离泊辅助任务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_task`
- 来源：

##### 废物流

###### 废矿物船用发动机润滑油 (`spent_engine_oil`)

实际收集发动机油，明确接收处理；不得与舱底水中油分重复。

- 选定流：废矿物船用发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物液压油 (`spent_hydraulic_oil`)

实际收集液压油；保留独立材料接收方衡算。

- 选定流：废矿物液压油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废钢丝拖缆 (`waste_steel_rope`)

实际退役拖缆送指定回收处置；不自动抵扣避免钢材。

- 选定流：废钢丝拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废高模量聚乙烯拖缆 (`waste_hmpe`)

实际退役聚合物拖缆；保留接收及处理边界。

- 选定流：废高模量聚乙烯拖缆
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 含油舱底水 (`bilgewater`)

实际送接收处理的舱底水，明确含油及分离边界；不能自动当作向海洋排油。

- 选定流：含油舱底水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 服务艇生活污水 (`sewage`)

实际船员生活污水时适用；记录实际接收处理，或另列实际排放组分。

- 选定流：服务艇生活污水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

仅服务艇化石燃烧；按实际燃料碳氧化或尾气确定，不按受助船总吨推定。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

实测或有明确实际发动机燃料工况依据排放；不以通用法规限值替代。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

物种分辨释放；以二氧化氮计的氮氧化物总量须有组分划分依据。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

与一氧化氮分开并保留实际艇发动机来源。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化硫，排入空气 (`so2_air`)

用实际燃料硫测量及有依据氧化或尾气分析；不预设硫等级。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

实际燃烧细颗粒；避免与总颗粒物及其他相互重叠的粒径组分重复计入。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 化石甲烷，排入空气 (`methane_air`)

实际液化天然气发动机滑逸或服务艇燃料系统泄漏时适用；须实测或明确依据，不得将全部液化天然气用量视为排放。

- 选定流：化石甲烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_subtype` | 区分仅引航仅拖轮整包合同产出；整包任务中实际艇活动只计一次，不再额外增加完整引航拖轮任务产出。 |  |
| `allocate_craft` | 优先艇发动机时间燃料能源计量；共享待命空驶调位接送重试按有记录实际任务活动分配并与船队总量核对；不得用收费总吨代燃料。 |  |
| `allocate_assets` | 按有依据物理寿命实际利用分配艇制造大修电池缆护舷；区分更换材料与全寿命供应商数据已含数量。 |  |
| `allocate_wastes` | 区分收集舱底水回收油及实际接收环境排放；不自动回收抵扣，不将舱底水等同海洋排放。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | task | marine_service | 前景记录 | 子型任务号；船舶总吨尺寸吃水状态；水域界限；泊位起讫；引航拖轮接口；艇清单；距离时间；风潮；尝试；验收 | 核对任务单引航员船长拖轮记录实际艇轨迹签认完成；计数前拆分内河或运输拖带阶段。 | item | 每任务 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 任务轨迹记录；接口完成证据 |
| cp_energy | task | electricity; pilot_mgo; tug_mgo; tug_lng | 前景记录 | 艇发动机；燃料库存流量；碳硫组成；主辅怠速；实际载荷时间；充电返回；份额 | 采用实际燃料衡算仪表工况日志；计量岸电充电损耗，区分接送艇拖轮并排除客户船消耗。 | kg; kWh | 工况区间及任务 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 校准；加油衡算；燃料化验；发动机充电日志 |
| cp_material | task | engine_oil; hydraulic_oil; water; steel_rope; hmpe_rope; fender | 前景记录 | 具体材料；库存领用退回；净耗；更换；任务艇份额；维护覆盖 | 分别计量各实际材料及净取水量，保留缆护舷寿命证据，排除供应商已含更换。 | kg; m3 | 领用更换及期间 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 库存卡；供应商规格；维护日志 |
| cp_asset | task | pilot_launch; tug_asset | 前景记录 | 艇编号型式动力；船体发动机电池覆盖；制造大修退役；寿命使用证据 | 实际艇关联上游清单，记录物理寿命实际任务利用；避免总成组件重复。 | item | 资产变更及期间 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 船艇台账；维护使用记录；供应商边界 |
| cp_waste | task | spent_engine_oil; spent_hydraulic_oil; waste_steel_rope; waste_hmpe; bilgewater; sewage | 前景记录 | 具体废物；艇；数量；油水组成；分离；接收处理；任务份额 | 分种计量废物；核对接收处理，分离油不得与同份舱底水质量重复。 | kg; m3 | 每次转移 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 接收凭证；废物联单；组成 |
| cp_emission | task | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; methane_air | 前景记录 | 艇发动机；燃料；实际工况载荷时间；物种/粒径组分；尾气测试或系数来源版本单位；甲烷损失；分配 | 测量尾气燃料系统释放或采用明确有依据发动机燃料工况系数；区分物种及相互重叠的粒径组分，未测滑逸保留缺口。 | kg | 工况区间及任务 | 同一任务报告期 | 实际指定艇及服务边界 | 每参考流 | 燃料尾气测量；系数适用性；来源单位核查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | marine_service | N = 确切子型船舶状态服务团队范围的验收完成任务数，须为正值。组件不是额外整任务产出。 | cp_task | N |  |
| exchange_allocation | 所有清单行 | 按有记录物理驱动将各实测交换分配至实际艇任务活动及共享工况，再除以N；保留全部实际必需有条件组件。 | cp_task; cp_energy; cp_material; cp_waste | 每参考流交换量 |  |
| asset_allocation | pilot_launch; tug_asset | 按有依据寿命利用及实际任务份额归属制造大修退役再除以N，保留电池组件边界及不确定性。 | cp_asset; cp_task | 每参考流艇份额 |  |
| emission_allocation | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; methane_air | 逐主辅机工况区间按实测或明确有依据相容系数解析实际物种质量，汇总不重叠区间，分配实际艇任务份额后除以N。 | cp_emission; cp_energy; cp_task | 每参考流物种量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_scope | marine_service | 子型水域类别地理交接船舶总吨吃水实际团队完整；不能只按计数等同引航拖轮整包。 | cp_task |
| dq_activity | 所有清单行 | 实际艇发动机工况待命重试返回及燃料电力期间匹配；船队份额核对且不含客户船消耗。 | cp_energy; cp_task |
| dq_species | co2_air; no_air; no2_air; so2_air; pm25_air; methane_air | 燃料碳硫及物种工况证据；缺失系数或甲烷滑逸数据明确为缺口，不是零。 | cp_emission |
| dq_identity | 所有清单行 | 关联数据使用前核定实际流身份；支持UUID是历史归档证据，不是新流确认。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 要求沿海远洋引航或靠离泊拖轮功能且任务接口明确；拒绝内河范围及65219运输性推拖。 | un-cpc-67521 |
| `validate_reference` | 要求唯一marine_service为1 item及正值完成任务N；子型团队船舶地理限定信息强制，组件整包产出不重复。 |  |
| `validate_balance` | 要求各燃料材料废物物种独立且艇发动机证据和船队份额核对；拒绝服务艇模块含客户船燃料或供应商重复。 |  |
| `validate_quality` | 声明实际资产维护舱底接收冷却涂层溢漏筛查及上游缺口；目标检查通过不是海事安全法律批准或完整航运生命周期评价。 |  |
| `validate_unit_export` | item仅为数量属性正式单位Item(s)的本地单数别名。导出时使用Item(s)，保留同一数值计数及完整限定的服务定义；更换显示符号不得改变流属性、服务范围或归一化分母。不得通过改写单位将服务项转换成时间、质量、距离或另一服务族，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程沿海远洋引航或靠离泊辅助任务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 等效声明任务子型船舶水域条件实际团队及艇资产边界 |
| excluded_use | 内河引航；运输拖带；整航次货运；通用每总吨来港系数；未限定引航拖轮换算 |
| required_metadata | 全部任务限定信息；N；艇工况燃料岸电；资产寿命；缆护舷边界；废物接收；系数物种证据 |
| required_quality_disclosure | 流UUID缺口；待命船队分配；燃料滑逸数据；资产组件不确定性；受助船排除；上游缺失 |
| update_trigger | 任务子型/地理适用范围、受助船条件、拖轮/接送艇船队、推进方式/燃料、工况/天气模式、合同边界或数据质量发生变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67521 | official_guidance | UNSD CPC3.0 67521. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67521 | 引航引航艇靠离泊拖轮范围及运输拖带排除。 |
| imo-pilotage | official_guidance | IMO, Pilotage. https://www.imo.org/en/ourwork/safety/pages/pilotage.aspx | 引航本地航行通信及实际接送背景；未采用现行法规要求或数量系数。 |
| mca-port-towage | official_guidance | UK MCA, A guide to good practice on port and marine facilities, section4.6 (2025). https://www.gov.uk/government/publications/a-guide-to-good-practice-on-port-marine-operations/a-guide-to-good-practice-on-port-and-marine-facilities | 任务特定助船条件拖轮配置及阶段；不推定通用拖轮数量系柱拉力天气限值或法律合规。 |
| epa-harbor-craft | official_guidance | US EPA, Harbor Craft Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | 仅服务艇发动机岸电活动筛查；未采用排放能耗系数默认年小时或技术收益。 |
