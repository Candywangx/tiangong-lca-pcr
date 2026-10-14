---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-elements-cartridges-non-irradiated-for-nuclear-reactors
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 非辐照民用 UO2 压水堆燃料组件装配与交付

## 1. 范围与适用性

本方法仅覆盖已密封的民用 UO2 燃料棒及独立合格结构件进入装配边界，到完整新鲜压水堆组件验收、包装交付的公开环境清单。组件不是单一化学物种，也不是供货溶液；重金属元素质量、燃料化合物质量、包壳及支撑金属分别记录。非辐照不等于无放射性。生产方案须披露供方上游燃料棒和构件的完整环境基准。

排除核材料加工制备、配方、浓缩、转化、芯块制备、开封燃料棒、包壳制造、关键工艺参数、设计优化、堆内辐照、乏燃料、MOX、金属燃料、TRISO、研究/军用反应堆燃料及不完整组件。范围是本 PCR 的物理限定，不将一个制造商的质量或性能数据扩为行业默认值。IAEA SSR-4 是核燃料设施环境记录依据；普通化工 BAT 因产品与路线不兼容不提供默认参数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-elements-cartridges-non-irradiated-for-nuclear-reactors |
| classification_refs | CPC 3.0 33710; narrower; 仅作为待独立接受的范围建议 |
| covered_products | 完整非辐照民用 UO2 压水堆组件 |
| excluded_products | 范围第1节列出的燃料与路线 |
| representative_product | 按实际供方及验收状态限定的压水堆组件，不设通用型号 |
| production_route | 外购密封棒与成品结构件；高层装配、检查、包装交付 |
| market_state | 工厂交付的完整新鲜组件，未入堆辐照 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按已声明合格状态提供完整民用组件 |
| How much | 1 kg 验收组件净质量 |
| How well | 实际型号、供方、完整性与民用 UO2 压水堆用途；无性能优化要求 |
| How long or cycle | 一次工厂交付；不声明堆内服务时间或发电量 |
| reference_flow_link | out_assembly |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 核反应堆未被辐射过的燃烧元件 `bc68ae27-dcc2-4716-aa92-264c1f7e7308` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 民用 UO2 压水堆；未辐照；完整组件型号及验收状态；供方/批次；实测净质量与完整性；燃料化合物、重金属、包壳、分种支撑金属、水分分账；包装排除；供方数量及背景分母；起止状态和监测覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 | kg | 参考输出为 1 kg 完整验收组件净质量。采用 cp_mass；所有清单数量基于相同批次的实测验收净质量，不除以组件件数。 |

称重使用经校准的秤或可追溯的完整组件验收净质量记录；排除运输包装。重金属含量取真实供方质量证书，与燃料化合物质量不等同；包壳金属与外部支撑金属不得重复。水分独立测量，不据配方估算。放射性参考属性的基准单位为 kBq，1 Bq = 0.001 kBq；电力原件的参考属性为净热值，电能单位 MJ，1 kWh = 3.6 MJ。核实仪表及供方背景同基准，不能由数据库属性推定燃烧或热交付。

分母包括验收组件内全部保留构件，包括密封内容物、内部硬件、包壳及独立安装结构件；铀、重金属、钢或锆质量均不能替代完整组件净质量。燃料种类、同位素身份及未辐照状态须有实际供方/批次证明，源分类、元素 CAS 或通用棒描述不能证明这些限定。参考 UUID 仅用于此处定义的完整成品燃料元件交付，由其完整成品字段和完整组件证据支持；胶囊、芯块及纯铀均不是兼容替代。

每种同位素活度须有独立的合格检测器/检测报告、采样期间、校准、检出限、不确定性及以 Z 结尾的 UTC 活度参考日期。有据的参考日期调整另列，不由剂量、纯度或总α推定同位素活度。跨界颗粒或化学物质量与核素活度是关联排放事件的不同属性：保留两套计量记录，但不重复计算同一影响贡献。颗粒身份和基本数量口径（含粒径组分及实物质量基准）须匹配所选模型；总铀质量不是颗粒组分测量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已验收密封棒及成品独立结构件在装配设施接收 |
| starting_condition_role | 前景起点，不删除上游环境负荷 |
| product_classification_scope | CPC33710 的上述民用压水堆子集 |
| recursive_input_rule | 同类完整组件若只再包装，明确作为再包装服务，不声称本路线从棒装配；不循环重复归属同一组件 |
| upstream_dataset_requirement | 密封棒完整上游供方环境数据，实际数量分母；每种独立构件含制造、能源和交付的供方数据；缺失不能视为零 |
| disclosure | 实际供方、完整性、期间、场址、工序边界、处理方及被排除阶段；不能把装配门到门结果称为完整燃料循环 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_complete | 包括接收、装配、验收、包装、归属的公用设施及废物管理环境数量。上游核材料加工只通过合格供方环境背景纳入，不公开配方或关键参数。 | iaea-ssr4-2017; framatome-htp |
| boundary_discharge | 废物转移是技术系统输出；基本流只记录实际进入环境的控制后排放。分辨空气/淡水及每种核素；本边界不覆盖海水排放。 | iaea-ssr4-2017 |
| boundary_physical | 纳入所有实际湿空气、H2O、化学物/颗粒、能源、包装、容器、维护及退回交换，加上存量和配对内部链接。实际缺流须补充独立核验的原子卡。实物账与服务/分配后环境账分别记录；缺少数量或监测不能证明零。 | iaea-ssr4-2017 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 接收、装配、检查及包装交付 | required | 第1节路线 | 一个聚合前景单元，分阶段独立计量 | out_assembly |

工序链接：密封棒与独立结构件接收 → 高层装配 → 完整性/质量验收 → 包装交付；公用设施和废物处理分别关联相应阶段。中间交接保留两端同量的内部账，不制造第二个成品参考流。物理投入、产品/包装/退货输出、废物、排放及存量变化完整记账；环境归属后账不改变这些实物量。

完整实物账覆盖所有实际跨界湿空气、水、水分、蒸发水、夹带颗粒及化学物、包装、容器、维护材料、退回构件及期初/期末存量。内部回用水和工序交接保留等量配对链接，在聚合边界抵消。每种实际能源载体及服务分别采用独立原子身份、仪表和供方基准；本清单未列出的实际流须补充独立卡，不能因未列出而视为零。外购热、蒸汽、燃料及维护服务仅按实际发生纳入，不默认本路线具有这些交换。容器新增、发出、返回、退役及存量的完整实物量与服务使用、分配后环境清单分别记录，分配份额不得缩放实物质量或退回数量。

### 过程：接收、装配、检查及包装交付（`assembly`）

#### 输入

##### 产品流

###### 接收的密封燃料棒 (`in_rods`)

必需；经证明的民用新鲜 UO2 密封棒，质量包括包壳、密封内容物及内部构件。分别记录总接收、供方退货和存量变化，不再次加入芯块或包壳投入。

- 选定流: 核燃料棒 `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 独立锆合金定位格架 (`in_zr_grid`)

仅在实际物料表含该独立外购结构件时纳入。仅使用实际确证的 Zircaloy 格架材料；M5 或其他不兼容合金须独立身份。供方背景必须包含成品格架制造，不指定默认牌号或占比。

- 选定流: 锆合金（Zircaloy） `397d43c1-8e3e-4718-80ac-25ca8309c9b7`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 不锈钢组件端部构件 (`in_steel_end`)

独立供货端部构件存在时纳入；须核实实际钢种、供货状态及完整构件供方基准，不以管件或原钢材质量代替成品构件供应。

- 选定流: 不锈钢组件端部构件
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 外购电网电力 (`in_electricity`)

该身份仅用于 1–35 千伏电网平均用户供电接口。采集装配、检查、通风及公用设施电量，分别说明电压、变压损耗、地域、时期和供方。保留数据库属性名，此处数量是电能而非热量。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 同期间该电力交换的归属实测电量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_energy
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 外购清洁用水 (`in_water`)

仅在硬件清洁或辅助设施实际耗水时纳入。记录处理等级、水源和计量表/密度基准；这是供货液态水，不是基本流取水或溶液配方。

- 选定流: 水，工艺 `2f102a77-b596-4289-8a8d-ce7d6e347a2d`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_water
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 保护性聚乙烯薄膜 (`in_pe`)

实际使用 PE 保护膜时纳入。聚合物薄膜净质量与棒、结构和水分分账；核实树脂、污染状态和供方，披露源分类元数据债务。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 木质运输托架 (`in_cradle`)

仅实际使用一次性木托架时纳入。记录木材状态、水分、处理及构件供方，不能默认其为托盘。

- 选定流: 木质运输托架
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 可重复使用的钢制燃料运输容器 (`in_container`)

实际使用可复用钢容器群时纳入。本交换记录本批次实物账中实测新增/更换容器接收的完整质量，不是周转容器的分配份额。发出/返回质量、退役及存量完整记录，按容器身份链接。容器制造与维护环境负荷按有据的服务使用及供方分母另行归属，不假定周转次数；已含制造的分配服务与其制造负荷不能重复计入。

- 选定流: 可重复使用的钢制燃料运输容器
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### Zircaloy 组件导向管 (`in_zr_tube`)

独立供货成品导向管确证为实际 Zircaloy 时纳入。供方背景包含构件制造，不能仅有原合金生产；M5 或其他不兼容合金需独立身份，不规定管设计或工艺参数。

- 选定流: 锆合金（Zircaloy） `397d43c1-8e3e-4718-80ac-25ca8309c9b7`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 镍合金组件弹簧 (`in_nickel_spring`)

实际物料表有独立供货成品镍合金弹簧时纳入；采集实际合金/牌号与成品供方基准。镍型材或镍铁不是同一交付构件。

- 选定流: 镍合金组件弹簧
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 纤维素清洁擦拭物 (`in_wipe`)

实际消耗纤维素擦拭物时纳入；核实供货组成及水分。裸纤维素、纸浆或卫生纸原纸不能证明合格交付擦拭物身份。

- 选定流: 纤维素清洁擦拭物
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

#### 输出

##### 产品流

###### 验收完整新鲜组件 (`out_assembly`)

1 千克；验收完整非辐照民用 UO2 压水堆组件，排除运输包装，包括密封燃料内容物、包壳及全部已安装支撑构件。

- 选定流: 核反应堆未被辐射过的燃烧元件 `bc68ae27-dcc2-4716-aa92-264c1f7e7308`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_mass`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 完整棒退回供方 (`out_return_rods`)

完整非辐照密封棒退回供方时纳入；记录实际状态、质量、所有权及接收单。不自动授予环境抵扣，核对外购投入及上游供方处理。

- 选定流: 核燃料棒 `28f5ac8d-dbfb-415d-afd2-36d0860a1cc3`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_material
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 随组件交付薄膜 (`out_pe`)

保护性 PE 薄膜随组件出厂时纳入，保留完整实物质量。这是辅助包装，不是参与分配的共产品，也不属于参考净质量。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

###### 随组件交付木质运输托架 (`out_cradle`)

同一一次性托架出厂时纳入；记录实物交付质量及接收方，不乘环境分配份额。

- 选定流: 随组件交付木质运输托架
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_pack
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源: `iaea-ssr4-2017`; `framatome-htp`

##### 废物流

###### 拒收的未污染锆合金格架 (`waste_zr`)

拒收的非燃料结构格架外送废物管理时纳入；记录实际合金、辐射检测、接收设施和去向。内部回用不是废物输出。

- 选定流: 拒收的未污染锆合金格架
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_waste
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `iaea-ssr4-2017`

###### 拒收的未污染不锈钢端部构件 (`waste_steel`)

拒收端部构件经污染表征后外送接收方时纳入；成形边角料和铸造废料身份不适用于本装配路线。

- 选定流: 拒收的未污染不锈钢端部构件
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_waste
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `iaea-ssr4-2017`

###### 未处理废聚乙烯保护膜 (`waste_pe`)

废弃 PE 包装存在时纳入；记录洁净度、牌号及实际接收方。已清洗的机械回收进料不是同一交付废物状态。

- 选定流: 未处理废聚乙烯保护膜
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_waste
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `iaea-ssr4-2017`

###### 铀污染纤维素清洁擦拭物 (`waste_wipe`)

该污染固体废物实际存在时纳入；纤维素、水分及污染/活动量分别表征。完整拒收密封棒应记退回产品或其独立放射性废物，不能记为擦拭物。

- 选定流: 铀污染纤维素清洁擦拭物
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_waste
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `iaea-ssr4-2017`

###### 未处理装配硬件清洗废水 (`wastewater`)

该实际液态废物外送处理时纳入；记录水和逐种污染物、接收方及处理基准，不能在本厂界同时将所含核素记为直接淡水排放。

- 选定流: 未处理装配硬件清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_water
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: `iaea-ssr4-2017`

###### 未开封拒收 UO2 密封燃料棒 (`waste_rods`)

完整新鲜拒收棒未退回供方而外送授权放射性废物管理时纳入。完整棒质量和逐核素活动量分账，不能用乏燃料或分离粉末替代。

- 选定流: 未开封拒收 UO2 密封燃料棒
- 流属性/单位: 质量 / kg
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_waste
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: `iaea-ssr4-2017`

##### 基本流

###### 向淡水排放的液态水 (`water_release`)

控制后实测液态水直接排入淡水时纳入。本体积/m3 交换为净 H2O 部分，不是混合液或载体整体体积。按独立有据的液体组成、水质量及兼容密度/体积基准确定；液体整体质量/体积与逐种溶解或悬浮成分另账。不能用水蒸气或淡水资源取水身份；同一液体不同时计为外送废水。

- 选定流: 水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位: 体积 / m3
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_water_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_release`
- 来源: `iaea-ssr4-2017`

###### 铀-238排向空气 (`u238_air`)

仅在实测铀-238排入室外空气、子介质未特指时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。正式流显示名“铀α”在本行仅指原件英文 uranium-238，不代表总α。

- 选定流: 铀α `08a91e70-3ddc-11dd-9c44-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

###### 铀-238排向淡水 (`u238_water`)

仅在实测铀-238排入淡水时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。正式流显示名“铀α”在本行仅指原件英文 uranium-238，不代表总α。

- 选定流: 铀α `4d9a8790-3ddd-11dd-8db4-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

###### 铀-235排向空气 (`u235_air`)

仅在实测铀-235排入室外空气、子介质未特指时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。

- 选定流: 铀-235 `08a91e70-3ddc-11dd-9c3c-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

###### 铀-235排向淡水 (`u235_water`)

仅在实测铀-235排入淡水时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。

- 选定流: 铀-235 `08a91e70-3ddc-11dd-9c40-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

###### 铀-234排向空气 (`u234_air`)

仅在实测铀-234排入室外空气、子介质未特指时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。

- 选定流: 铀-234 `4d9a8790-3ddd-11dd-8daf-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

###### 铀-234排向淡水 (`u234_water`)

仅在实测铀-234排入淡水时纳入。记录控制措施后的该同位素活动量，不设默认正排放。不能用总α、总铀质量或长期/校正流替代，也不同时记为外送废物排放。

- 选定流: 铀-234 `fe0acd60-3ddc-11dd-ae3f-0050c2490048`
- 流属性/单位: 放射性 / kBq
- 数量规则: 同期间该原子交换的完整实测实物数量除以 cp_mass 的验收组件净质量总和；不得除以件数；采用 cp_release
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: `iaea-ssr4-2017`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_physical | 按同型号组件批次细分，保留全部实物质量、水及金属/重金属账和包装复用账；联产品实物输出不乘分配份额。没有通用收率、配方或废料占比。 | iaea-ssr4-2017 |
| allocation_burdens | 优先用独立计量区分工序/批次；共同能源按真实因果计量依据归属并证明各份额合计为1。因果关系未知则披露未决，不默认以重金属质量分配所有负荷。拒收件、废物和包装无自动替代抵扣；供方已分配背景不得再次分配。 | iaea-ssr4-2017 |
| allocation_services | 包装/容器的完整实物接收、流转、退役、维护及存量独立于服务使用保留。只有环境负荷按有据服务池及供方分母归属；不假定寿命或周转次数，不重复计入服务已含制造。 | iaea-ssr4-2017 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | 参考产品 | 称重 | 型号；供方；批次；序列号；验收净质量；燃料化合物质量；元素重金属质量；包壳质量；分种支撑金属质量；水分；包装皮重 | 经校准称重或可追溯完整组件验收净质量记录；核对真实供方质量证书; 验收净质量总和；所有交换按每 1 kg 参考流 | kg | 逐验收批 | 同一声明批次 | 完整出厂验收组件 | 每 1 kg 参考流 | 校准；验收；供方证书 |
| cp_material | assembly | 外购棒及结构件；退回棒 | 供方及存量记录 | SKU；密封状态；批次；总接收；安装质量；供方退货；期初/期末存量；逐种支撑件；供方分母 | 称重或核对实际供方净质量证书，逐身份及批次记录; 同期实物和存量核对；每 1 kg 参考流 | kg | 逐接收及批次关闭 | 同一声明批次 | 装配投入、退货和存量 | 每 1 kg 参考流 | 供方物料表；发票；交付/退回单；背景范围 |
| cp_energy | assembly | 电力 | 计量表记录 | 阶段；期间；电压；读数；公用设施分担证据；供方；参考数量 | 读取经校准计量表，核对完整装配及辅助服务覆盖; 同期归属电力；每 1 kg 参考流 | MJ | 逐计量期间 | 同一声明批次 | 装配和归属公用设施 | 每 1 kg 参考流 | 表计校准；供方电压/地域/时期；因果分配记录 |
| cp_water | assembly | 清洁用水及废水 | 表计与排放记录 | 水源；处理；水质量；体积计量时的密度；废水质量；污染物；存量/回用；接收方 | 水和废水分别计量或称重，核实实际处理/接收方；保留水量平衡; 同期水/废水；每 1 kg 参考流 | kg | 逐计量期间和转移 | 同一声明批次 | 清洁及辅助边界 | 每 1 kg 参考流 | 校准；密度测量；样本和接收记录 |
| cp_pack | assembly | 包装投入/输出及容器群 | 称重和复用账 | 材料；牌号；水分；一次性包装进/出质量；容器序列号；完整新增/更换接收；发出/返回/退役质量；期初/期末存量；维护投入及废物；服务使用；供方分母；环境分配份额 | 称量完整包装及容器实物交换；配对发出/返回记录；核对存量；服务使用及制造/维护环境归属另账，不假设寿命；每 1 kg 参考流 | kg | 逐交付及批次关闭 | 同一声明批次 | 包装与容器群接口 | 每 1 kg 参考流 | 皮重；供方；交付/返回及容器群账；服务分配证据 |
| cp_waste | assembly | 逐种废物身份 | 转移记录 | 质量；材料；水分；逐同位素活动量；污染；存量变化；接收方；去向 | 逐种分隔废物表征称重；保留授权接收证据; 同期外送废物；每 1 kg 参考流；存量另列 | kg | 逐转移和存量关闭 | 同一声明批次 | 装配废物管理接口 | 每 1 kg 参考流 | 秤校准；实验室；转移和存量账 |
| cp_release | assembly | 逐核素和介质 | 监测 | 同位素；检测器/检测报告；校准；采样点；介质/子介质；同位素活度浓度；匹配气/液排出量；采样期间；活度参考日期 UTC Z；控制阶段；背景；检出限；逐核素不确定性；关联颗粒/化学物实物记录 | 采用合格逐同位素检测及监测记录；同一参考日期基准下将控制后逐核素浓度与匹配实测排出量积分；保留未检出不确定性及覆盖；关联实物排放但不重复影响贡献；每 1 kg 参考流 | kBq | 场址监测方案期间 | 同一声明批次 | 实际室外空气或淡水排放点 | 每 1 kg 参考流 | 检测器及实验室质控；校准；采样；参考日期及监测覆盖记录 |
| cp_water_release | assembly | 淡水液体排放的净 H2O 部分 | 排出表计及组成记录 | 液体整体质量/体积；H2O 质量；独立有据组成；水密度及条件；净 H2O 体积基准；淡水接收；表计期间；控制后阶段；核素/化学物采样覆盖；事件链接 | 计量整体排液，并按兼容密度/体积基准独立确定净 H2O 部分；逐种溶解/悬浮成分与核素活度分账并匹配期间；每 1 kg 参考流 | m3 | 逐排放期间 | 同一声明批次 | 直接淡水排口 | 每 1 kg 参考流 | 表计校准；组成及密度证据；接收介质和采样记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_basis | 所有清单行 | 同期间各完整实测实物交换总量及另列有据服务归属除以 cp_mass 验收组件净质量总和；out_assembly 固定为1 kg；不除以件数。 | cp_mass; cp_material; cp_energy; cp_water; cp_pack; cp_waste; cp_release; cp_water_release | 每1 kg参考流的原子交换数量 | iaea-ssr4-2017 |

实物核对先于归属：期初存量 + 全部实物跨界投入 = 完整产品 + 退回件 + 外送废物 + 全部实物跨界排放 + 期末存量。总质量与各守恒元素没有反应源汇；纳入湿空气及液体成分，残差通过计量不确定性和缺流证据处理，不虚构反应项。化学物种账可另列有据的生成/消耗（包括 H2O），但不改变总质量或元素守恒。嵌套的燃料化合物、元素铀/重金属、包壳及支撑金属账不得重复相加或替代完整组件质量。使用真实供方证书或质量检测，禁止以通用纯度、收率或配方反推。活度与质量分账，除非有独立核素和计量证据，不从总α、剂量、kg或假定比例推算同位素 kBq。

完整实测实物交换与另算的服务/环境归属均按同一验收组件净质量总和归一化。实物账、服务使用账、分配份额及分配后环境清单分别记录。共享服务份额仅在已声明服务池内合计为1，不改变完整产品、废物或退回数量。成分质量、颗粒质量、活度及载水按事件和期间关联；嵌套成分不是额外总质量，同一贡献的重复表征须明确排除。许可值是限值，不是实测排放量或无排放证明；安全指导及化工 BREF 均不提供此处的默认排放。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_provider | 上游及参考 | 保留实物身份、完整性、实际供方数量/环境背景分母、时间、地域及分配；缺项不是零，不能凭 UUID 宣称背景完整。 | 供方原始环境数据及验收证书 |
| environmental_coverage | 全部交换 | 纳入实际 BOM 的每个材料及所用公用设施；逐种新增实流需独立身份核验。无供货溶液默认；如实际使用溶液，逐成分、活性物、载水分账并补充原子卡。缺少监测不证明零排放，核素/化学物未覆盖须披露。 | 实际账单、批记录、排放及废物调查 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_identity | 确认完整非辐照民用 UO2 压水堆组件、独立棒身份及供方起止状态；排除前述其他燃料，成品身份不得扩为棒或芯块。 | framatome-htp; iaea-ssr4-2017 |
| validate_balance | 同期同型号净质量分母贯穿中英文参考、清单、采集与计算；全实物/水/重金属/支撑金属及包装账先核对，再进行环境归属；不把分配后的质量伪装为实物输出。 | iaea-ssr4-2017 |
| validate_releases | 逐核素、介质、单位及检测覆盖检查；总α/总铀与逐同位素不可重复合计；外送废水/固废所含核素不计本厂直接排放；不得删去有证据的任何排放。监测未覆盖、检出限或身份未决必须报告。 | iaea-ssr4-2017 |
| validate_metrology | kBq 须有逐同位素检测器/检测证据、校准、不确定性及 UTC Z 活度参考日期。实物化学物/颗粒质量与放射性关联但不重复表征；颗粒基本数量须匹配模型。净 H2O 体积/m3 不是整体液体体积。总质量及元素平衡没有反应源汇；物种生成/消耗另行有据记账。许可限值不是实测排放量。 | iaea-ssr4-2017 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 公开装配与交付环境前景数据 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有匹配实物及供方分母的民用环境 LCA |
| excluded_use | 核材料制备、设计/优化、关键参数推断、辐射安全或许可判断、完整燃料循环声明 |
| required_metadata | 第3节限定、分母、供方背景、工序覆盖和归属方法 |
| required_quality_disclosure | 身份元数据缺陷、缺少供方/核素监测/实际材料、检出限、不确定性及未决 |
| update_trigger | SKU、供方、交付状态、材料、公用设施、监测及数量基准变化 |

## 11. 数据源

| Source id | Type | 来源 | 用途 |
| --- | --- | --- | --- |
| iaea-ssr4-2017 | official_guidance | IAEA, Safety of Nuclear Fuel Cycle Facilities, SSR-4 (2017), 1.8 (印刷3/PDF23), 9.102–9.108 (印刷110–111/PDF130–131); https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf | 核燃料设施范围及环境记录类别。不是 LCI 因子、配方、许可限值或数量默认。分母、实物/物种/服务账及计量要求是本 PCR 的编写采集规则。 |
| framatome-htp | handbook | Framatome, PWR Fuel Assembly HTP, A0529, 厂商产品原件; https://www.framatome.com/solutions-portfolio/portfolio/product/A0529/pwr-fuel-assembly-htp; HTP product sheet PS_US_328_ENG_05_18, pages 1–2; https://www.framatome.com/solutions-portfolio//app/uploads/2025/09/a0529-p-us-g-en-328-05-18-htp.pdf | 民用压水堆完整组件及锆合金包壳的产品范围例证。单一厂商，不能扩为通用质量、能耗、配方或设计要求。 |
