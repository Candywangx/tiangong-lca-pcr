---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 由缓蚀超浓缩液物理混配的水性乙二醇防冻液

## 1. 范围与适用性

本方法限定于购入缓蚀超浓缩液、另购乙二醇及去离子水，经现场物理混配并稀释、质检与发运，形成实际交付的水性 Si-OAT 乙二醇防冻液。BASF 的制造原件给出一条真实路线；不以分类标签代替配方或扩大成全部润滑制剂。参考门为制造场址对外实际净交付，不是新放行质量。

排除石油润滑油及基础油/酯本体、独立添加剂、液压液、丙二醇/甘油配方、航空除冰液、废液再生和现场缓蚀剂合成/中和。浓缩中间体与最终水溶液必须分开记账，不能作为同一参考状态。每种最终配方/浓度、场址和路线建立独立同批群。工艺改变引入真实反应时重新审查，不套用此物理混配方法。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.lubricating-preparations-and-preparations-of-a-kind-used-for-the-oil-or-grease-treatmen-377cfc53 |
| classification_refs | CPC 3.0 35430; narrower; 仅为水性乙二醇防冻制剂子集，不建立映射接受 |
| covered_products | 物理混配并稀释的 Si-OAT 乙二醇水性防冻液，声明具体配方、浓度与交付状态 |
| excluded_products | 石油润滑油/基础油/酯；独立添加剂；液压液；丙二醇/甘油产品；航空除冰液；废液再生；现场反应路线 |
| representative_product | G140K SC 与乙二醇混配成兼容 G40 浓缩中间体后，再以去离子水稀释成声明浓度的水性防冻液 |
| production_route | 来料接收储存→计量超浓缩液及乙二醇→充分混配→加水稀释→检验/返工→包装或散装储运→净交付 |
| market_state | 最终水性液体，散装或声明的 HDPE 桶装；不是干物/纯活性物/待客户稀释浓缩液 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明配方的水性乙二醇防冻制剂在工厂交付门提供的产品质量 |
| How much | 1 kg 净交付最终水性液体，不含包装；Q 为正的实际交付同批群净质量 |
| How well | 满足实际批次声明的浓度、水质、缓蚀及验收规格；不由通用 UUID 推定功效 |
| How long or cycle | 一个明确的实际期间及同批群；不定义服役年限、加注量、维护量、次数或热量服务 |
| reference_flow_link | delivered_antifreeze |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 防冻液 `f4d2de8d-01df-42a2-aa65-7f7215606250` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 最终产品及供应商配方/修订版; 超浓缩液、浓缩中间体与最终水溶液的不同身份; 乙二醇供货纯度/水分/杂质及环氧乙烷水合路线; 整份超浓缩液组成与载体水及供应地区; 最终浓度数值及质量/体积基准与配液定义; 实测密度、温度与质量换算记录; 水质、缓蚀体系及批次验收规格/方法; 实际净交付门与唯一批次/退回身份; 原料、在制品、成品期初末质量及结转负荷; 包括失败/零产出/返工的完整期间与同批群; 包装方式及皮重/复用分摊; 实际生产地理、供电电压/供应商与运输范围; 原生身份限制及分类债务和供应背景兼容性 |

构建数据包时须逐项声明全部限定信息，缺项即参考定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 cp_gate 的实际净交付 Q 为唯一分母，排除包装与未交付成品。放行 P 不等于 Q；退回再验收不生成新产量。 |
| wet_active_basis | formulation inputs and output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份供货湿质量分别于乙二醇、缓蚀活性、水和其他组分分账；干物、活性、浓缩液与最终水溶液不能互换。 |
| volume_temperature | liquid records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | m = V × rho(T, actual composition)。V 是积分体积时不再乘时间；只有体积速率才积分。逐液体使用本批次状态及温度密度，不使用纯乙二醇密度换算复配品，也不从次级属性系数推断密度。体积配比不直接变成质量配比，不假定体积可加。 |
| energy_preservation | utilities | Energy | kWh; MJ | 保留实际计量能源单位；1 kWh = 3.6 MJ 仅作明确的单位换算。蒸汽用质量和供回焓差计算热量，质量与热量另账。 |
| manufacturer_dilution | final aqueous formulation | Mass | kg | 本 G40 路线最终配液限定为厂家说明的 33–60 vol% 浓缩液，按实际供应商配液定义记录；示例 50/50 体积比不是质量比或默认投入因子。以同温度浓缩液/水密度换算各自加料质量，并实测最终液体状态；不假定混合体积可加。水质须满足适用批次规格并核对厂家硬度 0–3.6 mmol/L、氯离子及硫酸根各不超过 100 ppm 的指导。具体使用温度/防冻性能另有实际验收证据，不直接取技术资料典型值。见 basf-g40-2023。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 购入整份超浓缩液、另购乙二醇与去离子水、能源和实际包装，在工厂接收门及可追溯期初库存 |
| starting_condition_role | 供应商制剂/原料的前景混配起点，不是上游无负荷起点 |
| product_classification_scope | CPC 3.0 35430 中明确的水性乙二醇防冻制剂路线子集 |
| recursive_input_rule | 超浓缩液整份只连一次其实际供应背景，不重复展开采购其已含组分；同厂内部浓缩中间体、返工和仓储交接在合并时抵消 |
| upstream_dataset_requirement | 每项外购原料、整份制剂、水处理、能源、包装和纳入的运输链接实际路线/地区/等级背景；普通身份匹配不证明供应商数量或负荷 |
| disclosure | 声明生产与交付期间/门、配方版本、水/活性基准、地理、仓储、包装、搬运/发运、库存及结转、分摊、排放与缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | mix_dilute_dispatch | 纳入接收及原料/在制品/成品仓储、混配稀释、条件性调温/过滤、取样检验、失败运行、退回/返工、实际包装、搬运/装运和实际废物/排放。未列的真实化学品、滤材、密封件、能源或排放逐项扩展原子行，不因未决 UUID 删负荷。 | `basf-g140k-sc-2023`; `basf-g40-2023` |
| boundary_external | upstream and downstream | 上游供应背景包含来料实际制造及纳入的入厂运输；用户使用、设备循环、下游分配和最终处置另模。若真实纳入运输，则每种服务独立计量，不默认零、默认路程或服务次数。 | `basf-g40-2023` |
| boundary_formulation | superconcentrate and concentrate | 原件 G140K SC 仅供应亚太。该路线的说明为另加 67 wt% 乙二醇与 33 wt% 超浓缩液充分混合成浓缩中间体，随后按配方加水。它是配料参考而非净交付投入因子；实际损失、返工和库存必须另计。两份技术资料同属 BASF，不是独立证据。 | `basf-g140k-sc-2023`; `basf-g40-2023` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix_dilute_dispatch | 混配、稀释、仓储及交付 | required | 每一同批群，按实际设备纳入条件操作 | 一个合并前景，内部浓缩中间体及仓储交接不重复输出 | 1 kg 净交付水性防冻液 |

### 过程：混配、稀释、仓储及交付（`mix_dilute_dispatch`）

#### 输入

##### 产品流

###### 购入的缓蚀超浓缩液 (`inhibitor_superconcentrate`)

整份购入制剂仅计一次，包含其载体乙二醇、水和缓蚀组分。化验组分只作组成分账，不再作为采购原料。供应范围为亚太地区，须取得实际供应商配方兼容确认与批次规格。

数量说明：对 inhibitor_superconcentrate 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: GLYSANTIN G140K SC 整份供货液体制剂
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_materials`
- 来源: `basf-g140k-sc-2023`

###### 单独购入的乙二醇 (`ethylene_glycol`)

只记录另行购入的商业乙二醇及其纯度、水分和杂质，不重复计入超浓缩液内的乙二醇。原生 CAS 107-21-1、环氧乙烷水合路线必须相容；工业/电解液用途文字不能证明供应商等级。原生未指定地理。

数量说明：对 ethylene_glycol 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 乙二醇 `3685eaf5-415b-46b2-a350-8b8cf548abbf`
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_materials`
- 来源: `basf-g140k-sc-2023`

###### 最终稀释用水 (`dilution_water`)

计量制得最终水性制剂时实际另加的水。原生为 CAS 7732-18-5、工厂离子交换/反渗透纯水，未指定地理，也未认证冷却液用水品质；检测实际水质并链接水处理供应数据。不把载体水计为该额外采购量。

数量说明：对 dilution_water 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_materials`
- 来源: `basf-g40-2023`

###### 设备清洗用水 (`cleaning_water`)

以独立水表或领用记录将清洗水与稀释水分开。相同离子交换/反渗透原生身份仅用于真实去离子清洗水；普通自来水须另建原子行并匹配身份。

数量说明：对 cleaning_water 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_materials`
- 来源:

###### 混配、仓储与装运电力 (`electricity`)

纳入泵送、搅拌、稀释、质检、纳入仓储的分摊照明、包装与装运，以及失败运行和退回处理。已查得中国小于 1 kV 消费/电网混合身份不能充当通用供应商；实际场址兼容前 UUID 留空。

数量说明：对 electricity 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 低压电网电力
- 流属性/单位: 能量 / kWh
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源:

###### 条件性购入工艺蒸汽 (`steam`)

实际混配、清洗或调温使用购入蒸汽时纳入。记录供回焓、凝结水与数量，不把热量当产品质量。现场制汽时拆列每种燃料及各直接排放。

数量说明：对 steam 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 饱和工艺蒸汽
- 流属性/单位: 能量 / MJ
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源:

###### 条件性搬运柴油 (`diesel`)

纳入可归属的现场卸料、叉车或发运搬运实际消耗柴油。记录领油及设备工作，不假定每个场址用柴油，也不删去已观察能源。

数量说明：对 diesel 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 柴油
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_utilities`
- 来源:

###### 条件性桶身 (`hdpe_drum`)

仅用于实际包装交付的 HDPE 桶身，桶身皮重与封盖、液体分开称量。散装交付只有在记录证明时才无一次性桶。

数量说明：对 hdpe_drum 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 高密度聚乙烯桶身
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源:

###### 条件性桶盖 (`hdpe_closure`)

记录实际独立 HDPE 桶盖。其他材质的封签、垫圈或盖另设具体行、质量与供应商，不暗含于液体产出。

数量说明：对 hdpe_closure 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 高密度聚乙烯桶盖
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源:

###### 条件性纸标签 (`paper_label`)

计量实际包装产出所用标签；该物件之外观察到的胶黏剂、缠绕膜或纸箱须各列原子交换。

数量说明：对 paper_label 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 桶用纸标签
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源:

###### 条件性运输托盘 (`wood_pallet`)

记录实际单程托盘质量，或有证据的复用托盘服务分摊及实测复用和损失。不默认寿命或周转次数。

数量说明：对 wood_pallet 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 木质运输托盘
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源:

#### 输出

##### 产品流

###### 终端验收净交付 (`delivered_antifreeze`)

此唯一终端产品输出为声明的水性 Si-OAT 乙二醇防冻液实际对外交付净量，不含包装。原生工厂溶解/稀释/添加剂身份未规定 CAS、等级或地理；通用说明中通常 30–70% 基液不能给出批次配方、密度或性能保证。原生分类 34139 属已披露元数据债务，不允许以纯乙二醇替代复配品。

数量说明：1 千克；cp_gate 核验实际交付 Q，由 normalize_once 的同一次报告操作给出 Q/Q。

- 选定流: 防冻液 `f4d2de8d-01df-42a2-aa65-7f7215606250`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_gate`
- 来源: `basf-g40-2023`

##### 废物流

###### 外运不合格液体 (`offspec_liquid`)

记录最终送处理的不合格液及组成和去向；退回同一过程属于内部返工，不是该外排废物，也不是新增验收产量。不计避免产品收益。

数量说明：对 offspec_liquid 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 不合格水性乙二醇防冻液
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residuals`
- 来源:

###### 清洗废液 (`glycol_wastewater`)

在真实处理边界计量整份湿废液并分析乙二醇和缓蚀组分。COD 为处理指标，不证明乙二醇物种、反应水或未知质量出口。

数量说明：对 glycol_wastewater 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 含乙二醇清洗废水
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residuals`
- 来源:

###### 条件性空原料容器 (`empty_hdpe_container`)

记录实际排空 HDPE 原料容器质量，并分账残留液。其他容器材质及处理流另列；复用散装储罐应记录有证据的搬运/清洗，不虚构一次性容器。

数量说明：对 empty_hdpe_container 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 空 HDPE 超浓缩液容器
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residuals`
- 来源:

##### 基本流

###### 实测乙二醇空气释放 (`ethylene_glycol_air`)

纳入真实烟囱或逸散的乙二醇物种释放并声明空气介质。实测质量速率乘时长或积分质量只计一次；不默认零，也不只用总 VOC/COD 推断乙二醇质量。

数量说明：对 ethylene_glycol_air 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 向空气排放的乙二醇
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residuals`
- 来源:

###### 实测水蒸发 (`water_air`)

以独立含水/过程测量记录自由水蒸发，与乙二醇损失分开。物理混配无固有反应水源；不把未知蒸发与未知反应水同时拟合到同一残差。

数量说明：对 water_air 的原始可归属期间分子只执行一次 normalize_once；采集端不除以 Q。

- 选定流: 向空气排放的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: A_i / Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_residuals`
- 来源:

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | all inventory rows | 优先按批次/罐、同配方与实测设备用量归属；共享公用工程/仓储依计量因果驱动分配并对账全厂总量。失败与零产出批次负荷留在同路线实际期间，不通过只筛正产出批次删除。 |  |
| allocation_internal | cohorts and returns | 内部混配中间体、在制品、返工与成品仓储交接不是共产品。内部回流抵消，不重新采购或生新产量。真实外部退回保留唯一身份、原结转负荷和新增返工负荷，不重复分母或重复旧负荷。 |  |
| allocation_no_credit | rejects and other products | 废液/损失不得当合格交付或扣除负荷的收益。实际有可售共产品须另证物理身份及因果分摊，未建立前不宣称本单产品方法适用该联合工艺。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | mix_dilute_dispatch | delivered_antifreeze | dispatch_and_inventory | owner: logistics and QA; 批号/配方版/浓度；唯一首次放行 P；净交付 Q；包装皮重；外部退回及原单；原料/在制品/成品期初末质量和逐项结转负荷；内部转移/报废 | 物流与 QA 负责人按校准净称、装运单和验收单采集未除质量及库存结转负荷，逐批对账生产/仓储/交付。Q 仅为首次合格对外交付的净额，退回按原单回退并连接再交付；在厂复验不造新产量。采集端不计算 A/Q。 汇总说明：仅由 normalize_once 执行同一次报告；本协议保留未除分子和完整结转账。 | kg | 每批及期间首尾 | 声明实际起止，含失败、零产出及返工 | 单一场址/路线/最终配方同批群 | 每 1 kg 参考流 | 校准、期初负荷出处、唯一批次/退回链、签署账及仓储交接抵消证据 |
| cp_materials | mix_dilute_dispatch | inhibitor_superconcentrate; ethylene_glycol; dilution_water; cleaning_water | batch_supply_and_composition | owner: production and laboratory; 每份商业来料湿质量/批号/供应商/路线/版次；领用/退料；纯度/水/活性组成；密度/温度/积分体积或速率时长；浓缩中间体与最终液体样；原料和 WIP 期初末及结转负荷 | 生产/实验室负责人逐份称量或按本物料实测温度密度换算，核对供货全制剂与化验分账，记录浓缩中间体罐顶/底均一性及最终稀释状态。保留全部实际期间原始数、失败投入、清洗与返工及开闭库存结转，不在采集端归一化。 汇总说明：仅由 normalize_once 执行同一次报告；本协议保留未除分子和完整结转账。 | kg; L; kg/L; degC | 每批及期间首尾 | 声明实际起止，含失败、零产出及返工 | 单一场址/路线/最终配方同批群 | 每 1 kg 参考流 | 供货 CoA/组成保密可追溯记录、路线证据、秤校准、水质与物种分析 |
| cp_utilities | mix_dilute_dispatch | electricity; steam; diesel | meter_and_duty | owner: utilities engineer; 电表起末/电压/供电地区；蒸汽质量/供回焓/凝结水；柴油质量/设备任务；运行率及时间或积分量；共享分配驱动；各库存结转能源负荷 | 公用工程负责人收集全期间未除读数并保留失败/停启/返工、实际仓储包装搬运/发运及清洗负荷；按设备因果驱动分摊并与总表核对。已积分体积或能量不再乘时长，不在采集端除以 Q。 汇总说明：仅由 normalize_once 执行同一次报告；本协议保留未除分子和完整结转账。 | kWh; MJ; kg | 每批及期间首尾 | 声明实际起止，含失败、零产出及返工 | 单一场址/路线/最终配方同批群 | 每 1 kg 参考流 | 表计校准、能源账单/地区电压、任务分配与全厂对账 |
| cp_packaging | mix_dilute_dispatch | hdpe_drum; hdpe_closure; paper_label; wood_pallet | packaging_and_handling | owner: packaging supervisor; 每种组件来料/领用/退料/废料与净皮重；复用资产分摊证据；包装产量及实际交付；成品与包装期初末及结转负荷 | 包装负责人独立称量每种实际组件并与实际交付关联，保留包装/搬运返工、库存中已包和未包液体状态及负荷。散装无桶须由实际记录证明；未列真实包装逐项加行。保留原始数不归一化。 汇总说明：仅由 normalize_once 执行同一次报告；本协议保留未除分子和完整结转账。 | kg | 每批及期间首尾 | 声明实际起止，含失败、零产出及返工 | 单一场址/路线/最终配方同批群 | 每 1 kg 参考流 | 组件称量、物料平衡、实际复用及包装状态与库存证据 |
| cp_residuals | mix_dilute_dispatch | offspec_liquid; glycol_wastewater; empty_hdpe_container; ethylene_glycol_air; water_air | waste_and_species | owner: environmental engineer and laboratory; 每废物流湿质量/组成/目的地/含水；容器残液；乙二醇空气介质和物种质量/速率时长；独立蒸发水；原料/WIP/成品与元素账；检出限/不确定度 | 环保/实验室负责人分别计量废物及实际物种释放，保留整体湿质量与组成分账；结合完整期间及库存核对总质量和水/乙二醇/缓蚀元素。不能用 COD 或质量残差同时解未知反应水和未知出口，也不能以未检测代替零。只采未除原始量。 汇总说明：仅由 normalize_once 执行同一次报告；本协议保留未除分子和完整结转账。 | kg | 每批及期间首尾 | 声明实际起止，含失败、零产出及返工 | 单一场址/路线/最终配方同批群 | 每 1 kg 参考流 | 处理联单、物种/水分析、方法与检出限、独立守恒核对及不确定度 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 逐份原始记录先转为其物理原生单位；液体 m = V × rho(T, composition)，积分量直接使用，速率才乘对应时长。组成 m_k = m_supply × w_k 是内部核对，不额外采购。具体过程蒸汽热量由质量及供回焓差得出。 | raw_records; density_at_temperature; assay; cp_materials; cp_utilities; cp_residuals | converted_raw | `basf-g140k-sc-2023`; `basf-g40-2023` |
| cohort_delivery | delivered_antifreeze | 逐批净交付 Q = 唯一合格首次对外交付质量之和，减本期间按原单回退量并跟踪再交付；对历史交付退回，明确同批群边界及负荷逆转，不能造成重复。Q > 0。成品期初 + 首次放行 P + 外部退回 = 对外装运 + 成品期末 + 仓储报废 + 送返工量，内部交接在合并时抵消。P 与 Q 不默认相等。 | cp_gate; opening_finished; first_release; external_returns; closing_finished; rejects; internal_returns | Q |  |
| carry_burdens | all inventory rows | 逐交换分量形成未除可归属分子 A_i = 本期间外部投入/操作负荷 + 期初原料/WIP/成品结转负荷 + 有证据的外部退回净结转负荷 - 期末原料/WIP/成品保留负荷。开闭库存须带真实组成、状态、包装与负荷出处；守恒和负荷账分开。全期间失败/零产出/返工损失及废物处理负荷保留，不扣成避免产品收益。仓储、包装、搬运/发运按真实阶段计入；内部交接抵消一次。 | converted_raw; cp_gate; cp_materials; cp_utilities; cp_packaging; cp_residuals; opening_carry; closing_carry; return_carry | A_i |  |
| normalize_once | all inventory rows | a_i = A_i / Q，仅在全部原始换算、期间归属及库存结转完成后报告一次；每个 a_i 为每 1 kg 净交付参考流的交换。终端交付行 Q/Q = 1 kg。卡片数量公式与各协议 aggregation_rule 是该同一报告操作的指针，不是顺序再除。Q 不正或结转账无法归属时不得报告归一化数据集。 | A_i; Q; cp_gate | a_i |  |
| physical_closure | formulation and residuals | 在完整物理边界，期初总质量 + 外部实际收料 = 实际外发质量 + 期末总质量 + 独立实测废物/释放；分开产品、包装和能源物理账，内部交接抵消。对水、乙二醇与已知缓蚀元素分别核对，使用真实分析及不确定度。物理混配不自生反应水；若真实发生反应，须另有物种和独立反应程度证据并重审路线，不能用残差补水或补损失。 | cp_materials; cp_gate; cp_residuals; species_assays; uncertainty | mass_and_species_reconciliation |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_recipe | reference and materials | 配方、供货湿态、水/活性、供应地区与原生路线一致，分别记录超浓缩液、浓缩液和最终液体。引用厂家例子不能证明实际工厂已经生产或满足 OEM 认证。 | cp_materials; supplier specification; basf-g140k-sc-2023; basf-g40-2023 |
| quality_revisions | supplier properties | G140K 2023-07 与 G40 2023-12 密度/水等典型表有差异；仅用于各自明确物料/版本的处理背景，不混成约束或将上限当真实含量。实际批次 CoA 和密度温度优先；技术资料不提供最终稀释液通用密度。 | batch CoA; temperature-density measurements; basf-g140k-sc-2023; basf-g40-2023 |
| quality_complete | all inventory rows | 声明实际完整期间和同批群、失败/零产出/退回/返工、原料/WIP/成品开闭库存及逐项结转，方法检出限和不确定度；未收集不等于零。 | cp_gate; cp_materials; cp_utilities; cp_packaging; cp_residuals |
| quality_native | UUID-bearing rows | 完整原生名称全部分量、路线、CAS、介质和属性仅作身份；防冻液未指定地理且 34139 分类不证明纯醇或 35430 接受，通用典型基液比例不固定配方；水身份未提供水质认证；乙二醇供应路线需实际验证。 | native identity audit; cp_materials |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_antifreeze | 唯一 reference_flow_link 指向终端 Product 输出，UUID 与声明参考一致；完整限定数组逐项具备，同一净湿液交付质量及包装排除。浓缩中间体不可替代终端。 |  |
| validate_ledger | all inventory rows | 所有卡片均为原子交换，关联有明确负责人的协议。原始期间及库存结转可追溯，归一仅一次；Q > 0 且 P/Q、库存、退回及负荷账一致，未知不可伪填零。 |  |
| validate_chemistry | physical_closure | 整体物理质量与实际组分/元素独立守恒。纯混配无固有反应水；不得用 COD 或同一残差同时拟合反应水和未知出口。物种证据缺口限制具体数据集，不以凭空反应水修平。 |  |
| validate_scope | reference and external inputs | 不凭 CAS、分类标签、来源中的用途或通用 UUID 推定全配方、功效、维护量、寿命或供应商负荷；保留版本、地区、物态、路线、grade 与 provider 的真实限制。真实矛盾须先解决，普通辅助 UUID 缺口如实披露。 | `basf-g140k-sc-2023`; `basf-g40-2023` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 声明实际工厂的前景混配/稀释/交付数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同配方、浓度、路线和交付门的产品质量建模，附全部适用条件 |
| excluded_use | 覆盖全部 35430；纯乙二醇/石油油替代复配品；默认寿命/功效/服役次数；使用阶段服务比较；无证据认证 |
| required_metadata | 全部参考限定信息；原料/在制/成品账、负荷结转、实际边界与协议负责人；规格版次与证据 |
| required_quality_disclosure | 实测、分摊、缺失、检出限、不确定度、UUID 与 provider 缺口、原生分类/地理限制及厂家同源性 |
| update_trigger | 配方/原料等级/路线/浓度/供应商/交付门/地理/库存结转或计量方法改变时重审 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| basf-g140k-sc-2023 | literature | BASF, GLYSANTIN G140K SC, July 2023, D/EVO 3080 e, pp. 1–2. https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G140K%20SC%20-%20Engine%20Coolant%20Super%20Concentrate%20-%20TI_BMB%20updated.pdf | 厂家特定亚太超浓缩液混配路线、质量配比及均匀性检查；典型表不等于实际批次规格。只支持相应物料/版本，不给出工厂投入因子。 |
| basf-g40-2023 | literature | BASF, GLYSANTIN G40, December 2023, pp. 1–4. https://promo.basf.com/campaign/tasa/fichas-tecnicas/Glysantin%C2%AE%20G40%C2%AE%20-%20Engine%20Coolant%20Concentrate%20-%20TI_12-2023.pdf | 浓缩液/水性终态、稀释基准及水质说明；同一厂家的技术原件，不独立确认环境负荷或性能。不能把浓缩液密度当最终稀释液密度。 |
| unsd-cpc-3-0 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, subclass 35430. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅支持 35430 防冻制剂分类范围和与石油油本体的区分；不建立本方法覆盖全部类目、原生 UUID 分类正确或映射已接受。 |
