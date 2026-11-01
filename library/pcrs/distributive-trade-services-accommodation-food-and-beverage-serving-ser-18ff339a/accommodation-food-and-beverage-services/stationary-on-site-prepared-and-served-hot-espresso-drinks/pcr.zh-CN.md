---
pcr_id: pcr.stationary-on-site-prepared-and-served-hot-espresso-drinks
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 固定场所现场制备并供应的热意式浓缩咖啡饮品

## 1. 适用范围

适用于一个真实固定现场吧台场所实际完成的独立热意式浓缩咖啡饮品制备与供应。以真实咖啡接收/研磨/萃取、水及可选乳/替代饮料/添加物调配与热处理、呈送及接收方供应关口界定产品。柜台、咖啡馆品牌、顾客、合同或分类叶子本身不建立身份。来源展示真实浓缩咖啡、热水及蒸汽加热乳形态及杯具呈送，不设通用配方、粉量、杯容量、乳、浓缩份数、温度、营养、出品率、时间、用量或设备寿命。[costa-coffees-current; starbucks-espresso-2025; costa-cups-current]

一个参考流为实际接收交接点已履约、同等配方/份量/呈送/服务版本的一份热饮品服务，包含全部必需成分和真实支持责任。订单、付款、顾客、冲煮次数、杯容量、销售总量或饮用质量均不能替代供应。制成但未领取、部分、拒收、替换、撤销分别记录；后续剩余不自动撤销真实已供饮品。不同实际配方/份量/配置为不同版本，除非有经审查物理同等证据。

一个真实节点负责调配、萃取、可选蒸汽处理、供应与清理，不虚构独立工厂。咖啡、乳/替代饮料、实际其他成分和水各有独立来源/状态/库存/领用及前后角色。湿咖啡渣、萃取液/液体/固体/水、凝结进入饮品的蒸汽，以及吹扫、排水和向空气排放的蒸汽、乳泡沫/剩乳、包装/复用品/清理及所有有用/废物/物种去向，在描述同一物料时为原生非加和视图。不把残差分配成排放。

所选范围排除已计入完整餐食服务的附属饮料，及冷/冰/搅打/茶/滤泡/售卖机/密封零售/酒精/娱乐服务、移动/异地路线和住宿/营地/乘客整包。同场真实餐食与其他饮品/非食品产出仍进入完整全部产出/全部用户实物资源账本。新的独立工业生产/处理须扩展审查，普通真实过滤/加热/制冷/洗涤及完整支持生命周期/接收责任仍纳入。

覆盖实际上游供应及损耗、所有用户时段的场址/建筑/吧台/设备/复用品/织物/土地完整寿命，真实供应方/接收方/运输含必要空驶，以及待机/闲置/失败/N0责任。来源为定性例子，不是目标测量、法律安全限值、设备身份或数值因子。最终完整范围数据集使用前，仍须真实原生记录和具体交换核验；未知量或缺身份绝非零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.stationary-on-site-prepared-and-served-hot-espresso-drinks |
| classification_refs | CPC3.0:63400 narrower |
| covered_products | 真实独立同等版本热意式咖啡饮品现场制备供应服务 |
| excluded_products | 附餐饮料；冷/茶/滤泡/售卖/密封零售/酒精/娱乐；移动/异地/整包；未履约订单 |
| representative_product | 真实场址/运营方/接收饮品时点、配方/份量/热态/呈送/服务版本与完整实际交接 |
| production_route | 实际接收库存 -> 现场研磨/萃取/配方及真实可选乳蒸汽处理 -> 热饮呈送供应 -> 清理/返回/接收 |
| market_state | 实际物理供应热饮品服务；原生液体/固体/水/泡沫量与计数分开 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际履约固定现场制备供应热意式咖啡饮品服务 |
| How much | 1 Item(s) |
| How well | 一项实际同等配方/份量/热态/呈送/服务版本，全部必需成分和责任真实到达接收关口，部分/替换/撤销核对 |
| How long or cycle | 真实饮品时点/批段/切换/服务/清理起止、时区/UTC偏移/DST及经过时间；连续待机/库存报告/寿命阶段分开，无固定时长 |
| reference_flow_link | fulfilled_hot_espresso_drink |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际履约的固定场所现场制备并供应热意式浓缩咖啡饮品服务 |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_stationary_onsite_preparation; standalone_hot_espresso_not_meal_related; actual_coffee_grinding_extraction_formulation_state; actual_optional_milk_steaming_additions; actual_equivalent_recipe_portion_hotstate_presentation_service_version; actual_recipient_completed_component_drink_handoff_state_time_acceptance; actual_partial_reject_rework_reversal; independent_native_coffee_liquid_solids_water_foam_grounds_stocks_fates; actual_cup_reuse_owner_cleanup_receiver; all_output_all_user_all_period_rawledger; necessary_idle_failure_N0_carry_resolution; complete_provider_or_completed_exclusive_missing_stages; full_alluser_asset_reusable_land_life; every_numeric_operand_unit_basis_method_state_sample_time_source |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| drink_gate | fulfilled_hot_espresso_drink | Count | Item(s) | N_target按实际交接/必需成分/接收方/质量/部分/替换/撤销核对后，计数真实履约的同等热意式咖啡服务；固定配方/份量/呈送/服务版本及实际供应热态，不以订单/付款/顾客/能力/浓缩杯量/饮用质量等同。 |
| native_operands | 全部清单行 | 实际相容原生属性 | 实际原生单位 | 每个独立数均有自身值/单位/基准/方法/状态/采样时间/来源，含库存/份额/密度/浓度/因子/时长/寿命；EACH乘实际次数一次，TOTAL不变。仅真实状态与量纲相容换算，类别ID不是数量。 |
| extraction_composition | roasted_coffee; milk_alternatives; drink_additions; grounds_waste | Mass; independent compatible Volume | kg; actual native volume | 保留烘焙/粉/干/湿/萃取/液体/起泡/供应/返回状态及样品谱系。湿咖啡渣须实际独立湿质量、干固体和水，溶解固体不是整杯饮品质量。同一样品仅水湿基分数w=water/wet、干基比r=water/nonwater才有w=r/(1+r)，百分数先换算；其他挥发物干燥失重不是水。引入空气可改变泡沫体积，不是通用乳质量或萃取出品率。无真实相容泡沫态密度/温度证据，不得用未起泡乳密度换算泡沫体积。 |
| energy_state | electricity; fuel; thermal_supply; electricity_ac; thermal_supply_delivered_heat | Energy; actual fuel property | kWh; MJ; actual native fuel unit | 累计电力kWh不再乘时间；真实功率乘时间须各自记录相容功率及经过时间。燃料能量须实际密度/状态及正确有来源低位/高位热值；公用服务标签不证明换算或完整覆盖。 |
| same_reference_once | 全部清单行 | 实际原生分子量 | 每参考流 | 按resource_once/freight_once/output_projection归属真实责任一次，再将目标总量除同一版本正N_target一次。仅已每参考流数量不变。N0保留真实来源/结转/接收/最终解决，不除零或虚构产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实运行固定现场吧台、明确接收烘焙咖啡/添加物/水状态及实际制备/呈送/接收责任记录 |
| starting_condition_role | 真实制备/服务及完整寿命责任，既有/租赁/顾客设备非无负担 |
| product_classification_scope | 63400内较窄独立热意式咖啡饮品供应，不宣称全叶子、附餐或娱乐覆盖 |
| recursive_input_rule | 不采购同一最终饮品服务作自身投入。实际咖啡/乳/成分继承上游制造一次，内部旧状态库存/返回为谱系而非新供应。真实完整配套供应方只替代确切已覆阶段 |
| upstream_dataset_requirement | 完整实际供应生产/损耗、能源/水/材料/供应方/接收方及设备/复用品/场址/土地制造-安装-维护-更换-报废。全链使用前以原生来源/量/状态/时间/责任/覆盖/排除实际完成缺失互斥阶段整合一次 |
| disclosure | 真实同等配方/份量/呈送/服务关口与热态、全部产出/用户/时段、咖啡/渣/乳/水/蒸汽库存去向、供应方/设备/土地/接收覆盖及N0责任、身份/来源/数量缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_route | espresso_service | 一个真实固定吧台节点负责实际配方投入、真实现场研磨/萃取/乳热处理、调配、呈送/供应和清理。萃取前咖啡/水转为实际萃取液、湿渣及真实损耗；蒸汽处理前乳/替代饮料转为真实热/泡沫态，凝结/保留/损耗独立记录。列出每项实际配方角色、确切版本与前后状态，不强制乳/浓缩/成分数量或虚构工厂。 | costa-coffees-current; starbucks-espresso-2025; costa-allergens-current |
| presentation_gate | espresso_service | 呈送前真实已制备热液体，以实际杯/顾客杯/外带杯及必需配料/份量/热态到达所定接收关口。记录包装接触/保温/标签/复用角色、废品/未用/已用返回及终用责任/接收方。呈送留在真实节点；供应/接收运输为另行明确责任，不隐含末端配送或每次复用重复制造。 | costa-cups-current; costa-allergens-current |
| exclusive_coverage | 全部职责 | 覆盖真实上游咖啡/乳/添加物/水/材料/损耗、运行待机/清洁/物流及完整设备/复用品/土地/接收。一个实际物理匹配完整供应方或互斥直接阶段；每个缺失真实阶段须在完整使用前以来源/原生量/状态/时间/责任/覆盖/排除实际完成整合一次。发票/外包标签、租赁、顾客设备或未来补充不抹去责任。 |  |
| stock_roles | actual input stocks and returns | 接收净量在外出退回前仅扣皮重。总领用S=已归属期初+入库-期末加实际配对责任转移。选择S投入加配对未用输出，或投入(S-UNUSED)并省去输出，不能兼用。已用返回/回收/脏物回返保留原负担，只加真实新增工作/运输/洗涤，不新增制造采购、扣新料或自动抵扣。同节点内部库存/转移仅为谱系而非外部交换。 |  |
| water_terminal | all water and liquid interfaces | 实际期初期末水库存不是水表读数。咖啡/乳/添加物固有水随实际材料输入进入，绝非额外外部水；保留其自身非加和母项来源链接。将供水/自取、实际咖啡/乳/添加物母项输入所载的水及配对转移，追至互斥外部终端废水/直接液水/水蒸气、真实外出饮品/咖啡渣/其他材料母项输出所载的水及实际期末库存归属。每项母项固有水投入或终端外出含水凭真实母项输入/出口/接收方/关口/状态/时间链接在守恒中计一次，不另加物料交换。凝结入饮品的蒸汽是保留水含量，排向下水进入真实废水，排向空气仅记独立证实水蒸气。萃取/配方/用途/清洗液、饮品/渣含水、内部注入/转移及重复接收方含量均为非加和审计，不另加交换。真实外部饮品/咖啡渣/材料母项交接仍携水跨终端边界，在水平衡审计中计一次；仅内部/含量重复视图不加入闭合。未知差额未解决，不是排放或零。 |  |
| cleaning_roles | cleaning and actual materials | 实际浓缩剂/配方清洁剂是一项物料投入。配制液质量、活性成分和稀释水各自实测数量/基准/状态/来源并链接非加和母项，供应水稀释不再采购。仅真实发生时记录蒸汽杆排汽/擦拭、冲泡组/手柄冲洗/反冲及实际弃去测试饮品，另含杯壶/布巾/工作区清理和实际水/化学剂/能源/废物，不设通用清洗配方/时间。 | costa-allergens-current; lamarzocco-commercial-route |
| fluid_roles | equipment fluids | 安装/储存/回收互斥：保留回收流体归实际安装/储存期末库存，不另加库存。期初不存在的出厂新充注为设备含量，不再作独立流体采购。逐来源/充注/其他接收/配对转移/接收方记录原生量及各有用/废物/非空气/整机保留含量出口；整机/部件含量视图非加和。空气排放须独立证实，未知残差不是泄漏或避免新料抵扣。 |  |
| full_life | assets reusables providers land | 列明所有自有/租赁/顾客/供应方场址/建筑/装修/吧台/机器/磨豆机/制冷/过滤/洗涤/杯壶/器具/织物及所有真实用户/时段。制造-安装-维护-实际更换-报废用完整已观测历史加有来源相容剩余使用或实际终止总量。年度目标N、铭牌能力或虚构年数均非完整寿命；不重复已覆土地/接收责任，实际缺失阶段完成一次。 |  |
| land_native | land_occupation; land_transformation_from; land_transformation_to | 真实未覆占用为原生面积乘时间输入；实际FROM原类型转化为原生面积输入，TO结果类型为原生面积输出，以真实事件/场址/时间/责任/来源及独立相容量配对。覆盖矩阵区分供应方/设备已覆相同非加和视图。不用产品计数代替，不假设年度转化，不遗漏条件性清单接口。 |  |
| species_medium | all elementary and waste interfaces | 具体物种/形态/报告基准/粒径及受纳介质决定各基本流身份，来源/去向关口决定容纳态废物还是直接基本流。不得用概括空气/水/土壤污染UUID、需氧量等同、整份流体损失排放或残差CO2；须核验具体属性/单位/来源。 |  |
| scope_route | espresso_service | 所选方法为固定现场独立热意式浓缩饮品服务，不是完整餐食内附饮料，也非冷饮/茶/滤泡/自动售卖/密封零售/酒精/娱乐/移动/异地服务或住宿/营地/乘客整包。真实额外工业生产/处理须使用前扩展路线/模块审查，普通实际过滤/加热/保温/制冷/洗涤仍纳入。原始页面仅为定性产品/路线示例，不是目标配方、法律安全限值、数值因子/量或设备身份。 | unsd-cpc3-2025; costa-coffees-current; starbucks-espresso-2025 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| espresso_service | 真实现场制备萃取调配呈送服务与清理 | required | 所选实际固定现场独立热意式咖啡饮品路线 | foreground_production | fulfilled_hot_espresso_drink |

### 过程： 现场热意式咖啡饮品服务 (`espresso_service`)

真实单节点，按production_periods链接浓缩/配方/服务/清理批段和连续待机，保留全部真实成分、处理前后、配方对账、拒收/残余/废物与交接。条件性卡片仅在真实发生且责任内启用，实际多种材料/物种逐项扩展并核验，不用概括固定身份。

#### 输入

##### 产品流

###### 实际接收状态的烘焙咖啡供应 (`roasted_coffee`)

按stock_roles记录独立外部烘焙咖啡豆或咖啡粉接收及库存领用；保留实际现场研磨/萃取状态及上游种植/烘焙/包装覆盖。内部旧状态返回不是新咖啡制造。应用resource_once。

- 选定流: 实际接收状态的烘焙咖啡供应
- 流属性/单位: Mass / kg
- 数量规则: 按stock_roles记录独立外部烘焙咖啡豆或咖啡粉接收及库存领用；保留实际现场研磨/萃取状态及上游种植/烘焙/包装覆盖。内部旧状态返回不是新咖啡制造。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_coffee_milk`
- 来源: costa-coffees-current; starbucks-espresso-2025

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位: Volume / m3
- 数量规则: 按water_terminal记录实际计量/交付供水及库存。由该供水取得的配方水、萃取水、蒸汽凝结水和清洗稀释水为非加和用途/含量视图，不能再作一次采购投入；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位: Energy / kWh
- 数量规则: 实际计量加热/研磨/蒸汽/制冷/洗涤/场址用电，含责任内待机和失败负担。累计kWh不得再次乘运行小时；应用resource_once及exclusive_coverage。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 实际外购交付的有效热量 (`thermal_supply_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位: Energy / MJ
- 数量规则: 仅记录实际外供热及匹配的完整供应方和原生计量单位/状态；不重复完整供应方已覆盖能耗。实际设备加热不虚构能源产品；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

###### 实际独立记录的合成洗涤剂投入 (`cleaning_agents_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 逐项记录实际浓缩剂/制剂供应量；按cleaning_roles将配制溶液、活性成分和含水量作为独立非加和含量核查，不重复供应；按stock_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- 来源: lamarzocco-commercial-route

##### 废物流
无所选实际角色；若出现须审查实际边界与具体身份。

##### 基本流

#### 输出

##### 产品流

###### 实际履约的固定场所现场制备并供应热意式浓缩咖啡饮品服务 (`fulfilled_hot_espresso_drink`)

1 Item(s)

- 选定流: 实际履约的固定场所现场制备并供应热意式浓缩咖啡饮品服务
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_service`
- 来源: costa-coffees-current; starbucks-espresso-2025

###### 实际为有证据用途接收的湿态废咖啡渣 (`useful_spent_grounds`)

仅真实用途接收适用，明确湿/干/含水状态及原生量；按output_projection明确废物或产品及联产/转移角色。不假设肥料/燃料替代或避免咖啡制造抵扣；同物料不得再记grounds_waste；选定实物量归一化一次。

- 选定流: 实际为有证据用途接收的湿态废咖啡渣
- 流属性/单位: Mass / kg
- 数量规则: 仅真实用途接收适用，明确湿/干/含水状态及原生量；按output_projection明确废物或产品及联产/转移角色。不假设肥料/燃料替代或避免咖啡制造抵扣；同物料不得再记grounds_waste；选定实物量归一化一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_coffee_milk`

##### 废物流

###### 向明确接收方实际转移的湿态废咖啡渣废物 (`grounds_waste`)

仅实际废物咖啡渣适用，独立测量湿质量/干固体/水及去向。无真实配对状态证据不等同干咖啡投入减溶解固体；同物不得再记useful_spent_grounds。应用resource_once。

- 选定流: 向明确接收方实际转移的湿态废咖啡渣废物
- 流属性/单位: Mass / kg
- 数量规则: 仅实际废物咖啡渣适用，独立测量湿质量/干固体/水及去向。无真实配对状态证据不等同干咖啡投入减溶解固体；同物不得再记useful_spent_grounds。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`

###### 实际未供应或失败饮品乳及制备食品废物 (`unserved_drink_milk_waste`)

按真实批次/状态/接收方记录未供应/不合格/清洗弃样/剩余乳或添加物。不是最终履约产出；按reject_paths保留原负担及真实新增工作。应用resource_once。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按真实批次/状态/接收方记录未供应/不合格/清洗弃样/剩余乳或添加物。不是最终履约产出；按reject_paths保留原负担及真实新增工作。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`
- 来源: lamarzocco-commercial-route

###### 实际接收方退回的饮品及食品残留 (`postserve_drink_waste`)

按原生湿态/组成及真实责任/接收方记录供应后残留。后续剩余不自动撤销已实际履约服务；顾客责任外保留或处置份额需披露。应用resource_once。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按原生湿态/组成及真实责任/接收方记录供应后残留。后续剩余不自动撤销已实际履约服务；顾客责任外保留或处置份额需披露。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按实际材质/状态/接收方及终用责任记录。未用包装退回仍为未用，已用杯不是未用新料；明确顾客带走包装责任，不假设回收。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: costa-cups-current

###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按实际材质/状态/接收方及终用责任记录。未用包装退回仍为未用，已用杯不是未用新料；明确顾客带走包装责任，不假设回收。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: costa-cups-current

##### 基本流

###### 实际有独立证据的向空气排放水蒸气 (`water_vapour_air`)

仅独立证实的排汽/蒸发水物种向空气排放适用，具原生数量/状态。凝结入饮品或期末库存的蒸汽为保留含量，不是终端水蒸气。未知差额不是排放；应用water_terminal及resource_once。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 仅独立证实的排汽/蒸发水物种向空气排放适用，具原生数量/状态。凝结入饮品或期末库存的蒸汽为保留含量，不是终端水蒸气。未知差额不是排放；应用water_terminal及resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_air_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 逐项有实际物种及空气区室证据时适用，保留化学/报告基准及必要粒径；独立实测或有来源活动量乘因子，逐操作数留证。不得以概括VOC/CO2差额或全流体自动泄漏替代。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`

###### 实际有独立证据的向空气排放化石甲烷 (`direct_air_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 逐项有实际物种及空气区室证据时适用，保留化学/报告基准及必要粒径；独立实测或有来源活动量乘因子，逐操作数留证。不得以概括VOC/CO2差额或全流体自动泄漏替代。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_air_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 逐项有实际物种及空气区室证据时适用，保留化学/报告基准及必要粒径；独立实测或有来源活动量乘因子，逐操作数留证。不得以概括VOC/CO2差额或全流体自动泄漏替代。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| resource_once | 全部资源职责 | 先独立过程细分/直接物理追踪。已归属目标资源总量不再分份额，仍除N_target一次。仅对尚未归属目标的实际共享原始记录，逐条以原生量乘target_driver/正的完整all_consumer_driver一次后求和，纳入所有其他饮品/餐食/员工/顾客/非食品/建筑用户时段。必要闲置/待机/失败/取消/关闭/N0负担留真实责任池及来源/结转/接收/最终解决。目标总量除同一正N_target一次，仅已每参考流不变；缺责任/分母/真实整合阻止完整性。 |  |
| freight_once | supply_receiver_freight | 每个真实航段/车次/载荷含湿态货物及包装/支撑/设备，仅扣非货物车辆皮重。求和实际吨*km*(仅EACH乘实际repeat_count，TOTAL不变)*该记录record_share。record_share即resource_once目标/全部用户归属，求和内仅一次。所得已归属货运总量不再乘第二份额，再除同一正N_target一次。必要空驶返回/调位/失败须匹配真实完整供应方，或实际完成互斥原生运行/燃料/电力/全寿命/物种/接收一次；零货物t*km不能传空驶负担，不虚构载荷/产出。 |  |
| output_projection | 全部预期产出台账及交换 | 完整归属前实物账本保留每项产出自身ID/接收方/关口/状态/交接时间/来源及完整未归一化原生量，含其他饮品/餐食/非食品/设备/流体/有用咖啡渣。预期产品/残余/废物分类和独立细分或真实联产，须明确本PCR实际决定、物理证据/责任/谱系/归属阶段。目标归属清单中其他独立产品仅为证据，目标资源分配后不再作联产品交换；内部成分/转移不是联产品。另选未分配全池方案须完整投入+全部产出且仅一次指定分配。实际保留真实联产或有用转移输出最终交换用选定实际实物原生量除同一正N_target一次，绝不乘资源目标份额，仅已每参考流不变。原始账本始终完整未归一化实物量。本输出规则优先于一般资源归一化，禁止混合方案、自动废物回收抵扣或同一最终饮品两个交接计数。 |  |
| production_periods | runs phases and shared assets | 明确真实浓缩/配方/批次/服务/切换/清洗批段和连续热待机/制冷/场址时段，链接全部投入/产出/变化/拒收。列库存/报告时段及制造/安装/维护/更换/终止阶段、各共享设备用户及全用户已观测+有来源剩余寿命。明确模式/时段/本PCR实际物理归属与优先次序：直接细分、真实共享、资源/货运/输出规则；共享批段/时段/设备阶段不重复，未解决更换/终止或N0结转阻止完整性。 |  |
| reject_paths | all rejected and returned states | 识别每项拒收/不合格/失败/未领取/部分供应/剩余状态及生产批次/节点，继而记录实际返工/再热/再部署/降级/有用/废物/保留库存出口及原生配对接收。保留原负担，仅加真实新增责任。不把未解决拒收饮品计入已接受最终产出，不把内部旧状态返回作新制造；无证据不因已供应后残余撤销履约关口。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | espresso_service | actual fulfillment and complete physical output ledger | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; service_occasion_id; actual_start_time; actual_end_time; timezone; utc_offset_text; dst_resolution; recipe_version; portion_specification; presentation_version; actual_hot_state; recipient_acceptance; required_component_ids; component_handoff_ids; offered_declined_state; rework_source_id; reversal_id; all_output_scope_id; true_joint_decision_id; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; fulfilled_drink_count; fulfilled_drink_count_unit; fulfilled_drink_count_basis; fulfilled_drink_count_method; fulfilled_drink_count_state; fulfilled_drink_count_sample_time; fulfilled_drink_count_source; partial_output_quantity; partial_output_quantity_unit; partial_output_quantity_basis; partial_output_quantity_method; partial_output_quantity_state; partial_output_quantity_sample_time; partial_output_quantity_source; reversal_quantity; reversal_quantity_unit; reversal_quantity_basis; reversal_quantity_method; reversal_quantity_state; reversal_quantity_sample_time; reversal_quantity_source; other_output_native_quantity; other_output_native_quantity_unit; other_output_native_quantity_basis; other_output_native_quantity_method; other_output_native_quantity_state; other_output_native_quantity_sample_time; other_output_native_quantity_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 固定实际配方/份量/服务/呈送版本，观察全部必需成分及饮品完成交接、接收方、热态与时间；核对部分/拒收/替换/撤销。每项预期产出均保留完整未归属原生账本，含其他饮品/食品/非食品/设备/流体各自接收方/关口/状态/来源/数量。应用drink_gate、output_projection及resource_once，对照生产/服务记录核查同范围。 | actual supported native quantity; Item(s) for fulfilled equivalent drinks | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_coffee_milk | espresso_service | coffee milk addition stocks extraction formulation and grounds | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; lot_id; supply_state; recipe_component_id; batch_id; grind_event_id; brew_event_id; steam_event_id; before_state_id; after_state_id; solids_species; moisture_basis; water_only_method; sample_id; unused_used_role; paired_transfer_id; terminal_membership_id; quality_record_id; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_net; receipt_net_unit; receipt_net_basis; receipt_net_method; receipt_net_state; receipt_net_sample_time; receipt_net_source; opening_quantity; opening_quantity_unit; opening_quantity_basis; opening_quantity_method; opening_quantity_state; opening_quantity_sample_time; opening_quantity_source; inbound_quantity; inbound_quantity_unit; inbound_quantity_basis; inbound_quantity_method; inbound_quantity_state; inbound_quantity_sample_time; inbound_quantity_source; closing_quantity; closing_quantity_unit; closing_quantity_basis; closing_quantity_method; closing_quantity_state; closing_quantity_sample_time; closing_quantity_source; unused_return_quantity; unused_return_quantity_unit; unused_return_quantity_basis; unused_return_quantity_method; unused_return_quantity_state; unused_return_quantity_sample_time; unused_return_quantity_source; used_return_quantity; used_return_quantity_unit; used_return_quantity_basis; used_return_quantity_method; used_return_quantity_state; used_return_quantity_sample_time; used_return_quantity_source; recipe_component_quantity; recipe_component_quantity_unit; recipe_component_quantity_basis; recipe_component_quantity_method; recipe_component_quantity_state; recipe_component_quantity_sample_time; recipe_component_quantity_source; brewed_liquid_mass; brewed_liquid_mass_unit; brewed_liquid_mass_basis; brewed_liquid_mass_method; brewed_liquid_mass_state; brewed_liquid_mass_sample_time; brewed_liquid_mass_source; supplied_liquid_mass; supplied_liquid_mass_unit; supplied_liquid_mass_basis; supplied_liquid_mass_method; supplied_liquid_mass_state; supplied_liquid_mass_sample_time; supplied_liquid_mass_source; grounds_wet_mass; grounds_wet_mass_unit; grounds_wet_mass_basis; grounds_wet_mass_method; grounds_wet_mass_state; grounds_wet_mass_sample_time; grounds_wet_mass_source; grounds_dry_solids_mass; grounds_dry_solids_mass_unit; grounds_dry_solids_mass_basis; grounds_dry_solids_mass_method; grounds_dry_solids_mass_state; grounds_dry_solids_mass_sample_time; grounds_dry_solids_mass_source; grounds_water_mass; grounds_water_mass_unit; grounds_water_mass_basis; grounds_water_mass_method; grounds_water_mass_state; grounds_water_mass_sample_time; grounds_water_mass_source; sample_water_mass; sample_water_mass_unit; sample_water_mass_basis; sample_water_mass_method; sample_water_mass_state; sample_water_mass_sample_time; sample_water_mass_source; sample_wet_mass; sample_wet_mass_unit; sample_wet_mass_basis; sample_wet_mass_method; sample_wet_mass_state; sample_wet_mass_sample_time; sample_wet_mass_source; sample_nonwater_dry_mass; sample_nonwater_dry_mass_unit; sample_nonwater_dry_mass_basis; sample_nonwater_dry_mass_method; sample_nonwater_dry_mass_state; sample_nonwater_dry_mass_sample_time; sample_nonwater_dry_mass_source; dissolved_solids_mass; dissolved_solids_mass_unit; dissolved_solids_mass_basis; dissolved_solids_mass_method; dissolved_solids_mass_state; dissolved_solids_mass_sample_time; dissolved_solids_mass_source; material_intrinsic_water_quantity; material_intrinsic_water_quantity_unit; material_intrinsic_water_quantity_basis; material_intrinsic_water_quantity_method; material_intrinsic_water_quantity_state; material_intrinsic_water_quantity_sample_time; material_intrinsic_water_quantity_source; retained_milk_mass; retained_milk_mass_unit; retained_milk_mass_basis; retained_milk_mass_method; retained_milk_mass_state; retained_milk_mass_sample_time; retained_milk_mass_source; milk_foam_volume; milk_foam_volume_unit; milk_foam_volume_basis; milk_foam_volume_method; milk_foam_volume_state; milk_foam_volume_sample_time; milk_foam_volume_source; incorporated_air_quantity; incorporated_air_quantity_unit; incorporated_air_quantity_basis; incorporated_air_quantity_method; incorporated_air_quantity_state; incorporated_air_quantity_sample_time; incorporated_air_quantity_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source | 按材料/批次/状态称量实际接收毛/皮/净量及全部库存/返回；净量仅扣皮重。经校准分别测量咖啡/液体/咖啡渣/乳/添加物及含水/溶解固体，保留样品/状态相容性。记录萃取及蒸汽处理前后的状态和配方/接收方链接，独立湿渣/干固体/水与真实泡沫体积/质量区别。应用extraction_composition、stock_roles、reject_paths，不设通用出品率/粉量/乳换算。 | kg actual state; independent supported volume/density/temperature | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_water | espresso_service | water stocks terminal closure and nonadditive enduse | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; water_source_id; water_species; resource_medium; tank_boiler_id; terminal_boundary_id; closing_membership_id; paired_transfer_id; paired_receiver_id; fate_id; water_content_parent_id; parent_terminal_export_id; parent_terminal_recipient_id; parent_source_input_id; water_view_role; steam_condensate_role; meter_id; calibration_id; meter_opening_reading; meter_opening_reading_unit; meter_opening_reading_basis; meter_opening_reading_method; meter_opening_reading_state; meter_opening_reading_sample_time; meter_opening_reading_source; meter_closing_reading; meter_closing_reading_unit; meter_closing_reading_basis; meter_closing_reading_method; meter_closing_reading_state; meter_closing_reading_sample_time; meter_closing_reading_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; supplied_water_quantity; supplied_water_quantity_unit; supplied_water_quantity_basis; supplied_water_quantity_method; supplied_water_quantity_state; supplied_water_quantity_sample_time; supplied_water_quantity_source; abstracted_water_quantity; abstracted_water_quantity_unit; abstracted_water_quantity_basis; abstracted_water_quantity_method; abstracted_water_quantity_state; abstracted_water_quantity_sample_time; abstracted_water_quantity_source; extraction_water_quantity; extraction_water_quantity_unit; extraction_water_quantity_basis; extraction_water_quantity_method; extraction_water_quantity_state; extraction_water_quantity_sample_time; extraction_water_quantity_source; steam_generated_quantity; steam_generated_quantity_unit; steam_generated_quantity_basis; steam_generated_quantity_method; steam_generated_quantity_state; steam_generated_quantity_sample_time; steam_generated_quantity_source; steam_condensed_into_drink; steam_condensed_into_drink_unit; steam_condensed_into_drink_basis; steam_condensed_into_drink_method; steam_condensed_into_drink_state; steam_condensed_into_drink_sample_time; steam_condensed_into_drink_source; purge_to_air_quantity; purge_to_air_quantity_unit; purge_to_air_quantity_basis; purge_to_air_quantity_method; purge_to_air_quantity_state; purge_to_air_quantity_sample_time; purge_to_air_quantity_source; purge_to_drain_quantity; purge_to_drain_quantity_unit; purge_to_drain_quantity_basis; purge_to_drain_quantity_method; purge_to_drain_quantity_state; purge_to_drain_quantity_sample_time; purge_to_drain_quantity_source; water_in_grounds; water_in_grounds_unit; water_in_grounds_basis; water_in_grounds_method; water_in_grounds_state; water_in_grounds_sample_time; water_in_grounds_source; water_in_drink; water_in_drink_unit; water_in_drink_basis; water_in_drink_method; water_in_drink_state; water_in_drink_sample_time; water_in_drink_source; parent_terminal_export_water_quantity; parent_terminal_export_water_quantity_unit; parent_terminal_export_water_quantity_basis; parent_terminal_export_water_quantity_method; parent_terminal_export_water_quantity_state; parent_terminal_export_water_quantity_sample_time; parent_terminal_export_water_quantity_source; parent_intrinsic_input_water_quantity; parent_intrinsic_input_water_quantity_unit; parent_intrinsic_input_water_quantity_basis; parent_intrinsic_input_water_quantity_method; parent_intrinsic_input_water_quantity_state; parent_intrinsic_input_water_quantity_sample_time; parent_intrinsic_input_water_quantity_source; wash_enduse_quantity; wash_enduse_quantity_unit; wash_enduse_quantity_basis; wash_enduse_quantity_method; wash_enduse_quantity_state; wash_enduse_quantity_sample_time; wash_enduse_quantity_source; external_wastewater_quantity; external_wastewater_quantity_unit; external_wastewater_quantity_basis; external_wastewater_quantity_method; external_wastewater_quantity_state; external_wastewater_quantity_sample_time; external_wastewater_quantity_source; direct_water_quantity; direct_water_quantity_unit; direct_water_quantity_basis; direct_water_quantity_method; direct_water_quantity_state; direct_water_quantity_sample_time; direct_water_quantity_source; independent_vapour_quantity; independent_vapour_quantity_unit; independent_vapour_quantity_basis; independent_vapour_quantity_method; independent_vapour_quantity_state; independent_vapour_quantity_sample_time; independent_vapour_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; unknown_balance; unknown_balance_unit; unknown_balance_basis; unknown_balance_method; unknown_balance_state; unknown_balance_sample_time; unknown_balance_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 校准供水/用途水表读数与实测期初期末水箱/锅炉/水库存分开；配对全部转移与真实最终接收方。独立量化终端废水/直接水/水蒸气、真实母项输入/外出含水及保留库存归属，并链接确切母项/接收方/关口。将配方/萃取/蒸汽凝结/饮品/咖啡渣/清洗液含水作非加和视图，不再作新交换；实际外部饮品/咖啡渣/材料母项所载水进入终端守恒一次，固有投入水也在其母项计一次。应用water_terminal、实际密度状态换算及resource_once，未知差额保留未解决。 | m3; kg; actual compatible temperature/density | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_energy | espresso_service | native supplied energy fuel and continuous readiness | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; energy_kind; fuel_species; meter_id; event_id; batch_id; operating_state; factor_reference_id; each_total; idle_failure_owner; carry_source_id; receiving_resolution_id; native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_sample_time; native_quantity_source; native_power; native_power_unit; native_power_basis; native_power_method; native_power_state; native_power_sample_time; native_power_source; opening_quantity; opening_quantity_unit; opening_quantity_basis; opening_quantity_method; opening_quantity_state; opening_quantity_sample_time; opening_quantity_source; inbound_quantity; inbound_quantity_unit; inbound_quantity_basis; inbound_quantity_method; inbound_quantity_state; inbound_quantity_sample_time; inbound_quantity_source; closing_quantity; closing_quantity_unit; closing_quantity_basis; closing_quantity_method; closing_quantity_state; closing_quantity_sample_time; closing_quantity_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; operating_duration; operating_duration_unit; operating_duration_basis; operating_duration_method; operating_duration_state; operating_duration_sample_time; operating_duration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取校准区间计量/燃料库存和实际供应能源/燃料状态，链接真实批次/切换/待机/失败/关闭时段及所有产出使用者。区分低位/高位热值及累计能量与功率乘时间，各因子独立留证。应用native_operands、energy_state、resource_once；记录真实N0结转及最终责任解决。 | kWh; MJ; kg; actual native conversion units | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_materials | espresso_service | independent materials chemicals and unused return roles | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; material_species; formulation_id; stock_id; lot_id; unused_used_role; paired_transfer_id; concentration_basis_definition; solution_parent_id; content_audit_role; each_total; factor_reference_id; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_net; receipt_net_unit; receipt_net_basis; receipt_net_method; receipt_net_state; receipt_net_sample_time; receipt_net_source; opening_quantity; opening_quantity_unit; opening_quantity_basis; opening_quantity_method; opening_quantity_state; opening_quantity_sample_time; opening_quantity_source; inbound_quantity; inbound_quantity_unit; inbound_quantity_basis; inbound_quantity_method; inbound_quantity_state; inbound_quantity_sample_time; inbound_quantity_source; closing_quantity; closing_quantity_unit; closing_quantity_basis; closing_quantity_method; closing_quantity_state; closing_quantity_sample_time; closing_quantity_source; unused_return_quantity; unused_return_quantity_unit; unused_return_quantity_basis; unused_return_quantity_method; unused_return_quantity_state; unused_return_quantity_sample_time; unused_return_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; concentrate_quantity; concentrate_quantity_unit; concentrate_quantity_basis; concentrate_quantity_method; concentrate_quantity_state; concentrate_quantity_sample_time; concentrate_quantity_source; prepared_solution_quantity; prepared_solution_quantity_unit; prepared_solution_quantity_basis; prepared_solution_quantity_method; prepared_solution_quantity_state; prepared_solution_quantity_sample_time; prepared_solution_quantity_source; active_quantity; active_quantity_unit; active_quantity_basis; active_quantity_method; active_quantity_state; active_quantity_sample_time; active_quantity_source; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_sample_time; water_quantity_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按具体材料/状态称量实际毛/皮/净接收、库存、领用及配对未用与已用转移；独立测量真实浓缩剂/配制液/活性成分/水及浓度基准，不重复加和含量。应用cleaning_roles、stock_roles、resource_once，链接确切最终接收方及新阶段覆盖。 | kg; independent actual native compatible concentration/volume | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_pack | espresso_service | presentation and expendable package states | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; package_material; contact_role; thermal_role; label_role; before_presentation_state; after_presentation_state; reuse_status; stock_id; unused_used_role; customer_cup_owner; enduse_owner; receiver_id; paired_transfer_id; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_net; receipt_net_unit; receipt_net_basis; receipt_net_method; receipt_net_state; receipt_net_sample_time; receipt_net_source; opening_quantity; opening_quantity_unit; opening_quantity_basis; opening_quantity_method; opening_quantity_state; opening_quantity_sample_time; opening_quantity_source; inbound_quantity; inbound_quantity_unit; inbound_quantity_basis; inbound_quantity_method; inbound_quantity_state; inbound_quantity_sample_time; inbound_quantity_source; closing_quantity; closing_quantity_unit; closing_quantity_basis; closing_quantity_method; closing_quantity_state; closing_quantity_sample_time; closing_quantity_source; unused_return_quantity; unused_return_quantity_unit; unused_return_quantity_basis; unused_return_quantity_method; unused_return_quantity_state; unused_return_quantity_sample_time; unused_return_quantity_source; package_quantity; package_quantity_unit; package_quantity_basis; package_quantity_method; package_quantity_state; package_quantity_sample_time; package_quantity_source; package_item_mass; package_item_mass_unit; package_item_mass_basis; package_item_mass_method; package_item_mass_state; package_item_mass_sample_time; package_item_mass_source; package_count; package_count_unit; package_count_basis; package_count_method; package_count_state; package_count_sample_time; package_count_source; reject_quantity; reject_quantity_unit; reject_quantity_basis; reject_quantity_method; reject_quantity_state; reject_quantity_sample_time; reject_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 检查饮品呈送前后与接收关口，按材料和责任称量/计数各杯/盖/包覆/纸巾/搅拌棒供应/库存/废品/返回；记录顾客杯与供应复用杯真实责任及终用接收方。应用presentation_gate、stock_roles、resource_once；EACH单件质量乘实际数量一次，不统一假设可回收去向。 | kg; actual independent item count | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_life | espresso_service | full all-user asset reusable and textile lifecycle | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; asset_id; lifecycle_phase; site_boundary; consumer_node_id; consumer_output_id; observed_period_id; remaining_source_id; replacement_id; termination_id; stage_owner; provider_exclusion_id; land_coverage_id; retained_content_parent_id; paired_transfer_id; lifecycle_component_quantity; lifecycle_component_quantity_unit; lifecycle_component_quantity_basis; lifecycle_component_quantity_method; lifecycle_component_quantity_state; lifecycle_component_quantity_sample_time; lifecycle_component_quantity_source; observed_alluser_driver; observed_alluser_driver_unit; observed_alluser_driver_basis; observed_alluser_driver_method; observed_alluser_driver_state; observed_alluser_driver_sample_time; observed_alluser_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; actual_termination_driver; actual_termination_driver_unit; actual_termination_driver_basis; actual_termination_driver_method; actual_termination_driver_state; actual_termination_driver_sample_time; actual_termination_driver_source; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; retained_content_exit_quantity; retained_content_exit_quantity_unit; retained_content_exit_quantity_basis; retained_content_exit_quantity_method; retained_content_exit_quantity_state; retained_content_exit_quantity_sample_time; retained_content_exit_quantity_source; other_output_native_quantity; other_output_native_quantity_unit; other_output_native_quantity_basis; other_output_native_quantity_method; other_output_native_quantity_state; other_output_native_quantity_sample_time; other_output_native_quantity_source | 盘点实际场址/建筑/装修/吧台/机具/磨豆机/制冷/过滤/洗涤/杯壶/器具/织物及所有用户时段。用已观测历史加有来源相容剩余使用或实际终止总量组装完整制造/安装/维护/实际更换/报废，对每个未覆阶段验证实际已完成整合。按full_life、output_projection、resource_once核对所有权、已用转移及含量；年度目标数/名义能力不是寿命分母。 | actual supported native lifecycle service; Item(s) only genuine counted case | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_provider | espresso_service | exclusive complete provider or completed missing duty | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; physical_stage; provider_technology; geography_scope; time_scope; covered_stage_ids; excluded_stage_ids; completed_supplement_id; source_link_id; direct_or_provider; empty_duty_coverage_id; life_coverage_id; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; completed_supplement_quantity; completed_supplement_quantity_unit; completed_supplement_quantity_basis; completed_supplement_quantity_method; completed_supplement_quantity_state; completed_supplement_quantity_sample_time; completed_supplement_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 逐阶段读取真实供应方数据集及原始责任记录，匹配输入输出物理状态、地理/时间关口、原生服务量及完整上游/运行/设备/接收覆盖。完整使用前以已完成来源/数量/状态/时间/责任整合实际缺失互斥阶段，不以未来计划替代。应用exclusive_coverage及resource_once，不重复已覆资源。 | actual supported native provider service | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_freight | espresso_service | actual unique freight and necessary empty operation | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; leg_id; load_id; cargo_state; route_id; vehicle_tare_definition; each_total; record_share_definition; coverage_state; empty_leg_id; empty_responsible_pool; completed_empty_integration_id; factor_reference_id; packed_gross_mass; packed_gross_mass_unit; packed_gross_mass_basis; packed_gross_mass_method; packed_gross_mass_state; packed_gross_mass_sample_time; packed_gross_mass_source; noncargo_vehicle_tare; noncargo_vehicle_tare_unit; noncargo_vehicle_tare_basis; noncargo_vehicle_tare_method; noncargo_vehicle_tare_state; noncargo_vehicle_tare_sample_time; noncargo_vehicle_tare_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; empty_native_duty_quantity; empty_native_duty_quantity_unit; empty_native_duty_quantity_basis; empty_native_duty_quantity_method; empty_native_duty_quantity_state; empty_native_duty_quantity_sample_time; empty_native_duty_quantity_source | 核对真实航段/车次/载荷起讫、湿态含包装货物/支撑/器材质量，仅扣非货物车辆皮重；读取实际距离及EACH/TOTAL次数。按相容target_driver/all_consumer_driver或确切直接责任确定该记录record_share一次。应用freight_once，所得货运为已归属，不再乘资源份额。以真实完整供应方或实际完成互斥原生运行/燃料/设备/接收数量，验证必要空驶返回/调位/失败运行。 | t*km; kg; km; independent actual empty-operation native unit | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_fluids | espresso_service | exclusive fluid roles complete actual fates | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; fluid_species; equipment_id; charge_id; source_lot_id; receiver_id; paired_transfer_id; role_membership; factory_new_entry_id; wholeequipment_exit_id; retained_content_parent_id; release_method_id; nonair_fate_id; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored; opening_stored_unit; opening_stored_basis; opening_stored_method; opening_stored_state; opening_stored_sample_time; opening_stored_source; inbound_quantity; inbound_quantity_unit; inbound_quantity_basis; inbound_quantity_method; inbound_quantity_state; inbound_quantity_sample_time; inbound_quantity_source; factory_new_equipment_charge; factory_new_equipment_charge_unit; factory_new_equipment_charge_basis; factory_new_equipment_charge_method; factory_new_equipment_charge_state; factory_new_equipment_charge_sample_time; factory_new_equipment_charge_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_sample_time; closing_stored_source; internally_recovered_quantity; internally_recovered_quantity_unit; internally_recovered_quantity_basis; internally_recovered_quantity_method; internally_recovered_quantity_state; internally_recovered_quantity_sample_time; internally_recovered_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; other_receipt_quantity; other_receipt_quantity_unit; other_receipt_quantity_basis; other_receipt_quantity_method; other_receipt_quantity_state; other_receipt_quantity_sample_time; other_receipt_quantity_source; wholeequipment_retained_content_exit; wholeequipment_retained_content_exit_unit; wholeequipment_retained_content_exit_basis; wholeequipment_retained_content_exit_method; wholeequipment_retained_content_exit_state; wholeequipment_retained_content_exit_sample_time; wholeequipment_retained_content_exit_source; useful_exit_quantity; useful_exit_quantity_unit; useful_exit_quantity_basis; useful_exit_quantity_method; useful_exit_quantity_state; useful_exit_quantity_sample_time; useful_exit_quantity_source; waste_exit_quantity; waste_exit_quantity_unit; waste_exit_quantity_basis; waste_exit_quantity_method; waste_exit_quantity_state; waste_exit_quantity_sample_time; waste_exit_quantity_source; independent_air_release; independent_air_release_unit; independent_air_release_basis; independent_air_release_method; independent_air_release_state; independent_air_release_sample_time; independent_air_release_source; unknown_balance; unknown_balance_unit; unknown_balance_basis; unknown_balance_method; unknown_balance_state; unknown_balance_sample_time; unknown_balance_source | 按具体设备/充注/批次/状态测量实际流体并核对安装/储存/回收互斥归属。内部回收量归入真实安装或储存库存，不另加去向。跟踪新设备进入、其他接收、全部配对有用/废物/非空气/整机保留含量出口及独立证实空气排放。应用fluid_roles、stock_roles和resource_once；未知差额不是排放或避免新料抵扣。 | kg exact fluid state | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_waste | espresso_service | actual food grounds packaging and maintenance waste receivers | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; waste_species; mixture_id; source_batch_id; producing_node_id; rejected_state; rework_loop_id; fate_id; receiver_dataset_id; terminal_boundary_id; paired_transfer_id; sample_id; moisture_basis; content_audit_role; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_net; receipt_net_unit; receipt_net_basis; receipt_net_method; receipt_net_state; receipt_net_sample_time; receipt_net_source; waste_native_quantity; waste_native_quantity_unit; waste_native_quantity_basis; waste_native_quantity_method; waste_native_quantity_state; waste_native_quantity_sample_time; waste_native_quantity_source; grounds_wet_mass; grounds_wet_mass_unit; grounds_wet_mass_basis; grounds_wet_mass_method; grounds_wet_mass_state; grounds_wet_mass_sample_time; grounds_wet_mass_source; grounds_dry_solids_mass; grounds_dry_solids_mass_unit; grounds_dry_solids_mass_basis; grounds_dry_solids_mass_method; grounds_dry_solids_mass_state; grounds_dry_solids_mass_sample_time; grounds_dry_solids_mass_source; grounds_water_mass; grounds_water_mass_unit; grounds_water_mass_basis; grounds_water_mass_method; grounds_water_mass_state; grounds_water_mass_sample_time; grounds_water_mass_source; retained_water_quantity; retained_water_quantity_unit; retained_water_quantity_basis; retained_water_quantity_method; retained_water_quantity_state; retained_water_quantity_sample_time; retained_water_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 在实际状态/接收关口分类称量独立未供给/制备/清洗弃样/供应后残留/咖啡渣/维护废物；记录湿渣及真实独立样品固体/水，区分有用接收物与废物。每项不合格/返工/保留/再部署/弃置均链接生产批次及实际接收方；保留原负担及真实新增工作。应用reject_paths、water_terminal、output_projection及resource_once。 | kg actual wet/dry state | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_emissions | espresso_service | independent species medium and actual release evidence | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; substance_species; chemical_form; reporting_basis; receiving_medium; compartment_id; particle_size_class; release_event_id; activity_record_id; factor_reference_id; terminal_boundary_id; provider_coverage_id; measured_species_mass; measured_species_mass_unit; measured_species_mass_basis; measured_species_mass_method; measured_species_mass_state; measured_species_mass_sample_time; measured_species_mass_source; native_activity; native_activity_unit; native_activity_basis; native_activity_method; native_activity_state; native_activity_sample_time; native_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; released_volume; released_volume_unit; released_volume_basis; released_volume_method; released_volume_state; released_volume_sample_time; released_volume_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; pressure; pressure_unit; pressure_basis; pressure_method; pressure_state; pressure_sample_time; pressure_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量或使用来源相容活动量乘因子前，明确每项实际物种/形态/报告基准及空气/水/土壤受纳区室；各数字操作数独立留证，保留粒径及真实气/液状态换算。不得把不明污染物、有机负荷指标或平衡残差转成具体物种；容纳态接收方转移仍为废物，仅有独立证据的真实直接排放为基本流。应用species_medium、exclusive_coverage及resource_once。 | kg actual species; compatible activity/factor units | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |
| cp_land | espresso_service | native land occupation and paired transformation | actual measured/source-linked native record | site_id; operator_id; process_id; period_id; record_id; source_record_id; owner_id; output_id; recipient_id; gate_id; handoff_time; state_id; coverage_id; provider_dataset_id; linked_stage_id; internal_external; source_input_role; linked_input_coverage; projection_variant; allocation_stage; lineage_id; output_role; land_class_from; land_class_to; occupation_class; spatial_boundary_id; transformation_event_id; from_event_id; to_event_id; event_date; occupation_start; occupation_end; prior_state_evidence; resulting_state_evidence; provider_covered_interface; asset_coverage_id; occupation_area; occupation_area_unit; occupation_area_basis; occupation_area_method; occupation_area_state; occupation_area_sample_time; occupation_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; occupation_area_time; occupation_area_time_unit; occupation_area_time_basis; occupation_area_time_method; occupation_area_time_state; occupation_area_time_sample_time; occupation_area_time_source; transformation_from_area; transformation_from_area_unit; transformation_from_area_basis; transformation_from_area_method; transformation_from_area_state; transformation_from_area_sample_time; transformation_from_area_source; transformation_to_area; transformation_to_area_unit; transformation_to_area_basis; transformation_to_area_method; transformation_to_area_state; transformation_to_area_sample_time; transformation_to_area_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 实测原生面积及占用区间，核验土地类型/场址/责任及相容经过时间换算。真实转化须持久原/结果状态事件证据、配对from/to事件ID、时间及原生面积。将未覆盖土地接口与相同供应方/设备已覆非加和视图区分。应用full_life、land_native、resource_once，不以计数或年度假设转化替代。 | m2*a; m2; actual compatible duration | 每次真实事件及期初期末核对 | 实际批段/报告期及全部用户完整寿命，含待机失败与关闭 | 实际责任场址和各供应方接收关口 | 每参考流 | 原始记录/校准/状态样品/接收确认/阶段覆盖/独立操作数来源 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_resources | 全部清单行 | 按stock_roles及真实相容换算后应用resource_once；目标总量除同一版本正N_target恰好一次。已每参考流不变，N0保留责任解决。相应行优先按freight_once和output_projection。 | actual native quantities; cp_service; linked node protocol | physical amount per reference flow |  |
| extract_reconcile | roasted_coffee; milk_alternatives; drink_additions; grounds_waste | 采用真实配对状态/样品咖啡/乳/添加物/水及实际供应饮品/咖啡渣/损耗/期末库存；整杯、干固体、含水、泡沫体积及成分为非加和视图。不用通用溶解固体出品率/含水/粉量/泡沫质量换算。 | cp_coffee_milk; cp_water; cp_waste | state-matched extraction formulation audit |  |
| water_close | all water and liquid rows | 按water_terminal以真实供应/自取水加咖啡/乳/添加物母项固有水和转移，对照互斥外部废水/直接水/水蒸气加真实饮品/渣/其他材料母项出口含水及期末库存变化。母项含水进入守恒一次而不另加交换；仅排除内部用途/含量/接收重复，水蒸气须独立证据。 | cp_water; actual source receiver membership | actual terminal water closure with unresolved difference |  |
| freight_calculate | supply_receiver_freight | 对原生包装湿态航段/车次记录应用freight_once，record_share一次即真实池归属；已归属货运总量除同一正N_target一次，不再乘通用份额。供应方未含的真实空驶另行完整纳入。 | cp_freight; cp_provider; cp_service | assigned freight and exclusive completed empty duties per reference flow |  |
| life_land_complete | asset_life; reusable_life; land_occupation; land_transformation_from; land_transformation_to | 用全部真实用户已观测及有来源相容剩余使用或实际终止、全部寿命阶段及原生土地事件链接应用full_life/land_native；resource_once前识别完整供应方或互斥直接覆盖，不以年度目标计数代替。 | cp_life; cp_land; cp_provider | complete physical asset and native land duties per reference flow |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_service | 全部清单行 | 实际同等配方/份量/热态/呈送/版本的接收履约及完整成分接受/撤销证据，不以付款替代产出 | cp_service; drink_gate |
| native_states | 全部清单行 | 各真实物料/物种/库存/样品/关口保留确切湿/干/溶质/水/泡沫/温度状态，各独立数字有自身7项元数据；缺失为缺口 | cp_coffee_milk; cp_water; native_operands |
| completeness | 全部清单行 | 完整全部产出实物账本及真实所有用户/时段/寿命/土地/供应方/接收覆盖、已完成缺失阶段及N0来源/结转/最终解决，不以计划替代 | exclusive_coverage; full_life; cp_provider |
| identity | 全部清单行 | 最终具体交换须核验真实UUID/类型/物种/介质/属性/单位及实际数量；未决卡片与无通用范围限制候选使用，不假装完整清单 | species_medium; actual verification records |
| source_limits | 全部清单行 | 定性运营/制造方示例不变成目标库存、数值配方/出品率/温度/寿命/因子或法律阈值，保留真实前景证据 | Data Sources; actual source records |
| translation_projection | 全部清单行 | 中英保持同一身份/参考/真实关口、行/过程/类型/方向/单位、原生协议及规则顺序，生成投影当前且确定 | actual bilingual review; generated fingerprint |
| complete_milk_alternatives | espresso_service | 最终使用前，按下方完整采集定义将`milk_alternatives`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_coffee_milk` |
| complete_drink_additions | espresso_service | 最终使用前，按下方完整采集定义将`drink_additions`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_coffee_milk` |
| complete_supplied_water | espresso_service | 最终使用前，按下方完整采集定义将`supplied_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_electricity | espresso_service | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_fuel | espresso_service | 最终使用前，按下方完整采集定义将`fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_thermal_supply | espresso_service | 最终使用前，按下方完整采集定义将`thermal_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_cleaning_agents | espresso_service | 最终使用前，按下方完整采集定义将`cleaning_agents`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_presentation_materials | espresso_service | 最终使用前，按下方完整采集定义将`presentation_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_pack` |
| complete_maintenance_materials | espresso_service | 最终使用前，按下方完整采集定义将`maintenance_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_asset_life | espresso_service | 最终使用前，按下方完整采集定义将`asset_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_life` |
| complete_reusable_life | espresso_service | 最终使用前，按下方完整采集定义将`reusable_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_life` |
| complete_complete_providers | espresso_service | 最终使用前，按下方完整采集定义将`complete_providers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_provider` |
| complete_supply_receiver_freight | espresso_service | 最终使用前，按下方完整采集定义将`supply_receiver_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_equipment_fluid_supply | espresso_service | 最终使用前，按下方完整采集定义将`equipment_fluid_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_water_abstraction | espresso_service | 最终使用前，按下方完整采集定义将`water_abstraction`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_land_occupation | espresso_service | 最终使用前，按下方完整采集定义将`land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_land_transformation_from | espresso_service | 最终使用前，按下方完整采集定义将`land_transformation_from`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_retained_true_joint_outputs | espresso_service | 最终使用前，按下方完整采集定义将`retained_true_joint_outputs`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_service` |
| complete_unused_supply_returns | espresso_service | 最终使用前，按下方完整采集定义将`unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_used_usable_transfers | espresso_service | 最终使用前，按下方完整采集定义将`used_usable_transfers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_life` |
| complete_recovered_fluid_useful | espresso_service | 最终使用前，按下方完整采集定义将`recovered_fluid_useful`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_packaging_waste | espresso_service | 最终使用前，按下方完整采集定义将`packaging_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_pack` |
| complete_maintenance_waste | espresso_service | 最终使用前，按下方完整采集定义将`maintenance_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waste` |
| complete_contained_wastewater | espresso_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_fluid_waste | espresso_service | 最终使用前，按下方完整采集定义将`fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_asset_reusable_waste | espresso_service | 最终使用前，按下方完整采集定义将`asset_reusable_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_life` |
| complete_land_transformation_to | espresso_service | 最终使用前，按下方完整采集定义将`land_transformation_to`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_direct_liquid_water | espresso_service | 最终使用前，按下方完整采集定义将`direct_liquid_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_direct_air_species | espresso_service | 最终使用前，按下方完整采集定义将`direct_air_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |
| complete_direct_water_species | espresso_service | 最终使用前，按下方完整采集定义将`direct_water_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |
| complete_direct_soil_species | espresso_service | 最终使用前，按下方完整采集定义将`direct_soil_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### milk_alternatives

责任节点与原流角色：espresso_service / inputs / product

仅在实际配方使用时，按确切组成及供应状态分别记录乳或替代饮料并逐项核验。起泡体积不是质量或通用乳等价物；按stock_roles记录领用/未用退回后应用resource_once。

- 选定流: 实际乳或植物基饮料配方投入
- 流属性/单位: Mass / kg
- 数量规则: 仅在实际配方使用时，按确切组成及供应状态分别记录乳或替代饮料并逐项核验。起泡体积不是质量或通用乳等价物；按stock_roles记录领用/未用退回后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_coffee_milk`
- 来源: costa-coffees-current; costa-allergens-current; starbucks-espresso-2025

#### drink_additions

责任节点与原流角色：espresso_service / inputs / product

有实际用量时逐项记录独立外部配方投入，不设概括固定身份。匹配配方及新投入覆盖，不重复供应混合料中已有成分；按stock_roles及resource_once处理。

- 选定流: 实际独立的甜味料酱料配料或其他饮品添加物
- 流属性/单位: Mass / kg
- 数量规则: 有实际用量时逐项记录独立外部配方投入，不设概括固定身份。匹配配方及新投入覆盖，不重复供应混合料中已有成分；按stock_roles及resource_once处理。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_coffee_milk`
- 来源: costa-allergens-current

#### supplied_water

责任节点与原流角色：espresso_service / inputs / product

按water_terminal记录实际计量/交付供水及库存。由该供水取得的配方水、萃取水、蒸汽凝结水和清洗稀释水为非加和用途/含量视图，不能再作一次采购投入；应用resource_once。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际跨越场址边界的供应水
- 流属性/单位: Volume / m3
- 数量规则: 按water_terminal记录实际计量/交付供水及库存。由该供水取得的配方水、萃取水、蒸汽凝结水和清洗稀释水为非加和用途/含量视图，不能再作一次采购投入；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

#### electricity

责任节点与原流角色：espresso_service / inputs / product

实际计量加热/研磨/蒸汽/制冷/洗涤/场址用电，含责任内待机和失败负担。累计kWh不得再次乘运行小时；应用resource_once及exclusive_coverage。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 制备待机与场址服务实际供应电力
- 流属性/单位: Energy / kWh
- 数量规则: 实际计量加热/研磨/蒸汽/制冷/洗涤/场址用电，含责任内待机和失败负担。累计kWh不得再次乘运行小时；应用resource_once及exclusive_coverage。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

#### fuel

责任节点与原流角色：espresso_service / inputs / product

仅记录责任内实际使用的各类燃料及状态。保留有证据的质量/体积/密度及低位/高位热值种类，不假定燃料或热值；应用resource_once。

- 选定流: 实际条件性燃料供应
- 流属性/单位: Mass / kg
- 数量规则: 仅记录责任内实际使用的各类燃料及状态。保留有证据的质量/体积/密度及低位/高位热值种类，不假定燃料或热值；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

#### thermal_supply

责任节点与原流角色：espresso_service / inputs / product

仅记录实际外供热及匹配的完整供应方和原生计量单位/状态；不重复完整供应方已覆盖能耗。实际设备加热不虚构能源产品；应用resource_once。

本卡为独立身份分支`thermal_supply_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际条件性外部供热
- 流属性/单位: Energy / MJ
- 数量规则: 仅记录实际外供热及匹配的完整供应方和原生计量单位/状态；不重复完整供应方已覆盖能耗。实际设备加热不虚构能源产品；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`

#### cleaning_agents

责任节点与原流角色：espresso_service / inputs / product

逐项记录实际浓缩剂/制剂供应量；按cleaning_roles将配制溶液、活性成分和含水量作为独立非加和含量核查，不重复供应；按stock_roles后应用resource_once。

本卡为独立身份分支`cleaning_agents_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际独立清洗剂及卫生材料
- 流属性/单位: Mass / kg
- 数量规则: 逐项记录实际浓缩剂/制剂供应量；按cleaning_roles将配制溶液、活性成分和含水量作为独立非加和含量核查，不重复供应；按stock_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- 来源: lamarzocco-commercial-route

#### presentation_materials

责任节点与原流角色：espresso_service / inputs / product

按材质/接触/保温/标签角色记录实际独立呈送用品，逐项记录毛/皮/净量及未用/废品/去向。顾客杯和复用杯不自动作新一次性制造；按stock_roles后应用resource_once。

- 选定流: 实际一次性杯盖包覆纸巾及呈送用品
- 流属性/单位: Mass / kg
- 数量规则: 按材质/接触/保温/标签角色记录实际独立呈送用品，逐项记录毛/皮/净量及未用/废品/去向。顾客杯和复用杯不自动作新一次性制造；按stock_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: costa-cups-current; costa-allergens-current

#### maintenance_materials

责任节点与原流角色：espresso_service / inputs / product

逐项记录实际过滤器/备件等材料及工艺和阶段责任。普通处理/服务不省略；未审查独立工业过程须扩展审查。按stock_roles后应用resource_once。

- 选定流: 实际过滤器维护及更换材料
- 流属性/单位: Mass / kg
- 数量规则: 逐项记录实际过滤器/备件等材料及工艺和阶段责任。普通处理/服务不省略；未审查独立工业过程须扩展审查。按stock_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`
- 来源: lamarzocco-commercial-route

#### asset_life

责任节点与原流角色：espresso_service / inputs / product

仅在真实计数时使用相容设备生命周期服务计数，最终具体单位遵从实际支持属性/供应方。按full_life覆盖所有用户已观测及有来源剩余寿命或实际终止的制造/安装/维护/更换/报废；不以名义能力/年度目标数当寿命。应用resource_once。

- 选定流: 实际场址建筑吧台与设备完整生命周期服务
- 流属性/单位: Count / Item(s)
- 数量规则: 仅在真实计数时使用相容设备生命周期服务计数，最终具体单位遵从实际支持属性/供应方。按full_life覆盖所有用户已观测及有来源剩余寿命或实际终止的制造/安装/维护/更换/报废；不以名义能力/年度目标数当寿命。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_life`

#### reusable_life

责任节点与原流角色：espresso_service / inputs / product

实际相容复用品完整寿命服务计数，不把每杯当新制造杯壶。顾客或供应方所有物仅按真实责任纳入；实际供给/返回/洗涤/修理/报废及所有用户完整寿命覆盖一次。应用resource_once。

- 选定流: 实际杯壶器具布巾及周转系统生命周期服务
- 流属性/单位: Count / Item(s)
- 数量规则: 实际相容复用品完整寿命服务计数，不把每杯当新制造杯壶。顾客或供应方所有物仅按真实责任纳入；实际供给/返回/洗涤/修理/报废及所有用户完整寿命覆盖一次。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_life`
- 来源: costa-cups-current

#### complete_providers

责任节点与原流角色：espresso_service / inputs / product

仅实际计数服务适用；最终交换采用真实支持原生属性/单位，不作通用计数换算。按exclusive_coverage采用匹配完整供应方或实际完成且互斥的缺失阶段整合，不递归采购同一最终饮品；应用resource_once。

- 选定流: 实际匹配且已完成的配套供应方服务
- 流属性/单位: Count / Item(s)
- 数量规则: 仅实际计数服务适用；最终交换采用真实支持原生属性/单位，不作通用计数换算。按exclusive_coverage采用匹配完整供应方或实际完成且互斥的缺失阶段整合，不递归采购同一最终饮品；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_provider`

#### supply_receiver_freight

责任节点与原流角色：espresso_service / inputs / product

应用freight_once：逐一真实航段/车次湿态含包装货物吨数乘距离、实际EACH重复一次及该记录record_share一次，再除同一正N_target一次。此份额就是resource_once归属，不再乘第二份额。必要空驶须完整供应方或已完成互斥原生运行覆盖，不以零载荷抹去。

- 选定流: 实际包装货物供应返回及接收方货运
- 流属性/单位: Mass * Length / t*km
- 数量规则: 应用freight_once：逐一真实航段/车次湿态含包装货物吨数乘距离、实际EACH重复一次及该记录record_share一次，再除同一正N_target一次。此份额就是resource_once归属，不再乘第二份额。必要空驶须完整供应方或已完成互斥原生运行覆盖，不以零载荷抹去。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_freight`

#### equipment_fluid_supply

责任节点与原流角色：espresso_service / inputs / product

仅实际具体制冷剂/润滑剂等接收适用；按fluid_roles区分安装/储存/回收互斥角色。期初不存在的新设备出厂充注通过设备进入并链接覆盖含量，不重复采购流体。按stock_roles后应用resource_once。

- 选定流: 实际独立设备流体供应
- 流属性/单位: Mass / kg
- 数量规则: 仅实际具体制冷剂/润滑剂等接收适用；按fluid_roles区分安装/储存/回收互斥角色。期初不存在的新设备出厂充注通过设备进入并链接覆盖含量，不重复采购流体。按stock_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fluids`

#### water_abstraction

责任节点与原流角色：espresso_service / inputs / elementary

仅实际自取水适用，明确水资源环境区室及原生状态/责任；不重复采购供水或供应方已含资源。应用water_terminal及resource_once。

- 选定流: 从明确环境实际直接取水
- 流属性/单位: Volume / m3
- 数量规则: 仅实际自取水适用，明确水资源环境区室及原生状态/责任；不重复采购供水或供应方已含资源。应用water_terminal及resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

#### land_occupation

责任节点与原流角色：espresso_service / inputs / elementary

仅真实未覆盖原生面积乘时间占用适用；供应方已覆同一土地视图非加和。用实际面积及相容经过时间转换、类型/场址/时段/责任，按full_life归属后应用resource_once；绝非产品设备计数。

- 选定流: 明确土地类型实际未覆盖的土地占用
- 流属性/单位: Area * Time / m2*a
- 数量规则: 仅真实未覆盖原生面积乘时间占用适用；供应方已覆同一土地视图非加和。用实际面积及相容经过时间转换、类型/场址/时段/责任，按full_life归属后应用resource_once；绝非产品设备计数。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_land`

#### land_transformation_from

责任节点与原流角色：espresso_service / inputs / elementary

仅有证据的实际原状态土地转化输入适用；用同一事件/面积/时间/责任链接结果状态输出，不假设年度转化；不重复供应方覆盖接口。应用resource_once。

- 选定流: 从明确原土地类型实际未覆盖的土地转化
- 流属性/单位: Area / m2
- 数量规则: 仅有证据的实际原状态土地转化输入适用；用同一事件/面积/时间/责任链接结果状态输出，不假设年度转化；不重复供应方覆盖接口。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_land`

#### retained_true_joint_outputs

责任节点与原流角色：espresso_service / outputs / product

仅在细分并按output_projection明确决定为真实联产品后适用；若属性不同，最终逐项用真实属性/单位替代示意Mass/kg。选定实物原生输出量除同一正N_target一次，不乘资源目标份额；已每参考流则保持。其他独立饮品/餐食/非食品产出为完整原始证据，不在目标归属清单中作联产品。

- 选定流: 实际保留真实联产品在其原生交接点的输出
- 流属性/单位: Mass / kg
- 数量规则: 仅在细分并按output_projection明确决定为真实联产品后适用；若属性不同，最终逐项用真实属性/单位替代示意Mass/kg。选定实物原生输出量除同一正N_target一次，不乘资源目标份额；已每参考流则保持。其他独立饮品/餐食/非食品产出为完整原始证据，不在目标归属清单中作联产品。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_service`

#### unused_supply_returns

责任节点与原流角色：espresso_service / outputs / product

仅实测未用退回适用，具确切来源批次/接收方/关口/状态/时间。按stock_roles用总领用S投入加配对未用输出，或S减未用作投入并省去该输出，不能兼用；已使用回收不属本行。除同一正N_target一次。

- 选定流: 向明确接收方实际配对退回的未用物料
- 流属性/单位: Mass / kg
- 数量规则: 仅实测未用退回适用，具确切来源批次/接收方/关口/状态/时间。按stock_roles用总领用S投入加配对未用输出，或S减未用作投入并省去该输出，不能兼用；已使用回收不属本行。除同一正N_target一次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_materials`

#### used_usable_transfers

责任节点与原流角色：espresso_service / outputs / product

仅实际已用杯/包装/设备/材料有用转出适用，记录具体接收方/关口/原生量及既有状态覆盖。最终用实际支持单位；原负担保留一次并加入真实新工作，不抵减新料。按output_projection及同一正N_target一次处理。

- 选定流: 实际已用复用品材料或设备的有用交接
- 流属性/单位: Mass / kg
- 数量规则: 仅实际已用杯/包装/设备/材料有用转出适用，记录具体接收方/关口/原生量及既有状态覆盖。最终用实际支持单位；原负担保留一次并加入真实新工作，不抵减新料。按output_projection及同一正N_target一次处理。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_life`

#### recovered_fluid_useful

责任节点与原流角色：espresso_service / outputs / product

仅有用回收流体真实外出至明确接收方适用，记录原生质量/状态及配对转移；不是未用新料退回或自动新料抵扣。内部回收储存仍属库存而非本外部输出。应用fluid_roles及output_projection。

- 选定流: 实际有用回收设备流体转移
- 流属性/单位: Mass / kg
- 数量规则: 仅有用回收流体真实外出至明确接收方适用，记录原生质量/状态及配对转移；不是未用新料退回或自动新料抵扣。内部回收储存仍属库存而非本外部输出。应用fluid_roles及output_projection。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fluids`

#### packaging_waste

责任节点与原流角色：espresso_service / outputs / waste

按实际材质/状态/接收方及终用责任记录。未用包装退回仍为未用，已用杯不是未用新料；明确顾客带走包装责任，不假设回收。应用resource_once。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际耗用或不合格呈送包装废物
- 流属性/单位: Mass / kg
- 数量规则: 按实际材质/状态/接收方及终用责任记录。未用包装退回仍为未用，已用杯不是未用新料；明确顾客带走包装责任，不假设回收。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: costa-cups-current

#### maintenance_waste

责任节点与原流角色：espresso_service / outputs / waste

逐项按具体组成/状态/接收方记录废过滤器/材料/污泥/化学废物，与废水或含量审计分开。内部洗涤不是工业再生产品；应用resource_once。

- 选定流: 实际过滤清洗及维护废物
- 流属性/单位: Mass / kg
- 数量规则: 逐项按具体组成/状态/接收方记录废过滤器/材料/污泥/化学废物，与废水或含量审计分开。内部洗涤不是工业再生产品；应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_waste`

#### contained_wastewater

责任节点与原流角色：espresso_service / outputs / waste

测量实际外部容纳态废水接收关口、组成/状态及原生水/溶液换算。洗涤/滴盘/冲洗/排至下水在最终外出前为内部用途，不重复。应用water_terminal及resource_once。

- 选定流: 实际送处理或收集的容纳态废水
- 流属性/单位: Mass / kg
- 数量规则: 测量实际外部容纳态废水接收关口、组成/状态及原生水/溶液换算。洗涤/滴盘/冲洗/排至下水在最终外出前为内部用途，不重复。应用water_terminal及resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

#### fluid_waste

责任节点与原流角色：espresso_service / outputs / waste

记录拒收/回收流体废物实际外部关口、原生质量/状态/来源/接收方及配对转移；排除有用回收及内部回收库存，整机保留含量审计非加和。按fluid_roles后应用resource_once。

- 选定流: 送明确处理方的实际废设备流体
- 流属性/单位: Mass / kg
- 数量规则: 记录拒收/回收流体废物实际外部关口、原生质量/状态/来源/接收方及配对转移；排除有用回收及内部回收库存，整机保留含量审计非加和。按fluid_roles后应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fluids`

#### asset_reusable_waste

责任节点与原流角色：espresso_service / outputs / waste

按full_life覆盖实际完整报废接收责任；部件/保留流体含量与整机质量非加和，不重复供应方已含相同报废。应用resource_once。

- 选定流: 实际退役设备及复用品废物
- 流属性/单位: Mass / kg
- 数量规则: 按full_life覆盖实际完整报废接收责任；部件/保留流体含量与整机质量非加和，不重复供应方已含相同报废。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_life`

#### land_transformation_to

责任节点与原流角色：espresso_service / outputs / elementary

仅实际结果土地状态输出适用，链接真实配对原状态事件/场址/面积/时间/责任；不作年度默认或设备计数替代，供应方已覆同一接口非加和。应用resource_once。

- 选定流: 向明确结果土地类型实际未覆盖的土地转化
- 流属性/单位: Area / m2
- 数量规则: 仅实际结果土地状态输出适用，链接真实配对原状态事件/场址/面积/时间/责任；不作年度默认或设备计数替代，供应方已覆同一接口非加和。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_land`

#### direct_liquid_water

责任节点与原流角色：espresso_service / outputs / elementary

仅独立支持的物种/介质/数量/实际边界直接水排放适用，不是容纳态接收方转移或重复污染物质量。应用water_terminal及resource_once。

- 选定流: 向明确环境实际直接排放的水
- 流属性/单位: Mass / kg
- 数量规则: 仅独立支持的物种/介质/数量/实际边界直接水排放适用，不是容纳态接收方转移或重复污染物质量。应用water_terminal及resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_water`

#### direct_air_species

责任节点与原流角色：espresso_service / outputs / elementary

逐项有实际物种及空气区室证据时适用，保留化学/报告基准及必要粒径；独立实测或有来源活动量乘因子，逐操作数留证。不得以概括VOC/CO2差额或全流体自动泄漏替代。应用resource_once。

本卡为独立身份分支`direct_air_species_co2_fossil_air`; `direct_air_species_methane_fossil_air`; `direct_air_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际向空气排放的独立非水物质
- 流属性/单位: Mass / kg
- 数量规则: 逐项有实际物种及空气区室证据时适用，保留化学/报告基准及必要粒径；独立实测或有来源活动量乘因子，逐操作数留证。不得以概括VOC/CO2差额或全流体自动泄漏替代。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`

#### direct_water_species

责任节点与原流角色：espresso_service / outputs / elementary

逐项实际化学物种/形态及受纳水区室直接环境关口适用；容纳态废水成分在实际最终处理/排放责任前为非加和审计。不自动把COD/BOD等同具体物种。应用resource_once。

- 选定流: 实际向水排放的独立非水物质
- 流属性/单位: Mass / kg
- 数量规则: 逐项实际化学物种/形态及受纳水区室直接环境关口适用；容纳态废水成分在实际最终处理/排放责任前为非加和审计。不自动把COD/BOD等同具体物种。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`

#### direct_soil_species

责任节点与原流角色：espresso_service / outputs / elementary

仅独立证实具体物种/形态、土壤介质/原生数量及物理责任时适用；不把残差分派或假设泄漏作排放，不重复接收方处理。应用resource_once。

- 选定流: 向明确土壤实际排放的独立物质
- 流属性/单位: Mass / kg
- 数量规则: 仅独立证实具体物种/形态、土壤介质/原生数量及物理责任时适用；不把残差分派或假设泄漏作排放，不重复接收方处理。应用resource_once。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_emissions`


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| check_gate | fulfilled_hot_espresso_drink | 要求实际完整drink_gate版本/交接，核对部分/拒收/重制/撤销后恰好一个最终服务计数，无附餐重复或假设配方同等。 |  |
| check_material_water | actual native stocks and fates | 核查extraction_composition、stock_roles、water_terminal、cleaning_roles、fluid_roles的真实独立操作数/状态/样品/期末归属/配对接收，无水含量/用途重复或未知当空气；湿渣固体/水及泡沫体积/质量分开。 |  |
| check_complete_life | 全部职责 | 要求真实完整供应方或互斥已完成缺失阶段覆盖、所有用户已观测+有来源剩余/实际终止寿命及真实条件性原生土地接口/配对fromto事件；缺阶段/责任/更换终止/N0结转解决阻止完整性。 |  |
| check_attribution | all outputs periods resources and freight | 要求production_periods全部批段/切换/清理/产出链接及实际PCR特定决定，resource_once/freight_once/output_projection优先次序。原始所有输出原生量不变，不在目标分配后再添其他产品联产，货运份额一次、最终正同N一次；防输出多关口和共享批段/时段/设备重复。 |  |
| check_rejects | rejected and returned states | 要求reject_paths真实生产节点/批次及实际返工/再部署/保留/有用/废物接收链接；未决拒收非接受产出，已用回收非新供应或抵扣。 |  |
| check_identity_units | 全部清单行 | 每项真实具体交换须相容且经核验类型/方向/物种/介质/身份/属性/单位及原生量。不用概括固定UUID、Flow Set或泛化未核验支持。单纯缺通用范围/UUID不代表零，真实证据前限制最终完整性。 |  |
| check_languages_projection | 英文、中文及生成的投影 | 对照中英完整必需身份/功能单位/参考/边界/画像/质量/来源，各规则/卡片/过程/类型/方向/单位/元数据ID顺序及协议12项/rawkeys；按规范英文生成确定投影并运行选定目标检查。结构通过不代表外部身份/来源/科学审查。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际完整前景热意式咖啡饮品服务方法下的数据包；process/lifecyclemodel为下游投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅真实相容配方/份量/热态/呈送/服务版本、关口和已完成全责任覆盖，具体交换核验后使用 |
| excluded_use | 将未决身份/实际量缺失当零；通用咖啡因子；全63400/餐食/冷饮/娱乐/运输/住宿替代；未完成全链 |
| required_metadata | 实际运营方/场址/配方版本/份量/呈送热态/接收关口/时间、全部用户产出、原生库存去向和阶段责任 |
| required_quality_disclosure | 真实采集范围/跳过与缺口、未决具体身份和通用范围证据缺口、供应方/寿命/土地/N0完整性、语言与投影一致性 |
| update_trigger | 实际配方/原料状态/份量/机器路线/呈送复用/清洗/责任关口/供应方寿命或新证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方633与634排除边界；不作路线/数量事实 |
| costa-coffees-current | official_guidance | https://www.costa.co.uk/our-coffees | 真实浓缩/热水/乳及替代饮料产品形态，定性非通用配方 |
| costa-allergens-current | official_guidance | https://www.costa.co.uk/sustainability/nutrition/allergens | 实际蒸汽杆/杯壶/识别呈送/可变配方及混配角色，定性非安全承诺 |
| costa-cups-current | official_guidance | https://www.costa.co.uk/sustainability/cups-and-packaging | 真实外带/自带复用/周转杯呈送与终用问题，不作统一数量或命运 |
| starbucks-espresso-2025 | official_guidance | https://about.starbucks.com/stories/2025/espresso-explained/ | 实际水过咖啡粉萃取及热水/蒸汽乳形式、配方差异；非目标测量 |
| lamarzocco-commercial-route | handbook | La Marzocco professional operating manuals: https://au.lamarzocco.com/wp-content/uploads/2023/09/MAN.29.1_LINEA_EN_V1.0_ONLINE-1.pdf ; https://nz.lamarzocco.com/wp-content/uploads/2023/09/MAN.9.1.01_STRADA_EP_EN_V4.2.pdf | 专业设备示例之水/蒸汽/冲泡杯路径、清洗/维护角色；非目标设备身份或量 |
