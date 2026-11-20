---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.remelting-scrap-ingots-of-iron-or-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 合金钢细车屑来源的再熔废锭

## 1. 范围与适用性

本 PCR 建立一个狭窄产品边界：一种分选合金钢机加工细车屑经真实熔化并粗铸成锭，验收用途为另一熔炼作业的炉料。来源的具体化学组成须实测，不规定固定配方。产品必须满足参考卡全部条件，不能只是由废钢制成的一般钢锭。阿尔及利亚海关 RTC 067/DGD（2024年11月5日，载于2025年2月汇编）确证一种实际产品：细车屑或磨削细粉经重熔形成、表面粗糙不规则且化学组成不固定的合金钢粗铸废锭，用作炼钢添加料。本 PCR 仅选其中细车屑子集，排除磨削细粉路线。该裁定证明这种物理产品及路线实际存在，不提供炉型、配方、批次收得率、公用工程因子或实测 LCA，也不自动判定其他批次适用。实际场址来源、炉型、分析及首次质量门验收须另行采集。JRC 电炉作业只用于条件清单提示，不强制电弧炉、感应炉、AOD 或 VOD。

排除普通钢锭、板坯、大方坯和钢坯（包括连铸品）；生铁、镜铁和铁合金；未熔散状/破碎/打包/压块黑色金属废料；炉渣、浮渣、氧化皮和粉尘；磨削细粉进料路线；未符合废锭条件的初级合金钢形态；放射性废料；成品铸件和以废物处理服务为参考的功能。压实炉料不是重熔锭。本方法不提供工厂牌号、收得率、能耗或排放因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.remelting-scrap-ingots-of-iron-or-steel |
| classification_refs | CPC 3.0:39350；已接受合金钢细车屑子集的较窄映射，见 docs/adr/2026-11-21-accept-cpc-39350-rough-cast-remelting-ingots-from-alloy-steel-turnings.md |
| covered_products | 一种分选合金钢来源、满足完整参考条件的粗铸再熔炉料锭或块 |
| excluded_products | 未熔废料及压实料；普通钢初级或半成品；生铁/镜铁/铁合金；未符合废锭条件的初级合金钢形态；渣/浮渣/氧化皮/灰；成品制品；服务参考 |
| representative_product | 合金钢细车屑来源的再熔废锭 |
| production_route | 可追溯合金钢切屑 → 真实分选/准备 → 已核实熔化 → 真实分渣及有证据钢包作业 → 粗锭模浇注 → 凝固/脱模 → 首次再熔炉料验收；真实批次服务另账 |
| market_state | 首次质量放行的干净粗铸再熔炉料；声明形态、表面缺陷、组成、温度及接收规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为另一熔炼作业供应一种声明的粗铸再熔废锭炉料 |
| How much | 唯一首次质量放行时的 1 kg 干净验收产品 |
| How well | 满足 released_ingot 的全部物理条件及真实接收再熔炉料规范；不与钢坯等同 |
| How long or cycle | 一个声明报告期，保留首次放行批次历史及真实服务扩展 |
| reference_flow_link | released_ingot |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 钢铁的再熔废锭 `1b39288a-f917-4c5a-8ef2-9cac5a60d8c1` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 一种分选合金钢机加工来源及原钢材/加工负荷; 真实炉型及浇注路线; 粗锭或块形态及无冒口/保温帽证据; 细车屑进料并排除磨削细粉; 整份合金组成实测而非固定配方; 表面缺陷记录及照片; 整份产品元素及物相分析并排除生铁/镜铁/铁合金身份; 约定再熔炉料验收规范; 首次放行 Q 及唯一批次标识; 排除包装及可分离残渣的干金属/水分基准; 场址及时间覆盖; 原始单位及所有气液参考状态; 真实供方及电压; 期初期末原料存量、在制及成品逐交换负荷向量; 全部失败/Q0/启停/空转/清理/返工负荷; 真实废物交接状态及上游回收分配方法; 批次仓储/搬运/包装服务及退回; 每种包装独立账; 热/金属/氧/水平衡及独立物种证据 |

每项限定信息均须在数据集说明或关联采集证据中声明；即使存在泛 UUID，仍须有原始整份流组成及路线证据。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为验收粗铸再熔炉料的首次放行干净质量，包含不可分离的产品固有物相，不是仅计纯铁分析含量；排除游离水、可分离残渣和包装。采用 cp_release 采集，参考行 released_ingot 为 1 千克。 |
| `raw_conversion` | all inventory rows | Declared physical property | kg or MJ | 保留原始质量、累计体积、浓度及能量单位。累计量只换算一次；只有真实速率才按其测量时间积分。采用独立测得的该物质密度、气体组成、温度、绝对压力及干湿状态。不得将水密度用于油或气体，也不得从次级属性系数推算密度。 |
| `single_division` | all inventory rows | Declared physical property | per reference flow | 采集保存未经除法的原始量。由 calc_raw 和 calc_assign 按行单位确定已归属分子 A；calc_once 只执行一次 A / Q。卡片和聚合引用同一结果。Q=0 保留真实负荷且不产生单位结果。 |
| `energy_state` | electricity and heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 选定电力使用能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 及参考 MJ；该组中 kWh 系数为 3.6。电表电功的独立 Energy 属性为 `f6811440-ee37-11de-8a39-0800200c9a66`，指向同一单位组；不得仅据此推定供方原生属性。保留燃料质量及独立记录的低位热值。热焓、潜热、损失及真实外供热分开；能量属性不能证明电力是一种燃料。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一种可追溯供货合金钢切屑流，携带原钢材、机加工、准备及运输继承负荷；全部真实外供公用工程及耗材 |
| starting_condition_role | 前景接收门并明确关联上游供方及回收方法；不是零负荷截断 |
| product_classification_scope | 仅限指定合金钢来源粗铸 39350 再熔炉料子集 |
| recursive_input_rule | 若真实购入兼容锭，记录其真实供方一次并披露继承向量，不递归重建或声称自行制造。此种采购不能替代当前原废钢路线证据。 |
| upstream_dataset_requirement | 要求来源、组成、路线、门、地域及时期兼容，并有真实交接/回收归属。核心既有负荷缺失阻止量化完成；普通供方匹配仍为披露的采集工作。 |
| disclosure | 全部限定信息；完整路线；真实门；实物 V 和归属 A；继承存量；Q0；服务 Qc/H；包装；未知物种；分配及来源限制 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_identity` | 参考产品 | 仅适用于一种分选合金钢来源粗铸锭/块，验收用途为另一熔炼作业的炉料。须有原始产品及路线证据满足声明的全部物理条件。熟悉的电炉配方、CPC 标签或泛流名称均不能建立此终端。 | `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `sb_complete_route` | 全部前景 | 纳入接收来源核验、分选、真实脱油/准备、实际熔炼、分渣、真实钢包处理、粗锭模浇注、冷却、脱模、检验及首次放行；还包括真实排放捕集、残余物处理、维修、清理、失败炉次、启停及空转。每种真实燃料、化学品、耐材、气体、包装制品、废物出口及基本物种均须有原子行；场址证据要求时扩展本有限候选清单。不得暗换为连铸、精炼钢坯生产或购买成品废锭。 | `jrc-iron-steel-2013`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `sb_upstream` | 供货废钢及其他投入 | 通过兼容供方追溯原钢材及实际产生废钢的工序、来源分离、准备、运输和既有负荷分配。声明真实废物/产品交接条件及单独论证的回收方法。“再生”标签既不产生零负荷，也不产生替代原生生产信用。既有负荷或废物交接方法缺失时阻止量化清单；不得编造循环次数、回收系数或市值正负。 | `ilcd-general-2010` |
| `sb_gates` | 放行及批次服务 | Q 仅在首次验收计入唯一实物批次。期末成品存量已包含其放行 Q，绝不再次加作生产。放行后仓储、包装、搬运和发运在独立服务账归属到原始固定 Qc；H 为真实服务时长，绝不作生产分母。货物携带历史负荷转交，不重新制造。合并视图抵消内部放行转移。核实实际制造方、外包熔炼/浇注供方、首次质量放行及真实交接；外包生产通过已核实供方或所采前景作业计一次，逐项核对缺漏与重叠。单纯调拨或转售不形成新生产。实物总发运 V、实物退回和复验不作新 Q。退回时冲回原交付交易；保留原生产历史且仅计真实增量返工。 | `ilcd-general-2010` |
| `sb_physical` | 金属、氧、水及热 | 实物总量 V 独立于已归属交换向量 A 闭合。以独立金属、氧化物、油和水分析追踪总质量及 Fe/C/O 和真实合金/污染元素。分开游离水、结构水、反应水及相变。用实测状态核对电力、实际燃料热、显热/潜热、化学热、冷却水焓、真实外供热及损失。不得用一个残差拟合两个未知物种；不得以反应水凑平、假定氧化收得率或编造外供热。 | `jrc-iron-steel-2013` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| scrap_ingot_route | 来源准备至粗锭首次放行及关联批次服务 | required | 仅在真实来源及路线建立此专门终端后适用；条件交换须有真实存在证据 | 一体化前景，准备/熔炼/浇注/控制/服务分别设子账 | released_ingot; 1 kg |

按以下顺序保留可单独识别的作业记录：(1) 来源核验、分选及真实切屑脱油/准备；(2) 实际熔化及实测组成调整；(3) 真实分渣及实际钢包处理；(4) 粗锭模浇注、冷却、脱模、试验及唯一首次放行；(5) 贯穿全过程的抽风、冷却水、残余物及维修作业；(6) 放行后批次仓储、包装、搬运及发运服务。内部准备切屑、熔体和返工返回保持为携带继承向量的实物子账转移；一体化过程抵消这些转移，不重复采购。

以下清单为明确有限的候选交换集，不证明每项条件供料都存在。记录真实存在/不存在情况。声称场址完整前，须新增每种真实缺列燃料、制剂、原料、废物出口或基本物种；不得藏在零值、未指定其他流或族绑定中。

### 过程： 完整合金钢来源再熔废锭路线 (`scrap_ingot_route`)

#### 输入

##### 产品流

###### 分选后的合金钢机加工细车屑 (`raw_turnings`)

以整份供货切屑流接收一种明确合金钢机加工来源。记录产生者、原钢材负荷、机加工和收集负荷、形态、油分、水分、氧化物及元素分析、法定交接状态和供方。不得默认废料零负荷，也不得重复采购其中铁和碳的分析含量。该核心投入在完整兼容的原生记录核实前不绑定 UUID。

- 选定流: 分选后的合金钢机加工细车屑
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_charge`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 交流电 (`electricity`)

只用于到用户的 1–35 kV 电网平均消费组合并保留供电链边界。这是以 MJ 原生净热值属性计量的产品流，不是输配服务或电厂发电输出。电表计量的电功采用独立 Energy 属性 `f6811440-ee37-11de-8a39-0800200c9a66`，与所选供方流已核实的原生净热值属性分开。两者均指向能量单位组，但相同单位组本身不能证明原生属性。其正式供货地为 CN；必须匹配真实供方、场址及年份，其他供货地域须另行核实兼容流。计量分选、重熔、浇注、抽风、冷却、空转、清理及批次服务且不得重叠；其他电压和自发电须拆成另行核实的流。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 天然气 (`natural_gas`)

仅在真实天然气燃烧器或预热器存在时纳入。整份交付天然气只记录一次，同时记录组成、热值、体积实际或参考状态、表计总量和供方；气体组成仅作非叠加子账。不得默认增设锅炉或蒸汽供应。

- 选定流: 天然气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 柴油 (`diesel`)

仅在废料准备、厂内运输、燃烧器或放行后搬运确有柴油设备时纳入。设备账和生产/批次服务账分开；测量燃料质量，或按独立测得的燃料状态换算体积。不得假定柴油密度。

- 选定流: 柴油
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 气态氧 (`oxygen`)

仅在外购喷吹或富氧燃烧供应存在时纳入。记录纯度、压力、温度、水分和计量质量；区分外购气与卷入空气组分。氩和氮不可互换。累计气体体积不得再乘时间。

- 选定流: 气态氧
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 气态氩 (`argon`)

仅在外购熔池搅拌或真实保护气供应存在时纳入。记录纯度、压力、温度、水分和计量质量；区分外购气与卷入空气组分。氩和氮不可互换。累计气体体积不得再乘时间。

- 选定流: 气态氩
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 气态氮 (`nitrogen`)

仅在外购真实搅拌或吹扫供应存在时纳入。记录纯度、压力、温度、水分和计量质量；区分外购气与卷入空气组分。氩和氮不可互换。累计气体体积不得再乘时间。

- 选定流: 气态氮
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 石墨电极 (`electrode`)

仅用于已证实消耗电极的电弧路线。记录装入存量、外购、剩余存量、回收碎块及实际消耗；不得套用于感应炉。

- 选定流: 石墨电极
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 石墨增碳剂 (`carburizer`)

仅在实际加入所记录牌号的石墨时纳入。整份供货材料只计一次；碳分析含量不是另一次采购。其他含碳供料须另列原子卡片。

- 选定流: 石墨增碳剂
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 生石灰 (`quicklime`)

仅纳入实际供应的整份 CaO 基生石灰熔剂。分析含量、杂质及水合状态为子账字段；不得重复采购分析中的钙或氧。

- 选定流: 生石灰
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 白云石 (`dolomite`)

仅纳入实际碳酸盐型白云石熔剂。不得将煅烧白云石灰改称碳酸盐；仅凭实际碳酸盐分析及反应证据记录反应二氧化碳。

- 选定流: 白云石
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 硅铁 (`ferrosilicon`)

仅纳入一种真实外购整份硅铁添加料并记录牌号及供方分析；硅和铁分析含量不另作采购。核实最终产品仍属于声明的非合金来源范围。

- 选定流: 硅铁
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 锰铁 (`ferromanganese`)

仅纳入一种真实外购整份锰铁添加料；一次性保留牌号、碳含量及分析结果。不得假定配方或自动加入合金料。

- 选定流: 锰铁
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 镁质耐火砖 (`magnesia_brick`)

仅纳入本期实际可归属的整块砖消耗或更换，记录组成、炉衬期初期末存量及回收砖。跨期炉衬按实测使用与磨损归属，不得每批计入整套更换。

- 选定流: 镁质耐火砖
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 硅质耐火衬料 (`silica_lining`)

仅纳入一种真实供货组成的衬料。只有真实炉型使用时才可作为路线选择；不得用泛化耐材族绑定互换硅质与镁质材料。

- 选定流: 硅质耐火衬料
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 铸铁锭模 (`mould`)

仅纳入无冒口或保温帽的粗锭浇注实际使用的耐用锭模。记录锭模身份、寿命使用、更修、破损及实测磨损；其供方负荷按有记录的服务只归属一次。锭模组成只有真实转入时才成为炉料金属。

- 选定流: 铸铁锭模
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 石墨锭模涂料悬浮液 (`mould_coating`)

仅纳入一种外购整份石墨涂料悬浮液。载水和固体仅作非叠加分析。若厂内配制，应以逐种真实外购材料、混配能耗和损失替代本采购，不得并存两条路线。

- 选定流: 石墨锭模涂料悬浮液
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 润滑油 (`lubricating_oil`)

仅纳入机械设备真实使用的一种矿物润滑油。追踪整份油而不是其中烃类分析含量；不同真实润滑剂或制剂另拆。

- 选定流: 润滑油
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 乙二醇冷却液 (`coolant`)

仅纳入闭式冷却回路真实使用的一种外购整份乙二醇冷却液。记录浓度、补充、排出和存量；不得再次采购活性乙二醇或载水。

- 选定流: 乙二醇冷却液
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 工业过程水 (`process_water`)

按水源和回路记录真实外购补水、浇注或冷却水，并记录物理状态及供方水/能量约定。内部循环不另作外购；自然取水须另列明确来源的基本流。

- 选定流: 工业过程水
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 钢制捆扎带 (`steel_band`)

仅纳入声明批次真实捆扎带的首次外部实收，无论采购、租用或免费提供。实物接收只计一次，采购发票不另作一次接收。单独保留空置/在制/成品附着/可复用存量及外部退回账；随实物总发运带出的捆扎带不属于净金属 Q。

- 选定流: 钢制捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 木托盘 (`wood_pallet`)

仅纳入一种真实托盘的首次外部实收，无论采购、租用或免费提供，并记录实际供方及寿命。外部退回只归入 pallet_return_in。内部复用既不作新采购，也不作共产品信用。其他每种包装制品另列。

- 选定流: 木托盘
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 钢制捆扎带 (`band_return_in`)

真实外部退回接收，独立于新采购和内部复用。保留该制品/寿命继承负荷及真实退回运输；不得重新采购其材料。

- 选定流: 钢制捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 木托盘 (`pallet_return_in`)

真实外部退回接收，独立于新采购和内部复用。保留该制品/寿命继承负荷及真实退回运输；不得重新采购其材料。

- 选定流: 木托盘
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### 废物流

##### 基本流

###### 环境空气中的氧气 (`air_oxygen`)

独立于外购工业气记录真实卷入或燃烧空气中的该物种。对相关系统取得组成及气流量/状态实测证据；未测组分仍为明确平衡缺口，不得编造比例。

- 选定流: 环境空气中的氧气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 环境空气中的氮气 (`air_nitrogen`)

独立于外购工业气记录真实卷入或燃烧空气中的该物种。对相关系统取得组成及气流量/状态实测证据；未测组分仍为明确平衡缺口，不得编造比例。

- 选定流: 环境空气中的氮气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 环境空气中的氩气 (`air_argon`)

独立于外购工业气记录真实卷入或燃烧空气中的该物种。对相关系统取得组成及气流量/状态实测证据；未测组分仍为明确平衡缺口，不得编造比例。

- 选定流: 环境空气中的氩气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gas`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

#### 输出

##### 产品流

###### 钢铁的再熔废锭 (`released_ingot`)

真实熔化、粗锭模浇注、凝固、脱模和验收后，在唯一首次炉料质量放行门的净一千克。原生产品身份是工厂生产混合的已制造再熔废锭，以质量/kg 计量，未固定牌号、CAS 或地域；它不能证明特定炉型或合金钢来源。必须满足粗铸锭/块形态、明显表面缺陷、锭无冒口或保温帽、非生铁/镜铁/铁合金组成、可追溯来源及约定的再熔炉料验收条件。排除连铸钢坯、普通钢初级形状、未熔压实废钢、炉渣及浮渣。本行是唯一生产参考；发运、复验、退回或不合格重浇均不形成新增产量。

- 选定流: 钢铁的再熔废锭 `1b39288a-f917-4c5a-8ef2-9cac5a60d8c1`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_release`
- 来源: `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026`

###### 对外返回的工业冷却水 (`return_water`)

仅在水真实跨越外部供方边界返回时纳入。记录质量、温度、压力、溶解负荷及相对约定状态的焓，并记录供方对水和能量的处理。内部换热器不得虚造对外返回，也不得复制不存在的蒸汽/凝结水回路。

- 选定流: 对外返回的工业冷却水
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 钢制捆扎带 (`band_on_ship`)

真实随实物总发运带出的捆扎带，置于净金属 Q 之外并与捆扎带存量账核对一次。

- 选定流: 钢制捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 木托盘 (`pallet_on_ship`)

真实随实物总发运带出的托盘；声明所有权是否转移并保留唯一真实供方/寿命负荷。

- 选定流: 木托盘
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 钢制捆扎带 (`band_return_out`)

仅纳入对外所有者真实退还的单独出口，不作内部复用或另一次采购。

- 选定流: 钢制捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 木托盘 (`pallet_return_out`)

仅纳入对外所有者真实退还的单独托盘出口及真实运输搬运负荷。

- 选定流: 木托盘
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### 废物流

###### 不合格合金钢机加工细车屑 (`reject_turnings`)

离厂的一股单独分选不合格金属切屑。保留整份质量、污染和真实去向；返回厂内准备工段的部分内部抵消。

- 选定流: 不合格合金钢机加工细车屑
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 合金钢重熔炉渣 (`slag`)

一股真实多组分炉渣，独立分析整份质量、夹带金属、含氧物相及水分。来源分区和组分分析不再叠加成整份输出；不得据此套用选矿铁渣 UUID。

- 选定流: 合金钢重熔炉渣
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 合金钢钢包渣 (`ladle_slag`)

仅在钢包处理真实发生时纳入单独真实钢包渣出口。不得自动设为存在，也不得对同一混合炉渣出口重复叠加。

- 选定流: 合金钢钢包渣
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 捕集的合金钢重熔袋式除尘灰 (`bag_dust`)

称量真实捕集的多组分除尘灰流。捕集灰与残余大气物种分开；实验室金属浓度仅作非叠加表征，不另作金属共产品。

- 选定流: 捕集的合金钢重熔袋式除尘灰
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废镁质耐火砖 (`spent_magnesia`)

按组成及去向纳入真实拆除砖废物。关联炉衬存量、维修及附着金属，不得假定本期全部外购衬料都变成废物。

- 选定流: 废镁质耐火砖
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废硅质耐火衬料 (`spent_silica`)

仅纳入真实单独硅质衬料废物；不得与镁质废物混列或改变其组成。

- 选定流: 废硅质耐火衬料
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 不合格合金钢粗铸件 (`reject_cast`)

此处只记录真实对外移出的不合格铸件。返回厂内重熔的物料在在制账中携带每项继承交换负荷及实测新增重熔负荷，内部抵消且不新增外部炉料或 Q。

- 选定流: 不合格合金钢粗铸件
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废矿物润滑油 (`spent_oil`)

一股单独废油出口，记录实测质量、水分及真实许可去向；油分析组分不另计废物质量。

- 选定流: 废矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 分离的水基切削液废物 (`cutting_fluid`)

仅纳入按有记录准备工序从来料切屑分离的整份真实液体。水、油及金属作子账分析；真实处理供方只建模一次。

- 选定流: 分离的水基切削液废物
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residue`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废乙二醇冷却液 (`spent_coolant`)

仅纳入排出的整份真实冷却液及实测组成，不得在整份冷却液之外再次排放分析中的乙二醇或载水。

- 选定流: 废乙二醇冷却液
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 合金钢重熔过程废水 (`wastewater`)

一股真实对外过程废水出口，记录整份溶液实测质量及去向；该出口只选一个供方。溶解组分、COD 和悬浮物为表征子账。直接排入环境须另列物种/介质卡片且不得同时接处理供方。

- 选定流: 合金钢重熔过程废水
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废钢制捆扎带 (`band_waste`)

真实捆扎带废物，与独立包装账核对；复用捆扎带不得另算废物，也不得抵减回收信用。

- 选定流: 废钢制捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 废木托盘 (`pallet_waste`)

真实托盘废物，与独立包装账及真实处理去向核对；排除内部复用。

- 选定流: 废木托盘
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### 基本流

###### 排入大气的二氧化碳 (`co2`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的一氧化碳 (`co`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的一氧化氮 (`no`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的一氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的二氧化氮 (`no2`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的二氧化氮
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的二氧化硫 (`so2`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的二氧化硫
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的水蒸气 (`vapour`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的氧气 (`o2_out`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的氧气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的氮气 (`n2_out`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的氮气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的氩气 (`ar_out`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的氩气
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的氧化铁颗粒 (`fe2o3_air`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的氧化铁颗粒
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### 排入大气的氧化锌颗粒 (`zno_air`)

仅在最终排放点及实测无组织排放取得真实物种和介质证据时纳入。浓度和气流量须在一致干湿、温度、压力及时间基准下换算。本项为物种质量，不是以 NO2 当量表示的 NOx、TOC、VOC、COD、总尘或金属当量质量。氧化物气溶胶还须核实化学相及粒径，不得假设所有粉尘都是该物质。保留真实启停、失败炉次、空转和清理负荷。若另有真实物种，必须新增独立卡片后才可声称完整。

- 选定流: 排入大气的氧化锌颗粒
- 流属性/单位: 质量 / kg
- 数量规则: a（第 8 节的唯一归一化结果）
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emission`
- 来源: `jrc-iron-steel-2013`; `ilcd-general-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_hierarchy` | 每项归属交换 | 在分配已获论证的归因型场景，先归属专属记录并对可分离功能作独立或虚拟细分。对每项剩余交换证明定量联系该交换与各功能的决定性物理因果关系；不得为全厂随意选用单一质量或经济比例。只有真实剩余共同过程负荷才使用同期、同实际门、同数量质量状态的市值，并披露调整。各功能向量之和必须保全。 | `ilcd-general-2010` |
| `al_residues` | 废钢、炉渣、除尘灰及服务 | 分配前根据有记录的交接和市场状态，将每个真实出口划为产品、废物或独立处理服务。有利用可能的渣或灰不自动获得共产品份额或信用。废物/回收系统边界及跨生命周期分配须有独立支持的方法；通用多功能过程层级不是完整回收公式。不得推定正市值、固定比例、避免排放或免费上游钢材。 | `ilcd-general-2010` |
| `al_inheritance` | 原料存量、在制、成品、返工及内部金属 | 按物料批/生产批次和每项继承交换的自身单位携带期初期末原料存量、在制及成品，并保留供方、历史数量、价格基准和既有分配关联。只有实际耗用的原料存量向量转入在制；仍在原料库存的收货量不作本期生产消耗。已放行成品的生产历史与增量服务分开，不得将其历史向量再加到新生产。内部准备炉料、熔体、返回料及重熔循环的发送/接收实物记录和继承向量须匹配并在合并时抵消。外购只计一次。全部 Q0、空转、清理和启停负荷保留到真实批次或披露的待归属账户，绝不为改善收得率而删除。仅可依据原始记录更正已确认的同侧重复分录；不得任意填平衡差。 | `ilcd-general-2010` |
| `al_packaging` | 每种包装制品 | 对每种捆扎带和托盘分别要求：期初空置 + 期初附着在制/成品 + 期初可复用 + 首次外部实收 N + 外部退回接收 ER = 期末空置/附着/可复用 + 随实物总发运带出包装 S + 对外退还 EO + 废物 W。N = P_received + NP_received：购买实收 P_received 与首次非购买外部实收 NP_received 分列；后者含随来料进入、另行借入/租借或无偿调拨的制品，无论供方清单是否覆盖。发票 P 与购买实收核对，不再加入 N。实物移动及全部存量归属与负荷覆盖分别核对；实际采购、运输及服务负荷只计一次，已由来料或供方向量携带的不得另加。供方覆盖缺失须明确待查，不得视为零。每笔 ER 必须关联同一制品更早的对外流出交易，包括经核实的前期历史；保留事件先后和总移动，不得将退回净入采购或发运。内部复用抵消。计量、真实退回运输及实测服务磨损归属受服务批次并保留其原始 Qc；制品的供方/寿命负荷只承接一次。包装不得进入金属 Q，不因复用而重新采购，也不自动取得共产品信用。 | `ilcd-general-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | scrap_ingot_route | 放行及存量 | primary_record | 批次标识; 原炉次; 毛重票据; 皮重; 实测游离水; 可分离残渣; 首次放行净质量 Q; 首次放行时间; 验收试验; 照片; 来源至炉次至浇注至放行批关联; 实际制造方及外包熔炼/浇注供方; 真实交接单、质量门及负荷覆盖; 首个接收熔炼车间身份; 接收炉料规范及关联验收/用途证据; 期初期末在制/成品; 实物总发运 V; 退回批次及原交付标识; Qc | 使用校准称重和独立水分/残渣取样；核对唯一验收与实物存量变化。复验为关联事件，不是另一次首次放行。首个接收方证据与生产门分开保留；后续发运或接收验收不得形成第二个 Q。 | kg | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_charge` | scrap_ingot_route | 来源废钢 | primary_record | 供方; 原钢材供方及过程; 机加工来源; 法定交接状态; 上游负荷向量; 废钢形态; 批质量; 水分; 油分; 金属/氧化物分析; 相关元素组成; 分选不合格料; 内部转移 | 接收可追溯交付记录及匹配原始组成试验；检查真实形态。供货流及产生工序须与供方边界匹配，并包含单独论证的回收分配。 | kg | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_material` | scrap_ingot_route | 每种供货材料 | primary_record | 行标识; 供方; 整份制剂; 牌号; 单位; 原始收货量; 期初存量; 期末存量; 使用; 退回; 损失; 分析; 设备寿命使用; 实测磨损; 按批次原始交换向量 | 对每种原子供料使用采购、库房及校准消耗记录；识别真实混配和维修记录。耐用锭模及炉衬保留寿命及实际服务磨损记录。 | kg | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_energy` | scrap_ingot_route | 电力及每种真实燃料 | primary_record | 行标识; 表计期初; 表计期末; 原始 kWh; 原始燃料质量或体积; 燃料状态及独立密度; 热值; 电压; 供方; 作业及空转时段; 批次; 分配驱动量 | 使用校准总表及分表、发票、油罐存量和设备日志。核对总分表并保留抽风、冷却、启停、失败及清理负荷；共享表计不得重复计入。 | raw kWh; kg; m3 | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_gas` | scrap_ingot_route | 每种气体及真实空气物种 | primary_record | 行标识; 外购或环境来源; 组成; 累计体积或速率; 速率单位; 时段; 温度; 绝对压力; 水分; 独立密度或状态方程依据; 质量; 排出去向 | 使用校准气体表、交付质量记录及真实组成/状态测量。计算质量前确认真实速率积分及一致干湿标准化；保留换算不确定性。 | raw m3; kg; measured rate | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_water` | scrap_ingot_route | 水及冷却液 | primary_record | 回路及行标识; 外购整份制剂; 原始水质量或累计体积; 独立液体密度; 温度和压力; 焓基准; 期初期末存量; 补充; 蒸发; 排污; 返回; 反应水证据; 供方水/能量约定 | 计量每个外部边界并对真实液体取样。分别记录游离水、结构水和反应水，按真实状态确定相态/焓。不得重新采购内部循环量，也不得重复计入溶液水和整份溶液。 | kg; raw m3; MJ | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_residue` | scrap_ingot_route | 每个残余物出口 | primary_record | 行及出口标识; 整份质量; 水分; 组成及物相; 捕集或排放; 来源分区; 去向; 法定交接; 唯一供方; 继承向量; 内部回收交易 | 称量每个真实出口，保留独立水/金属/物相分析、转移单及真实处理或接收记录。整份出口与非叠加来源分区须核对为同一实物质量。 | kg | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_emission` | scrap_ingot_route | 每种基本物种 | primary_record | 物种; 适用时 CAS; 最终介质; 有组织及无组织源; 浓度; 干湿基准; 氧校正; 气流量; 累计或速率; 时段; 温度; 压力; 捕集; 化学相; 粒径; 检出限; 不确定性 | 采用真实排放源测量及物相专属试验；对齐浓度、流量、时间及氧参考条件。指标当量与真实物种分开；低于检出限为删失记录，不是实测零。 | raw concentration; flow; kg | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_pack` | scrap_ingot_route | 每种包装制品 | primary_record | 制品标识; 批次; 期初空置; 期初附着在制; 期初附着成品; 期初可复用; 首次外部实收 N 分列购买实收 P_received 与非购买实收 NP_received（随来料、另行借入/租借或无偿调拨，无论供方覆盖）; 发票 P 与购买实收核对; 供方已含负荷及缺失待查; 外部退回接收 ER 及更早对外流出交易标识和时间; 期末空置/附着/可复用; 实物总发运包装 S; 对外退还 EO; 废物 W; 内部复用; 供方; 寿命负荷; 受服务批次原始 Qc; 计量及退回服务归属 | 对每种制品跨全部存放位置及真实外部移动独立计数和称重。关联退回、维修、服务磨损及交付标识；在件数和质量上核对 al_packaging，不得假定单件质量。 | kg; actual article count | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |
| `cp_vector` | scrap_ingot_route | 原始归属及服务 | primary_record | 批次及交换标识; 原始单位; 实物总量 V; 期初期末原料存量向量; 真实外部实收向量; 实际领用向量; 每项供方、历史数量、价格及既有分配; 期初在制向量; 本期作业交换; 专属归属; 虚拟细分; 因果驱动量; 剩余共同门价格及日期; 期末在制向量; 期初期末成品历史向量; 增量成品服务向量; 非本批转移; Q; 原始 Qc; 服务 H; 服务原始负荷; 退回/冲回标识; 真实增量返工; Q0 保留账户 | 在整个报告期核对原始交易和每项继承交换，包括失败、空转及清理时段。服务账冻结原首次放行 Qc；在 calc_once 前将每项原始服务负荷归属真实批次。所有未知关系保留为未解决，不得当作平衡通过。 | row-native raw units | 每项交易/炉次及连续表计时段；期界盘点 | 完整声明报告期，包括失败/Q0/空转/清理时段及批次历史 | 一个声明场址/来源，供方及批次分别识别 | 每 1 kg 参考流 | 校准；原始票据；匹配存量及供方证据；不确定性；来源限制 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw` | all inventory rows | 使用受支持的精确单位系数或单独测得的状态/组成/密度，将每项原始观察换算为声明行单位；只对速率积分。不得除以产量。整份供货制剂只计一次，分析含量作非叠加子账。 | raw_observation; state; conversion_evidence | converted_raw_exchange | `jrc-iron-steel-2013` |
| `calc_assign` | all inventory rows | 先以期初原料存量向量加真实外部实收向量，减期末原料存量向量及有记录的对外移出，核对实际领用，并保留每项原始供方、数量、价格及既有分配。这些领用向量只转入在制一次，不得同时将收货量计为消耗。对每项交换 f 和批次 c，以期初在制继承向量加实际专属/分配后的领用、本期作业交换及真实返回继承向量，减期末在制继承向量及有记录的其他批次转移，得到分子 A_f,c。成品保留其既有首次放行生产向量；只有增量成品服务归属原始 Qc，不得将成品历史向量复制到本期生产。真实增量返工另行归属；匹配内部交易抵消。剩余共同过程分配及 Q0 余额须明确保留。实物总量 V 独立于此归属向量。 | converted_raw_exchange; opening_raw_vector; closing_raw_vector; opening_WIP_vector; closing_WIP_vector; FG_vector; assignment_records; returns | A | `ilcd-general-2010` |
| `calc_once` | all inventory rows | 对以 kg 计的首次放行正产量批次，a = A / Q；同一批次服务扩展以原始 Qc 作为 Q。这是唯一生产除法；数量卡片及采集聚合只引用 a。Q=0 时将 A 保留在其未解决或失败批次，不计算 a。released_ingot 参考行为 1 千克，不是再次计算。 | A; Q; Qc; cp_release; cp_vector | a | `ilcd-general-2010` |
| `calc_pack` | steel_band; wood_pallet; band_return_in; pallet_return_in; band_on_ship; pallet_on_ship; band_return_out; pallet_return_out; band_waste; pallet_waste | 对每种制品以原始存量及真实首次外部实收 N 执行 al_packaging，不得用采购发票 P 代替实收。聚合前将 ER 与其更早的制品对外流出交易核对。抵消内部复用；单独保留寿命/供方负荷及真实退回服务。按实际称量的制品配置核对质量和件数；本规则不除以 Q。 | packaging_stocks; N; P; ER; S; EO; W; cp_pack | packaging_balance | `ilcd-general-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考及 raw_turnings | 对真实合金钢废钢来源、炉型、粗锭模路线、首次炉料质量放行和完整物理产品身份提供来源专属 primary 证据。将原始来源批、炉次、浇注、唯一放行及首个接收熔炼车间与其真实再熔炉料规范和验收/用途记录关联。通用工厂能力或贸易定义本身仍留下来源专属方法缺口。 | 来源记录；照片；分析；接收方验收规范 |
| `dq_completeness` | 每项交换及全期 | 保留每行、单位、原始字段、零产出负荷、存量继承、来源分区、整份出口及供方关系。模板外真实交换须原子扩展。不适用须有不存在的证据，绝不默认为零。 | 原始账；检出限；校准表计；平衡报告 |
| `dq_allocation` | 全部功能 | 分别记录符合目标的上游回收方法和本过程分配方法。保留真实交接状态、细分、因果驱动及剩余共同门可比价格证据。披露未解决基准及敏感性，不得换成方便的比例。 | 供方清单；真实合同；归属计算 |
| `dq_scope` | 数据集元数据 | 声明地域、报告日期、来源和技术代表性、配置、不确定性及全部排除项。未来工厂量是采集义务，不是 PCR 默认值；机械检查不能认证科学或翻译审批。 | 质量声明；测量记录；来源限制 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_terminal` | 参考及产品证据 | 接受此专门终端前，须具备全部限定信息和完整物理条件。通用电炉钢、板坯、钢坯、未熔废钢或选矿渣证据不足。即使名称或分类匹配，也须拒绝物理相矛盾的原生候选。 | `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `v_native` | 选定流及供方 | 须检查完整原生身份、数据集类型、路线、牌号、物相、形态、存在时的 CAS、介质、地域、全部注释和属性；参考属性和真实单位须一致。区分明确身份限制与通用分类或描述性注释，后两者不产生未声明的硬牌号限制。绑定前必须正面证明实际供货状态及功能，泛名本身不足。泛参考流身份不能核定特定合金钢来源或实际炉型。选定电力的正式供货地为 CN，且只限声明的 1–35 kV 用户侧消费组合。未绑定原料及辅料仍是具体行义务；普通 UUID 未解决本身不构成全局方法保留项，也不得以族标签替代。 | `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `v_balances` | 全期及每个批次 | 须独立核对实物总质量/元素/物种/水/热闭合、全部原始单位换算、首次放行 Q 及其成品关系、期初期末在制向量、失败/Q0 负荷、真实退回及增量返工，并有独立包装和服务账。不得重复计入混合出口整份质量和来源分区，也不得给一个出口接两个供方。物种证据不完整时不得用 COD/VOC/NOx/总尘凑平。 | `jrc-iron-steel-2013`; `ilcd-general-2010` |
| `v_no_defaults` | 量化数据集 | 本方法不提供默认牌号、配方、炉型、收得率、油/水含量、能耗、密度、排放因子、分配比例、回收信用或产量。核心产品/路线、来源负荷或物理物种未知构成实质保留项；未来场址量及普通兼容供方缺口须采集并披露。机械投影/计量检查不能建立科学适用性或翻译审批。 | `ilcd-general-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在产品、路线及负荷证据完整后供应声明的兼容再熔炉料功能 |
| allowed_use | 来源、状态及路线匹配的再熔炉料建模，明确不确定性及供方关联 |
| excluded_use | 钢坯/板坯或普通钢替代；未识别废钢来源；通用钢平均；零负荷或回收信用主张；自动分类或方法审批 |
| required_metadata | 全部参考限定信息；primary 终端及路线证据；完整原始/归属向量；真实回收及分配方法；来源、场址、时期、供方及物理状态 |
| required_quality_disclosure | 核心证据保留项；未绑定身份；采集缺口；供方限制；平衡及物种不确定性；Q0 及存量；无数值默认 |
| update_trigger | 来源、牌号、形态、浇注/炉型路线、验收门、供方、物种、法定交接/回收方法或支持证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.202–204, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 区分 39350 与 39340 未熔黑色金属废料、39310 炼钢残余物；解释说明不提供详细制造配方。 |
| `jrc-iron-steel-2013` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for Iron and Steel Production, 2013, Chapter 8 §§8.1–8.2.1, printed pp.419–429, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 仅支持邻近工业电炉单元、原子供料/排放候选和采集需求；不证明专门粗铸废锭生产。表 8.1 为欧洲多路线调查的液态钢基准，不采用数值、不固定蒸汽路线，也不自动加入 AOD/VOD。 |
| `ilcd-general-2010` | `official_guidance` | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment — Detailed guidance, First edition March 2010, §§7.9.2–7.9.3, printed pp.255–272, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型专属归属/细分、逐交换决定性物理因果、剩余同门同状态市值及清单守恒。不自动引入回收公式、免费废钢、无限循环、固定回收率或替代生产信用；上游回收仍须另有适用证据。 |
| `dz-customs-rtc067-2024` | `official_guidance` | 阿尔及利亚海关，2025年税则归类决定汇编，2025年2月，RTC 067/DGD，2024年11月5日，PDF第74页/印刷第68页，https://www.douane.gov.dz/IMG/pdf/recueil_des_decisions_de_classement_tarifaire_2025_.pdf | 真实合金钢粗铸废锭：由细车屑或磨削细粉重熔，表面粗糙不规则、组成不固定，用作炼钢添加料，归入7204.50.00.00。本方法仅选细车屑，不借用炉型、配方、场址清单或定量默认值。 |
| `cbp-n351850-2025` | `official_guidance` | 美国海关 CBP，NY N351850，2025年8月12日，第1–3页，https://rulings.cbp.gov/api/getdoc/ny/2025/N351850.pdf | 反例：拟用于铸造厂炼钢的钢坯仍为半成品。重熔用途本身不足以建立废锭身份，须核对物理形态、铸造及加工历史、组成。不采用税率或泛化批次认可。 |
| `usitc-ch72-2026` | `official_guidance` | 美国 USITC，HTSUS Revision 23 (2026)，第72章注1(g)及1(ij)，印刷第72-2页/PDF第6页，2026年11月21日取得的出版方快照，https://hts.usitc.gov/reststop/file?release=currentRelease&filename=Chapter%2072 | 粗铸形态、明显表面缺陷、锭无冒口/保温帽并排除生铁/镜铁/铁合金组成；区分半成品定义。保留的日期版本，不主张税率或批次资格。 |
