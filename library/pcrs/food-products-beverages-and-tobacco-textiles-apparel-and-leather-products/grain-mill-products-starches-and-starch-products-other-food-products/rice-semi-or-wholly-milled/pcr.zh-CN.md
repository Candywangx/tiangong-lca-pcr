---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.rice-semi-or-wholly-milled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 半碾或全碾稻米

## 1. 范围与适用性

本 PCR 适用于碾米设施以稻谷生产半碾或全碾稻米的前景过程。申明工艺路线时，范围涵盖常规路线和蒸谷路线；申明交付状态时，范围涵盖散装或包装产品。

本类别包括去除部分或全部糠层的食用稻米，以及作为碾米产品销售且已申明的整米与碎米混合产品。范围不包括稻谷、未经进一步碾磨而销售的糙米、米粉、稻米淀粉、熟制米饭、预制稻米食品，以及以稻作种植为前景产品系统的情形。

前景边界始于稻谷在碾米厂门口称重接收，止于同一设施内已经可以发运的半碾或全碾稻米。上游稻谷生产、进厂运输、下游配送、零售、烹饪、消费和生命末期仅在研究范围要求时通过关联数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.rice-semi-or-wholly-milled |
| classification_refs | CPC 3.0: 23161, Rice, semi- or wholly milled |
| covered_products | 半碾稻米；全碾稻米；作为碾米产品销售且已申明的整米与碎米混合产品；申明蒸谷路线时的蒸谷米 |
| excluded_products | 稻谷；按糙米销售的产品；米粉；稻米淀粉；熟制或其他预制稻米食品；种植阶段稻米产品 |
| representative_product | 经分级且可从商业碾米厂发运的食品级全碾稻米 |
| production_route | 稻谷接收与调理；可选蒸谷；脱壳；稻谷分离；按申明碾白度进行碾白或抛光；分级或配米；可选包装 |
| market_state | 碾米厂门口交付的散装或包装食品级稻米，按接收状态计量，并申明水分、碾白度、碎米率、蒸谷状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已可从碾米设施发运的食品级半碾或全碾稻米 |
| How much | 按申明接收水分计量的 1 kg 净稻米产品 |
| How well | 符合所申明的碾白度、水分、碎米率、杂质、蒸谷状态和包装状态产品规范 |
| How long or cycle | 前景数据包所代表的一个生产批次或生产期；不指定使用寿命 |
| reference_flow_link | 功能单位由下述 Tiangong 参考产品流恰好 1 kg 实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 半碾或全碾的稻米 `4125cc1c-d304-48b4-a701-f40a581df3c3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | degree of milling; as-received moisture content; broken-kernel fraction; parboiled or non-parboiled route; bulk or packaged delivery state; included packaging; facility geography; milling technology; production period |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中申明。缺失任何限定信息时，参考流均不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化清单结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收状态净质量报告参考产品，并将前景清单归一化为恰好 1 kg 合格参考产品。 |
| `moisture_basis` | 稻谷投入、中间稻米、参考产品和物料共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass % moisture | 记录每个物料质量的水分基准；没有配套水分测定与书面公式时，不得比较或换算湿基与干基质量。 |
| `material_mass_balance_unit` | 产品、共产品、残余物和废物质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 平衡前将所有物料流换算为其所记录水分基准下的 kg，并单独披露水分校正。 |
| `energy_unit_preservation` | 电力和燃料能量记录 | 已申明能量属性 | kWh for electricity; MJ for thermal energy | 保留发票或仪表原始单位并记录所有换算因子；没有申明热值及其基准时，不得把燃料质量作为能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在碾米设施称重接收的稻谷，并申明供应商或来源、接收时间、水分、杂质比例和此前干燥或蒸谷状态 |
| starting_condition_role | 碾米前景数据包的进入点 |
| product_classification_scope | 半碾或全碾稻米，与定位本 PCR 所用的外部分类代码相互独立 |
| recursive_input_rule | 半碾或全碾稻米进入前景步骤时，将其作为一个产品投入记录并关联上游数据集，不得在该步骤内递归重建同一类别 |
| upstream_dataset_requirement | 当稻谷种植、场外干燥或蒸谷、进厂运输、外购能源、供水、包装生产和场外处理位于前景设施边界之外时，关联相应数据集 |
| disclosure | 申明接收稻谷状态、场内操作、蒸谷路线、碾米技术、碾白度、碎米及其他产出的处理、包装范围、储存期和全部排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_start_end` | 前景碾米系统 | 始于称重接收稻谷，并纳入在申明的厂门产品发运之前实际进行的所有场内清理、干燥或调质、蒸谷、脱壳、分离、碾白或抛光、分级或配米、储存和包装操作。 | `fao-grain-postharvest-rice-milling`; `fao-prevention-postharvest-losses-rice-milling` |
| `sb_upstream_linkage` | 上游投入 | 以关联上游数据集表示种植、场外调理、进厂运输、外购公用工程、包装生产和场外处理；不得重复计入上游数据集已经包含的活动。 | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `sb_conditional_routes` | 条件性操作 | 仅在实际进行时纳入场内干燥、蒸谷、抛光或上光、副产品能源回收和包装；记录路线特定的公用工程、产出、排放与废物，并说明省略分支不适用的原因。 | `fao-rice-human-nutrition-postharvest`; `fao-prevention-postharvest-losses-rice-milling` |
| `sb_recursive_category_input` | 同类别产品投入 | 将进入的半碾或全碾稻米作为产品投入并关联上游数据集，在该记录边界终止类别递归。 | `iso-14044-lca-requirements` |
| `sb_downstream_exclusions` | 下游阶段 | 排除碾米厂门口之后的配送、零售、烹饪、消费和消费者生命末期，除非申明的研究范围通过独立过程和数据集明确纳入这些阶段。 | `iso-14044-lca-requirements` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `paddy_receiving_conditioning` | 稻谷接收、清理与调理 | required | 始终纳入；仅在实际进行时表示场内干燥或调质 | 前景接收与调理 | 转入碾米的调理稻谷 kg |
| `parboiling` | 蒸谷与再干燥 | conditional | 当申明产品使用前景设施内蒸制的稻谷生产时纳入 | 前景路线特定处理 | 转入碾米的蒸谷稻谷 kg |
| `milling_separation` | 脱壳、碾白或抛光及分离 | required | 半碾或全碾稻米始终纳入 | 前景核心生产 | 合格散装碾米产品 kg |
| `packaging` | 发运产品包装 | conditional | 当包装属于所申明厂门交付状态时纳入 | 前景精整 | 包装参考产品 kg |

### 过程：稻谷接收、清理与调理（`paddy_receiving_conditioning`）

#### 输入

##### 产品流

###### 碾米厂接收的稻谷（`received_paddy`）

稻谷在设施门口跨越前景边界。对每个代表性批次采集接收质量、水分、杂质比例、供应商或来源和此前处理状态。

- 选定流：稻谷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至所代表生产批次的实测稻谷净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paddy_receipts`
- 来源：`fao-grain-postharvest-rice-milling`
- 数量范围：来源推导的稻谷投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.43
  - 上限：1.67
  - 单位：kg 稻谷/kg 合格参考产品
  - 基准：FAO 示例中每 100 kg 稻谷产出 60 kg 白米至 70 kg 白米加碎米的倒数，并申明碎米的处理方式
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-grain-postharvest-rice-milling`

###### 接收与调理用电（`conditioning_electricity`）

记录本过程所纳入输送、吸风、清理、干燥和调理设备的计量电力。

- 选定流：供应至设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：可归于接收与调理的仪表计量或发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 调理稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy`
- 数量范围：等待已审查场址证据替换的暂定用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 调理稻谷
  - 基准：接收、清理、输送及任何场内调理的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 送往碾米线的调理稻谷（`conditioned_paddy`）

记录转入碾米过程的已清理或经其他调理的稻谷净质量与水分。

- 选定流：调理稻谷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存变化校正后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 数量范围：暂定调理得率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.8
  - 上限：1
  - 单位：kg 调理稻谷/kg 接收稻谷
  - 基准：对去除杂质及调理损失的宽泛筛查；由已审查场址证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 去除的杂质与筛下物（`receiving_screenings`）

按实际去向及废物或回收物料分类，记录石块、稻草、空瘪粒和其他被去除物料。

- 选定流：碾米厂接收筛下物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各去向的实测或由质量平衡推导的筛下物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_outputs`
- 数量范围：暂定筛下物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 接收稻谷
  - 基准：宽泛首轮筛查；由设施质量记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：蒸谷与再干燥（`parboiling`）

#### 输入

##### 产品流

###### 用于蒸谷的调理稻谷（`paddy_to_parboiling`）

仅记录进入场内浸泡、蒸制和再干燥路线的稻谷。

- 选定流：调理稻谷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：蒸谷入口处实测的净投入质量与水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parboiling_inputs`
- 来源：`fao-rice-human-nutrition-postharvest`

###### 浸泡与蒸汽发生用过程水（`parboiling_water`）

记录进入浸泡、洗涤和直接蒸汽接触操作的所有淡水或外供过程水。

- 选定流：过程水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：向所代表蒸谷批次供应的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parboiling_inputs`
- 数量范围：暂定蒸谷用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 水/kg 蒸谷稻谷
  - 基准：从无场内蒸谷至高用水批次操作的宽泛筛查区间；由计量证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蒸制与再干燥用热能（`parboiling_thermal_energy`）

记录外购燃料或蒸汽，并单独报告场内使用的任何稻壳能源，不得从稻壳产出中净扣除。

- 选定流：供应至蒸谷过程的热能
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽，或由实测燃料和申明热值计算的燃料能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_parboiling_inputs`
- 数量范围：暂定蒸谷能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 蒸谷稻谷
  - 基准：浸泡加热、蒸制和再干燥的宽泛首轮筛查；由计量能源和燃料证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 送往碾米的蒸谷稻谷（`parboiled_paddy`）

记录蒸制与再干燥后的产出质量、水分和库存变化。

- 选定流：蒸谷稻谷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：再干燥及库存变化校正后的实测净产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_parboiling_outputs`
- 来源：`fao-rice-human-nutrition-postharvest`

##### 废物流

###### 蒸谷废水（`parboiling_wastewater`）

记录废水质量或体积、排放路线与处理去向，不得从废水记录中减去蒸发水。

- 选定流：稻米蒸谷废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各去向的计量排水量或由水平衡推导的废水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_parboiling_outputs`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 废水/kg 蒸谷稻谷
  - 基准：宽泛水平衡筛查；由计量排水和蒸发证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 场内蒸谷能源直接排放（`parboiling_direct_emissions`）

采用实测排放，或将燃料特定因子应用于已采集燃料记录，分别报告每种排放基本物质。

- 选定流：场内燃料使用产生的物质特定大气排放
- 流属性/单位：物质特定质量 / kg
- 数量规则：实测排放，或采集燃料量乘以适用排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 蒸谷稻谷产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数量范围：暂定物质特定直接排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg 排放物质/kg 蒸谷稻谷
  - 基准：刻意设置的逐物质宽泛筛查；由实测排放或燃料特定因子证据替换
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：脱壳、碾白或抛光及分离（`milling_separation`）

#### 输入

##### 产品流

###### 进入碾米线的稻谷（`milling_paddy_input`）

记录进入脱壳的调理稻谷或蒸谷稻谷，包括质量和水分。

- 选定流：调理或蒸谷稻谷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存变化校正后转入碾米线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格散装碾米产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_inputs`
- 来源：`fao-grain-postharvest-rice-milling`
- 数量范围：来源推导的碾米投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.43
  - 上限：1.67
  - 单位：kg 稻谷/kg 合格碾米产品
  - 基准：FAO 示例中 60% 至 70% 碾米产品产出的倒数，具体取决于碎米是否计入申明产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-grain-postharvest-rice-milling`

###### 碾米与分离用电（`milling_electricity`）

记录脱壳、吸风、分离、碾白、抛光、分级、输送和除尘用电。

- 选定流：供应至设施的电力
- 流属性/单位：Energy / kWh
- 数量规则：可归于碾米线的仪表计量或发票核对电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格散装碾米产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_energy`
- 数量范围：暂定碾米用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：kWh/kg 合格散装碾米产品
  - 基准：涵盖不同碾米规模和设备配置的宽泛首轮筛查；由计量证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 合格半碾或全碾稻米（`bulk_milled_rice`）

这是可选包装之前的定量参考产出。记录净质量、水分、碾白度和碎米率。

- 选定流：半碾或全碾的稻米 `4125cc1c-d304-48b4-a701-f40a581df3c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测合格产出归一化后恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`fao-grain-postharvest-rice-milling`
- 数量范围：来源推导的碾米产品得率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.60
  - 上限：0.70
  - 单位：kg 合格碾米产品/kg 稻谷
  - 基准：FAO 示例平衡给出每 kg 稻谷 0.60 kg 白米和另 0.10 kg 碎米；申明产品对碎米的处理决定比较基准
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-grain-postharvest-rice-milling`

###### 从申明产品中分离的碎米（`broken_rice_coproduct`）

仅当碎米未包含在申明参考产品混合物中时，才将其作为独立共产品记录。

- 选定流：碎米
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：出售或转移至各去向的实测分离碎米质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入碾米的稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-postharvest-rice-milling`

###### 米糠与米粉组分（`rice_bran_flour_coproduct`）

分别计量时，分别记录糠、胚芽、抛光粉和米粉组分；否则披露合并组分及其去向。

- 选定流：米糠与碾米粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各销售、饲料、提取、能源或处理去向的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入碾米的稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-postharvest-rice-milling`; `fao-rice-human-nutrition-postharvest`

###### 稻壳（`rice_husk_coproduct`）

记录稻壳质量及其出售、场内用作燃料、转移作其他用途或弃置的状态；场内使用仍应同时作为产出和能源投入，防止隐性净扣除。

- 选定流：稻壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各去向的实测稻壳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入碾米的稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 来源：`fao-grain-postharvest-rice-milling`; `fao-prevention-postharvest-losses-rice-milling`

##### 废物流

###### 碾米不合格物与收集粉尘（`milling_rejects_dust`）

按质量和去向记录非产品细料、受污染物料、收集粉尘和维护清出物。

- 选定流：碾米不合格物与收集粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各处理去向的实测或由质量平衡推导的物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入碾米的稻谷
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_outputs`
- 数量范围：暂定不合格物与粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 进入碾米的稻谷
  - 基准：宽泛首轮筛查；由设施质量记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集颗粒物大气排放（`milling_particulate_air`）

采用烟道或工作场所排风测量、许可报告或书面除尘质量平衡，记录每个颗粒物基本流。

- 选定流：物质特定的大气颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实测排放或由收集粉尘记录计算的未捕集比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格散装碾米产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算值（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 数量范围：暂定颗粒物排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 合格散装碾米产品
  - 基准：刻意设置的宽泛首轮筛查；由实测或许可排放证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：发运产品包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的合格散装碾米产品（`packaging_bulk_rice_input`）

记录进入包装的稻米净质量与质量，并与包装产出、样品、洒落和库存变化核对。

- 选定流：半碾或全碾的稻米 `4125cc1c-d304-48b4-a701-f40a581df3c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装批次的实测散装稻米投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装投入核对 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg 散装稻米/kg 包装参考产品
  - 基准：产品取样、洒落、不合格品和库存变化的宽泛筛查；由包装线记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_material_input`）

按材料、已知再生含量和进入所代表批次的净质量分别记录每种初级、次级和三级包装材料。

- 选定流：产品特定包装材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以采购和库存核对的所代表产品包装材料用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 包装/kg 包装参考产品
  - 基准：从散装交付到小规格消费者包装的宽泛筛查；由物料清单证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 包装参考稻米（`packaged_milled_rice`）

不含包装质量的稻米净含量实现与散装稻米相同的参考流。

- 选定流：半碾或全碾的稻米 `4125cc1c-d304-48b4-a701-f40a581df3c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后净稻米含量恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：固定参考产出 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg 净稻米/kg 参考流
  - 基准：由申明参考数量固定；不含包装质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）

##### 废物流

###### 包装边角料与不合格包装（`packaging_waste`）

按材料和去向记录包装边角料、破损包装和不合格的产品包装组合；可回收稻米应返回稻米平衡，不得隐含在包装废物中。

- 选定流：材料特定包装废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往各回收或处置去向的实测包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装废物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 包装参考产品
  - 基准：宽泛首轮过程损失筛查；由场址废物记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `alloc_avoid_by_subdivision` | 碾米产品、碎米、糠或米粉、稻壳及其他产出 | 首先通过细分独立计量的操作避免分配，或仅在申明研究方法允许时扩展系统；在任何抵扣或分配之前保留产出总量。 | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `alloc_output_classification` | 所有非参考产出 | 根据每项产出的实际去向和市场功能，将其一致地分类为共产品、回收物料、废物或基本流；不得只为获得偏好的负荷结果而更改分类。 | `iso-14044-lca-requirements` |
| `alloc_residual_hierarchy` | 无法避免分配的多产出碾米过程 | 有充分依据时采用反映因果生产关系的物理关系；否则采用基于同期书面价格的经济分配，并披露方法、时期、地理、币种、水分基准和敏感性。 | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `alloc_waste_treatment` | 筛下物、不合格物、废水、收集粉尘和包装废物 | 将场内处理和所需处理的负荷保留在前景系统中；任何下游回收抵扣或负荷均应遵循申明研究方法且不得重复计数。 | `iso-14044-lca-requirements` |
| `alloc_balance_check` | 每个经过分配的多产出过程 | 分配比例之和应在报告舍入精度内等于 1，并保留未分配的总质量和能量平衡用于校验。 | `iso-14044-lca-requirements` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_paddy_receipts` | `paddy_receiving_conditioning` | 接收稻谷投入 | 地磅和入厂质量记录 | lot_id; supplier_or_origin; receipt_time; gross_mass; tare_mass; moisture_percent_wet_basis; impurity_percent; prior_drying; prior_parboiling | 经校准地磅和代表性批次取样 | kg; mass % | 每个接收批次 | 所代表的完整生产期 | 所代表设施和产品的全部供应批次 | 汇总净质量；按质量加权质量字段；核对期初与期末稻谷库存 | 校准记录；取样计划；称重单；供应商记录；库存核对 |
| `cp_conditioning_energy` | `paddy_receiving_conditioning` | 电力与场内调理能源 | 仪表、发票和设备日志 | meter_id; opening_reading; closing_reading; invoice_quantity; operating_hours; allocation_driver; conditioned_mass | 优先使用分表；否则以发票核对并采用书面分配 | kWh; MJ | 每个计量期或生产期 | 所代表的完整生产期 | 所有纳入的接收与调理设备 | 仪表差值减去无关使用；仅在无法细分时分配 | 仪表校准；发票；运行日志；分配工作表 |
| `cp_conditioning_outputs` | `paddy_receiving_conditioning` | 调理稻谷与去除的杂质 | 转移称重和废物记录 | lot_id; conditioned_mass; conditioned_moisture; screenings_mass; destination; opening_stock; closing_stock | 经校准秤或核对后的质量平衡 | kg; mass % | 每批次或班次 | 所代表的完整生产期 | 所有接收与调理线 | 库存校正后按去向汇总产出 | 秤校准；转移单；废物转移联单；库存记录 |
| `cp_parboiling_inputs` | `parboiling` | 稻谷、水、蒸汽和燃料投入 | 批次、仪表和燃料记录 | batch_id; paddy_mass; paddy_moisture; water_meter; steam_meter; fuel_quantity; heating_value_basis; electricity | 批次称重和经校准公用工程仪表；燃料发票与库存核对 | kg; m3; kWh; MJ | 每个批次和公用工程计量期 | 所代表的完整蒸谷米生产期 | 所有场内浸泡、蒸制与再干燥设备 | 以实测或申明密度换算水体积；计算燃料能量且不净扣除稻壳产出 | 仪表校准；批次表；发票；燃料分析；库存核对 |
| `cp_parboiling_outputs` | `parboiling` | 蒸谷稻谷与废水 | 批次产出和排水记录 | batch_id; output_mass; output_moisture; wastewater_volume_or_mass; evaporation_estimate; destination; opening_stock; closing_stock | 经校准秤和排水仪表，或书面水平衡 | kg; m3 | 每批次或排放期 | 所代表的完整蒸谷米生产期 | 所有场内蒸谷线和排放点 | 产出进行库存校正；实测排水与计算蒸发分别保留 | 秤和仪表校准；批次表；排放记录；水平衡工作表 |
| `cp_milling_inputs` | `milling_separation` | 碾米稻谷投入 | 转移秤和生产线日志 | lot_id; input_mass; input_moisture; paddy_route; line_id; start_time; end_time; opening_stock; closing_stock | 经校准转移秤或核对后的投入产出平衡 | kg; mass % | 每批次或班次 | 所代表的完整生产期 | 生产参考产品的所有碾米线 | 按路线和产品汇总库存校正的投入 | 秤校准；生产线日志；批次可追溯性；库存记录 |
| `cp_milling_energy` | `milling_separation` | 碾米电力与燃料 | 仪表、发票和运行记录 | meter_id; opening_reading; closing_reading; invoice_quantity; operating_hours; line_id; product_mass; allocation_driver | 优先使用分表；否则以发票核对并采用书面分配 | kWh; MJ | 每个计量期或班次 | 所代表的完整生产期 | 所有脱壳、碾白、抛光、分级、输送和除尘设备 | 仪表差值减去无关使用；归一化至合格产出 | 仪表校准；发票；运行日志；核对工作表 |
| `cp_milling_outputs` | `milling_separation` | 碾米产品、碎米、米糠、稻壳、不合格物和收集粉尘 | 产品秤、料仓、销售和废物记录 | lot_id; output_type; mass; moisture; destination; product_grade; broken_fraction; opening_stock; closing_stock | 经校准秤和库存或发运核对 | kg; mass % | 每批次、班次或发运 | 所代表的完整生产期 | 每个产品、共产品、残余物和废物出口 | 分配前按产出与去向汇总库存校正质量 | 秤校准；销售或转移单；废物记录；实验室等级报告；库存记录 |
| `cp_packaging_records` | `packaging` | 稻米、包装材料、包装产出和包装废物 | 批次、物料清单、采购和废物记录 | batch_id; bulk_rice_input; net_packaged_rice; packaging_material; packaging_mass; rejected_pack_mass; recovered_rice; opening_stock; closing_stock | 经校准产品秤、物料清单和库存核对 | kg; item count | 每个包装批次 | 所代表的完整包装产品时期 | 所有纳入的包装线和材料 | 以实测单件质量换算件数；分别核对净稻米与包装 | 秤校准；包装规范；采购发票；废物转移单；批次核对 |
| `cp_direct_emissions` | `parboiling` | 直接大气与水排放 | 烟道、许可、实验室、燃料和排放记录 | substance_id; measured_concentration; flow_rate; duration; fuel_quantity; emission_factor; wastewater_volume; discharge_concentration | 优先直接测量；否则将来源特定因子应用于采集的活动数据 | kg; mg/m3; m3; MJ | 每个监测事件和报告期 | 所代表的完整运行期 | 每个纳入的场内排放和排水点 | 按点位计算物质质量；不得聚合不同基本流 | 实验室报告；监测计划；许可报告；因子参考；计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个前景清单数量 | 归一化数量 = 库存校正后的过程数量 / 合格参考产品净质量 | process amount; opening stock; closing stock; net conforming output | 每 1 kg 参考产品的数量 | `iso-14044-lca-requirements` |
| `calc_moisture_correction` | 干基物料质量比较 | 干质量 = 接收状态质量 × (1 - 水分质量分数)；保留原始接收状态质量和水分记录 | as-received mass; moisture mass fraction | 干基比较质量 | `fao-grain-postharvest-rice-milling`; `fao-rice-human-nutrition-postharvest` |
| `calc_material_balance` | 接收、蒸谷、碾米和包装 | 平衡差 = 投入 + 期初库存 - 产出 - 期末库存；适用时单独报告水分蒸发，并调查而非强制闭合无法解释的差额 | all measured material inputs; outputs; stock changes; evaporation | 过程质量平衡差和差额比例 | `iso-14044-lca-requirements` |
| `calc_fuel_energy` | 燃料热能 | 热能 = 实测燃料数量 × 一致基准下申明的低位或高位热值 | fuel quantity; heating value; heating-value basis | MJ 热能 | `iso-14044-lca-requirements` |
| `calc_allocation_fraction` | 多产出残余分配 | 产出 i 的分配负荷 = 未分配过程负荷 × 产出 i 的申明分配驱动量 / 所有共产品驱动量之和 | unallocated burden; co-product outputs; selected physical or economic driver | 按产出的分配负荷和分配比例 | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考产品 | 使用 Tiangong 流 `4125cc1c-d304-48b4-a701-f40a581df3c3`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，且不带数据集版本。 | 数据集参考流记录和 UUID 校验 |
| `dq_product_qualifiers` | 参考产品与生产批次 | 申明每项必需限定信息，并保留从稻谷接收到合格产出的批次可追溯性。 | 产品规范；实验室结果；批次谱系；过程日志 |
| `dq_temporal_coverage` | 前景活动数据 | 覆盖一个代表性运行年度或一个完整生产期；披露停机、季节性缺口、产品变化和任何外推。 | 有起止日期的仪表、生产、采购、库存和发运记录；`eu-2021-2279-environmental-footprint` |
| `dq_technology_geography` | 设施代表性 | 描述设施地理、碾米规模、脱壳与碾白技术、蒸谷路线、能源系统、粉尘控制、储存和包装配置。 | 设施画像；设备清单；工艺流程图；`fao-prevention-postharvest-losses-rice-milling` |
| `dq_completeness_balance` | 物料、能源、水、产品、共产品、废物与排放记录 | 核对所有纳入过程，并披露缺失出口、未计量共享公用工程、无法解释的平衡差和排除的次要流，不得静默赋零。 | 已签署平衡与核对工作表；`iso-14044-lca-requirements` |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 仅将该范围作为 QA 标志，绝不自动替代前景数据；在方法学评审期间予以替换或明确接受。 | 标识保留或替换暂定范围的评审记录 |
| `dq_source_traceability` | 外部证据与计算因子 | 保留来源标题、稳定引用、网络来源检索日期、因子版本、适用性和计算工作表。 | 来源登记和计算档案；`eu-2021-2279-environmental-footprint` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 当参考产品 UUID、Mass UUID、单位组 UUID、参考单位或参考数量与申明参考流对象不同时，若无经批准的 PCR 修订，则判定不符合。 | `iso-14044-lca-requirements` |
| `val_required_qualifiers` | 数据集元数据 | 缺少任何必需限定信息，或产品与过程记录在碾白度、水分基准、碎米处理、蒸谷路线或包装状态上不一致时，判定不符合。 | `fao-rice-human-nutrition-postharvest`; `fao-grain-postharvest-rice-milling` |
| `val_process_coverage` | 过程清单 | 要求每个 `required` 过程均存在，并要求对每个 `conditional` 过程作出适用性判断；纳入的分支应具有其投入、产出、公用工程、废物和直接排放。 | `fao-prevention-postharvest-losses-rice-milling` |
| `val_material_balance` | 每个前景过程及设施总平衡 | 在一致水分基准上计算并报告质量平衡差；依据书面场址容差调查无法解释的差额，不得通过更改参考产出来强制闭合平衡。 | `iso-14044-lca-requirements` |
| `val_allocation` | 多产出过程 | 验证产出分类、避免分配的理由、分配驱动量、来源时期、分配比例在报告舍入精度内合计为 1，以及替代方法可能实质改变结果时的敏感性。 | `iso-14044-lca-requirements`; `eu-2021-2279-environmental-footprint` |
| `val_energy_water_reconciliation` | 电力、燃料、水、蒸汽和废水 | 核对仪表、发票、库存和生产期；披露共享公用工程分配，并防止场内稻壳使用或回收水被隐性净扣除。 | `iso-14044-lca-requirements` |
| `val_qa_guardrails` | 清单范围 | 数值超出 QA 校验范围时，触发对测量、归一化、路线、水分基准和来源适用性的书面审查；不得将数值截断至该范围或自动替换。 | `fao-grain-postharvest-rice-milling` |
| `val_source_and_estimate_status` | 证据登记 | 验证每个引用的 source id 均在数据源中解析，且每个暂定数值范围都以 `reasoned_estimate` 和 `qa_guardrail` 标识；发布关键估算未经评审时，发布评审不通过。 | `eu-2021-2279-environmental-footprint` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申明碾米设施内半碾或全碾稻米的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当地理、技术、产品限定信息、边界、分配和数据质量相容时，用于所申明稻米产品与路线的产品和过程 LCA |
| excluded_use | 稻谷种植；未经碾米而销售的糙米；米粉或淀粉生产；熟制米饭；消费者使用；未申明的蒸谷或包装路线；未经方法相容性评审的公开比较声明 |
| required_metadata | PCR id；Tiangong 参考流 UUID；设施地理；生产期；技术；稻谷来源与状态；碾白度；水分基准；碎米率；蒸谷状态；包装状态；边界；分配方法；数据集版本 |
| required_quality_disclosure | 时间、地理和技术代表性；计量与校准；质量、能量和水平衡；缺失流；共享公用工程分配；共产品处理；暂定估算；来源和因子版本；不确定性与评审状态 |
| update_trigger | 产品规范、稻谷路线、碾米或蒸谷技术、能源系统、包装、分配基准、设施地理、生产组合、测量系统、来源证据或 Tiangong 参考身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-grain-postharvest-rice-milling` | 官方指南（`official_guidance`） | FAO，《Agricultural engineering in development - Grain and post-harvest systems》稻米章节，https://www.fao.org/4/T0522E/T0522E03.htm，检索日期 2026-08-11 | 稻谷状态、过程顺序、约 14% 水分指南、100 kg 稻谷产出示例平衡和副产品去向 |
| `fao-prevention-postharvest-losses-rice-milling` | 官方指南（`official_guidance`） | FAO，《Prevention of post-harvest food losses: Small-scale rice milling》，https://www.fao.org/4/x0039e/x0039e06.htm，检索日期 2026-08-11 | 清理、12-14% 脱壳水分指南、脱壳、碾白、抛光、分级和条件性蒸谷过程分解 |
| `fao-rice-human-nutrition-postharvest` | 官方指南（`official_guidance`） | FAO，《Rice in human nutrition: Rice post-harvest processing, parboiling and home preparation》，https://www.fao.org/4/t0567e/T0567E0h.htm，检索日期 2026-08-11 | 碾米路线差异、水分与调质背景、去糠、蒸谷和分离组分 |
| `iso-14044-lca-requirements` | 标准（`standard`） | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html，ISO 于 2022 年确认现行有效，检索日期 2026-08-11 | 目标与范围一致性、清单与分配层级、数据质量、解释、报告和评审 |
| `eu-2021-2279-environmental-footprint` | 官方指南（`official_guidance`） | 欧盟委员会关于环境足迹方法的 Recommendation (EU) 2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32021H2279，检索日期 2026-08-11 | 生命周期数据质量、核查、过程细分、分配披露和下游数据集使用 |
