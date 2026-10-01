---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.natural-gas-liquefied-or-in-the-gaseous-state
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 天然气（液化或气态）

## 1. 范围与适用性

本 PCR 适用于采出后经声明分离及调质，在计量出口交付的天然气；每个数据集固定一种气态或液态状态。区分一体化气田及液化路线与接收带负荷原料气的独立加工或液化场址。压缩、脱酸气、脱水、脱汞、液化及蒸发气回收仅按实际运行纳入。单独声明的再气化接收站须纳入截至气态交付出口的汽化及冷热交换。输气或航运仅在披露出口边界内时计入。海上气田生产需独立证据，陆上指南不能建立海上作业清单。 `ifc-onshore-2007`, `ifc-lng-2017`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.natural-gas-liquefied-or-in-the-gaseous-state |
| classification_refs | CPC 3.0:12020 |
| covered_products | 固定气态或液化出口及状态的化石天然气 |
| excluded_products | 制造煤气；独立石油气混合产品；独立氢产品；用户燃烧；未披露输送 |
| representative_product | 声明出口的天然气 |
| production_route | 气田采收与分离; 天然气调质与压缩; 液化及储罐气体控制; 再气化及交付; 产品计量及交付 |
| market_state | 一种声明供给出口的计量处理气或液化天然气 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有组成限定的天然气原料或燃料，不宣称有用热等效 |
| How much | 1 kg |
| How well | 气田或场址及年份；起始状态；气态或液化相态；组成及水分；压力；温度；密度测量；低位热值及基准；气体回收及自用；出口；运输范围；制冷剂组成；分配；海上范围；适用时实测硫及汞；气量参考条件及压缩性；接收站加热路线；取退水 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明出口的天然气 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 气田或场址及年份；起始状态；气态或液化相态；组成及水分；压力；温度；密度测量；低位热值及基准；气体回收及自用；出口；运输范围；制冷剂组成；分配；海上范围；适用时实测硫及汞；气量参考条件及压缩性；接收站加热路线；取退水 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | 核对资源或购入进料、天然气产品、凝析油、分离 CO2、水、自用燃烧、火炬、放空、库存变化及实测损耗。气体体积计量须按匹配的实测组成、温度、绝对压力及压缩性换算质量；液化产品按装运条件计量质量或密度。不等同气态和液态体积。回用蒸发气及自用燃料气仅为内部记录，不新增产品抵扣。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化生产从储层气开始，独立场址从购入原料或处理天然气开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 固定气态或液化出口及状态的化石天然气 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 气田或场址及年份；起始状态；气态或液化相态；组成及水分；压力；温度；密度测量；低位热值及基准；气体回收及自用；出口；运输范围；制冷剂组成；分配；海上范围；适用时实测硫及汞；气量参考条件及压缩性；接收站加热路线；取退水 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 本 PCR 适用于采出后经声明分离及调质，在计量出口交付的天然气；每个数据集固定一种气态或液态状态。区分一体化气田及液化路线与接收带负荷原料气的独立加工或液化场址。压缩、脱酸气、脱水、脱汞、液化及蒸发气回收仅按实际运行纳入。单独声明的再气化接收站须纳入截至气态交付出口的汽化及冷热交换。输气或航运仅在披露出口边界内时计入。海上气田生产需独立证据，陆上指南不能建立海上作业清单。 | `ifc-onshore-2007`, `ifc-lng-2017` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| recovery | 气田采收与分离 | conditional | 一体化原生气田生产 | 前景生产 | per 1 kg reference flow |
| conditioning | 天然气调质与压缩 | conditional | 实际场内调质或压缩；独立再气化排除上游加工 | 前景生产 | per 1 kg reference flow |
| liquefaction | 液化及储罐气体控制 | conditional | 液化路线 | 前景生产 | per 1 kg reference flow |
| terminal | 再气化及交付 | conditional | 声明再气化接收站 | 前景生产 | per 1 kg reference flow |
| dispatch | 产品计量及交付 | required | 所有声明场址 | 前景生产 | per 1 kg reference flow |

### 过程：气田采收与分离 (`recovery`)

#### 输入

##### 产品流

###### 气田柴油 (`field_diesel`)

仅柴油钻井、泵或场址设备，可归属开发须记录寿命产量基准。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_field_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_field_diesel`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

##### 基本流

###### 从储层采出的天然气 (`gas_resource`)

仅一体化采收，测量去除损失前的干湿气及组成。

- 选定流: 从储层采出的天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_gas_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gas_resource`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

#### 输出

##### 废物流

###### 转交处理的含盐采出水 (`produced_water`)

仅转交处理，回注及最终受纳水排放需独立场址平衡和物种。

- 选定流: 转交处理的含盐采出水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_produced_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_produced_water`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

### 过程：天然气调质与压缩 (`conditioning`)

#### 输入

##### 产品流

###### 供给原料天然气 (`raw_gas_feed`)

仅独立加工，供应数据集包含采出及声明运输，一体化内部进料抵消。

- 选定流: 供给原料天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_raw_gas_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_raw_gas_feed`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 加工用电 (`site_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

购入加工及压缩公用电力，共用表计只分配一次。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_site_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_site_power`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 单乙醇胺溶剂补充料 (`mea_makeup`)

仅实际采用 MEA 脱酸气单元，其他溶剂须独立卡片及纯度记录。

- 选定流: 单乙醇胺溶剂补充料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mea_makeup 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mea_makeup`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 三甘醇补充料 (`teg_makeup`)

仅 TEG 脱水，循环溶剂不重复作为新供给。

- 选定流: 三甘醇补充料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_teg_makeup 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_teg_makeup`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 外供工艺蒸汽 (`imported_steam`)

仅实际溶剂再生购入蒸汽，记录交付焓及凝结水回流条件；场内生产须记录燃料及燃烧清单。

- 选定流: 外供工艺蒸汽
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_imported_steam 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_imported_steam`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

#### 输出

##### 产品流

###### 稳定天然气凝析油 (`condensate`)

仅实际外售适销联产品，测量独立质量及分配。

- 选定流: 稳定天然气凝析油
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_condensate 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condensate`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

##### 废物流

###### 废脱汞吸附剂 (`spent_mercury_sorbent`)

仅实际脱汞系统，记录汞含量及管理去向。

- 选定流: 废脱汞吸附剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_spent_mercury_sorbent 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_mercury_sorbent`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

##### 基本流

###### 化石甲烷排入室外空气 (`methane_air`)

纳入回收后直接泄漏及放空甲烷，火炬转化单独测量，不假设完全转化。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_methane_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_methane_air`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 化石二氧化碳排入室外空气 (`co2_air`)

采集记录区分储层去除 CO2、场址燃烧及火炬 CO2，排除捕集或外供 CO2。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

### 过程：液化及储罐气体控制 (`liquefaction`)

#### 输入

##### 产品流

###### 液化用电 (`lng_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅电驱制冷，排除重复加工电力及内部回收电力。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_lng_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lng_power`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 制冷丙烷补充料 (`propane_makeup`)

仅实际丙烷回路新增补充量，每种其他混合制冷组分须单独卡片。

- 选定流: 制冷丙烷补充料
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_propane_makeup 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_propane_makeup`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 供给冷却补充水 (`cooling_water`)

仅购入新增补充量，循环水作为内部平衡；直接取水须独立资源卡片及流域。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_cooling_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cooling_water`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

#### 输出

##### 基本流

###### 丙烷排入室外空气 (`propane_air`)

仅直接未回收丙烷泄漏，不用甲烷代表整个混合物。

- 选定流: 丙烷排入室外空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_propane_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_propane_air`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

### 过程：再气化及交付 (`terminal`)

#### 输入

##### 产品流

###### 再气化用电 (`regas_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅声明接收站的泵和汽化器辅助设备。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_regas_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_regas_power`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 外供再气化热量 (`imported_heat`)

仅购入热量，直接燃烧汽化器须另列实际燃料及燃烧行。

- 选定流: 外供再气化热量
- 流属性 / 单位: Energy / MJ
- 数量规则: 按 cp_imported_heat 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_imported_heat`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

###### 再气化供给液化天然气 (`terminal_lng_feed`)

仅独立接收站；供应清单涵盖上游生产、液化及声明航运，一体化链中抵消此内部转移。

- 选定流: 再气化供给液化天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_terminal_lng_feed 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_terminal_lng_feed`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

##### 基本流

###### 开架汽化器海水取用 (`vaporizer_seawater`)

仅实际海水加热汽化器，分别测量进水、退水、温度及杀生剂。

- 选定流: 开架汽化器海水取用
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_vaporizer_seawater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_vaporizer_seawater`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

#### 输出

##### 基本流

###### 退回同一海洋受纳水的海水 (`returned_seawater`)

仅返回冷却水，取水减实测退水并不自动全部为耗水；单独记录温度变化及每种排放污染物。

- 选定流: 退回同一海洋受纳水的海水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_returned_seawater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_returned_seawater`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

### 过程：产品计量及交付 (`dispatch`)

#### 输出

##### 产品流

###### 声明出口的天然气 (`final_product`)

固定一种相态和实际产品组成，净质量排除分离液体及内部燃烧或火炬气。

- 选定流: 声明出口的天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `ifc-onshore-2007`, `ifc-lng-2017`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 先分离采出、加工、液化及接收站计量，再分配油气和天然气液体共同负荷。凝析油是须实测质量及组成的实际独立联产品，自用气和回收蒸发气减少净可供量但不获得避免燃料抵扣。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas_resource | recovery | `gas_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配期间使用校准质量表，或按实测温度、绝对压力、压缩性及组成将气体体积换算净质量。液化气采用装载质量或装载温度实测密度。核对库存、分离液体及内部转移，保留转换公式及不确定性；cp_output 独立记录正的出口验收质量 D。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_field_diesel | recovery | `field_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_produced_water | recovery | `produced_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_raw_gas_feed | conditioning | `raw_gas_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配期间使用校准质量表，或按实测温度、绝对压力、压缩性及组成将气体体积换算净质量。液化气采用装载质量或装载温度实测密度。核对库存、分离液体及内部转移，保留转换公式及不确定性；cp_output 独立记录正的出口验收质量 D。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_site_power | conditioning | `site_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mea_makeup | conditioning | `mea_makeup` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_teg_makeup | conditioning | `teg_makeup` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_condensate | conditioning | `condensate` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_spent_mercury_sorbent | conditioning | `spent_mercury_sorbent` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_methane_air | conditioning | `methane_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按运行时长积分校准气量及实测物种浓度，记录温压和环境介质。需要模型时保留源特定实测活动、碳或物种平衡、因子出处及不确定性，不假设通用因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | conditioning | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按运行时长积分校准气量及实测物种浓度，记录温压和环境介质。需要模型时保留源特定实测活动、碳或物种平衡、因子出处及不确定性，不假设通用因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_lng_power | liquefaction | `lng_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_propane_makeup | liquefaction | `propane_makeup` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_propane_air | liquefaction | `propane_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按运行时长积分校准气量及实测物种浓度，记录温压和环境介质。需要模型时保留源特定实测活动、碳或物种平衡、因子出处及不确定性，不假设通用因子。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_regas_power | terminal | `regas_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_imported_heat | terminal | `imported_heat` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配期间使用校准质量表，或按实测温度、绝对压力、压缩性及组成将气体体积换算净质量。液化气采用装载质量或装载温度实测密度。核对库存、分离液体及内部转移，保留转换公式及不确定性；cp_output 独立记录正的出口验收质量 D。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_terminal_lng_feed | terminal | `terminal_lng_feed` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 按匹配期间使用校准质量表，或按实测温度、绝对压力、压缩性及组成将气体体积换算净质量。液化气采用装载质量或装载温度实测密度。核对库存、分离液体及内部转移，保留转换公式及不确定性；cp_output 独立记录正的出口验收质量 D。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_cooling_water | liquefaction | `cooling_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_imported_steam | conditioning | `imported_steam` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_vaporizer_seawater | terminal | `vaporizer_seawater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_returned_seawater | terminal | `returned_seawater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种声明供给出口的计量处理气或液化天然气 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | 核对资源或购入进料、天然气产品、凝析油、分离 CO2、水、自用燃烧、火炬、放空、库存变化及实测损耗。气体体积计量须按匹配的实测组成、温度、绝对压力及压缩性换算质量；液化产品按装运条件计量质量或密度。不等同气态和液态体积。回用蒸发气及自用燃料气仅为内部记录，不新增产品抵扣。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | 核对资源或购入进料、天然气产品、凝析油、分离 CO2、水、自用燃烧、火炬、放空、库存变化及实测损耗。气体体积计量须按匹配的实测组成、温度、绝对压力及压缩性换算质量；液化产品按装运条件计量质量或密度。不等同气态和液态体积。回用蒸发气及自用燃料气仅为内部记录，不新增产品抵扣。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 供应具有组成限定的天然气原料或燃料，不宣称有用热等效 |
| excluded_use | 制造煤气；独立石油气混合产品；独立氢产品；用户燃烧；未披露输送 |
| required_metadata | 气田或场址及年份；起始状态；气态或液化相态；组成及水分；压力；温度；密度测量；低位热值及基准；气体回收及自用；出口；运输范围；制冷剂组成；分配；海上范围；适用时实测硫及汞；气量参考条件及压缩性；接收站加热路线；取退水 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| ifc-onshore-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Onshore Oil and Gas Development, 30 April 2007, air and produced-water sections and Annex A, p.27. https://www.ifc.org/content/dam/ifc/doc/2000/2007-onshore-oil-gas-development-ehs-guidelines-en.pdf | 地层流体分离、天然气杂质去除、直接空气排放及采出水管理，仅用于陆上范围。 |
| ifc-lng-2017 | official_guidance | IFC, Environmental Health and Safety Guidelines for Liquefied Natural Gas Facilities, 11 April 2017, Annex A pp.21–22 and air-emissions section. https://www.ifc.org/content/dam/ifc/doc/mgrt/20170406-final-lng-ehs-guideline-april-2017.pdf | 预处理、液化、制冷系统及蒸发气管理，不采用默认消耗区间。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
