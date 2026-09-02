---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-beer
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无醇啤酒

## 1. 范围与适用性

本 PCR 适用于成品无醇啤酒，以及按照所声明司法辖区规则以“无醇”名义投放市场的同类酵母发酵麦芽、谷物、姜或草本饮料的前景生产。覆盖受控或中止发酵、物理脱醇、调配及其组合路线。生产者应声明配方类别、酒精控制路线、实测酒精含量、适用法规或市场阈值、碳酸化状态、稳定化路线和包装形式。

前景边界从生产场址接收酿造原料、处理化学品、包装材料和外购公用工程开始，到生产厂门口放行的包装产品结束。原料、包装、燃料、电力及其他外购投入的上游生产由关联上游数据集表示。若更大范围研究未将其作为独立下游过程纳入，则配送、零售冷藏、饮用服务、消费者使用和包装生命末期不在本厂门口数据集内。

超出所声明无醇规格的含醇啤酒、未以发酵啤酒型饮料销售的未发酵软饮料，以及作为独立参考产品销售的啤酒厂共产品，不属于参考产品定义，只能作为投入、产出或单独建模的共产品出现。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-beer |
| classification_refs | CPC 3.0: 24492 Non-alcoholic beer |
| covered_products | 符合所声明司法辖区或市场规格的成品无醇麦芽或谷物饮料，以及同类酵母发酵姜汁或草本啤酒 |
| excluded_products | 超出所声明无醇规格的含醇啤酒；未以发酵啤酒型饮料销售的未发酵软饮料；作为前景的上游麦芽或原料生产；下游配送、零售、饮用服务和生命末期 |
| representative_product | 在生产场址门口放行的包装无醇发酵饮料 |
| production_route | 原料制备与麦汁生产；发酵与后熟；可选酒精控制处理；稳定化、灌装和包装 |
| market_state | 生产厂门口所声明初级包装内的成品液态饮料，可含气或不含气 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合所声明配方和酒精规格的成品无醇啤酒型饮料 |
| How much | 1 kg 饮料净质量 |
| How well | 放行产品符合所声明酒精含量、配方、碳酸化、稳定化和包装规格 |
| How long or cycle | 生产厂门口的一个已放行生产批次；不包含储存或服务期 |
| reference_flow_link | 参考流为实现功能单位所需的饮料净质量；包装作为单独投入记录 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 无醇啤酒 `6fe10289-5a7d-4ca7-a73c-e698bca5a320` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 适用无醇定义及阈值；实测酒精含量和检测方法；配方类别；发酵与酒精控制路线；碳酸化状态；巴氏杀菌或无菌灌装状态；初级包装形式；生产地域和期间；以体积换算质量时的密度与温度 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单归一化至 1 kg 已放行饮料净质量，不含初级和次级包装质量。 |
| `volume_to_mass_conversion` | 以体积记录的饮料数量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用所声明温度下产品特定实测密度将体积换算为质量，并保留体积、密度、温度和计算记录。 |
| `alcohol_content_measurement` | 产品资格判定 | Alcohol by volume | % vol | 记录实测酒精含量、分析方法、采样日期和适用司法辖区阈值；不得仅凭产品名称推定合规。 |
| `packaging_mass_separation` | 包装投入 | Mass | kg | 各包装材料按实测或供应商声明质量报告，包装质量不计入 1 kg 饮料净质量参考量。 |
| `batch_mass_balance` | 所有液体和固体过程阶段 | Mass | kg | 归一化前，在相同批次和期间基准上核对原料、中间体、产品、共产品、损失、废物和废水记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料、加工助剂、包装和公用工程进入前景设施时，已声明数量、供应商、组成或等级及上游数据集引用 |
| starting_condition_role | 厂门到厂门的前景起始条件，外购投入关联从摇篮到厂门的背景数据集 |
| product_classification_scope | 语义产品范围内的成品无醇啤酒型饮料；CPC 3.0 代码 24492 仅为映射背景，不是规范身份 |
| recursive_input_rule | 同类别的外购无醇啤酒中间体只作为投入记录一次并关联上游数据集，不在本前景包中递归重建其生产 |
| upstream_dataset_requirement | 所有重要原料、包装、燃料、电力、供水、处理化学品以及外部废物或废水处理均采用有代表性的上游数据集 |
| disclosure | 声明产品路线、设施边界、排除项、分配选择、数据期间、地域、酒精规格、包装形式、外包操作和任何同类别中间投入 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_core_brewing` | 前景生产 | 纳入原料接收与处理、麦汁制备、发酵、后熟、稳定化、灌装、包装、场内公用工程、清洗和废水处理，只要这些操作由报告设施实施或为其实施。 | us-epa-ap42-malt-beverages-1996 |
| `boundary_route_specific_alcohol_control` | 酒精控制路线 | 使用时应纳入发酵中止、稀释或调配、膜分离、热法脱醇、回收酒精处理及相关能源、水、介质、损失和排放；未使用的路线阶段声明为不适用。 |  |
| `boundary_direct_releases` | 场址排放和废物 | 纳入实测或计算的发酵二氧化碳和挥发性有机物排放、燃烧与制冷剂排放、废水、污泥、废酵母、酒糟、热凝固物、过滤介质、清洗损失和包装废品。 | us-epa-ap42-malt-beverages-1996 |
| `boundary_purchased_inputs` | 上游供应 | 每项外购物料、包装部件、能源载体、供水和外包处理服务均关联上游数据集；不得把缺失上游负荷当作零。 | iso-14044-lca-2006 |
| `boundary_downstream_exclusion` | 厂门数据集 | 本厂门数据集排除配送、零售、饮用服务、消费者冷藏和生命末期，并将其披露为下游排除项。 | iso-14044-lca-2006 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `brewhouse_preparation` | 原料处理与麦汁制备 | required | 始终 | 前景酿造及原料转化 | 转入发酵的冷却麦汁 kg |
| `fermentation_conditioning` | 发酵与后熟 | required | 始终 | 前景生物转化及产品后熟 | 转入后续工序的后熟饮料 kg |
| `alcohol_control` | 路线特定酒精控制 | conditional | 在独立的中止、分离、稀释或调配操作改变发酵中或发酵后酒精含量时纳入 | 前景酒精含量控制 | 酒精受控饮料产出 kg |
| `packaging_release` | 稳定化、灌装、包装与放行 | required | 始终 | 前景最终产品制备 | 1 kg 已放行饮料净质量 |
| `site_services` | 公用工程、清洗与废水管理 | required | 始终；将共享服务分配给报告产品 | 跨过程前景支持 | 分配至 1 kg 已放行饮料净质量的服务量 |

### 过程：原料处理与麦汁制备（`brewhouse_preparation`）

#### 输入

##### 产品流

###### 酿造及配方用水（`brewing_water`）

记录进入饮料或直接用于麦汁制备的水。清洗用水在场址服务中记录。

- 选定流：Water, process quality
- 流属性/单位：Mass / kg
- 数量规则：由计量或批次配方得到的麦汁及配方工序用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定酿造用水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


###### 可发酵原料和植物材料（`fermentable_ingredients`）

前景包应分别记录麦芽、谷物辅料、糖、姜、草本或其他所声明可发酵配方材料。

- 选定流：Fermentable ingredients and botanical materials
- 流属性/单位：Mass / kg
- 数量规则：批次单、称量或供应商交付记录中的验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定可发酵物料 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 酒花、酵母和加工助剂（`brewing_aids`）

按物料记录酒花或提取物、酵母、酶、过滤助剂、盐、酸及其他配方或加工助剂。

- 选定流：Brewing ingredients and process aids
- 流属性/单位：Mass / kg
- 数量规则：由批次和库存记录确定的生产批次领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定酿造助剂 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 糖化间电力和热能（`brewhouse_energy`）

记录碾磨、糖化、煮沸、泵送、分离和麦汁冷却所用计量电力及交付燃料或蒸汽。

- 选定流：Electricity and thermal energy
- 流属性/单位：Energy / MJ
- 数量规则：工序实测能耗，或由核实的仪表和运行记录计算的设施能源分配量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brewhouse_energy_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定糖化间能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：30
  - 单位：MJ
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流


#### 输出

##### 产品流

###### 转入发酵的冷却麦汁（`cooled_wort`）

记录固液分离和冷却后转入发酵点的麦汁质量。

- 选定流：Cooled wort
- 流属性/单位：Mass / kg
- 数量规则：实测容器转移质量，或由实测密度换算的体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定麦汁得率 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回收酒糟或热凝固物（`recovered_brewhouse_residue`）

只有残余物单独计量、符合所声明共产品判据并以有记录的有益用途离开系统时，才作为产品产出记录。

- 选定流：Recovered brewers grain or trub
- 流属性/单位：Mass / kg
- 数量规则：为有益用途发运的实测湿质量，并在相关时记录干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定回收残余物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 湿残余物
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废弃酒糟、热凝固物和过滤残余物（`brewhouse_solid_waste`）

没有有益用途记录的残余物，按实际处理路线作为废物产出记录。

- 选定流：Brewery organic solid waste
- 流属性/单位：Mass / kg
- 数量规则：由糖化间送往处理或处置的实测湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brewhouse_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定糖化间废物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 湿废物
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 糖化间直接大气排放（`brewhouse_air_emissions`）

记录原料处理、煮沸和残余物干燥期间跨越场址边界的实测或方法计算颗粒物、燃烧排放及挥发性排放。

- 选定流：Direct brewhouse emissions to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定的实测排放，或根据燃料记录和经批准因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brewhouse_energy_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定直接排放 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 污染物
  - 基准：每 1 kg 已放行饮料净质量及每种污染物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：发酵与后熟（`fermentation_conditioning`）

#### 输入

##### 产品流

###### 冷却麦汁投入（`wort_to_fermentation`）

记录与糖化间过程冷却麦汁产出相匹配的转移量。

- 选定流：Cooled wort
- 流属性/单位：Mass / kg
- 数量规则：匹配的过程间转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定麦汁转移 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 发酵、冷却和后熟能源（`fermentation_energy`）

记录发酵控制、冷却、储存、过滤、碳酸化及最终灌装前稳定化所用电力和热能。

- 选定流：Electricity and thermal energy
- 流属性/单位：Energy / MJ
- 数量规则：实测能源，或由共享制冷和公用工程仪表核实分配的能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定发酵能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：MJ
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购碳酸化气体（`purchased_carbon_dioxide`）

记录碳酸化或惰化所用外购二氧化碳；内部回收二氧化碳应单独记录以避免重复计算。

- 选定流：Carbon dioxide, beverage grade
- 流属性/单位：Mass / kg
- 数量规则：供应商数量或发至产品批次的质量流量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定碳酸化气体 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入后续工序的后熟饮料（`conditioned_beverage`）

记录发酵、陈酿、澄清和后熟后，在独立酒精控制或包装前的啤酒或啤酒型饮料。

- 选定流：Conditioned beer-type beverage
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或由实测密度换算的体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定后熟饮料 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回收发酵二氧化碳或酵母（`recovered_fermentation_outputs`）

只有二氧化碳或酵母单独计量、符合所声明规格，并用于有记录的内部替代或外部有益用途时，才作为产品产出记录。

- 选定流：Recovered carbon dioxide or yeast
- 流属性/单位：Mass / kg
- 数量规则：具有去向和质量记录的实测回收产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定回收产出 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 剩余酵母和过滤残余物（`fermentation_residue_waste`）

记录未达到有益用途状态并送往处理的剩余酵母、过滤介质和后熟残余物。

- 选定流：Fermentation and filtration residue waste
- 流属性/单位：Mass / kg
- 数量规则：按处理路线计量的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定发酵残余物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 湿废物
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 发酵二氧化碳和挥发性排放（`fermentation_air_emissions`）

记录发酵、后熟、储存和过滤产生的未回收生物源二氧化碳，以及实测或方法计算的乙醇和其他挥发性排放。

- 选定流：Fermentation emissions to air
- 流属性/单位：Mass / kg
- 数量规则：污染物特定的实测排放，或根据发酵记录和经批准因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_batch_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定发酵排放 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 污染物
  - 基准：每 1 kg 已放行饮料净质量及每种污染物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：路线特定酒精控制（`alcohol_control`）

#### 输入

##### 产品流

###### 进入酒精控制的饮料（`beverage_to_alcohol_control`）

记录进入独立中止、分离、稀释或调配阶段的饮料质量和实测酒精含量。

- 选定流：Fermented or partly fermented beer-type beverage
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量和入口酒精含量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alcohol_control_records`
- 来源：`ttb-malt-beverage-alcohol-content-2023`
- 数量范围：暂定酒精控制投入 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 酒精控制能源和过程介质（`alcohol_control_services`）

按路线分别记录电力、热、真空、水、膜或吸附剂更换及其他加工助剂，并保留各项原始单位。

- 选定流：Alcohol-control energy and process media
- 流属性/单位：Energy / MJ
- 数量规则：实测能源及单独记录的更换介质；各项保留原始单位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 酒精受控饮料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcohol_control_records`
- 来源：
- 数量范围：暂定酒精控制能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：MJ
  - 基准：每 1 kg 酒精受控饮料产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酒精受控饮料（`alcohol_controlled_beverage`）

记录转入最终稳定化和包装前的产出质量、实测酒精含量和路线得率。

- 选定流：Alcohol-controlled non-alcoholic beer-type beverage
- 流属性/单位：Mass / kg
- 数量规则：通过所声明酒精规格的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_alcohol_control_records`
- 来源：`ttb-malt-beverage-alcohol-content-2023`
- 数量范围：暂定酒精受控得率 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 回收乙醇或浓缩液（`recovered_alcohol_output`）

只有回收乙醇或浓缩液单独计量、符合规格并送往有记录的有益用途时，才作为产品产出记录。

- 选定流：Recovered ethanol or alcoholic concentrate
- 流属性/单位：Mass / kg
- 数量规则：具有组成和去向记录的实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcohol_control_records`
- 来源：
- 数量范围：暂定回收酒精 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 酒精控制废水和废介质（`alcohol_control_waste`）

按实际处理路线记录废水、废膜、吸附剂和未回收浓缩物。

- 选定流：Alcohol-control waste
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量，或由实测密度换算的排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 酒精受控饮料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alcohol_control_records`
- 来源：
- 数量范围：暂定酒精控制废物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 酒精受控饮料产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：稳定化、灌装、包装与放行（`packaging_release`）

#### 输入

##### 产品流

###### 进入包装的散装无醇饮料（`bulk_beverage_to_packaging`）

记录进入最终稳定化或灌装的合格散装饮料及其实测酒精含量。

- 选定流：Bulk non-alcoholic beer-type beverage
- 流属性/单位：Mass / kg
- 数量规则：进入包装过程的匹配转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`ttb-malt-beverage-alcohol-content-2023`
- 数量范围：暂定散装饮料 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级、次级和三级包装（`packaging_materials`）

按材料和部件分别记录容器、封口、标签、纸箱、托盘、薄膜、栈板和可重复使用包装损耗。

- 选定流：Packaging materials by material and component
- 流属性/单位：Mass / kg
- 数量规则：实测部件质量乘以验收包装件数，并按所记录废品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`iso-14044-lca-2006`
- 数量范围：暂定包装质量 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装与稳定化能源（`packaging_energy`）

记录最终过滤、巴氏杀菌或无菌灌装、容器准备、灌装、输送和装箱所用电力和热能。

- 选定流：Electricity and thermal energy
- 流属性/单位：Energy / MJ
- 数量规则：包装线实测能源，或由包装线运行记录核实分配的能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定包装能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：MJ
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行包装无醇啤酒（`packaged_non_alcoholic_beer`）

这是所声明参考产品产出。其数量为饮料净质量，包装不计入 1 kg 参考量。

- 选定流：无醇啤酒 `6fe10289-5a7d-4ca7-a73c-e698bca5a320`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 通过产品和酒精含量检查的已放行饮料净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`ttb-malt-beverage-alcohol-content-2023`
- 数量范围：参考产品质量平衡检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lca-2006`

##### 废物流

###### 灌装损失和不合格饮料（`filling_beverage_loss`）

按回收或处理路线记录洒漏、开停机损失、破损包装和不合格饮料。

- 选定流：Rejected or lost beverage
- 流属性/单位：Mass / kg
- 数量规则：包装投入饮料质量减去已放行产品、库存变化和有记录回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定灌装损失 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废品和边角料（`packaging_scrap`）

按材料和处理路线记录不合格容器、封口、标签、纸箱、薄膜及其他包装废料。

- 选定流：Packaging waste by material
- 流属性/单位：Mass / kg
- 数量规则：实测废品质量，或将不合格部件件数乘以部件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定包装废料 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：公用工程、清洗与废水管理（`site_services`）

#### 输入

##### 产品流

###### 清洗和服务用水（`cleaning_water`）

记录就地清洗、容器清洗、漂洗、公用工程制备和场址服务用水，不含已记为配方用水的水。

- 选定流：Water, process quality
- 流属性/单位：Mass / kg
- 数量规则：场址或子系统计量水量减去单独计量配方用水，并按有记录服务驱动因素分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_service_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定服务用水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗化学品和处理材料（`cleaning_chemicals`）

分别记录碱、酸、消毒剂、洗涤剂、水处理化学品和废水处理材料。

- 选定流：Cleaning and treatment chemicals
- 流属性/单位：Mass / kg
- 数量规则：分配到报告产品和期间的库存领用或加药记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_service_records`
- 来源：
- 数量范围：暂定化学品使用 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 共享场址电力和热能（`site_service_energy`）

记录未分配给其他过程的共享制冷、压缩空气、蒸汽、热水、照明和处理能源。

- 选定流：Electricity and thermal energy
- 流属性/单位：Energy / MJ
- 数量规则：用有记录运行小时、负荷或服务需求驱动因素分配的场址剩余实测能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_service_records`
- 来源：`iso-14044-lca-2006`
- 数量范围：暂定场址服务能耗 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：30
  - 单位：MJ
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的过程废水（`process_wastewater`）

记录废水数量和路线，包括含醇损失、洗涤器水、清洗废水和酒精控制废水，不得重复计算。

- 选定流：Brewery process wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或与进入产品的水、蒸发和其他产出核对的水平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_service_records`
- 来源：`us-epa-ap42-malt-beverages-1996`
- 数量范围：暂定废水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水污泥和废处理材料（`treatment_residue`）

按实测质量和实际去向记录污泥、废活性炭、过滤器和其他处理残余物。

- 选定流：Wastewater-treatment residue
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量或干质量，并声明基准和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_service_records`
- 来源：
- 数量范围：暂定处理残余物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每 1 kg 已放行饮料净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 公用工程、处理和制冷剂直接排放（`site_service_emissions`）

记录跨越场址边界且未分配给其他过程的污染物特定燃烧、废水处理和制冷剂排放。

- 选定流：Direct site-service emissions to air or water
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或根据燃料、处理和制冷剂活动记录及经批准因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行饮料净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site_service_records`
- 来源：`iso-14044-lca-2006`
- 数量范围：暂定场址排放 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 污染物
  - 基准：每 1 kg 已放行饮料净质量及每种污染物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有前景操作 | 优先采用过程细分和直接计量。分配前，先将单独计量的原料、公用工程、排放、废物和包装归属到产品批次。 | iso-14044-lca-2006 |
| `allocation_recovered_outputs` | 酒糟、酵母、二氧化碳、乙醇及其他回收产出 | 只有产出单独计量、符合所声明规格且具有有益用途记录时，才作为共产品；否则记录为废物。若细分不能解决共享负荷，采用能反映过程关系且有记录的物理关系；仅在不存在可辩护物理关系时采用经济分配，并报告敏感性结果。 | iso-14044-lca-2006; us-epa-ap42-malt-beverages-1996 |
| `allocation_recycling_no_avoided_credit` | 包装废料、有机残余物、废水产物及回收材料 | 报告实际流出材料和处理路线。除非更大范围研究采用并记录一致的回收或替代方法，否则本厂门清单内不得扣减避免生产信用。 | iso-14044-lca-2006 |
| `allocation_shared_site_services` | 共享公用工程、清洗、制冷及废水处理 | 有实测需求时按实测需求分配；否则采用运行小时、质量吞吐量、热负荷或废水负荷等有记录的因果驱动因素。不得无理由仅按销售额分配。 | iso-14044-lca-2006 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_brewhouse_batch_records` | `brewhouse_preparation` | 原料、用水、麦汁、残余物和废物 | 批次单、称量记录、罐位、密度试验和发运记录 | batch_id; material_id; input_mass; input_volume; density; temperature; wort_output; residue_mass; destination | 将签字批次和库存记录与容器转移核对 | kg; L; kg/L; °C | 每批 | 至少一个有代表性的连续 12 个月；生产期不足时覆盖全部批次 | 生产所声明产品的全部前景糖化间生产线 | 汇总批次数量，调整期初期末库存，再按已放行饮料净质量归一化 | 校准的秤或仪表；批次签字；密度试验；物料和去向可追溯性 |
| `cp_brewhouse_energy_records` | `brewhouse_preparation` | 电力、热、燃料和直接排放 | 分表、燃料发票、蒸汽记录、运行日志和排放试验或因子记录 | meter_id; start_reading; end_reading; fuel_quantity; steam_quantity; operating_hours; pollutant; factor; factor_source | 有条件时读取专用仪表，并记录共享供应的因果分配 | kWh; MJ; kg fuel; kg pollutant | 每月及每次重要生产活动 | 与产品产出相同期间 | 范围内全部糖化间设备和场内残余物干燥 | 换算为 MJ，按污染物计算排放，并按已放行饮料净质量归一化 | 仪表校准；发票核对；因子身份与版本；分配工作表 |
| `cp_fermentation_batch_records` | `fermentation_conditioning` | 麦汁、能源、发酵产出、残余物和大气排放 | 转移仪表、发酵日志、制冷仪表、气体流量记录、实验室结果和废物联单 | batch_id; inlet_mass; inlet_density; yeast_mass; energy; outlet_mass; alcohol_content; recovered_co2; recovered_yeast; residue_mass; vent_measurement | 对每批次核对容器转移和实验室放行记录 | kg; L; kg/L; MJ; % vol | 每批并按月核对公用工程 | 与产品产出相同期间 | 范围内全部发酵、陈酿、过滤和后熟容器 | 按批次计算转移、回收、损失和排放，再按已放行饮料净质量归一化 | 经校准转移和气体仪表；实验室 QA；容器核对；废物去向记录 |
| `cp_alcohol_control_records` | `alcohol_control` | 入口和出口饮料、酒精含量、能源、介质、回收酒精和废物 | 工序运行日志、转移仪表、实验室结果、能源仪表、介质更换、回收记录和废物联单 | run_id; route; inlet_mass; inlet_abv; outlet_mass; outlet_abv; energy; water; media_mass; recovered_ethanol; wastewater; waste_destination | 记录每次酒精控制运行，保留入口/出口质量和酒精分析 | kg; L; % vol; MJ | 每次运行 | 与产品产出相同期间 | 产品使用的每套酒精控制设备或外包操作 | 核对路线特定质量和酒精平衡，并按已放行饮料净质量归一化合格产出 | 分析方法和校准；仪表记录；回收物规格；外包时的承包方数据 |
| `cp_packaging_release_records` | `packaging_release` | 散装饮料、包装、能源、放行产品、灌装损失和废品 | 灌装机计数、罐位、部件规格、称量检查、生产线仪表、放行证书和废品日志 | lot_id; inlet_mass; density; packed_units; net_content; component_mass; energy; rejected_units; beverage_loss; release_abv | 对每个产品-形式批次核对生产线投入、放行产出、废品和库存变化 | kg; item; kg/item; MJ; % vol | 每个包装批次 | 与产品产出相同期间 | 生产所声明产品的全部灌装和包装线 | 按形式计算饮料净产出和部件质量，再归一化至 1 kg 饮料净质量 | 法定计量或检重记录；部件规格；放行批准；酒精检测；生产线核对 |
| `cp_site_service_records` | `site_services` | 服务用水、化学品、共享能源、废水、污泥和直接排放 | 场址及分表读数、化学品库存、公用工程发票、排放仪表、实验室分析、废物联单和制冷剂日志 | period; meter_id; water; energy; chemical_mass; wastewater; concentration; sludge_mass; refrigerant_added; fuel; allocation_driver | 将场址总量与分过程计量核对，并记录剩余服务分配 | kg; m3; kWh; MJ; mg/L; kg pollutant | 每月并年度核对 | 与产品产出相同的代表期间 | 完整前景设施，分配前排除有记录的无关生产 | 扣除直接归属用量，按因果驱动因素分配剩余服务，再按已放行饮料净质量归一化 | 经校准仪表；发票平衡；排放实验室 QA；废物联单；制冷剂维护记录；分配复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | 所有清单行 | 归一化数量 = 相同范围和期间的批次或期间数量 / 已放行饮料净质量 | 采集数量；已放行饮料净质量 | 每 1 kg 已放行饮料净质量的数量 | iso-14044-lca-2006 |
| `calc_volume_to_mass` | 以体积记录的饮料、水和废水 | 质量 = 实测体积 × 所声明温度下的产品特定实测密度 | 体积；密度；温度 | kg |  |
| `calc_energy_conversion` | 电力、蒸汽和燃料 | 保留原始数量，并用有记录的单位换算或燃料属性换算为 MJ；不得使用无引用燃烧因子 | 原始能源或燃料数量；换算因子 | 每 1 kg 已放行饮料净质量的 MJ | iso-14044-lca-2006 |
| `calc_packaging_mass` | 包装部件 | 包装质量 = 验收包装件数 × 实测或供应商声明的部件质量 + 所记录部件废品 | 包装件数；部件质量；废品件数或质量 | 每 1 kg 已放行饮料净质量、按材料划分的包装 kg |  |
| `calc_batch_mass_balance` | 每个生产和包装阶段 | 投入质量 + 期初库存 = 产出 + 期末库存 + 回收产品 + 废物 + 实测或估算排放；调查并披露残差 | 所有批次质量记录和库存变化 | 阶段平衡及未解释残差 | iso-14044-lca-2006 |
| `calc_alcohol_compliance` | 产品资格判定和酒精控制产出 | 将实测酒精含量与明确声明的司法辖区或市场阈值比较，并保留分析方法和判定记录 | 实测酒精含量；分析方法；适用阈值 | 通过或不通过及声明值 | ttb-malt-beverage-alcohol-content-2023 |
| `calc_wastewater_load` | 有浓度数据的废水排放 | 污染物负荷 = 排放体积 × 实测浓度，并记录单位换算和采样代表性 | 排放体积；污染物浓度；采样期间 | 每 1 kg 已放行饮料净质量的污染物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和每种产品形式 | 保存配方类别、路线、酒精规格、实测酒精含量、碳酸化、稳定化、包装形式、地域和生产期间。 | 批准配方；产品规格；标签或市场规格；实验室放行结果 |
| `dq_temporal_representativeness` | 所有前景数据 | 可用时采用一个有代表性的连续 12 个月；季节性或生产期较短时覆盖全部生产并披露期间和缺失季节。 | 生产日历；仪表期间；批次清单；代表性说明 |
| `dq_measurement_control` | 质量、体积、能源、酒精和排放记录 | 识别仪器和方法、校准或核验状态、换算因子和数据责任人；区分实测、计算和估算值。 | 校准证书；实验室 QA；仪表台账；计算工作表 |
| `dq_completeness` | 过程图和清单 | 覆盖所有必需过程及所有适用条件过程；核对物料、酒精、包装、水和能源平衡，并披露排除或未量化流。 | 过程流程图；平衡检查；排除清单；缺失数据日志 |
| `dq_supplier_and_background_links` | 外购投入和服务 | 记录重要投入的供应商、等级或组成、地域、期间和上游数据集引用；精确数据不可得时记录代理选择和替代。 | 采购记录；规格；供应商声明；数据集映射台账 |
| `dq_allocation_and_outsourcing` | 共享服务、共产品和外包操作 | 保存细分、分配驱动因素、共产品判据、敏感性结果和承包方数据边界。 | 分配工作表；发运记录；承包方清单；敏感性计算 |
| `dq_provisional_ranges` | 所有推理估算范围 | 暂定范围仅作 QA 筛查，不得覆盖有效前景记录，并应在发布前的方法学评审中替换或明确接受。 | QA 报告；评审决定；来源更新记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求严格为 1 kg 饮料净质量，并采用所声明天工产品流、Mass 属性、质量单位组及 kg 单位。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺少任何必需限定信息时判定完整性失败，包括适用酒精阈值、实测酒精含量和方法、配方类别、路线、碳酸化、稳定化、包装、地域、期间以及使用时的密度基准。 | ttb-malt-beverage-alcohol-content-2023 |
| `validate_alcohol_claim` | 已放行产品 | 要求实测酒精结果并与所声明司法辖区或市场规格比较；不得采用一个全球阈值，也不得从产品名称推定合规。 | ttb-malt-beverage-alcohol-content-2023 |
| `validate_process_coverage` | 过程清单 | 必须纳入麦汁制备、发酵与后熟、包装与放行和场址服务；声明独立中止、分离、稀释或调配阶段时必须纳入酒精控制过程。 | us-epa-ap42-malt-beverages-1996 |
| `validate_interprocess_transfers` | 麦汁、后熟饮料和散装饮料 | 按相同质量、密度、批次和库存变化基准匹配各过程间产出与投入，并解释差异。 |  |
| `validate_mass_balance` | 每个过程和报告期间 | 标记未解释的阶段或场址质量平衡残差，禁止通过静默删除损失、废物、回收产出或排放来配平。 | iso-14044-lca-2006 |
| `validate_no_double_counting` | 水、能源、回收二氧化碳、包装、废水和共享服务 | 确保配方与清洗水、直接与共享能源、外购与回收二氧化碳、包装质量与饮料净质量、过程特定与场址废水不重复计算。 |  |
| `validate_allocation` | 共产品和共享服务 | 要求记录细分或分配驱动因素、共产品判据，并在采用经济分配时提供敏感性。 | iso-14044-lca-2006 |
| `validate_range_use` | 暂定推理估算 | 有经核实前景证据时，超出暂定范围作为复核标志而非自动错误；禁止无披露地以暂定中点替代缺失前景数据。 |  |
| `validate_sources_and_background` | 外部证据和外购投入 | 要求每个引用的 source id 可解析，且每项重要外购投入或处理服务具有上游数据集或已披露数据缺口。 | iso-14044-lca-2006 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 成品包装无醇啤酒的前景厂门到厂门生产数据集，关联上游投入并明确直接排放 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当所声明产品路线、酒精规格、包装、地域、期间和边界与研究匹配时，用于产品及设施 LCA、供应链清单、足迹筛查和 lifecyclemodel 构建 |
| excluded_use | 未经评审的公开比较声明；含醇啤酒或无关软饮料；未添加下游阶段的使用期或完整从摇篮到坟墓结果；以暂定 QA 范围替代场址记录 |
| required_metadata | 规范 PCR id；产品及配方；适用酒精定义和阈值；实测酒精含量和方法；路线；包装形式和部件质量；地域；生产期间；设施边界；过程覆盖；分配；上游数据集链接；数据缺口 |
| required_quality_disclosure | 实测、计算和估算占比；仪表和实验室 QA；时间与地域代表性；质量和酒精平衡；完整性；分配敏感性；有来源和暂定范围；外包数据质量 |
| update_trigger | 配方、酒精控制技术、能源或水系统、包装形式、设施边界、分配、法定产品定义、上游数据集发生重大变化，或变化超过生产者记录的显著性阈值 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `ttb-malt-beverage-alcohol-content-2023` | official_guidance | 美国酒精和烟草税收与贸易局，“Malt Beverage Labeling: Alcohol Content”，TTB G 2023-2，https://www.ttb.gov/regulated-commodities/beverage-alcohol/beer/labeling/malt-beverage-alcohol-content（检索于 2026-08-11） | 产品资格证据；实测酒精含量声明；司法辖区特定无醇和零酒精阈值示例 |
| `us-epa-ap42-malt-beverages-1996` | official_guidance | 美国环境保护署，AP-42 第 9.12.1 节，“Malt Beverages”，1996 年 10 月，https://www.epa.gov/sites/default/files/2020-10/documents/c9s12-1.pdf（检索于 2026-08-11） | 酿造过程分解；发酵、后熟、包装、残余物、废水和直接排放流候选 |
| `iso-14044-lca-2006` | standard | ISO 14044:2006，“Environmental management — Life cycle assessment — Requirements and guidelines”，https://www.iso.org/standard/38498.html（2022 年确认现行；检索于 2026-08-11） | 目标与范围、生命周期清单结构、分配层级、报告和解释要求 |
