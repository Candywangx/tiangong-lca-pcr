---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-through-mains-except-steam-and-hot-water-on-own-account
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自营饮用水管网配水服务

## 1. 范围与适用性

本PCR规定已处理饮用液态水从进水至客户验收交接的可计量配水服务，采用电泵或重力、可选次氯酸钠补充消毒。本路线有意窄于CPC 69210，沿用原有PCR身份。仅纳入前景运行、实际现场作业及具体交付投入，供应制造运输及场外接收内部为背景。每流以一个主属性单位定义，允许指定完整设备。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-through-mains-except-steam-and-hot-water-on-own-account |
| classification_refs | CPC 3.0 69210; narrower |
| covered_products | 声明电泵或重力路线的自营饮用水管网配水服务 |
| excluded_products | 原水开采及初次制水、非饮用或热水、非管网交付、客户内部管道、单独水表安装或独立抄表、中介、农业灌溉、其他运行补充消毒药剂及配水运行现场燃烧路线 |
| representative_product | 经明确管网交付1 m3合格饮用水的配水服务 |
| production_route | 适用常温饮用水的重力或电泵管网配水，补充消毒可不投药或仅用次氯酸钠溶液。声明法规与合同的水质、压力和温度要求，不虚设通用限值。其他水质类别、运行补充消毒药剂或配水运行现场燃烧须经审查扩展后才适用；实际发生时属于范围不符，不得填零。 |
| market_state | 净验收交接处的服务，须声明液态水质、温度及压力 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已处理水进水至验收交接的自营配水服务 |
| How much | 1 m3 |
| How well | 每项计入交付的饮用水水质、压力及温度符合声明法规或合同验收条件 |
| How long or cycle | 同一完整报告年度，以净合格Q m3归一化，保留季节、失败及待机负荷 |
| reference_flow_link | `delivery_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收交接处的自营饮用水管网配水服务 |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 管网及进水; 验收交接点; 饮用水质类别及标准; 实际液态温压; 电泵或重力路线; 补氯使用及NaOCl分数; 报告年度及净Q; 漏损和退回对账; 水商品配套及前景设备供应验收边界 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| m_reference | delivery_service; makeup_water | 体积 | m3 | Q采用实际整股液体交接体积，不是气体标准体积或纯H2O等效体积；1 L=0.001 m3。保留声明的交接状态、校准及退回量对应的原验收基准。来源供水体积按c_source_supply采用其入口批次实测状态。混合体积不必可加：c_water以整股质量及H2O组分质量闭合，不假设体积可加等式。 |
| m_normalize | 所有行 | 按卡定义属性 | per 1 m3 | 期间总量保留原生kg、m3、kWh或h，分配一次并以同一净合格Q m3除一次；参考输出Q/Q=1 m3。不得采用每客户或每进水量分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已处理饮用水进入配水计量入口；具体设备及服务在运营方供应验收点进入；上游制水及制造非前景 |
| starting_condition_role | 前景配水服务与实际现场作业，运行损失及资本试验水分别来源匹配 |
| product_classification_scope | CPC 3.0 69210; narrower |
| recursive_input_rule | 不得递归展开同类供应商过程。互斥分段须保留同一水质和交接点；其具体采购服务如实际进入则明确测量对象、首选单位及已含范围，并从本清单扣除对应重叠阶段。内部转移不生成第二参考服务。 |
| upstream_dataset_requirement | 后续背景关联仅匹配前景已记录的电力、物理产品、指定设备服务及废物移交边界，不重复已含供应运输、初装填料、现场工作或处理。 |
| disclosure | 参考限定、Q及来源、库存返流、运行与资本事件、设备供应和废物交接点、现场处理是否发生、未知数据及排除背景阶段 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | 参考服务 | 从已处理饮用液态水的校准进水表开始，到运营方与客户交接验收表结束。纳入泵送、配水储存、漏损控制、客户水表维护和运行监测。排除原水开采、初次制水、客户内部管道、单独销售的水表安装、独立抄表服务、中介、农业灌溉、蒸汽、热水和非管网送水。 | `un_cpc` |
| b_route | 适用路线 | 适用常温饮用水的重力或电泵管网配水，补充消毒可不投药或仅用次氯酸钠溶液。声明法规与合同的水质、压力和温度要求，不虚设通用限值。其他水质类别、运行补充消毒药剂或配水运行现场燃烧须经审查扩展后才适用；实际发生时属于范围不符，不得填零。 | `epa_quality` |
| b_commodity | makeup_water; capital_test_water; delivery_service | 产出为按实际净验收整股液体Q=G-R计的配水服务。本PCR固定按追踪的H2O组分质量归属来源供水负担，再按c_source_supply换回各独立入口供应批次的体积；该归属源体积不是去向处混合液体体积。服务投入仅为运行Vop_s及分配后的资本试水f_a*Vcapital_a_s，一次计入。下游商品水生产仅采用Vaccepted_s/Q乘匹配的独立源供水清单，不再计全部入口生产。内含及反应生成水保留指向实际已计设备/试剂的already_counted_supply_ref，不再关联另一份制水；其实物组分仍进入c_water/c_origin。供应方已含验收前试验不另列前景购水。来源、组成、反应或库存/退回量未知时阻断完整配套，不是零也不自动是损失。 | `epa_audit` |
| b_unsuccessful | 全部管网活动 | 失败交付、拒收、返工、冲洗和未授权取水的电力、药剂、维护、损失补水及处置负荷全部保留在分子。Q仅含满足声明要求的净合格授权交付，包括符合要求的未收费授权用水和转售交付。未收费用水不自动等于漏损，计量或账单误差不属于环境排放。内部泵送、循环和储存转移不得形成第二份参考服务或额外外部进水。 | `epa_audit` |
| b_foreground | 所有行 | 前景仅为指定管网运行、实际运营方控制现场作业、直接供应设备或服务，以及确实发生于声明运营边界内的现场废水脱氯。供应方开采制造、上游运输、嵌套工厂/车辆/道路/工具资本及场外接收处理寿终内部为背景，不列清单。此前景选择是建模选择，不是文献强制或科学批准。 | |
| b_assets | field_work | 通过实际指定交付管段、泵组、阀门、储罐、水表、加药单元、光度计及运营维护车辆保留管网资产责任，各卡一个主属性及单位，并仅分配给本服务一次。无论财务资本或费用标签，替换均按实际功能及原资产账本保留。排除供应方组成材料制造及场外寿终内部，不以完整管网全寿命服务替代设备，也不隐性排除全部资本。 | `epa_quality`; `pipe_materials` |
| b_measurement_object | 所有非参考流行 | 一条流是一个指定可计量产品、设备、服务或明确废物载体，恰有一个主属性及首选单位。规格与供应边界固定时允许完整多材质设备及配方产品，不要求按材料或元素拆分。独立供应、介质或方向即使同为kg仍分开。实际不同配置不得默认为等价汇总，应实例化可区分配置行或分开模型。 | |
| b_waste | flush_sewer; flush_offsite; hypochlorite_container; field_work; onsite_dechlorination | 实际废物输出止于签署前景暂存或移交及明确接收交接，并对账产生、库存及批次；场外处理投入、排放及未来配对接收不是前景。仅实际现场处理接收成对内部冲洗载体，该内部关联抵销一次，实际资源、释放及废物仍保留。毛废物载体所含物仅计一次，不再把每个组分记另一份废物。首次土壤与淡水环境界面按事件互斥，后续迁移是归趋而非再次管网排放。 | `epa_audit` |
| b_onsite | onsite_dechlorination; field_work | 根据运行、任务及合同记录判断实际发生。现场除氯化学不同于管网仅NaOCl的窄补充消毒路线。逐项记录实际消耗的具体试剂与实际处理后物种；所列条件试剂卡不假定同时投入，也不是默认处理配方。实际其他试剂或释放须在完整性声明前新增明确卡。配水泵送燃烧仍排除，但实际前景维护车辆或工具燃烧纳入。 | `epa_dechlorination` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mains_distribution | 饮用水管网配水 | required | b_gate及b_route范围内必需 | foreground | 同一原责任批次Q m3服务的实际或单次归属数量 |
| field_work | 前景维护、巡检及取样 | required | 仅实际运营方控制作业及直接采购设备或服务 | foreground | 同一原责任批次Q m3服务的实际或单次归属数量 |
| onsite_dechlorination | 实际前景废水脱氯 | conditional | 仅废水实际在声明前景内处理时；排除场外接收方内部过程 | foreground | 同一原责任批次Q m3服务的实际或单次归属数量 |

### 过程：饮用水管网配水 (`mains_distribution`)

#### 输入

##### 产品流

###### 配水损失补充用已处理饮用水 (`makeup_water`)

独立供应且来源匹配的已处理水，归于运行未验收去向，包括损失、拒收/弃水、未授权交付及有证据的水反应消耗。Vop_s为c_source_supply的源状态供应水等效体积，不是去向处混合液毛体积。资本投运试验责任在capital_test_water另记，并保留未分配整股质量及H2O QA。

- 选定流：配水损失补充用已处理饮用水
- 流属性/单位：体积 / m3
- 数量规则：sum_s(Vop_s)/Q m3；Vop_s为按来源H2O归属换算的独立供应源状态体积，排除资本试水及内含/生成水；不得用总入口/Q或固定1。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa_audit`

###### 交流电 (`electricity`)

按官方记录明确的电能惯例采用净热值属性，并非燃料燃烧热；1 kWh=3.6 MJ。使用点电力；官方身份未规定供电技术、电压与供应方，应在供应数据集中声明。泵、储水混合、监测、补氯和失败运行用电只计一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：sum_j(w_j*E_j)/Q kWh实际归属外部电网购电，仅扣同一购电退回，不抵扣无关外送；E_j排除field_electricity及onsite_electricity已记电表量，w_j仅一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 次氯酸钠溶液 (`hypochlorite`)

条件性补充消毒或维修后消毒药剂。不得设默认剂量或组成；仅有运行和采购证据才能判定未发生。

- 选定流：次氯酸钠溶液
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_separate_j)/Q kg整体溶液；C_separate_j为按批次库存对账独立供应实耗，排除设备已含初装填料的第二次采购。全部实耗及初装填料另作质量QA；有效质量不另购，w_j仅一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical`
- 来源：`epa_quality`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收交接处的自营饮用水管网配水服务 (`delivery_service`)

指定管网、水质类别、验收交接点与年度的参考输出；功能单位链接本行。

- 选定流：验收交接处的自营饮用水管网配水服务
- 流属性/单位：体积 / m3
- 数量规则：1 m3
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 未经授权交付的饮用液态水 (`unauthorized_water`)

非参考物理产品转移，不属于合格服务量Q。其补水及配水负荷保留在服务，不给予共产品抵扣；不得伪作向土壤或淡水排放。

- 选定流：未经授权交付的饮用液态水
- 流属性/单位：体积 / m3
- 数量规则：U/Q m3，其中U为本期经调查核实的实际未授权对外取水，不含仪表或账单错误。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`epa_audit`

##### 废物流

###### 移交下水道处理的含氯饮用水管网废水 (`flush_sewer`)

实际含氯管网废水载体，在明确下水道接收交接点移交；它不是淡水基本排放。场外下水道处理药剂、能源、资产及排放不列前景。

- 选定流：移交下水道处理的含氯饮用水管网废水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*D_sewer_c_j)/Q m3本模型原责任批次c实际移交溶液；产生、期初期末库存和去向体积另作QA，待交接量不称已移交，历史批次移交不压当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 带残留物的空HDPE次氯酸钠容器 (`hypochlorite_container`)

在明确前景接收交接点实际移交、含残留的完整HDPE废容器，残留不再作为第二份化学废物。可回用退回与实际废弃分开；供应已含制造清洗运输不重复，场外处理内部为背景。

- 选定流：带残留物的空HDPE次氯酸钠容器
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*D_container_c_j)/Q kg原责任批次实际移交毛载体；产生Wc=移交+期末-期初仅作批次QA，待交接库存不称已移交，历史批次不压当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 进入前景脱氯的含氯饮用水废水 (`flush_direct_transfer`)

仅当前景实际运行脱氯时的内部废水转移；按事件及批次匹配onsite_flush_in。模型汇总抵销共同载体，但保留实际现场试剂、电力及最终释放。场外直接处理移交属于独立明确的废物移交配置。

- 选定流：进入前景脱氯的含氯饮用水废水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*Vd_j)/Q m3归属内部溶液；两端采用同一事件及权重抵销，原始Vd_j仍为实测批次QA，不重复乘权重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 移交场外脱氯的含氯饮用水废水 (`flush_offsite`)

有签署体积及水质边界的实际非下水道场外接收移交；排除内部onsite_flush_in及下水道移交。接收方试剂、设备及释放为背景，不列前景流。

- 选定流：移交场外脱氯的含氯饮用水废水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*D_offsite_c_j)/Q m3原责任批次实际移交溶液，与下水道、现场内部转移和漏水互斥；Vo为分阶段去向QA，未移交量仍为库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 排入土壤的液态水 (`water_soil`)

首次土壤环境界面实际到达的H2O组分，不是漏水溶液毛体积。Ls仍为溶液体积核查量；按强制水组分计算独立测定水分数、组成及同状态密度。其他物种卡另报的溶解或悬浮组分不包含在本H2O数量中。

- 选定流：排入土壤的液态水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*M_H2O_j/rho_water_j)/Q m3 H2O；j仅含首次土壤界面的漏水事件。M_H2O_j=rho_solution_j*Ls_j*f_H2O_j kg；直接称得毛质量时采用solution_mass_j*f_H2O_j。若已直接测得H2O组分质量则直接使用，不再乘分数。不得假定f_H2O=1。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 排入地表淡水的液态水 (`water_freshwater`)

管网漏水在首次地表淡水界面的实际H2O组分，排除下水道及土壤漏水、处理出水和非水组分。Lf仍为管网核查平衡中的溶液毛体积，不是本基本H2O数量。不得再次计入后续迁移。

- 选定流：排入地表淡水的液态水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*M_H2O_j/rho_water_j)/Q m3 H2O；j仅含首次地表淡水界面的管网漏水。M_H2O_j=rho_solution_j*Lf_j*f_H2O_j kg，或采用实测solution_mass_j*f_H2O_j；直接测得的H2O质量不再乘分数。排除全部处理出水，不假定纯水分数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 排入地表淡水的次氯酸 (`hocl_freshwater`)

条件性地表淡水中的次氯酸单一物种排放。 按第8节 `inv_chlorine_species` 执行。

- 选定流：排入地表淡水的次氯酸
- 流属性/单位：质量 / kg
- 数量规则：sum(w_j*Vj*c_free_j*0.001*f_HOCl_j*MW_HOCl/MW_Cl2)/Q kg；Vj仅含首次进入地表淡水的实测管网漏水，排除treatment最终处理出水；c_free_j为mg/L游离有效氯（以Cl2计）；f为已核实游离氯物种摩尔份额，MW采用有证据的摩尔质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 排入地表淡水的次氯酸根离子 (`ocl_freshwater`)

条件性地表淡水中的次氯酸根单一物种排放。 按第8节 `inv_chlorine_species` 执行。

- 选定流：排入地表淡水的次氯酸根离子
- 流属性/单位：质量 / kg
- 数量规则：sum(w_j*Vj*c_free_j*0.001*f_OCl_j*MW_OCl/MW_Cl2)/Q kg；Vj仅含首次进入地表淡水的实测管网漏水，排除treatment最终处理出水；c_free_j为mg/L游离有效氯（以Cl2计）；f为已核实游离氯物种摩尔份额，MW采用有证据的摩尔质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 排入土壤的次氯酸 (`hocl_soil`)

条件性土壤中的次氯酸单一物种排放。 按第8节 `inv_chlorine_species` 执行。

- 选定流：排入土壤的次氯酸
- 流属性/单位：质量 / kg
- 数量规则：sum(w_j*Vj*c_free_j*0.001*f_HOCl_j*MW_HOCl/MW_Cl2)/Q kg；Vj仅含进入土壤的实测液态水；c_free_j为mg/L游离有效氯（以Cl2计）；f为已核实游离氯物种摩尔份额，MW采用有证据的摩尔质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 排入土壤的次氯酸根离子 (`ocl_soil`)

条件性土壤中的次氯酸根单一物种排放。 按第8节 `inv_chlorine_species` 执行。

- 选定流：排入土壤的次氯酸根离子
- 流属性/单位：质量 / kg
- 数量规则：sum(w_j*Vj*c_free_j*0.001*f_OCl_j*MW_OCl/MW_Cl2)/Q kg；Vj仅含进入土壤的实测液态水；c_free_j为mg/L游离有效氯（以Cl2计）；f为已核实游离氯物种摩尔份额，MW采用有证据的摩尔质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

### 过程：前景维护、巡检及取样 (`field_work`)

#### 输入

##### 产品流

###### 水泥砂浆内衬球墨铸铁饮用水压力管段 (`asset_iron_main`)

运营方交付或安装边界验收的具体完整前景资产。声明管径、压力等级、内外衬、接头型式及交付管段长度；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：水泥砂浆内衬球墨铸铁饮用水压力管段
- 流属性/单位：长度 / m
- 数量规则：sum_a(f_a*n_a_asset_iron_main)/Q m；n为相同指定配置及原资产键实际供应验收长度。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`pipe_materials`

###### HDPE饮用水压力管段 (`asset_pe_main`)

运营方交付或安装边界验收的具体完整前景资产。声明管径、压力等级、树脂牌号及交付管段长度；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：HDPE饮用水压力管段
- 流属性/单位：长度 / m
- 数量规则：sum_a(f_a*n_a_asset_pe_main)/Q m；n为相同指定配置及原资产键实际供应验收长度。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 含电动机的饮用水离心泵组 (`asset_pump`)

运营方交付或安装边界验收的具体完整前景资产。声明厂家型号、额定流量扬程、电机额定值、过水材料及所含初装填料；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：含电动机的饮用水离心泵组
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_pump)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 饮用水隔离阀 (`asset_valve`)

运营方交付或安装边界验收的具体完整前景资产。声明型号、公称直径、压力等级、阀体材料及驱动方式；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：饮用水隔离阀
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_valve)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 饮用水储水罐 (`asset_tank`)

运营方交付或安装边界验收的具体完整前景资产。声明型号序号或土建资产标识、有效容积、材料、基础纳入情况及验收测试；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：饮用水储水罐
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_tank)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 饮用水客户水表 (`asset_meter`)

运营方交付或安装边界验收的具体完整前景资产。声明计量技术、口径、额定流量、精度等级及型号；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：饮用水客户水表
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_meter)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 次氯酸钠补充消毒加药单元 (`asset_booster`)

运营方交付或安装边界验收的具体完整前景资产。声明型号、计量能力、化学兼容性、交付干态或装料态及所含辅助部件；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：次氯酸钠补充消毒加药单元
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_booster)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### DPD游离氯光度计 (`asset_photometer`)

运营方交付或安装边界验收的具体完整前景资产。声明型号、光学方法、量程、校准及所含附件；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：DPD游离氯光度计
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_photometer)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 柴油动力轻型管网维护厢式车 (`asset_van`)

运营方交付或安装边界验收的具体完整前景资产。声明型号、载荷、发动机及排放配置、运营方使用边界；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：柴油动力轻型管网维护厢式车
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_van)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 便携式废水脱氯加药单元 (`asset_dechlorinator`)

运营方交付或安装边界验收的具体完整前景资产。声明型号、试剂兼容性、计量能力及所含泵、罐与控制器；实际不同配置须有独立可区分交换，不得成为未指定设备集合。 按第8节 `inv_asset_background` 执行。

- 选定流：便携式废水脱氯加药单元
- 流属性/单位：件数 / item
- 数量规则：sum_a(f_a*n_a_asset_dechlorinator)/Q item；n为相同指定配置及原资产键实际供应验收件数。前景资产固定分配仅用一次，不使用标准重量、寿命或重复替换计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 柴油 (`field_diesel`)

前景维护车辆及工具实际消耗的柴油，包含空驶、失败作业与怠速；供应燃料生产运输为背景。按b_route配水泵送仍为电力或重力。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*F_j)/Q kg；F_j为事件期初+收货-期末-退回或转出，并与实际任务燃料表计核对；仅在需要时按批次温度密度将体积换为质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 矿物润滑油 (`field_oil`)

泵或运营车辆前景实际补油及换油供应；交付设备已含初装油仅作内部库存备忘，不再次采购。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_oil_j)/Q kg实际消耗供应油，按配方及任务对账库存；排出油独立记其废物载体。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### DPD游离氯检测试剂片（指定配方） (`field_dpd`)

运营方接收的一种实际采购检测配方产品，缓冲物与填料仅计一次。声明试剂片配方、批次、质量及适用方法，不再另记其成分。

- 选定流：DPD游离氯检测试剂片（指定配方）
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_dpd_j)/Q kg消耗整片试剂，按试剂片件数乘经批次核实平均片质量或直接称重，并核对库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 单份饮用水样DPD游离氯分析 (`sample_analysis`)

在样品移交及报告接收边界的一次合格外部实验室服务；指定方法、分析物、样品标识、验收要求及一份完成报告定义服务计数。实验室制造、运输及能耗内部为背景。同一分析任务不得再计现场试剂。

- 选定流：单份饮用水样DPD游离氯分析
- 流属性/单位：件数 / item
- 数量规则：sum_j(w_j*N_report_j)/Q item；N_report_j为按指定方法实际完成并交付报告的分析服务，水样结果不合格仍可计完成服务。重复及中止按服务尝试质量要求执行，不把无报告尝试凭空记1 item，也不填零负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 交流电 (`field_electricity`)

专用前景表计的使用点外购电；共用表计仅分配一次，并从管网运行电卡排除同一kWh。仅扣有证据的同一购电退回，不抵扣无关外送。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：sum_j(w_j*E_stage_j)/Q kWh已归属外部电网购电；仅在能量换算时使用1 kWh=3.6 MJ，不作为新增交换。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 饮用水主管沟槽开挖与回填 (`trench_work`)

按实测沟槽体积及签署完工边界实际采购的具体现场作业服务；声明几何、土类、回填规范及所含机具、燃料、物料与外运范围。排除管材供应及路面铺设，不再另计合同已含燃料、回填或机具制造。自营作业改按实际具体投入，不得虚构采购服务。

- 选定流：饮用水主管沟槽开挖与回填
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*V_trench_j)/Q m3验收完成指定沟槽作业；采用实测测量体积及任务标识，不用管件数量或任意小时。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 水主管沟槽上方沥青路面恢复 (`road_reinstatement`)

按实测验收面积实际采购的路面恢复服务，指定层厚、配方、压实及合同纳入。排除沟槽开挖及管材供应。这是当前局部作业，不是道路全寿命制造或交通支持资本分配。

- 选定流：水主管沟槽上方沥青路面恢复
- 流属性/单位：面积 / m2
- 数量规则：sum_j(w_j*A_restored_j)/Q m2验收恢复路面，须有签署几何、层厚及任务账本；排除其他已含服务覆盖的面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 前景资产投运试验用已处理饮用水 (`capital_test_water`)

特定安装或投运资本事件在验收后实际由运营方供应的水，须有来源及原资产键。供应方验收前试验已含于交付资产，为背景且不另投入。Vcapital_a_s为按c_source_supply归于该事件的源状态供应水等效体积，排除回收库存及内含/生成水；另保留实际事件毛体积和未分配整股质量/H2O QA。

- 选定流：前景资产投运试验用已处理饮用水
- 流属性/单位：体积 / m3
- 数量规则：sum_a,s(f_a*Vcapital_a_s)/Q m3供应试验水，来源匹配一次；Vcapital从Vop排除，不再乘资产份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废矿物润滑油 (`field_used_oil`)

实际产生的整体油载体，记录污染及实测废物库存；止于签署接收移交，不含假定处理。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*D_c_j)/Q kg本模型原责任批次实际移交毛载体；产生、期初期末及内部处理另作QA，待移交库存不构成已移交流，旧批次外发不计当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### DPD余氯检测废液 (`field_test_waste`)

实际收集检测液态载体，水及试剂仅计一次；采用封闭容器并签署场外接收边界。现场中和或释放须有实际新增具体投入及物种，不得假定零。

- 选定流：DPD余氯检测废液
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*D_c_j)/Q kg本模型原责任批次实际移交毛载体；产生、期初期末及内部处理另作QA，待移交库存不构成已移交流，旧批次外发不计当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 拆除水泥砂浆内衬球墨铸铁管段 (`field_pipe_scrap`)

一股实际明确的拆除管段载体，含保留内外衬；在前景暂存或接收移交称量，不把所含砂浆或铁重复记废物。实际拆除其他资产身份须另加具体载体卡。

- 选定流：拆除水泥砂浆内衬球墨铸铁管段
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*D_c_j)/Q kg本模型原责任批次实际移交毛载体；产生、期初期末及内部处理另作QA，待移交库存不构成已移交流，旧批次外发不计当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

##### 基本流

###### 排入空气的化石源二氧化碳 (`field_co2_fossil_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的化石源二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的一氧化碳 (`field_co_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的甲烷 (`field_ch4_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的甲烷
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的一氧化二氮 (`field_n2o_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的一氧化二氮
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的一氧化氮 (`field_no_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的一氧化氮
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的二氧化氮 (`field_no2_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的二氧化硫 (`field_so2_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的二氧化硫
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的小于2.5微米颗粒物 (`field_pm25_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的小于2.5微米颗粒物
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

###### 排入空气的2.5至10微米颗粒物 (`field_pm_coarse_air`)

NO与NO2分开，颗粒物粒径不重叠。排除供应燃料及制造排放。 按第8节 `inv_engine_emissions` 执行。

- 选定流：排入空气的2.5至10微米颗粒物
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*e_species_j)/Q kg；采用实测事件释放或实际燃料活动乘有证据的原基准物种因子，不得并计，不重复乘组成或氧化率，不把缺失当零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_field`
- 来源：

### 过程：实际前景废水脱氯 (`onsite_dechlorination`)

#### 输入

##### 产品流

###### 交流电 (`onsite_electricity`)

专用前景表计的使用点外购电；共用表计仅分配一次，并从管网运行电卡排除同一kWh。仅扣有证据的同一购电退回，不抵扣无关外送。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：sum_j(w_j*E_stage_j)/Q kWh已归属外部电网购电；仅在能量换算时使用1 kWh=3.6 MJ，不作为新增交换。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 亚硫酸氢钠溶液 (`onsite_bisulfite`)

实际前景还原试剂，明确批次组成及浓度，记录整体供应溶液质量，不把盐与溶液重复计入。

- 选定流：亚硫酸氢钠溶液
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_reagent_j)/Q kg实际独立供应消耗产品，排除设备已含初装试剂；期初+收货-期末-退回或转出，与批次投加或吸附剂替换对账，不设默认剂量、效率或浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：`epa_dechlorination`

###### 五水硫代硫酸钠 (`onsite_thiosulfate`)

实际用于处理整批实测废水的指定水合物；仅中和实验室样品不能证明整股废水已处理。

- 选定流：五水硫代硫酸钠
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_reagent_j)/Q kg实际独立供应消耗产品，排除设备已含初装试剂；期初+收货-期末-退回或转出，与批次投加或吸附剂替换对账，不设默认剂量、效率或浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：`epa_dechlorination`

###### 活性炭 (`onsite_carbon`)

仅实际发生有记录现场炭处理阶段时的炭吸附剂投入；记录牌号、批次及采购质量。

- 选定流：活性炭
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*C_reagent_j)/Q kg实际独立供应消耗产品，排除设备已含初装试剂；期初+收货-期末-退回或转出，与批次投加或吸附剂替换对账，不设默认剂量、效率或浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：`epa_dechlorination`

##### 废物流

###### 进入前景脱氯的含氯饮用水废水 (`onsite_flush_in`)

按事件及批次匹配flush_direct_transfer的内部进口；不得再购一份水产品，不是场外接收流，不从最终出水倒推数量。

- 选定流：进入前景脱氯的含氯饮用水废水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*Vd_j)/Q m3归属内部溶液；两端采用同一事件及权重抵销，原始Vd_j仍为实测批次QA，不重复乘权重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废活性炭 (`onsite_spent_carbon`)

实际废吸附剂载体，保留污染物及水分仅计一次，在前景暂存及签署场外移交称量。接收方再生、焚烧或填埋为背景，不配对未来接收进口。

- 选定流：废活性炭
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*D_c_j)/Q kg本模型原责任批次实际移交毛载体；产生、期初期末及内部处理另作QA，待移交库存不构成已移交流，旧批次外发不计当前Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

##### 基本流

###### 排入地表淡水的氯离子 (`onsite_chloride_freshwater`)

实际其他物种须扩展具体卡。 按第8节 `inv_treated_species` 执行。

- 选定流：排入地表淡水的氯离子
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_species_j*0.001)/Q kg；c为实际离子的mg/L，不是元素N/P/S/Cl当量；有证据将报告基准换算一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的硫酸根离子 (`onsite_sulfate_freshwater`)

实际其他物种须扩展具体卡。 按第8节 `inv_treated_species` 执行。

- 选定流：排入地表淡水的硫酸根离子
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_species_j*0.001)/Q kg；c为实际离子的mg/L，不是元素N/P/S/Cl当量；有证据将报告基准换算一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的亚硫酸根离子 (`onsite_sulfite_freshwater`)

实际其他物种须扩展具体卡。 按第8节 `inv_treated_species` 执行。

- 选定流：排入地表淡水的亚硫酸根离子
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_species_j*0.001)/Q kg；c为实际离子的mg/L，不是元素N/P/S/Cl当量；有证据将报告基准换算一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的钠离子 (`onsite_sodium_freshwater`)

实际其他物种须扩展具体卡。 按第8节 `inv_treated_species` 执行。

- 选定流：排入地表淡水的钠离子
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_species_j*0.001)/Q kg；c为实际离子的mg/L，不是元素N/P/S/Cl当量；有证据将报告基准换算一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的液态水 (`treatment_water_freshwater`)

仅现场最终出水的实际H2O组分，排除溶解和悬浮物种及管网漏水。Vout为溶液毛体积核查量；采用水组分守恒方法，不设默认分数或密度。

- 选定流：排入地表淡水的液态水
- 流属性/单位：体积 / m3
- 数量规则：sum_j(w_j*M_H2O_j/rho_water_j)/Q m3 H2O；M_H2O_j=rho_solution_j*Vout_j*f_H2O_j或直接测得solution_mass_j*f_H2O_j kg。直接测得H2O质量不再乘分数；j仅含实际现场最终出水事件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的次氯酸 (`treatment_hocl_freshwater`)

现场最终出水实际残留游离氯物种，必须有基质有效物种分析、实际接收介质及处理后样品。Cl2当量仍为核查量，不是分子氯释放。

- 选定流：排入地表淡水的次氯酸
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_free_j*0.001*f_HOCl_j*MW_HOCl/MW_Cl2)/Q kg实际物种；不再乘剂量、去除率或去向比例。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

###### 排入地表淡水的次氯酸根离子 (`treatment_ocl_freshwater`)

现场最终出水实际残留游离氯物种，必须有基质有效物种分析、实际接收介质及处理后样品。Cl2当量仍为核查量，不是分子氯释放。

- 选定流：排入地表淡水的次氯酸根离子
- 流属性/单位：质量 / kg
- 数量规则：sum_j(w_j*Vout_j*c_free_j*0.001*f_OCl_j*MW_OCl/MW_Cl2)/Q kg实际物种；不再乘剂量、去除率或去向比例。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | 所有行 | 专用运行投入直接归属；共用运行泵电按实测泵能耗需求，现场作业及资本按c_field、c_assets及c_event_weights固定规则。原责任批次与全部受益方可核对，各数量仅分配归一化一次。不得用收入、客户数量或任意平均代替可得物理因果数据。 | `epa_audit` |
| a_losses | makeup_water; capital_test_water; delivery_service; 所有行 | 所有纳入的合格交接须具有相同水质类别和交接点。交接前漏损及失败活动归属于该管网服务，损失不得形成合格产出。不同水质或服务交接点应另建有计量的模型，不得视为等价共产品。被盗水、库存、弃水和退回药剂包装不享有共产品或经济分配抵扣。 | `epa_audit` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_water | mains_distribution | 进水、参考流和损失 | 仪表、库存、水质与批次台账 | G; R; Q; source_ID; inlet_lot_ID; independent_or_embedded_or_generated; supply_state; rho_s; f_H2O_s; k_s; M0; Min; M1; Mout; residual_M; W0; Win; W1; Wout; Wgenerated; Wconsumed; residual_W; W0_s; Win_s; Wreturn_s; Wgenerated_s; W1_s; Wgross_s; Wfate_s; Wconsumed_s; residual_s; Waccepted_s; Wop_s; Wcapital_a_s; Vaccepted_s; Vop_s; Vcapital_a_s; Q_share_s; reaction_event_ID; measured_reaction_extent; reactant_product_analysis; reaction_model_validation; precursor_supply_ref; source_event_fate_code; already_counted_supply_ref; stock_origin; time_step; mixing_evidence; original_acceptance_ID; return_time; original_service_cohort; original_asset_key; capital_or_recurring; f_a; w_j; causal_job_share; I_network_s; I_test_s; Win_embedded_s; temperature; pressure; meter_ID; calibration_correction; quality_acceptance; sample_time; sample_state; solution_mass; rho_solution; f_H2O; rho_water; H2O_component_mass; H2O_measurement_method; composition_closure; dissolved_constituent_masses; suspended_constituent_masses; volatile_constituent_masses; density_reference; H2O_uncertainty; Ls; Lf; U; unauthorized_volume; flush_volume; first_environment_interface; event_ID; csj; c_free_j; f_HOCl_j; f_OCl_j; pH_j; T_j; speciation_method; parameters; MW_HOCl; MW_OCl; MW_Cl2; soil_sampling_time; actual_dispatch_D_c_j; Q_c; supplier_preaccept_inclusion; asset_personnel_hours; all_beneficiary_workorder_personnel_hours; F_prev_all; u_current; U_remaining_all | 在同步时间步读取经校准入口批次及验收表，并以液位/几何及同状态密度确定各物理池库存。每个供应批次/组成变化及有代表性的同步库存/取出时段，对来源及池内液体取样；按c_h2o测整股质量或rho*体积，以及H2O分数/组分质量。保留来源状态、样品代表性、方法检出能力/不确定性、完整组分闭合及可追溯密度证据，不以纯水密度替代来源产品rho_s。每月及逐事件对账c_water整股质量及H2O台账。依据操作及完整反应物/产物证据记录反应发生/不存在/未知；仅量化有证据的生成/消耗，保留经验证反应程度/模型、不确定性及独立前体来源标签。反应证据缺失是缺口，不是平衡项。按c_origin将实际损失、资本试验、退回及验收追溯来源/服务群ID；使用逐时步来源份额前验证池内混合，并分别保留退回更正及当期实物库存。按c_source_supply归属独立来源体积，匹配供应状态清单，不重复采购内含/生成水。保留饮用水验收检测，在相关漏水/最终出口首次界面、环境反应前采集实际氯/物种。保留原资产/事件权重及签署接收量；按c_event_weights归属一次，排除供应方已含验收前资源。未分配质量/组分平衡及实际毛体积仅作QA，不形成第二份购水。来源、状态、组成、密度、反应或混合未知时阻断完整性。 |m3；摄氏度；kPa；适用水质单位; kg溶液；kg H2O/kg溶液；kg/m3同状态密度；kg H2O | 连续计量；每供应批次/组成变化及反应/退回/损失/试验事件；代表性同步库存/取出样品；每月对账 | 覆盖全部季节的同一报告年度及期初期末库存时点 | 前景内全部实际管网及现场临时水池，入口批次至验收或其他出口；包含实际现场处理池并抵销内部关联 | 每 1 m3 参考流 | 校准仪表/称量/密度方法；基质有效H2O检测及完整组成；来源批次及库存记录；反应发生/程度/模型证据；原验收及签署退回/接收记录；水力/示踪混合验证及不确定性 |
| cp_energy | mains_distribution | electricity | 分表与供应账单 |grid_import,same_purchase_returns,kWh,meter_ID,pump_run,shared_driver,supply_voltage,mix,provider,failed_runs,event_ID,original_asset_key,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all |读取运行边界与设备电表并与账单对账；仅扣除证据明确的同一购电退回，不抵扣无关外送电。按a_direct分配共用量，先求归属总E再E/Q，kWh与MJ按3.6只转换一次。按b_route不得计入运行现场燃烧 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。 | kWh; MJ若换算 | 连续电表，每月账单与对账 | 与Q相同完整报告年 | 覆盖配水泵、储存混合、监测与加氯系统，仅运行阶段 | 每 1 m3 参考流 | 电表校准；供应账单；设备及分配对账 |
| cp_chemical | mains_distribution | hypochlorite | 药剂库存及加药记录 |期初、收货、期末、退回、转出、溶液质量、NaOCl质量分数、密度、温度、容器质量、包装寿命、加药事件,event_ID,original_asset_key,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all |称量收货与库存，或依据批次温度对应密度换算实测体积，关联批次证书与加药及维修后使用记录。 c_chemical；核对耗用溶液C与容器，不重复计有效组分质量 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。 | kg溶液；kg/kg有效组分；kg/m3 | 每次收货、加药、盘点及每月对账 | 与Q相同年度及期初期末库存 | 本管网补充及维修后消毒，直接排放处理另记 | 每 1 m3 参考流 | 衡器校准、安全说明书、批次检测、发票、库存对账及供应方包装边界 |
| cp_assets | field_work | 指定交付资本投入 | 验收及原资产分配账本 | original_asset_key,model,serial,configuration,count,segment_length,diameter,pressure_class,included_components,initial_fill,delivery_gate,acceptance_date,capacity,service_capacity_hours,all_user_whole_life_capacity_hours,engine_duty_hours,instrument_engaged_hours,past_charges,remaining_fraction,life_revision,replacement_key,calibration,event_ID,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all；cp_capital_amendment逐来源B/版本及原N字段 | 在运营方边界计数验收完整指定设备并测量配置特定管段长度，保留图纸、账单、验收及实际纳入。按资产计划及服务记录确定可用能力或使用及有证据预期全寿命driver，采用c_assets对全部受益方及期间分配一次。初装填料作为设备已含库存，不再次采购。不展开供应部件物料清单、工厂、运输或寿终 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。  资本试水按cp_water采集来源批次rho_s、f_H2O_s及H2O事件去向，并按c_source_supply求源状态Vcapital_a_s；混合试水毛体积不是供应量。 终态和来源/分母修订须完成cp_capital_amendment对账。 | item; m为首选交换单位；h及capacity*h仅原driver | 每次交付、替换、退役及变更，年度核对原账本 | 原资产寿命账本及同一Q年服务份额 | 仅直接供应运营前景设备及管段，不含供应方支持资产 | 每 1 m3 参考流 | 验收记录；配置尺寸；寿命及使用依据；校准；全部受益方份额及剩余余额 |
| cp_capital_amendment | field_work | 原资产来源及其一次性资本事件分量；不含例行运行分量 | versioned_original_source_and_cohort_ledger | asset_ID；source_ID及原卡row_ID/原单位；原始验收/事件gate；来源实测总量和新旧版本；计量/校准/状态依据；各原受益期间/驱动单位/u_actual；期间b（适用时）；全部历史及未来受益者；F_prev_all和remaining_driver；已接受g/F_booked；原始已记归属量B；旧归一结果/原N及更正N；背景模型版本及范围；实际最终退役证据；A_new、delta_A、替换及去重链接 | 在原资产/供应方验收gate、实际现场事件及接收方交接gate采集相应原记录；按cp_assets既定称量、配置计数/长度、驱动计量和校准方式核验完整来源量。每次来源、寿命、模型或分母修订及最终退役，逐原队列比较新旧记录，执行capital_source_amendment；全受益份额/逐来源总量/每条更正链接对账，由服务数据责任人复核签认。未发生条件用完整事件清册/零活动证据证明，不将缺失记为零；保留未知身份、计量不确定性及未完成原因。 | 来源原单位；固定驱动单位；原参考分母单位 | 每次验收/事件/修订/最终退役；年度对账 | 原资产全历史及各原服务队列；有证剩余寿命 | 仅既有前景gate和资本来源责任 | 按原参考流一次归一 | 原始计量/校准；签认验收/事件/接收；来源及模型版本；全受益者及修订对账账本 |
| cp_field | field_work | 实际维护、取样、作业服务、燃料及释放 | 任务、采购、表计、样品、合同及废物账本 |job_ID,owner_or_contract,service_gate,included_materials,included_fuel,accepted_work_volume,accepted_surface_area,layer_thickness,tablets,tablet_mass,lot,formulation,opening,receipts,closing,returns,transfers,oil_mass,fuel_mass,fuel_volume,density,temperature,meter_ID,engine_ID,task_hours,payload_mass,distance,empty,idling,failed,shared_driver,all_user_driver,sample_ID,analysis_route,accepted_report,species,medium,native_factor,factor_unit,control,carbon_origin,waste_generation,waste_stock,dispatch,receiver,event_ID,original_asset_key,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all,completed_report,method_completed,sample_result_conformity,repeat_report_ID,abort_attempt_ID,attempt_duration_h,supplier_per_report_rework_inclusion,supplier_work_unit_rework_inclusion,uncovered_actual_resources |计量实际阶段用电及柴油，称量供应和废物，或凭证据换算批次原单位。记录专用共用任务、重载空驶失败行程、现场作业几何及签署验收。核对外包合同纳入，同一任务燃料、材料及服务仅计一次。每项样品分析任务采用现场试剂或验收外部分析服务，真实额外QA分析单独识别。按c_field_emissions实测单一物种释放或采用源特异原单位因子证据。按原批次对账废物产生库存及签署移交，不展开接收方内部 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。 按q_service_attempt核对已完成报告、样品结果、独立重复交付及每报告返工纳入；中止无报告不能按item替代h。记录实际尝试时长和供应负荷已含证据，不覆盖时须明确新增具体服务或实际前景资源后才能完整使用。施工返工只核对真实资源与单位负荷范围，不增加虚拟验收几何。 | kWh; kg为燃料试剂废物首选；m3沟槽作业；m2路面服务；item分析；原因子单位 | 每次任务、采购、取样及移交，连续表计，每月库存归属对账 | 与Q相同完整报告年，暂存废物保留原批次 | 实际运营方控制现场任务及指定边界具体采购服务，排除供应方活动 | 每 1 m3 参考流 | 校准秤表；批次与安全表；签署任务服务验收；样品报告；发动机因子来源；接收联单及库存闭合 |
| cp_waste | mains_distribution | flush_sewer; flush_offsite; flush_direct_transfer; hypochlorite_container; water_freshwater; hocl_freshwater; ocl_freshwater | 前景出口及原批次废物账本 | event_ID,origin_year,Vs,Vo,Vd,Lf,Vj,c_free_j,f_HOCl_j,f_OCl_j,pH_j,T_j,speciation_method,MW_HOCl,MW_OCl,MW_Cl2,kg_carrier,residue_fraction,opening_waste,closing_waste,dispatch,receiver_gate,onsite_or_offsite,first_environment_interface,solution_mass,rho_solution,f_H2O,rho_water,H2O_component_mass,H2O_measurement_method,composition_closure,dissolved_constituent_masses,suspended_constituent_masses,volatile_constituent_masses,sample_state,density_reference,H2O_uncertainty,original_asset_key,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all; custody_lot_id; custody_pool_id; O; G; T_in; C; H; T_out; L; epsilon; movement_endpoints; loss_event_ID; loss_time_location; loss_evidence_method; first_medium; release_row_id; propagated_uncertainty | 在实际前景交接计量互斥废水去向；称量含残留完整容器并按原批次对账产生、库存及移交。仅现场转移成对内部匹配，场外移交止于此前景记录且不假定处理。实际管网环境释放按c_h2o及c_speciation在真实界面采集水组成、物种及同状态密度。移交载体所含物不再记另一份废物。退回可复用容器与实际废物产生分开记录 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。 依 custody_mass_balance 和 custody_loss_link 保留校准事件/库存测量、匹配组成/密度及原批次；在实际位置调查每笔损失或残差，关联排放行及配对移动，每月及期末对账。仅凭有日期的检查/测量覆盖记录未发生；未知不等于零。 | m3废溶液毛体积；kg容器毛质量；mg/L以Cl2计；kg实际物种；kg H2O；kg/m3密度 | 每次冲洗、漏水、容器及交接事件，每月库存核对; 每次损失事件及库存移动 | Q年产生废物，后续暂存移交仍保留原批次 | 管网出口至签署下水道或场外接收边界，或实际首次环境界面，现场处理另列 | 每 1 m3 参考流 | 校准表计衡器；接收验收；库存产生审计；代表性认可水及物种方法；基质有效水分数及密度证据 |
| cp_onsite | onsite_dechlorination | 全部实际现场处理行 | 批次、表计、药剂库存、最终样品及残留账本 |batch_ID,event_ID,origin_cohort,onsite_boundary,Vd,Vout,opening_stock,closing_stock,retained_water,solids,reagent_ID,formulation,lot,concentration,opening,receipts,closing,returns,dose,adsorbent_mass,kWh,meter_ID,same_purchase_returns,post_treatment_sample,species,c_species,c_free,pH,T,f_HOCl,f_OCl,MW_HOCl,MW_OCl,MW_Cl2,speciation_method,solution_mass,rho_solution,f_H2O,rho_water,H2O_component_mass,H2O_measurement_method,composition_closure,dissolved_constituent_masses,suspended_constituent_masses,volatile_constituent_masses,sample_state,density_reference,H2O_uncertainty,residue_mass,receiver_gate,uncertainty,original_asset_key,original_service_cohort,capital_or_recurring,causal_job_share,f_a,w_j,Vop_s,Vcapital_a_s,actual_dispatch_D_c_j,Q_c,supplier_preaccept_inclusion,Wfate_embedded_s,embedded_supply_ID,embedded_water_origin,embedded_acceptance_share,already_counted_supply_ref,I_network_s,I_test_s,Win_embedded_s,Vaccepted_s,Waccepted_embedded_s,independent_or_embedded,asset_personnel_hours,all_beneficiary_workorder_personnel_hours,F_prev_all,u_current,U_remaining_all |根据日志、合同及明确批次边界确认真实现场运行。计量进出水及电，称量或对账实际试剂配方库存，记录准确剂量而不套配方。实际处理后首次环境界面采样，执行c_h2o及c_speciation并按物种基准记录实际离子。在不确定性内闭合水及相关质量、元素和物种平衡。称量实际残留物并止于明确前景移交；排除全部场外接收及后续处理内部 同时采集原资产、原服务批次、一次性资本或经常性事件分类及实际交接量；按c_event_weights将验收后资本事件资源及水药释放归原资产份额一次。物理年度平衡及未移交库存另作QA；旧批次不压当前Q；供应方验收前已含资源排除，已归属数量不再乘权重。 | m3溶液毛体积QA；kWh电；kg整体试剂载体；kg实际H2O或物种；kg/m3密度；mg/L实际物种或已声明分析当量 | 每个真实批次及投加，连续水电表，释放前代表性处理后采样，每月库存闭合 | 实际现场事件归同一原服务年Q及废物批次 | 仅实际现场处理进口至现场最终环境释放或废物移交 | 每 1 m3 参考流 | 运行合同范围；校准表计衡器；批次证书；认可物种及基质有效水分数方法；密度来源状态；库存平衡及释放接收记录 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_water | makeup_water; capital_test_water; delivery_service; 所有行 | Q=G-R采用已验收整股液体毛交接G及按原验收基准计的实际退回R；后续退回仅更正原服务群一次，不扣无关当期Q。实物退回仅一次进入实际退回期间库存账。逐物理池及同步时段按整股kg闭合：M0 + sum(Min) = M1 + sum(Mout) + residual_M。纳入该池实际边界水、设备随带液体、试剂、退回、气/固/液出口及库存，抵销内部转移，不虚构交换；化学反应不形成总质量来源。另按H2O kg闭合：W0 + sum(Win) + Wgenerated = W1 + sum(Wout) + Wconsumed + residual_W。Win/Wout为相同流中实际H2O，按c_h2o测量并按c_origin附来源标签。仅实际且有证据的反应可列Wgenerated/Wconsumed，须来自实测反应程度和完整反应物/产物分析，或经验证反应平衡，并记录不确定性；不得用其填补未知残差。表计、Q、废物载体及事件QA保留实际整股体积，但不得将内含H2O等效体积加到溶液体积，也不得假定入口、混合液及出口体积可加，即使温压一致。将两类残差与传播的测量不确定性比较并调查，不截零或转作损失。独立服务供水Vop_s/Vcapital_a_s由c_source_supply已分类来源组分去向计算，不由入口毛体积减Q推定。事件权重一次、仅除原服务群Q一次；原实物闭合不作分配。 | G; R; Q; M0; Min; M1; Mout; residual_M; W0; Win; W1; Wout; Wgenerated; Wconsumed; residual_W; source_event_ledger; reaction_evidence; original_service_cohort | Q；未分配整股质量及H2O QA；归属供水B_s/Q | `epa_audit` |
| c_chemical | hypochlorite; 所有独立供应的试剂 | 原始配方产品实耗C=期初+收货-期末-退回转出，按批次事件对账。仅独立供应部分C_separate_j进入采购卡；设备已含初装填料单独作为来源库存备忘参与全部实耗及释放质量QA，不再作为第二次试剂采购。量体积时用批次温度rho换整份质量，活性质量=C*x仅QA，不同时采购活性及溶液。归属量=sum_j(w_j*C_separate_j)，只除Q一次。 | opening; receipts; closing; returns; transfers; formulation; rho; temperature; x; initial_fill_origin; C_separate_j; w_j; Q | 独立供应配方kg/Q；完整初装及实耗质量QA | |
| c_origin | makeup_water; capital_test_water; delivery_service | 来源s须细分至入口批次/状态，区分独立供水、设备/试剂内含水及实际反应生成水，并记录技术、地理、水质及适用的already_counted_supply_ref。每个实际水池逐源追踪H2O kg W：W0_s + Win_s + Wreturn_s + Wgenerated_s = W1_s + Wgross_s + Wfate_s + Wconsumed_s + residual_s。Wgross_s为已验收外向毛H2O；Wfate_s含分别实测的未验收出口、退供及其他外部转移，采用互斥事件/去向代码。Win_s不含另记的Wreturn_s。管网进水、独立试水及内含组分互斥：已被表计包含的组分质量不得再次加入，内部取用不产生新来源。使用独立分区、示踪或实测来源追踪；仅在水力/周转混合已获验证时，按逐时步来源H2O库存份额同步归属取出及反应消耗，并逐步更新来源库存，不用全年入口比例。生成H2O使用新的反应来源标签，关联实际已计前体供应，不得将同一生成质量同时保留在原水标签下。被消耗的来源H2O仍归其实际运行/资本事件，不得删除。退回以原标签恢复实际当期库存，并仅一次修订原Waccepted_s；库存保留原供应负担，不作新采购。Waccepted_s为原已验收毛H2O减去关联退回。如报告Q_share_s=Q*Waccepted_s/sum_s(Waccepted_s)，它仅为整股服务Q的元数据分配，不是实测源体积或商品生产量。来源、反应归属未知、所需分母非正或混合无效时阻断完整来源配套。 | W0_s; Win_s; Wreturn_s; Wgenerated_s; W1_s; Wgross_s; Wfate_s; Wconsumed_s; residual_s; Waccepted_s; Q_share_s; source_ID; lot_state; time_step; mixing_evidence; reaction_evidence; already_counted_supply_ref; Q | 来源H2O kg台账；原验收更正；可选服务份额元数据 | |
| c_source_supply | makeup_water; capital_test_water; delivery_service | 每个独立供水批次s须在实际供应状态测整股液体密度rho_s（kg/m3）及H2O质量分数f_H2O_s；k_s=rho_s*f_H2O_s为每m3该供应产品所含kg H2O，须有依据且为正。固定归属：Vaccepted_s=Waccepted_s/k_s；Vop_s=Wop_s/k_s；Vcapital_a_s=Wcapital_a_s/k_s。Wop_s和Wcapital_a_s为仅一次归于实际运行未验收去向或指定验收后资本试水未验收去向的独立来源H2O，包含其有证据的化学消耗；损失、拒收、未授权转移、废物及反应须分代码。回收可再用水保留来源库存或作内部移动，不再次消耗。退供及其他外部商品转移保留各自责任模型，不转为运行损失。分配前以H2O kg及源体积等效量核对全部来源收货、库存、退回、验收、未验收及反应类别；该比值是PCR固定供应负担驱动，不表示非水组分实物必然随H2O同行。整股/组分质量QA另行保留。B_s=Vop_s+sum_a(f_a*Vcapital_a_s)仅由两张水卡来源匹配后计一次并除Q，已加权量不再加权。独立商品生产新增sum_s(Vaccepted_s/Q*匹配独立供应清单)，保留各批次技术、水质、地理、状态及边界。内含/生成来源保留Waccepted_s及未验收W记录，但不形成独立V采购或制水关联，仅绑定已计设备/试剂供应及其实际归属。不得强制sum(Vaccepted_s)=Q、以纯水密度替代k_s或用Q_share_s计算供水生产。k_s未知/为零或来源闭合未解决时阻止数量，不采用默认值。 | rho_s; f_H2O_s; k_s; Waccepted_s; Wop_s; Wcapital_a_s; Vaccepted_s; Vop_s; Vcapital_a_s; f_a; Q; already_counted_supply_ref | 源状态独立供水m3/Q；独立保留内含来源责任 | |
| c_speciation | hocl_freshwater; ocl_freshwater; hocl_soil; ocl_soil; treatment_hocl_freshwater; treatment_ocl_freshwater | 对每项实际释放水流j实测游离有效氯c_free_j（以Cl2计）、pH与温度，并采用已验证实测物种分配，或经该水基质验证且带来源、参数、适用范围与不确定度的物种模型确定f_HOCl与f_OCl。须证明所用物种集合完整及份额合计为1；结合氯、分子氯或其他含氯物种实际存在时须补独立卡并扩展分析，不得强行归入两物种。物种s质量=sum(w_j*Vj*c_free_j*0.001*f_s_j*MW_s/MW_Cl2)/Q kg。MW来自可追溯实验室或标准证据，不能将以Cl2计的当量误称分子氯；摩尔质量比只乘一次，不再乘剂量、去向比例或处理效率。不假设pKa、默认pH、衰减或去向，未知物种分配阻断完整性。 |Vj; c_free_j; pH_j; T_j; f_s_j; MW_s; MW_Cl2; Q; validated_model; event_ID; original_asset_key; original_service_cohort; w_j | kg各实际物种/m3参考服务 |  |
| c_h2o | makeup_water; capital_test_water; delivery_service; water_soil; water_freshwater; treatment_water_freshwater | Q、Ls、Lf和Vout_j保留实际整股溶液体积测量作功能/事件QA，不是可加的管网来源闭合量或基本H2O量。以下组分测量亦适用于c_water/c_origin的入口、库存、退回及去向流；c_source_supply使用入口产品rho_s*f_H2O_s，不使用纯水密度。每个同状态同事件先测solution_mass；仅有溶液体积Vsolution时用实测rho_solution求solution_mass=rho_solution*Vsolution。用对基质有效的水专属性实验室方法测f_H2O（kg H2O/kg溶液）；仅在全部溶解、悬浮及挥发非水组分已独立识别、量化并在不确定性内闭合时，才可用完整组成差额求水分数。M_H2O=solution_mass*f_H2O kg；已直接测得H2O组分质量则不再乘密度或水分数。m3水量=M_H2O/rho_water，rho_water为与已声明水组分温压一致且可追溯的水密度（kg/m3），不是溶液密度；密度来源、方法、状态、适用域和不确定性均须记录，不使用默认rho或f_H2O=1。另报HOCl、OCl及其他离子/固体的质量不得含于M_H2O。真实废物流仍按整体载体计量，其所含物种不再重复计为另一份废物；最终实际释放另按物种卡。分配归属一次、除Q一次，不重复水分数或去向比例。组成或密度未知阻断H2O量和完整性，不能填零。 |Vsolution; solution_mass; rho_solution; f_H2O; H2O_component_mass; rho_water; sample_state; H2O_measurement_method; composition_closure; density_reference; H2O_uncertainty; Q; event_ID; original_asset_key; original_service_cohort; w_j | kg H2O及同状态m3 H2O/Q；独立溶液体积QA账 |
| c_assets | field_work | 每个原指定固定管网资产a的f_a=本服务可用能力小时/有证据的全部使用者全寿命能力小时；运营车辆按本服务发动机任务小时/全部使用者全寿命同基准小时，包含空驶、怠速及失败任务；便携仪器按本服务接合作业小时/全部使用者全寿命同基准小时。交付验收件数或配置特定管段长度仅乘f_a一次，再除Q一次。保留全部期间及受益方、既往计入份额及剩余服务；累计份额<=1，寿命修订仅作用于剩余份额和使用并在退役核销，不重启已全额计入资产。新替换资本有独立键；实际耗材替换作为当前实测投入，不得同时成为另一完整资本资产及修理投入。设备制造、交付运输、场外寿终及支持资产为背景，不使用嵌套资本系数。 寿命修订时历史份额冻结：f_new,current=(1-F_prev_all)*u_current/U_remaining_all，F_prev_all为全部期间受益方已计原资产份额，U_remaining_all包含当前期间并采用原设备固定driver。剩余分母未知或非正阻断完整性，退役核销剩余且不重启完整设备。 终态结算、来源数量/模型版本更正及原分母更正须执行capital_source_amendment；本行delta份额乘来源量仅在该规则规定的同源量/同模型条件下成立。 | original_asset_key; configuration; count_or_length; capacity_hours; duty_hours; engaged_hours; all_user_whole_life_driver; past_charges; remaining_fraction; Q; F_prev_all; u_current; U_remaining_all | 已归属指定交付设备件数或管段长度/Q |  |
| capital_source_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 在本入口声明的适用范围内，按顺序完整执行规则组：capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_amendment; cp_assets; capital_source_amendment_history; capital_source_amendment_final_shares; capital_source_amendment_source_revision; capital_source_amendment_normalization; capital_source_amendment_scope | 原来源单位的归属总量；原队列N_c仅归一一次 |  |
| c_field | field_work | 专用实际任务投入直接归属；共用车辆燃料按实际占用载荷质量距离分配，空驶、怠速及失败返程归原任务；共用电动工具采用实测能量，共用取样试剂或实验室服务按相同方法实际完成分析任务。已归本服务的数量不再乘份额。实际现场作业合同止于实测完工边界，同一工作另卡排除合同已含物料及燃料。失败及重复工作保留分子。先求物理总量，共用分配一次、除Q一次。 | job_ID; gate; raw_totals; shared_driver; all_user_driver; contract_inclusions; Q | 已归属前景作业投入/Q | |
| c_waste | flush_sewer; flush_offsite; hypochlorite_container; field_work; onsite_dechlorination |依 custody_mass_balance 和 custody_loss_link 核对原批次未分配产生量、库存、交接、其他移动、已证损失及未解释残差；产生及待交接库存仍仅作核查。Vs入下水道、Vo场外直接处理、Vd实际现场处理及实际漏水去向互斥。实际现场进口Vd匹配内部输出并抵销一次，不列场外假定处理清单。输出废物载体保留实测毛质量或体积及组成，不把所含物种重复记废物。游离有效氯当量=sum(Vj*c_free_j*0.001)/Q kg以Cl2计仅作QA；最终单一物种采用经验证物种分析。已明确去向体积不再乘去向份额，以Cl2计浓度不再乘有效分数。保留原产生与返流批次，未知去向是缺口，移交不证明已处理。 外部移交卡仅取本模型原责任批次实际移交D_c_j，并按事件权重一次归属；产生及未移交库存另作QA。历史批次外发回归原Q_c，不得全部压当前Q；无实际交接不能以产生量虚称移交。 |dispatch; closing; opening; Vs; Vo; Vd; Vout; Vj; c_free_j; Q; event_ID; original_asset_key; original_service_cohort; w_j | 前景废物移交、内部现场关联及实际释放/Q | |
| custody_mass_balance | 原批次废物保管及实际损失 | O + G + T_in = C + H + T_out + L + epsilon，按同一原始产生批次、明确保管池和一致期间的未分配完整载体 kg 核算。O/C 为期初/期末实物库存；G 为首次进入保管的产生量，仅计一次；H 为依现有 gate 实际接受的外部交接毛量；T_in/T_out 为其他有证据的实物移动（包括退回或重分类），必须有起止位置及配对台账，不得同时计入 H 或新的 G。汇总保管池时内部移动抵消。实物退回保留原批次，记入 T_in 并与原始交接毛量 H 配对；此实物台账保留历史 H。后续验收/归属更正另账记录，不得在本式同时冲减 H。对实际未发生的错误交接直接更正，不得虚构退回。没有实际跨保管池移动的重分类仅改变状态标签，不得记为 T_in/T_out。L 为进入该保管池后有证据的实物损失，不得作为配平项；epsilon 为带符号的未解释计量残差。计算 epsilon = O + G + T_in - C - H - T_out - L，按传播后的计量不确定性调查，保留证据及未解决余差。未知量不得补零或转为 L。每次事件及盘点称量实际完整载体，或采用校准体积乘以状态/温度/组成匹配的密度；区分完整载体、干物质和所含物种质量。水分损失属于需证明的实物移动，不得以无依据的基准换算替代。只有具备检查/测量覆盖及不确定性证据时，才能记录零损失。此实物核查式不得分配或归一化。 保留每张清单行声明的属性/单位：体积型交接行使用实际交接体积；以匹配密度换算的 kg 仅用于此实物核查，不得另造一笔输出。例：期初/期末/其他移动均为零且无未解释残差时，G=10 kg、H=9 kg、L=1 kg；输出 H 仍为 9 kg。示例值不是默认值。 | O; G; T_in; C; H; T_out; L; epsilon; cp_waste | 原始完整载体 kg 闭合；交接仅用实际 H |  |
| custody_loss_link | 原批次废物保管及实际损失 | 将保管入库、移动及损失事件 ID 关联至 c_water 及明确的网络/保管池起止接口。入保管前的网络泄漏与后续储存损失是不同事件；同一事件不得在两池重复入账。保持 c_h2o 和 c_speciation：损失溶液/载体总 kg 不自动等于 kg H2O 或污染物 kg；须采用匹配实测组成和首次接收介质，每笔实际排放仅计一次。场内处理的内部转移必须有配对起止接口并仅抵消一次；不得假定场外排放。依 c_event_weights 和原始 Q_c 仅归属一次。缺少物种/介质行或损失身份未明时，完成前必须明确匹配流卡并审查身份；未知残差不得作为排放。 | custody_mass_balance; cp_waste | 实际排放事件按原归属及分母仅计一次 |  |
| c_onsite | onsite_dechlorination | 对每个真实前景批次计量实收Vd、投加或吸附剂消耗、外购电、最终Vout及保留水、固体和库存。按c_water闭合整股质量及H2O组分平衡，仅纳入有证据的实际反应生成/消耗，并依据实际分析及不确定性闭合相关元素或物种平衡，不假定去除率、化学计量剂量、纯水份额或进出水相等。在处理后首次环境界面采集最终排放，不采用整座场外接收厂浓度或资源。实际现场残留物或未列产品及物种须有具体数量身份卡；未发生须有记录，未知不是零。 |batch_ID; Vd; Vout; stock; retained_water; reagent; energy; post_treatment_species; uncertainty; Q; event_ID; original_asset_key; original_service_cohort; w_j | 实际现场处理投入、H2O或物种释放及残留物移交/Q | |
| c_field_emissions | field_work | 每个实际前景发动机物种采用综合实测释放或燃料活动乘源特异原基准物种因子，记录发动机、燃料、控制、因子单位、参考状态及不确定性。不得并计，因子已含组成、氧化或分子比时不再乘。年度燃料碳平衡仅为QA，不是新增释放。NO与NO2及不重叠粒径保持分开。实际生物燃料碳来源须明确物种分配并新增合适生物源行，不按化石或零处理；不预列供应方排放。 | event_ID; actual_fuel; species; medium; measured_release; native_factor; factor_unit; engine; controls; carbon_origin; Q | kg实际前景物种/Q | |
| c_event_weights | 所有行 | 验收后一次性前景安装、投运或退役事件j的实际资源、试验水、药剂、电、作业、废物交接及真实释放关联原受益资产a，按原服务期间资本账本仅用w_j=f_a一次。实际经常运行维护采用w_j=实测因果服务份额，专用时为1。先按现场记录或独立计量将可直接归属部分细分到原资产，已直接归属部分不再乘共享份额；仍不可分的同来源资本工单按各原资产实测人员小时/该工单全部受益资产人员小时，仅拆分一次，再乘各自f_a。人员小时分母未知或非正阻断完整性，不使用嵌套供应方系数。已归属物理量不再乘第二次w_j。年度物理平衡不加权作QA，另求归属事件总量后仅除模型原责任批次Q一次。供应方验收前已含现场资源排除，运营方验收后实际资源保留。 资本分量的最终结算和来源/原分母修订遵循capital_source_amendment，例行分量不受寿命分配。 | event_ID; original_asset_key; original_service_cohort; capital_or_recurring; actual_event_total; causal_job_share; f_a; w_j; Q | 已归属前景资源、水或物种及交接量/原责任批次Q |  |
| capital_source_amendment_history | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则补全既有冻结历史/剩余寿命政策，不要求每次寿命修订都追溯更换历史寿命份额。保留原资产key、每项原单位来源s及版本、确切产品/事件gate、全部受益者—期间队列c、不可覆盖的实测原始记录和已接受记账。实际最终退役前，寿命/使用修订冻结历史份额，仅按既有有据剩余驱动分配剩余份额；要求0<=F_prev_all<=1，有据正的剩余分母包含当前期间及全部未来受益者。晚到证据的首次资本来源使用各历史已接受份额及同一剩余账本，不全部归事件年。保留各资产原有驱动：固定网络资产为可用容量小时，运营车辆为含空驶/怠速/失败任务的发动机工作小时，便携仪表为实际参与使用小时；不同驱动单位不得混入同一寿命分母。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_final_shares | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。实际最终退役时，w_c=u_actual_c/U_final，U_final=sum_all_original_beneficiaries(u_actual)>0；最终全部份额和为一，包含原驱动已规定的非研究、失败和待机责任。转交继续使用不是最终退役。寿命活动为零或未知、历史份额无依据或缺少原队列时，最终分配未完成；保留实物总量和缺口，不等分、不虚构使用。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_source_revision | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。退役前来源更正使用各原队列已接受份额g_c，最终退役时使用g_c=w_c。Q_s,new为原卡单位下有据的寿命分配前完整来源实物量，不是未摊余额或已加权量。B_s,c为该来源/队列实际已记账的归属原始量，附当时数量/模型版本和原归一结果。计算A_s,c,new=Q_s,new*g_c，delta_A_s,c=A_s,c,new-B_s,c。首次观测的来源在未记账处B=0；对既有来源更正须替换同一来源ID，不增加采购或处置事件。仅当来源量及链接模型版本不变且B=F_booked*Q_s时，才可使用(g_new-F_booked)*Q_s简式；否则必须采用A_new-B。实物毛收货、库存、转移、交接另行对账；有正负号的更正是模型修订，绝不是负实物交换或替代信用。链接供应/处理模型发生变化时，即使delta_A=0也须替换受影响原队列清单/结果，移除旧模型贡献并保留新旧版本及范围。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_normalization | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。完整修订归属量仅除以该原队列当前已核实参考分母N_c一次（本地分别记为Q、D或A）。若N_c本身更正，替换完整旧归一结果，不将delta_A/new_N加到按old_N计算的旧结果。零产出事件仍归既定因果父队列；父队列无正N_c时保留归属实物总量及未完成的归一结果，不转移给无关正产出期间。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |
| capital_source_amendment_scope | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 本条属于 capital_source_amendment。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对既有gate内各实际资本来源执行本规则，包括适用时独立初装、验收后资本现场事件和实际退役载体；不创建新来源、不扩大背景边界、不重复已含供应阶段、不对例行运行乘寿命份额。这些是明确的候选核算规则，不声称所引分类或技术来源规定了这些数值方法。 | cp_capital_amendment; cp_assets | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| q_scope | 所有行 | 保留管网、饮用水类别、状态、边界、年度及Q。每行要求一个指定可计量对象、属性及单位，不要求均质组成。实际运行路线不符、未列投入或接收边界、组成或H2O物种分析不确定性均须明确；缺失身份数量从不视零。 | 声明边界配置登记；缺口行动及不确定性记录 |
| q_gates | 所有外购投入和废物输出 | 固定设备、配方产品及指定服务实际供应、验收或移交纳入。设备已含初装填料、供应部件、交付、安装或服务燃料物料能源不再另行采购；实际运行补充和未含作业另列。后续背景数据集必须严格匹配这些前景边界，关联时排除重叠供应及处理阶段。前景正文及机器guidance不保留隐性供应制造或接收内部。 | 供应合同纳入矩阵；初装填料库存；阶段任务对账 |
| q_occurrence | 所有条件性清单行 | 依据实际资产配置、采购、作业、样品、处理及接收记录，对各卡判定发生、未发生或未知。条件清单不是默认配方或物料清单。实际新增设备配置、燃料、试剂、废物或物种须在完整前景覆盖前有明确单属性单位交换，不预列供应方假定排放。未知数据须明确纠正采集、不确定性并阻断完整声明。 | 逐行适用性决定；未发生证据；纠正采集登记 |
| q_identity | 参考流及所有选定流 | 仅使用点交流电身份复用历史官方直接证据，通用属性及单位组支持另经核实。其他候选身份未绑定，不虚构新UUID。绑定前核对直接记录、状态、名称、物态、属性、单位、介质及哈希证据。保留交流电官方中文名，双语语义对齐不同于科学批准及正式翻译审查。 | 历史直接响应完整性凭据；逐行未绑定登记；双语比较 |
| q_service_attempt | sample_analysis; trench_work; road_reinstatement; field_work | 检测item为完成指定方法且独立交付报告的服务，不等于水样合格；结果不合格但方法和报告完整仍可计item。重复报告仅在独立交付且匹配供应数据集每报告负荷未已含该返工时另计。无完成报告的中止尝试不能凭空算1 item或零负荷：须证明实际资源已纳入供应方每报告背景，否则在完整使用前新增指定方法、起止边界、记录尝试时长h及验收条件的具体中止DPD分析尝试服务，或对实际由前景执行的尝试记录已有具体资源投入。指定外包沟槽m3及路面m2服务仅计实际验收几何量，供应单位负荷已含失败返工时不得加虚拟体积面积；未覆盖实际资源须在准确供应边界补入明确服务或真实前景资源，不能漏计。 | 完成报告及样品结果状态；重复中止任务；供应单位负荷范围与返工纳入证明；实际时长或资源；施工验收几何及返工记录 |
| inv_chlorine_species | hocl_freshwater; ocl_freshwater; hocl_soil; ocl_soil | mg/L以Cl2计的游离有效氯仅为分析当量，不能作为Cl2分子排放。须按c_speciation确定本物种实际质量；其他物种未完整识别时不得声称排放完整。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_background | asset_iron_main; asset_pe_main; asset_pump; asset_valve; asset_tank; asset_meter; asset_booster; asset_photometer; asset_van; asset_dechlorinator | 供应方制造、交付运输及场外寿终内部为背景，不再另记其组成材料、所含部件或初装填料。 | 所列各清单行既有的采集协议和证据。 |
| inv_engine_emissions | field_co2_fossil_air; field_co_air; field_ch4_air; field_n2o_air; field_no_air; field_no2_air; field_so2_air; field_pm25_air; field_pm_coarse_air | 首次空气界面的条件性实际前景发动机或车辆释放，实测或采用源特异原基准因子及实际燃料控制配置计算。 | 所列各清单行既有的采集协议和证据。 |
| inv_treated_species | onsite_chloride_freshwater; onsite_sulfate_freshwater; onsite_sulfite_freshwater; onsite_sodium_freshwater | 实际现场处理后首次淡水界面的单一最终出水物种。须直接分析物种质量或经验证物种换算，不自动按化学计量将试剂转成排放。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_custody_balance | 原批次废物保管及实际损失 | 按 custody_mass_balance 和 custody_loss_link 核验带日期的原批次库存、实际交接凭证、配对移动、校准损失证据及传播后的不确定性。区分已证 L 与未解释 epsilon；数量、身份或去向未解决时不得无保留宣称完成。验证其他项为零时 G=10、H=9、L=1 闭合且 H 仍为 9，每笔排放仅在首次介质计一次，分配/归一化不得改变原始实物闭合。 |  |
| v_balance | makeup_water; capital_test_water; delivery_service; 所有行 | Q>0且同服务群总量有限；按c_water/c_origin分别核对整股质量及H2O来源/库存/退回/去向平衡，仅纳入有证据的反应项。核实源状态k_s及c_source_supply归属，不假定体积可加、不将混合液体体积与组分体积相减、不强制sum(Vaccepted_s)=Q，也不把未解释残差转为损失。保留动态来源匹配、实际H2O组分与整体溶液区分、氯当量与物种区分。每个实际首次环境界面及前景废物移交仅一次，不列假定接收方释放或重复内部产出。 | `epa_audit` |
| v_exchanges | 所有行 | 检查一个主属性首选单位、实际指定对象及边界、可执行数量协议，以及分配和Q归一化仅一次。完整设备或具体服务不因含不同材料而无效，未指定集合或选择器仍无效。移除供应及场外处理内部，保留实际现场作业处理，并核对已含供应阶段无重复。 | |
| validate_capital_amendment | 原资产来源及其一次性资本事件分量；不含例行运行分量 | 验证capital_source_amendment中原驱动、freeze/remaining账本、实际最终w、逐来源完整Q_s/B/版本、原N及整个归一结果替换。重算同量份额更正、来源量变化而份额不变、模型变而物理delta=0、原N变化及零产出反例；核对资本/例行分量互斥及全部受益者。缺乏可追溯旧记账或正分母时保留未完成，不允许处置年兜底、负实物流、重复归一或第二次份额。 |  |
| v_projection | 规范双语正文及投影 | 行顺序、方向类型、属性单位、身份、公式、限定条件、否定、协议规则标识及受支持强制表须在双语及guidance一致。正常再生成structured；schema、指纹及candidate/aligned标记不构成科学审查或发布批准。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景饮用水管网配水服务数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同水质路线年度及验收边界、来源匹配水商品配套和声明前景范围 |
| excluded_use | 单独完整交付水足迹、初次制水、非饮用或热水、非管网路线、未声明供应制造或场外处理内部 |
| required_metadata | 实际整股Q；来源H2O kg、rho_s、f_H2O_s、k_s、Vaccepted_s、Vop_s、Vcapital_a_s；Q_share_s仅作明确标记的可选分配元数据；整股质量/H2O闭合、反应证据及来源库存返流、原资产及事件权重、具体设备服务边界与首选属性单位、实际废物移交、实际现场处理及首环境介质 |
| required_quality_disclosure | 候选身份及数量缺口、待移交库存、组成物种及密度不确定性、排除背景阶段；不是独立全交付水足迹或科学发布批准 |
| update_trigger | 管网设备、合同边界、水源、实际运行路线、质量标准、损失库存返流、现场处理、资产寿命或废物接收边界改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un_cpc | official_guidance | UNSD CPC Version 3.0 subclass 69210, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/69210 | 自营管网配水与水表维护范围及明确排除项，不提供LCA数值因子 |
| epa_audit | official_guidance | US EPA, Water Audits and Water Loss Control For Public Water Systems, EPA 816-F-13-002 (2013), https://www.epa.gov/sites/default/files/2015-04/documents/epa816f13002.pdf | 实际与表观损失区分及水审计逻辑；服务商品分账和批次规则为本PCR明确方法，不冒称EPA强制规定 |
| epa_quality | official_guidance | US EPA, Distribution System Water Quality: Maintaining a Disinfectant Residual, EPA 815-F-21-003 (2021), https://www.epa.gov/system/files/documents/2021-12/ds-toolbox-fact-sheets_disinfectant_residual.pdf | 配水储存、冲洗、补充消毒及设施维护的相关性；不引入案例剂量、限值或默认值 |
| epa_dechlorination | official_guidance | US EPA, Wastewater Technology Fact Sheet Dechlorination, EPA 832-F-00-022 (2000), https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1001L40.TXT | 仅用官方文本呈现筛查具体脱氯药剂、实际物种及监测必要性；不采用示例剂量、浓度、效率或法规限值，PCR归属及采集规则为明确方法设计 |
| pipe_materials | extension_guidance | McWane Ductile, Cement-Mortar Lining, https://www.mcwaneductile.com/products/linings/cement-lining/ | 历史厂家文本仅支持内衬球墨铸铁饮用水管产品规格相关性，不要求按组分拆分，不给通用组成、寿命或因子。前景范围及设备计量是本PCR方法选择。 |
